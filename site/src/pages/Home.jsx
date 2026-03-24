import { Link } from 'react-router-dom'
import { useAuth } from '../App.jsx'
import {
  LayoutDashboard,
  Users,
  FileBarChart,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div className="home-container">
          <Link to="/" className="home-logo">
            <div className="logo-icon">M</div>
            <span>MyApp</span>
          </Link>
          <nav className="home-nav">
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            {user ? (
              <Link to="/dashboard" className="nav-btn">Dashboard</Link>
            ) : (
              <Link to="/login" className="nav-btn">Sign In</Link>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="home-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={14} />
              <span>Trusted by 10,000+ teams worldwide</span>
            </div>
            <h1>Streamline your team's workflow with ease</h1>
            <p className="hero-description">
              MyApp brings together powerful dashboard analytics, intuitive user management,
              and comprehensive reporting — all in one beautifully designed platform.
            </p>
            <div className="hero-actions">
              <Link to={user ? '/dashboard' : '/login'} className="btn-primary">
                {user ? 'Go to Dashboard' : 'Get Started Free'}
                <ArrowRight size={18} />
              </Link>
              <a href="#features" className="btn-secondary">See how it works</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-text">Uptime</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">50k+</span>
                <span className="stat-text">Active Users</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">4.9</span>
                <span className="stat-text">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span><span></span><span></span>
                </div>
                <span className="preview-title">Dashboard Overview</span>
              </div>
              <div className="preview-content">
                <div className="preview-stat-row">
                  <div className="preview-stat">
                    <span className="preview-stat-value">2,847</span>
                    <span className="preview-stat-label">Total Users</span>
                  </div>
                  <div className="preview-stat">
                    <span className="preview-stat-value">$48.2k</span>
                    <span className="preview-stat-label">Revenue</span>
                  </div>
                </div>
                <div className="preview-chart">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '80%' }}></div>
                  <div className="chart-bar" style={{ height: '45%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                  <div className="chart-bar" style={{ height: '85%' }}></div>
                  <div className="chart-bar" style={{ height: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="home-container">
          <div className="section-header">
            <h2>Everything you need to succeed</h2>
            <p>Powerful features that help your team work smarter, not harder</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <LayoutDashboard size={24} />
              </div>
              <h3>Powerful Dashboard</h3>
              <p>Get a bird's-eye view of your entire operation. See key metrics, recent activity, and critical insights at a glance.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> Real-time data updates</li>
                <li><CheckCircle2 size={16} /> Customizable widgets</li>
                <li><CheckCircle2 size={16} /> Interactive charts</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>User Management</h3>
              <p>Effortlessly manage your team with granular permissions and role-based access control.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> Role-based access</li>
                <li><CheckCircle2 size={16} /> Team collaboration</li>
                <li><CheckCircle2 size={16} /> Activity tracking</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FileBarChart size={24} />
              </div>
              <h3>Advanced Reports</h3>
              <p>Generate comprehensive reports with one click. Export data in multiple formats for further analysis.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> Custom date ranges</li>
                <li><CheckCircle2 size={16} /> Multiple export formats</li>
                <li><CheckCircle2 size={16} /> Scheduled reports</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Enterprise Security</h3>
              <p>Rest easy knowing your data is protected by industry-leading security measures and compliance standards.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> End-to-end encryption</li>
                <li><CheckCircle2 size={16} /> SOC 2 compliant</li>
                <li><CheckCircle2 size={16} /> Regular audits</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={24} />
              </div>
              <h3>Time Savings</h3>
              <p>Automate repetitive tasks and workflows to give your team more time to focus on what matters.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> Workflow automation</li>
                <li><CheckCircle2 size={16} /> Smart notifications</li>
                <li><CheckCircle2 size={16} /> Batch operations</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Built for speed. Experience instant page loads and real-time updates that keep your team productive.</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={16} /> Sub-second loads</li>
                <li><CheckCircle2 size={16} /> Global CDN</li>
                <li><CheckCircle2 size={16} /> Optimized performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="home-container">
          <div className="section-header">
            <h2>Loved by teams everywhere</h2>
            <p>See what our customers have to say about MyApp</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">"MyApp has completely transformed how we manage our team. The dashboard gives us instant visibility into everything that matters."</p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div className="author-info">
                  <span className="author-name">Sarah Johnson</span>
                  <span className="author-role">Product Manager, TechCorp</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">"The reporting features alone have saved us countless hours each month. Highly recommend to any growing team."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <span className="author-name">Michael Roberts</span>
                  <span className="author-role">CEO, StartupXYZ</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">"Easy to set up, intuitive to use, and our whole team was onboarded in less than a day. Fantastic experience!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">EL</div>
                <div className="author-info">
                  <span className="author-name">Emily Liu</span>
                  <span className="author-role">Operations Lead, GrowthCo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="home-container">
          <div className="cta-content">
            <h2>Ready to transform your workflow?</h2>
            <p>Join thousands of teams already using MyApp to streamline their operations.</p>
            <div className="cta-actions">
              <Link to="/login" className="btn-primary btn-large">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="cta-note">No credit card required • Free 14-day trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="home-logo">
                <div className="logo-icon">M</div>
                <span>MyApp</span>
              </div>
              <p>Empowering teams to work smarter and achieve more, together.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#integrations">Integrations</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#docs">Documentation</a>
                <a href="#blog">Blog</a>
                <a href="#support">Support</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 MyApp. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
