"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"

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
  updated_at: string
}

const statusColors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  review: "bg-amber-100 text-amber-700",
  completed: "bg-slate-100 text-slate-600",
}

const priorityColors: Record<string, string> = {
  high: "bg-red-100 text-red-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-blue-100 text-blue-700",
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: "", description: "", priority: "medium" })
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  useEffect(() => {
    api.get("/api/projects")
      .then(setProjects)
      .finally(() => setLoading(false))
  }, [])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setFormError("")
    setSubmitting(true)
    try {
      const project = await api.post("/api/projects", form)
      setProjects((prev) => [project, ...prev])
      setForm({ name: "", description: "", priority: "medium" })
      setShowForm(false)
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Failed to create project")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Projects</h1>
          <p className="mt-1 text-sm text-zinc-500">{projects.length} total</p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          {showForm ? "Cancel" : "+ New project"}
        </button>
      </div>

      {/* Create form */}
      {showForm && (
        <div className="mb-6 rounded-xl border border-indigo-200 bg-indigo-50/40 p-5">
          <h2 className="mb-4 text-sm font-semibold text-zinc-900">New Project</h2>
          <form onSubmit={handleCreate} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Project name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
            <textarea
              placeholder="Description (optional)"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              rows={2}
              className="resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
            <div className="flex items-center gap-3">
              <select
                value={form.priority}
                onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value }))}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-indigo-400"
              >
                <option value="high">High priority</option>
                <option value="medium">Medium priority</option>
                <option value="low">Low priority</option>
              </select>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
              >
                {submitting ? "Creating..." : "Create project"}
              </button>
            </div>
            {formError && <p className="text-xs text-red-600">{formError}</p>}
          </form>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className="flex flex-col gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl bg-zinc-100" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50/50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-zinc-500">Project</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">Progress</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">Owner</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">Tasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {projects.map((project) => (
                <tr key={project.id} className="transition-colors hover:bg-zinc-50/50">
                  <td className="px-5 py-4">
                    <p className="font-medium text-zinc-900">{project.name}</p>
                    {project.description && (
                      <p className="mt-0.5 max-w-xs truncate text-xs text-zinc-400">
                        {project.description}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        statusColors[project.status] ?? statusColors.active
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        priorityColors[project.priority] ?? priorityColors.medium
                      }`}
                    >
                      {project.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-zinc-100">
                        <div
                          className="h-1.5 rounded-full bg-indigo-500 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-xs text-zinc-600">
                    {project.owner_name ?? "—"}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-zinc-600">
                      {project.done_count}/{project.task_count}
                    </span>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-zinc-400">
                    No projects yet. Create your first one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
