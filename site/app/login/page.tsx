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
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Panel - Branding */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "48px",
          position: "relative",
          overflow: "hidden",
        }}
        className="hidden lg:flex"
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "400px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              N
            </div>
            <span style={{ fontSize: "28px", fontWeight: "700", color: "white" }}>Nexus</span>
          </div>

          <h1 style={{ fontSize: "36px", fontWeight: "700", color: "white", marginBottom: "16px", lineHeight: "1.2" }}>
            Welcome back to your workspace
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>
            Manage your projects, collaborate with your team, and bring your ideas to life.
          </p>

          {/* Feature pills */}
          <div style={{ display: "flex", gap: "12px", marginTop: "32px", justifyContent: "center", flexWrap: "wrap" }}>
            {["Project Management", "Team Collaboration", "Analytics"].map((feature) => (
              <span
                key={feature}
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
          background: "#fafafa",
          minWidth: "0",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          {/* Mobile Logo */}
          <div className="lg:hidden" style={{ textAlign: "center", marginBottom: "32px" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "#4f46e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                N
              </div>
              <span style={{ fontSize: "20px", fontWeight: "700", color: "#18181b" }}>Nexus</span>
            </Link>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#18181b", marginBottom: "8px" }}>
              Sign in to your account
            </h2>
            <p style={{ fontSize: "14px", color: "#71717a" }}>
              Enter your credentials to access your workspace
            </p>
          </div>

          {/* Form Card */}
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e4e4e7",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#3f3f46",
                    marginBottom: "8px",
                  }}
                >
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #e4e4e7",
                    fontSize: "14px",
                    color: "#18181b",
                    background: "#fafafa",
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#a5b4fc"
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"
                    e.target.style.background = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e4e4e7"
                    e.target.style.boxShadow = "none"
                    e.target.style.background = "#fafafa"
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#3f3f46",
                    marginBottom: "8px",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #e4e4e7",
                    fontSize: "14px",
                    color: "#18181b",
                    background: "#fafafa",
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#a5b4fc"
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"
                    e.target.style.background = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e4e4e7"
                    e.target.style.boxShadow = "none"
                    e.target.style.background = "#fafafa"
                  }}
                />
              </div>

              {error && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    fontSize: "13px",
                    color: "#dc2626",
                  }}
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 0.2s, transform 0.2s",
                  boxShadow: "0 2px 8px rgba(79,70,229,0.3)",
                }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>

          {/* Demo Accounts */}
          <div
            style={{
              marginTop: "24px",
              background: "white",
              borderRadius: "12px",
              padding: "16px",
              border: "1px solid #e4e4e7",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#71717a",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Demo Accounts
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {demoAccounts.map(({ u, p, role }) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => {
                    setUsername(u)
                    setPassword(p)
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f4f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: "500", color: "#3f3f46" }}>
                    {u} / {p}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "500",
                      color: "#6366f1",
                      background: "#eef2ff",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {role}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p style={{ marginTop: "24px", textAlign: "center", fontSize: "13px", color: "#a1a1aa" }}>
            Don&apos;t have an account?{" "}
            <Link href="/" style={{ color: "#6366f1", fontWeight: "500", textDecoration: "none" }}>
              Get started
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
