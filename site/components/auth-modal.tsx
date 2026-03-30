"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

const demoAccounts = [
  { u: "admin", p: "password", role: "Administrator" },
  { u: "jane", p: "jane123", role: "Designer" },
  { u: "john", p: "john123", role: "Developer" },
]

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  redirectTo?: string
}

export default function AuthModal({ isOpen, onClose, redirectTo = "/dashboard" }: AuthModalProps) {
  const { login } = useAuth()
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await login(username, password)
      onClose()
      router.push(redirectTo)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          animation: "modalIn 0.2s ease-out",
        }}
      >
        <div style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  display: "flex",
                  height: "32px",
                  width: "32px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  backgroundColor: "#4f46e5",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                N
              </div>
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#18181b" }}>Sign in to Nexus</span>
            </div>
            <button
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#71717a",
                fontSize: "20px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f4f4f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#3f3f46",
                }}
              >
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #e4e4e7",
                  backgroundColor: "white",
                  padding: "10px 12px",
                  fontSize: "14px",
                  color: "#18181b",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#818cf8"
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e4e4e7"
                  e.currentTarget.style.boxShadow = "none"
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#3f3f46",
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #e4e4e7",
                  backgroundColor: "white",
                  padding: "10px 12px",
                  fontSize: "14px",
                  color: "#18181b",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#818cf8"
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(129, 140, 248, 0.2)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e4e4e7"
                  e.currentTarget.style.boxShadow = "none"
                }}
              />
            </div>
            {error && (
              <p
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#fef2f2",
                  padding: "10px 12px",
                  fontSize: "12px",
                  color: "#dc2626",
                }}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                borderRadius: "8px",
                backgroundColor: "#4f46e5",
                padding: "12px",
                fontSize: "14px",
                fontWeight: 600,
                color: "white",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "#4338ca")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <div
          style={{
            borderTop: "1px solid #e4e4e7",
            padding: "16px 24px",
            backgroundColor: "#fafafa",
            borderRadius: "0 0 16px 16px",
          }}
        >
          <p style={{ marginBottom: "8px", fontSize: "12px", fontWeight: 500, color: "#71717a" }}>Demo accounts</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {demoAccounts.map(({ u, p, role }) => (
              <button
                key={u}
                onClick={() => {
                  setUsername(u)
                  setPassword(p)
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "6px",
                  padding: "8px 10px",
                  textAlign: "left",
                  fontSize: "12px",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f4f4f5")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <span style={{ fontFamily: "monospace", fontWeight: 500, color: "#3f3f46" }}>
                  {u} / {p}
                </span>
                <span style={{ color: "#a1a1aa" }}>{role}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
