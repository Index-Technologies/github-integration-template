import { NextRequest, NextResponse } from "next/server";
import { getRequestUser } from "@/lib/auth";
import { query } from "@/lib/db";
import type { Doc, Project, Task, TeamMember } from "@/lib/types";

type ProjectRow = {
  id: string;
  name: string;
  status: string;
  owner: string;
  due_date: string | Date;
  summary: string;
}

type TaskRow = {
  id: string;
  title: string;
  status: string;
  assignee: string;
  project: string;
  due_date: string | Date;
}

type DocRow = {
  id: string;
  title: string;
  owner: string;
  updated_at: string | Date;
  summary: string;
}

const dateText = (value: string | Date) => {
  if (typeof value === "string") {
    return value.slice(0, 10);
  }

  return value.toISOString().slice(0, 10);
}

export const GET = async (request: NextRequest) => {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const projects = await query<ProjectRow>(
    "select id, name, status, owner, due_date, summary from projects order by due_date",
  );
  const tasks = await query<TaskRow>(
    "select id, title, status, assignee, project, due_date from tasks order by due_date",
  );
  const docs = await query<DocRow>(
    "select id, title, owner, updated_at, summary from docs order by updated_at desc",
  );
  const team = await query<TeamMember>(
    "select id, name, email, role, status from team_members order by name",
  );

  const body = {
    user,
    projects: projects.map<Project>((project) => ({
      id: project.id,
      name: project.name,
      status: project.status,
      owner: project.owner,
      dueDate: dateText(project.due_date),
      summary: project.summary,
    })),
    tasks: tasks.map<Task>((task) => ({
      id: task.id,
      title: task.title,
      status: task.status,
      assignee: task.assignee,
      project: task.project,
      dueDate: dateText(task.due_date),
    })),
    docs: docs.map<Doc>((doc) => ({
      id: doc.id,
      title: doc.title,
      owner: doc.owner,
      updatedAt: dateText(doc.updated_at),
      summary: doc.summary,
    })),
    team,
  };

  return NextResponse.json(body);
}
