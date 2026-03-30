import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Project Tracking",
    description: "Organize work across projects with status, priority, and progress tracking built in.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Assign tasks to team members, track ownership, and keep everyone aligned.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Activity Feed",
    description: "Full audit trail of every action — see what changed, when, and by who.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals and small projects",
    features: ["Up to 3 projects", "2 team members", "Basic analytics", "Email support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/user/mo",
    description: "For growing teams that need more power",
    features: ["Unlimited projects", "Unlimited team members", "Advanced analytics", "Priority support", "Custom integrations"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: ["Everything in Pro", "SSO & SAML", "Dedicated support", "Custom contracts", "SLA guarantees"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #f4f4f5", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #f97316 0%, #3b82f6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              fontWeight: 700
            }}>
              N
            </div>
            <span style={{ fontSize: "15px", fontWeight: 600, color: "#18181b", letterSpacing: "-0.01em" }}>Nexus</span>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link href="#features" style={{ fontSize: "14px", color: "#71717a", textDecoration: "none" }}>
              Features
            </Link>
            <Link href="#pricing" style={{ fontSize: "14px", color: "#71717a", textDecoration: "none" }}>
              Pricing
            </Link>
            <Link
              href="/login"
              style={{
                borderRadius: "8px",
                backgroundColor: "#18181b",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "white",
                textDecoration: "none",
                transition: "background-color 0.2s"
              }}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "100px",
            border: "1px solid #fed7aa",
            backgroundColor: "#fff7ed",
            padding: "6px 14px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#c2410c",
            marginBottom: "24px"
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#f97316" }} />
            Demo app — SQLite-backed, no Docker needed
          </div>
          <h1 style={{
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "#18181b",
            marginBottom: "20px"
          }}>
            Your projects,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #f97316 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>finally organized</span>
          </h1>
          <p style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#71717a",
            marginBottom: "36px",
            maxWidth: "540px",
            margin: "0 auto 36px"
          }}>
            Nexus is a lightweight project management tool for small teams. Track tasks, ship faster, and keep everyone on the same page.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <Link
              href="/login"
              style={{
                borderRadius: "10px",
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                textDecoration: "none",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
              }}
            >
              Get started →
            </Link>
            <Link
              href="/dashboard"
              style={{
                borderRadius: "10px",
                border: "1px solid #e4e4e7",
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#3f3f46",
                textDecoration: "none",
                backgroundColor: "white"
              }}
            >
              View dashboard
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "13px", color: "#a1a1aa" }}>
            Sign in with{" "}
            <code style={{
              borderRadius: "4px",
              backgroundColor: "#f4f4f5",
              padding: "3px 8px",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "12px"
            }}>
              admin / password
            </code>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ borderTop: "1px solid #f4f4f5", backgroundColor: "#fafafa", padding: "80px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#f97316", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Features
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em" }}>
              Everything your team needs
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  borderRadius: "16px",
                  border: "1px solid #e4e4e7",
                  backgroundColor: "white",
                  padding: "28px"
                }}
              >
                <div style={{
                  marginBottom: "16px",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#fff7ed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f97316"
                }}>
                  {f.icon}
                </div>
                <h3 style={{ marginBottom: "8px", fontWeight: 600, fontSize: "16px", color: "#18181b" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#71717a" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: "80px 24px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
              Pricing
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: "16px", color: "#71717a", maxWidth: "480px", margin: "0 auto" }}>
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "start" }}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  borderRadius: "20px",
                  border: plan.highlighted ? "2px solid #3b82f6" : "1px solid #e4e4e7",
                  backgroundColor: "white",
                  padding: "32px",
                  position: "relative",
                  boxShadow: plan.highlighted ? "0 4px 24px rgba(59, 130, 246, 0.12)" : "none"
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "100px"
                  }}>
                    Most popular
                  </div>
                )}
                <div style={{ marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#18181b", marginBottom: "8px" }}>{plan.name}</h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "40px", fontWeight: 700, color: "#18181b", letterSpacing: "-0.02em" }}>{plan.price}</span>
                    {plan.period && <span style={{ fontSize: "14px", color: "#71717a" }}>{plan.period}</span>}
                  </div>
                  <p style={{ fontSize: "14px", color: "#71717a" }}>{plan.description}</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0" }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#3f3f46", marginBottom: "12px" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke={plan.highlighted ? "#3b82f6" : "#f97316"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  style={{
                    display: "block",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    backgroundColor: plan.highlighted ? "#3b82f6" : "white",
                    color: plan.highlighted ? "white" : "#18181b",
                    border: plan.highlighted ? "none" : "1px solid #e4e4e7"
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #f4f4f5", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#a1a1aa" }}>
          Nexus — a demo application.{" "}
          <Link href="/login" style={{ color: "#f97316", textDecoration: "none" }}>
            Sign in to explore
          </Link>
        </p>
      </footer>
    </div>
  );
}
