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

// Icon components
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
      <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.259c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9.003 18z" fill="#34A853"/>
      <path d="M3.964 10.712A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.33z" fill="#FBBC05"/>
      <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M14.94 9.88c-.02-2.07 1.69-3.06 1.77-3.11-1-1.46-2.54-1.66-3.07-1.67-1.29-.14-2.55.78-3.21.78-.68 0-1.7-.76-2.8-.74-1.42.02-2.76.85-3.49 2.14-1.51 2.62-.38 6.48 1.06 8.6.73 1.04 1.58 2.2 2.69 2.16 1.09-.04 1.5-.7 2.81-.7 1.3 0 1.68.7 2.81.67 1.17-.02 1.9-1.05 2.61-2.1.84-1.19 1.18-2.38 1.19-2.44-.03-.01-2.27-.87-2.29-3.5l-.08-.09zM12.28 3.33c.58-.73.98-1.72.87-2.73-.84.04-1.9.58-2.51 1.29-.54.63-1.02 1.66-.9 2.63.95.07 1.93-.48 2.54-1.19z" fill="#000"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="7.5" height="7.5" fill="#F25022"/>
      <rect x="9.5" y="1" width="7.5" height="7.5" fill="#7FBA00"/>
      <rect x="1" y="9.5" width="7.5" height="7.5" fill="#00A4EF"/>
      <rect x="9.5" y="9.5" width="7.5" height="7.5" fill="#FFB900"/>
    </svg>
  )
}

function PasskeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M20 21a8 8 0 0 0-16 0"/>
    </svg>
  )
}

function SSOIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8"/>
      <path d="M12 17v4"/>
    </svg>
  )
}

function NexusLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path
        d="M40 8L72 72H8L40 8Z"
        stroke="#000"
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M40 24L56 56H24L40 24Z"
        stroke="#000"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showDemoHint, setShowDemoHint] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      // For demo purposes, check if email matches a demo account username
      const demoAccount = demoAccounts.find(acc => acc.u === email || email.includes(acc.u))
      if (demoAccount) {
        await login(demoAccount.u, demoAccount.p)
      } else {
        await login(email, code)
      }
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  function handleDemoLogin(username: string, password: string) {
    setEmail(username)
    setCode(password)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff'
    }}>
      {/* Header */}
      <header style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            border: '2px solid #000',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '14px',
            color: '#000'
          }}>
            N
          </div>
        </Link>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>Language: English (US)</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </header>

      {/* Main content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '32px' }}>
          <NexusLogo />
        </div>

        {/* Welcome text */}
        <h1 style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#000',
          margin: '0 0 8px 0'
        }}>
          Welcome to Nexus
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#9ca3af',
          margin: '0 0 32px 0'
        }}>
          Log in to your Nexus account
        </p>

        {/* Auth buttons container */}
        <div style={{ width: '100%', maxWidth: '340px' }}>
          {/* Social login buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#374151',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span style={{ width: '48px', display: 'flex', justifyContent: 'center' }}>
                <GoogleIcon />
              </span>
              <span style={{ flex: 1, textAlign: 'center' }}>Continue with Google</span>
            </button>

            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#374151',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span style={{ width: '48px', display: 'flex', justifyContent: 'center' }}>
                <AppleIcon />
              </span>
              <span style={{ flex: 1, textAlign: 'center' }}>Continue with Apple</span>
            </button>

            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#374151',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span style={{ width: '48px', display: 'flex', justifyContent: 'center' }}>
                <MicrosoftIcon />
              </span>
              <span style={{ flex: 1, textAlign: 'center' }}>Continue with Microsoft</span>
            </button>

            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#374151',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span style={{ width: '48px', display: 'flex', justifyContent: 'center', color: '#6b7280' }}>
                <PasskeyIcon />
              </span>
              <span style={{ flex: 1, textAlign: 'center' }}>Log in with passkey</span>
            </button>

            <button
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontSize: '15px',
                color: '#374151',
                transition: 'background-color 0.15s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span style={{ width: '48px', display: 'flex', justifyContent: 'center', color: '#6b7280' }}>
                <SSOIcon />
              </span>
              <span style={{ flex: 1, textAlign: 'center' }}>Single sign-on (SSO)</span>
            </button>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                color: '#6b7280',
                marginBottom: '6px'
              }}>
                Email
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: '#374151',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                  onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                />
                {email && (
                  <button
                    type="button"
                    onClick={() => setEmail('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#9ca3af',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#d1d5db"/>
                      <path d="M15 9l-6 6M9 9l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
              <p style={{
                fontSize: '12px',
                color: '#9ca3af',
                marginTop: '6px'
              }}>
                Use an organization email to easily collaborate with teammates
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                color: '#6b7280',
                marginBottom: '6px'
              }}>
                Verification code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: '#374151',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
              <p style={{
                fontSize: '12px',
                color: '#9ca3af',
                marginTop: '6px'
              }}>
                We sent a code to your inbox
              </p>
            </div>

            {error && (
              <div style={{
                padding: '12px',
                backgroundColor: '#fef2f2',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <p style={{ fontSize: '13px', color: '#dc2626', margin: 0 }}>
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                marginBottom: '12px'
              }}
            >
              {loading ? 'Signing in...' : 'Continue'}
            </button>

            <p style={{
              textAlign: 'center',
              fontSize: '13px',
              color: '#9ca3af',
              marginBottom: '20px'
            }}>
              Resend in 30s
            </p>

            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#9ca3af',
              lineHeight: 1.5
            }}>
              By continuing, you acknowledge that you understand<br/>
              and agree to the <a href="#" style={{ color: '#6b7280', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#6b7280', textDecoration: 'underline' }}>Privacy Policy</a>
            </p>
          </form>

          {/* Demo accounts hint */}
          <div style={{ marginTop: '24px' }}>
            <button
              type="button"
              onClick={() => setShowDemoHint(!showDemoHint)}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '13px',
                color: '#6b7280',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              Demo accounts available
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: showDemoHint ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {showDemoHint && (
              <div style={{
                marginTop: '8px',
                padding: '12px',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                {demoAccounts.map(({ u, p, role }) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => handleDemoLogin(u, p)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      marginBottom: '4px'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontFamily: 'monospace', color: '#374151' }}>
                      {u} / {p}
                    </span>
                    <span style={{ color: '#9ca3af' }}>{role}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1f2937',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#fff',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="20" height="20" viewBox="0 0 80 80" fill="none">
              <path d="M40 8L72 72H8L40 8Z" stroke="#000" strokeWidth="6" fill="none" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>Nexus</span>
        </div>
      </footer>
    </div>
  )
}
