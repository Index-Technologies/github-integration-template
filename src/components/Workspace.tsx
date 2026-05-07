"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { DashboardData, Doc, Project, Task, TeamMember } from "@/lib/types";

type Section = "dashboard" | "projects" | "tasks" | "docs" | "team" | "settings" | "profile";

type Props = {
  section: Section;
}

const nav = [
  ["Dashboard", "/dashboard"],
  ["Projects", "/projects"],
  ["Tasks", "/tasks"],
  ["Docs", "/docs"],
  ["Team", "/team"],
  ["Settings", "/settings"],
  ["Profile", "/profile"],
];

const title = (section: Section) => {
  if (section === "projects") {
    return "Projects";
  }

  if (section === "tasks") {
    return "Tasks";
  }

  if (section === "docs") {
    return "Docs";
  }

  if (section === "team") {
    return "Team management";
  }

  if (section === "settings") {
    return "User settings";
  }

  if (section === "profile") {
    return "Profile";
  }

  return "Dashboard";
}

const subtitle = (section: Section) => {
  if (section === "dashboard") {
    return "A snapshot of product work across projects, tasks, docs, and teammates.";
  }

  if (section === "settings") {
    return "Fake account preferences for the signed-in user.";
  }

  if (section === "profile") {
    return "Demo profile details for the active session.";
  }

  return "Seeded Postgres data served through Next.js API routes.";
}

const Row = ({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge: string;
}) => (
  <div className="row">
    <div>
      <strong>{title}</strong>
      <span>{subtitle}</span>
    </div>
    <span className="badge">{badge}</span>
  </div>
);

const ProjectList = ({ projects }: { projects: Project[] }) => (
  <div className="list">
    {projects.map((project) => (
      <Row
        key={project.id}
        title={project.name}
        subtitle={`${project.owner} · ${project.summary}`}
        badge={project.status}
      />
    ))}
  </div>
);

const TaskList = ({ tasks }: { tasks: Task[] }) => (
  <div className="list">
    {tasks.map((task) => (
      <Row
        key={task.id}
        title={task.title}
        subtitle={`${task.assignee} · ${task.project} · due ${task.dueDate}`}
        badge={task.status}
      />
    ))}
  </div>
);

const DocList = ({ docs }: { docs: Doc[] }) => (
  <div className="list">
    {docs.map((doc) => (
      <Row
        key={doc.id}
        title={doc.title}
        subtitle={`${doc.owner} · updated ${doc.updatedAt} · ${doc.summary}`}
        badge="Doc"
      />
    ))}
  </div>
);

const TeamList = ({ team }: { team: TeamMember[] }) => (
  <div className="list">
    {team.map((member) => (
      <Row
        key={member.id}
        title={member.name}
        subtitle={`${member.email} · ${member.role}`}
        badge={member.status}
      />
    ))}
  </div>
);

export const Workspace = ({ section }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<DashboardData>();
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const load = async () => {
      const response = await fetch("/api/dashboard");

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      if (!response.ok) {
        setError("MyApp could not load workspace data.");
        return;
      }

      const body = (await response.json()) as DashboardData;
      if (active) {
        setData(body);
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, [router]);

  const openTasks = useMemo(() => {
    if (!data) {
      return 0;
    }

    return data.tasks.filter((task) => task.status !== "Done").length;
  }, [data]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  if (error) {
    return <div className="loading">{error}</div>;
  }

  if (!data) {
    return <div className="loading">Loading MyApp...</div>;
  }

  let body = (
    <div className="section-grid">
      <section className="card">
        <h3>Recent tasks</h3>
        <div style={{ marginTop: 14 }}>
          <TaskList tasks={data.tasks.slice(0, 3)} />
        </div>
      </section>
      <section className="card">
        <h3>Active projects</h3>
        <div style={{ marginTop: 14 }}>
          <ProjectList projects={data.projects.slice(0, 3)} />
        </div>
      </section>
    </div>
  );

  if (section === "projects") {
    body = <ProjectList projects={data.projects} />;
  }

  if (section === "tasks") {
    body = <TaskList tasks={data.tasks} />;
  }

  if (section === "docs") {
    body = <DocList docs={data.docs} />;
  }

  if (section === "team") {
    body = <TeamList team={data.team} />;
  }

  if (section === "settings") {
    body = (
      <form className="card settings-form">
        <label className="field">
          Workspace name
          <input defaultValue="MyApp Product" />
        </label>
        <label className="field">
          Notification email
          <input defaultValue={data.user.email} />
        </label>
        <label className="field">
          Weekly digest
          <input defaultValue="Monday at 9:00 AM" />
        </label>
        <button className="button" type="button">
          Save fake settings
        </button>
      </form>
    );
  }

  if (section === "profile") {
    body = (
      <div className="card settings-form">
        <Row title={data.user.name} subtitle={data.user.email} badge={data.user.role} />
        <Row title="Timezone" subtitle="Australia/Sydney" badge="Local" />
        <Row title="Plan" subtitle="Internal demo workspace" badge="Demo" />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/dashboard">
          MyApp
        </Link>
        <nav className="nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-chip">
            <strong>{data.user.name}</strong>
            <span>{data.user.email}</span>
          </div>
          <button className="button secondary" onClick={logout} type="button">
            Log out
          </button>
        </div>
      </aside>
      <main className="content">
        <header className="topbar">
          <div>
            <div className="eyebrow">Product workspace</div>
            <h1>{title(section)}</h1>
            <p>{subtitle(section)}</p>
          </div>
        </header>
        {section === "dashboard" && (
          <div className="grid" style={{ marginBottom: 16 }}>
            <div className="card">
              <h3>Projects</h3>
              <div className="metric">{data.projects.length}</div>
            </div>
            <div className="card">
              <h3>Open tasks</h3>
              <div className="metric">{openTasks}</div>
            </div>
            <div className="card">
              <h3>Docs</h3>
              <div className="metric">{data.docs.length}</div>
            </div>
            <div className="card">
              <h3>Team</h3>
              <div className="metric">{data.team.length}</div>
            </div>
          </div>
        )}
        {body}
      </main>
    </div>
  );
}
