import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../App.jsx'

// ---- Sidebar ----

const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'reports',   label: 'Reports' },
  { id: 'users',     label: 'Users' },
  { id: 'settings',  label: 'Settings' },
]

function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">MyApp</div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item${active === item.id ? ' active' : ''}`}
            onClick={() => onSelect(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

// ---- Header ----

function DashHeader({ user, onLogout }) {
  return (
    <header className="dash-header">
      <span className="page-title">Dashboard</span>
      <div className="header-right">
        <span className="user-info">{user.name} &mdash; {user.role}</span>
        <button className="btn btn-sm" onClick={onLogout}>Logout</button>
      </div>
    </header>
  )
}

// ---- Content sections ----

const STATS = [
  { label: 'Total Users',        value: '142' },
  { label: 'Active Sessions',    value: '38'  },
  { label: 'Reports This Month', value: '17'  },
  { label: 'Pending Tasks',      value: '5'   },
]

const ACTIVITY = [
  { event: 'Login',             user: 'admin', date: '2026-03-24 09:01' },
  { event: 'Report generated',  user: 'admin', date: '2026-03-23 14:32' },
  { event: 'User created',      user: 'jane',  date: '2026-03-22 11:15' },
  { event: 'Settings updated',  user: 'admin', date: '2026-03-21 16:44' },
  { event: 'Login',             user: 'jane',  date: '2026-03-20 08:55' },
]

function OverviewSection() {
  return (
    <div>
      <h2>Overview</h2>
      <div className="stat-grid">
        {STATS.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <h3>Recent Activity</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Event</th>
            <th>User</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {ACTIVITY.map((row, i) => (
            <tr key={i}>
              <td>{row.event}</td>
              <td>{row.user}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PlaceholderSection({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p className="placeholder">This section has no content yet.</p>
    </div>
  )
}

function Content({ section }) {
  if (section === 'overview') return <OverviewSection />
  const label = NAV_ITEMS.find(i => i.id === section)?.label ?? section
  return <PlaceholderSection title={label} />
}

// ---- Footer ----

function DashFooter() {
  return (
    <footer className="dash-footer">
      <span>MyApp v1.0.0</span>
      <span>Support: support@myapp.example</span>
    </footer>
  )
}

// ---- Page ----

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [section, setSection] = useState('overview')

  async function handleLogout() {
    const token = localStorage.getItem('token')
    await fetch('/api/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }).catch(() => {})
    logout()
    navigate('/')
  }

  return (
    <div className="dash-layout">
      <Sidebar active={section} onSelect={setSection} />
      <div className="dash-main">
        <DashHeader user={user} onLogout={handleLogout} />
        <main className="dash-content">
          <Content section={section} />
        </main>
        <DashFooter />
      </div>
    </div>
  )
}
