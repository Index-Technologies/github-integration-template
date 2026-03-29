import { Link } from 'react-router-dom'
import { useAuth } from '../App.jsx'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="page">
      <header className="site-header">
        <div className="container">
          <span className="logo">MyApp</span>
          <nav>
            {user ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Your team's command center</h1>
          <p>MyApp gives your team a simple dashboard to track activity, users, and reports.</p>
          <Link to={user ? '/dashboard' : '/login'} className="btn">
            {user ? 'Go to Dashboard' : 'Get Started'}
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>What you get</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Overview at a glance</h3>
              <p>See key stats and recent activity from a single screen without digging through reports.</p>
            </div>
            <div className="feature-card">
              <h3>User management</h3>
              <p>Add, remove, and update team members. Assign roles to control what each person can see.</p>
            </div>
            <div className="feature-card">
              <h3>Reports</h3>
              <p>Generate monthly summaries and export data for use in other tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Sign in with your credentials to access the dashboard.</p>
          <Link to="/login" className="btn">Sign In</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
