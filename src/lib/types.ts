export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type Project = {
  id: string;
  name: string;
  status: string;
  owner: string;
  dueDate: string;
  summary: string;
}

export type Task = {
  id: string;
  title: string;
  status: string;
  assignee: string;
  project: string;
  dueDate: string;
}

export type Doc = {
  id: string;
  title: string;
  owner: string;
  updatedAt: string;
  summary: string;
}

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export type DashboardData = {
  user: User;
  projects: Project[];
  tasks: Task[];
  docs: Doc[];
  team: TeamMember[];
}
