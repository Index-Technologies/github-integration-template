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

const statusColors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  review: "bg-amber-100 text-amber-700",
  completed: "bg-slate-100 text-slate-600",
}

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

  useEffect(() => {
    api.get("/api/stats").then(setStats).catch(() => {})
    api.get("/api/projects").then((p: Project[]) => setProjects(p.slice(0, 4))).catch(() => {})
    api.get("/api/activity").then((a: Activity[]) => setActivity(a.slice(0, 8))).catch(() => {})
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
    </div>
  )
}
