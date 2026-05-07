import crypto from "crypto";
import { Pool, type QueryResultRow } from "pg";

let pool: Pool | undefined;
let ready: Promise<void> | undefined;

const connectionString = () => {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  return "postgres://myapp:myapp@localhost:5432/myapp";
}

const getPool = () => {
  if (!pool) {
    pool = new Pool({ connectionString: connectionString() });
  }

  return pool;
}

export const hashPassword = (password: string) =>
  crypto.createHash("sha256").update(password).digest("hex");

const id = () => crypto.randomUUID();

const seed = async () => {
  const db = getPool();
  const users = await db.query("select count(*)::int as count from users");
  if (users.rows[0].count > 0) {
    return;
  }

  const demoId = id();

  await db.query(
    `insert into users (id, name, email, role, password_hash)
     values ($1, 'Jordan Lee', 'demo@myapp.local', 'Product Lead', $2)`,
    [demoId, hashPassword("password")],
  );

  await db.query(
    `insert into projects (id, name, status, owner, due_date, summary) values
      ($1, 'Roadmap refresh', 'On track', 'Jordan Lee', '2026-06-14', 'Rework the public roadmap and tie every item to customer evidence.'),
      ($2, 'Mobile beta', 'At risk', 'Mina Patel', '2026-05-30', 'Prepare the first invite-only release for design partners.'),
      ($3, 'Billing cleanup', 'Planning', 'Ari Chen', '2026-07-03', 'Simplify plan limits, invoices, and customer-facing billing copy.')`,
    [id(), id(), id()],
  );

  await db.query(
    `insert into tasks (id, title, status, assignee, project, due_date) values
      ($1, 'Write launch checklist', 'In progress', 'Jordan Lee', 'Mobile beta', '2026-05-16'),
      ($2, 'Review user import bugs', 'Todo', 'Ari Chen', 'Billing cleanup', '2026-05-20'),
      ($3, 'Summarize customer calls', 'Done', 'Mina Patel', 'Roadmap refresh', '2026-05-09'),
      ($4, 'Draft permission matrix', 'In review', 'Sam Rivera', 'Roadmap refresh', '2026-05-24')`,
    [id(), id(), id(), id()],
  );

  await db.query(
    `insert into docs (id, title, owner, updated_at, summary) values
      ($1, 'Q2 product strategy', 'Jordan Lee', '2026-05-05', 'Goals, risks, and sequencing for the next planning cycle.'),
      ($2, 'Research notes', 'Mina Patel', '2026-05-04', 'Interview synthesis from six design partners.'),
      ($3, 'Release process', 'Sam Rivera', '2026-05-02', 'Step-by-step release readiness and approval process.')`,
    [id(), id(), id()],
  );

  await db.query(
    `insert into team_members (id, name, email, role, status) values
      ($1, 'Jordan Lee', 'demo@myapp.local', 'Product Lead', 'Active'),
      ($2, 'Mina Patel', 'mina@myapp.local', 'Designer', 'Active'),
      ($3, 'Ari Chen', 'ari@myapp.local', 'Engineer', 'Active'),
      ($4, 'Sam Rivera', 'sam@myapp.local', 'Operations', 'Invited')`,
    [id(), id(), id(), id()],
  );
}

export const ensureDatabase = async () => {
  if (ready) {
    return ready;
  }

  ready = (async () => {
    const db = getPool();

    await db.query(`
      create table if not exists users (
        id text primary key,
        name text not null,
        email text not null unique,
        role text not null,
        password_hash text not null,
        created_at timestamptz not null default now()
      );

      create table if not exists sessions (
        token text primary key,
        user_id text not null references users(id) on delete cascade,
        expires_at timestamptz not null,
        created_at timestamptz not null default now()
      );

      create table if not exists projects (
        id text primary key,
        name text not null,
        status text not null,
        owner text not null,
        due_date date not null,
        summary text not null
      );

      create table if not exists tasks (
        id text primary key,
        title text not null,
        status text not null,
        assignee text not null,
        project text not null,
        due_date date not null
      );

      create table if not exists docs (
        id text primary key,
        title text not null,
        owner text not null,
        updated_at date not null,
        summary text not null
      );

      create table if not exists team_members (
        id text primary key,
        name text not null,
        email text not null,
        role text not null,
        status text not null
      );
    `);

    await seed();
  })();

  return ready;
}

export const query = async <T extends QueryResultRow>(text: string, params: unknown[] = []) => {
  await ensureDatabase();
  const result = await getPool().query<T>(text, params);
  return result.rows;
}

export const createId = id;
