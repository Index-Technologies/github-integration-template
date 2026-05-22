# MyApp

MyApp is a fake product management app used for Alloy GitHub integration demos.
It has login, signup, dashboard, projects, tasks, docs, team management,
settings, and profile screens backed by seeded Postgres data.

## Demo account

- Email: `demo@myapp.local`
- Password: `password`

## Run with Docker Compose

```bash
docker compose up --build
```

Open `http://localhost:3000`. The first API request creates the database schema
and seed data automatically.

## Run locally

Start Postgres with Docker Compose, then run the app on the host:

```bash
npm install
npm run dev
```

Use `.env.example` as the local `DATABASE_URL` reference.
