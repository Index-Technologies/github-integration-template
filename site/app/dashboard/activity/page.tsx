"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"

interface Activity {
  id: number
  user_name: string
  user_avatar: string
  action: string
  resource_type: string
  resource_name: string
  created_at: string
}

const avatarColors = [
  "bg-indigo-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-pink-500",
]

function getAvatarColor(name: string) {
  const sum = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
  return avatarColors[sum % avatarColors.length]
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr + "Z").getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return "just now"
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`
  const days = Math.floor(hours / 24)
  return `${days} day${days === 1 ? "" : "s"} ago`
}

export default function ActivityPage() {
  const [activity, setActivity] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get("/api/activity").then(setActivity).finally(() => setLoading(false))
  }, [])

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Activity</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Full audit trail of all team actions
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col gap-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-zinc-100" />
              <div className="flex-1 pt-1">
                <div className="mb-1.5 h-3 w-2/3 animate-pulse rounded bg-zinc-100" />
                <div className="h-2.5 w-24 animate-pulse rounded bg-zinc-100" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative max-w-2xl">
          {/* Timeline line */}
          <div className="absolute bottom-4 left-3.5 top-4 w-px bg-zinc-200" />

          <div className="flex flex-col">
            {activity.map((item) => (
              <div key={item.id} className="relative flex items-start gap-4 pb-6">
                <div
                  className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${getAvatarColor(item.user_name)}`}
                >
                  {item.user_avatar}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-sm text-zinc-700">
                    <span className="font-semibold text-zinc-900">{item.user_name}</span>{" "}
                    <span>{item.action}</span>{" "}
                    {item.resource_name && (
                      <span className="font-medium text-zinc-900">
                        &ldquo;{item.resource_name}&rdquo;
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">{timeAgo(item.created_at)}</p>
                </div>
              </div>
            ))}
            {activity.length === 0 && (
              <p className="py-8 text-center text-sm text-zinc-400">
                No activity recorded yet.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
