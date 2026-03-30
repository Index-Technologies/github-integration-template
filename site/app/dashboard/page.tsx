"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import Link from "next/link"

interface Stats {
  totalProjects: number
  activeProjects: number
  totalTasks: number
  doneTasks: number
  openTasks: number
  totalMembers: number
  completionRate: number
}

interface Project {
  id: number
  name: string
  description: string
  status: string
  priority: string
  progress: number
  owner_name: string
  task_count: number
  done_count: number
}

interface Activity {
  id: number
  user_name: string
  user_avatar: string
  action: string
  resource_name: string
  created_at: string
}

interface User {
  id: number
  name: string
  email: string
  avatar: string
  role: string
  department: string
  status: "online" | "offline" | "away"
  projectCount: number
  taskCount: number
}

const statusColors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  review: "bg-amber-100 text-amber-700",
  completed: "bg-slate-100 text-slate-600",
}

const userStatusColors: Record<string, { dot: string; text: string }> = {
  online: { dot: "bg-emerald-500", text: "text-emerald-600" },
  offline: { dot: "bg-zinc-300", text: "text-zinc-400" },
  away: { dot: "bg-amber-500", text: "text-amber-600" },
}

// Fake users data (API not available)
const fakeUsers: User[] = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@nexus.io",
    avatar: "SC",
    role: "Lead Designer",
    department: "Design",
    status: "online",
    projectCount: 4,
    taskCount: 12,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "m.johnson@nexus.io",
    avatar: "MJ",
    role: "Senior Engineer",
    department: "Engineering",
    status: "online",
    projectCount: 6,
    taskCount: 18,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "e.rodriguez@nexus.io",
    avatar: "ER",
    role: "Product Manager",
    department: "Product",
    status: "away",
    projectCount: 8,
    taskCount: 5,
  },
  {
    id: 4,
    name: "David Kim",
    email: "d.kim@nexus.io",
    avatar: "DK",
    role: "Backend Developer",
    department: "Engineering",
    status: "online",
    projectCount: 3,
    taskCount: 22,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "l.thompson@nexus.io",
    avatar: "LT",
    role: "UX Researcher",
    department: "Design",
    status: "offline",
    projectCount: 2,
    taskCount: 7,
  },
  {
    id: 6,
    name: "James Wilson",
    email: "j.wilson@nexus.io",
    avatar: "JW",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "online",
    projectCount: 5,
    taskCount: 14,
  },
]

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr + "Z").getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return "just now"
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [activity, setActivity] = useState<Activity[]>([])
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get("/api/stats").then(setStats).catch(() => {})
    api.get("/api/projects").then((p: Project[]) => setProjects(p.slice(0, 4))).catch(() => {})
    api.get("/api/activity").then((a: Activity[]) => setActivity(a.slice(0, 8))).catch(() => {})
    // Users API not available - using fake data
    api.get("/api/users").then((u: User[]) => setUsers(u.slice(0, 6))).catch(() => {
      setUsers(fakeUsers)
    })
  }, [])

  const statCards = stats
    ? [
        { label: "Total Projects", value: stats.totalProjects, sub: `${stats.activeProjects} active` },
        { label: "Open Tasks", value: stats.openTasks, sub: `${stats.doneTasks} completed` },
        { label: "Team Members", value: stats.totalMembers, sub: "across all projects" },
        { label: "Completion Rate", value: `${stats.completionRate}%`, sub: `${stats.doneTasks}/${stats.totalTasks} tasks done` },
      ]
    : []

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Overview</h1>
        <p className="mt-1 text-sm text-zinc-500">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Stat cards */}
      {stats ? (
        <div className="mb-8 grid grid-cols-4 gap-4">
          {statCards.map((card) => (
            <div key={card.label} className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-medium text-zinc-500">{card.label}</p>
              <p className="mt-1 text-3xl font-bold text-zinc-900">{card.value}</p>
              <p className="mt-1 text-xs text-zinc-400">{card.sub}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-8 grid grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-xl border border-zinc-200 bg-white" />
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Recent projects */}
        <div className="col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Recent Projects</h2>
            <Link href="/dashboard/projects" className="text-xs text-indigo-600 hover:underline">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-xl border border-zinc-200 bg-white p-4">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-zinc-900">{project.name}</p>
                    {project.description && (
                      <p className="mt-0.5 truncate text-xs text-zinc-400">
                        {project.description}
                      </p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                      statusColors[project.status] ?? statusColors.active
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="mb-1 flex justify-between text-xs text-zinc-500">
                      <span>{project.done_count}/{project.task_count} tasks</span>
                      <span className="font-medium text-zinc-700">{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-zinc-100">
                      <div
                        className="h-1.5 rounded-full bg-indigo-500 transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center">
                <p className="text-xs text-zinc-400">Loading projects...</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent activity */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Recent Activity</h2>
            <Link href="/dashboard/activity" className="text-xs text-indigo-600 hover:underline">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-zinc-50 rounded-xl border border-zinc-200 bg-white">
            {activity.map((item) => (
              <div key={item.id} className="flex items-start gap-3 px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                  {item.user_avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-700">
                    <span className="font-medium">{item.user_name}</span>{" "}
                    {item.action}{" "}
                    {item.resource_name && (
                      <span className="font-medium">"{item.resource_name}"</span>
                    )}
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-400">
                    {timeAgo(item.created_at)}
                  </p>
                </div>
              </div>
            ))}
            {activity.length === 0 && (
              <p className="py-6 text-center text-xs text-zinc-400">
                No activity yet
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Users section */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-zinc-900">Team Members</h2>
          <button className="text-xs text-indigo-600 hover:underline">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-xl border border-zinc-200 bg-white p-4"
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                    {user.avatar}
                  </div>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${userStatusColors[user.status].dot}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-zinc-900">{user.name}</p>
                  <p className="truncate text-xs text-zinc-500">{user.role}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span
                  className={`text-[10px] font-medium capitalize ${userStatusColors[user.status].text}`}
                >
                  {user.status}
                </span>
                <span className="text-zinc-300">•</span>
                <span className="text-[10px] text-zinc-400">{user.department}</span>
              </div>
              <div className="mt-3 flex gap-4 border-t border-zinc-100 pt-3">
                <div>
                  <p className="text-lg font-bold text-zinc-900">{user.projectCount}</p>
                  <p className="text-[10px] text-zinc-400">Projects</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-zinc-900">{user.taskCount}</p>
                  <p className="text-[10px] text-zinc-400">Tasks</p>
                </div>
                <div className="ml-auto flex items-end">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-xs text-indigo-600 hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
