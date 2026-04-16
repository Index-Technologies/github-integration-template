"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"

const demoAccounts = [
  { u: "admin", p: "password", role: "Administrator" },
  { u: "jane", p: "jane123", role: "Designer" },
  { u: "john", p: "john123", role: "Developer" },
]

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await login(username, password)
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4" style={{ background: 'linear-gradient(135deg, #312e81 0%, #4338ca 25%, #6366f1 50%, #818cf8 75%, #c7d2fe 100%)' }}>
      {/* Decorative blurred shapes */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '40%', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.4)', filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(129, 140, 248, 0.3)', filter: 'blur(100px)' }} />
      <div style={{ position: 'absolute', top: '30%', right: '20%', width: '25%', height: '25%', borderRadius: '50%', background: 'rgba(199, 210, 254, 0.25)', filter: 'blur(60px)' }} />

      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-indigo-700" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
              N
            </div>
            <span className="text-lg font-semibold text-white">Nexus</span>
          </Link>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Sign in to your account</p>
        </div>

        <div className="rounded-2xl p-8" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.25)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)' }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                className="glass-input w-full rounded-lg px-3 py-2.5 text-sm text-white outline-none transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="glass-input w-full rounded-lg px-3 py-2.5 text-sm text-white outline-none transition-all"
                style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
              />
            </div>
            {error && (
              <p className="rounded-lg px-3 py-2 text-xs font-medium" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="glass-btn rounded-lg py-2.5 text-sm font-semibold transition-all disabled:opacity-60"
              style={{ background: 'rgba(255, 255, 255, 0.9)', color: '#4338ca', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)' }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <div className="mt-4 rounded-xl p-4" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
          <p className="mb-2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>Demo accounts</p>
          <div className="flex flex-col gap-1">
            {demoAccounts.map(({ u, p, role }) => (
              <button
                key={u}
                onClick={() => { setUsername(u); setPassword(p) }}
                className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <span className="font-mono font-medium">
                  {u} / {p}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{role}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
