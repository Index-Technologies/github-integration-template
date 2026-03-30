"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import AuthModal from '@/components/auth-modal'

interface User {
  id: number
  username: string
  name: string
  role: string
  avatar: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
  openAuthModal: (redirectTo?: string) => void
  closeAuthModal: () => void
  isAuthModalOpen: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const API = ''

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [modalRedirectTo, setModalRedirectTo] = useState('/dashboard')

  function openAuthModal(redirectTo: string = '/dashboard') {
    setModalRedirectTo(redirectTo)
    setIsAuthModalOpen(true)
  }

  function closeAuthModal() {
    setIsAuthModalOpen(false)
  }

  useEffect(() => {
    const stored = localStorage.getItem('nexus_token')
    if (!stored) { setLoading(false); return }

    fetch(`${API}/api/me`, { headers: { Authorization: `Bearer ${stored}` } })
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(u => { setToken(stored); setUser(u) })
      .catch(() => localStorage.removeItem('nexus_token'))
      .finally(() => setLoading(false))
  }, [])

  async function login(username: string, password: string) {
    const res = await fetch(`${API}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    if (!res.ok) {
      const { error } = await res.json()
      throw new Error(error || 'Login failed')
    }
    const data = await res.json()
    localStorage.setItem('nexus_token', data.token)
    setToken(data.token)
    setUser(data.user)
  }

  function logout() {
    const stored = localStorage.getItem('nexus_token')
    if (stored) {
      fetch(`${API}/api/logout`, { method: 'POST', headers: { Authorization: `Bearer ${stored}` } }).catch(() => {})
    }
    localStorage.removeItem('nexus_token')
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, openAuthModal, closeAuthModal, isAuthModalOpen }}>
      {children}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        redirectTo={modalRedirectTo}
      />
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
