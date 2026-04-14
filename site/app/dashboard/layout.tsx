"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { api } from "@/lib/api"

interface Notification {
  id: number
  title: string
  message: string
  type: string
  read: number
  created_at: string
}

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/activity", label: "Activity" },
]

const typeStyle: Record<string, string> = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
  error: "border-red-200 bg-red-50 text-red-700",
  info: "border-blue-200 bg-blue-50 text-blue-700",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotif, setShowNotif] = useState(false)

  useEffect(() => {
    if (!loading && !user) router.push("/login")
  }, [loading, user, router])

  useEffect(() => {
    if (user) {
      api.get("/api/notifications").then(setNotifications).catch(() => {})
    }
  }, [user])

  async function handleMarkAllRead() {
    await api.patch("/api/notifications/read-all", {})
    setNotifications((prev) => prev.map((n) => ({ ...n, read: 1 })))
  }

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-600">
        <div className="text-sm text-zinc-400">Loading...</div>
      </div>
    )
  }

  const unread = notifications.filter((n) => n.read === 0).length

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex w-56 flex-col bg-slate-900">
        <div className="border-b border-slate-700/50 px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
              N
            </div>
            <span className="text-sm font-semibold text-white">Nexus</span>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            Navigation
          </p>
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-0.5 flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-slate-700 font-medium text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-slate-700/50 px-4 py-4">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
              {user.avatar}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-white">{user.name}</p>
              <p className="truncate text-xs text-slate-400">{user.role}</p>
            </div>
          </div>
          <button
            onClick={() => { logout(); router.push("/") }}
            className="text-xs text-slate-400 transition-colors hover:text-red-400"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col bg-blue-600">
        {/* Top bar */}
        <header className="flex items-center justify-end border-b border-zinc-200 bg-white px-6 py-3">
          <div className="relative">
            <button
              onClick={() => setShowNotif((v) => !v)}
              className="relative flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {unread > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {unread}
                </span>
              )}
            </button>

            {showNotif && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotif(false)}
                />
                <div className="absolute right-0 top-10 z-50 w-80 rounded-xl border border-zinc-200 bg-white shadow-lg">
                  <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
                    <p className="text-sm font-semibold text-zinc-900">Notifications</p>
                    {unread > 0 && (
                      <button
                        onClick={handleMarkAllRead}
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="py-6 text-center text-xs text-zinc-400">
                        No notifications
                      </p>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`border-b border-zinc-50 px-4 py-3 last:border-0 ${
                            n.read === 0 ? "bg-indigo-50/40" : ""
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span
                              className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-medium ${typeStyle[n.type] ?? typeStyle.info}`}
                            >
                              {n.type}
                            </span>
                            <div>
                              <p className="text-xs font-medium text-zinc-900">{n.title}</p>
                              <p className="mt-0.5 text-xs text-zinc-500">{n.message}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
