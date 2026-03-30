"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const quickAccessItems = [
  {
    title: "Dashboard",
    description: "View your overview",
    href: "/dashboard",
    gradient: "linear-gradient(135deg, #1DB954 0%, #191414 100%)",
    icon: "◈",
  },
  {
    title: "Projects",
    description: "Manage your projects",
    href: "/dashboard/projects",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #191414 100%)",
    icon: "⬡",
  },
  {
    title: "Activity",
    description: "Recent updates",
    href: "/dashboard/activity",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #191414 100%)",
    icon: "◎",
  },
  {
    title: "Tasks",
    description: "Your todo list",
    href: "/todos",
    gradient: "linear-gradient(135deg, #EC4899 0%, #191414 100%)",
    icon: "✓",
  },
];

const features = [
  {
    title: "Project Tracking",
    description: "Organize work across projects with status, priority, and progress tracking built in.",
    icon: "📊",
  },
  {
    title: "Team Collaboration",
    description: "Assign tasks to team members, track ownership, and keep everyone aligned.",
    icon: "👥",
  },
  {
    title: "Activity Feed",
    description: "Full audit trail of every action — see what changed, when, and by who.",
    icon: "📋",
  },
  {
    title: "Task Management",
    description: "Create, assign, and track tasks with due dates, priorities, and custom statuses.",
    icon: "✅",
  },
  {
    title: "Progress Insights",
    description: "Visual dashboards showing completion rates and project health at a glance.",
    icon: "📈",
  },
  {
    title: "Quick Search",
    description: "Find any project, task, or team member instantly with powerful search.",
    icon: "🔍",
  },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function HomePage() {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
      color: "#fff",
    }}>
      {/* Header */}
      <header style={{
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(15, 15, 26, 0.8)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "16px",
          }}>
            N
          </div>
          <span style={{ fontWeight: 600, fontSize: "18px", letterSpacing: "-0.5px" }}>Nexus</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/dashboard"
            style={{
              padding: "10px 20px",
              borderRadius: "500px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Explore
          </Link>
          <Link
            href="/login"
            style={{
              padding: "10px 24px",
              borderRadius: "500px",
              background: "#fff",
              color: "#0f0f1a",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px 32px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Hero Greeting */}
        <section style={{ marginBottom: "48px" }}>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            marginBottom: "8px",
            letterSpacing: "-1px",
          }}>
            {greeting}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}>
            Your projects, finally organized. Jump back in where you left off.
          </p>
        </section>

        {/* Quick Access Grid */}
        <section style={{ marginBottom: "56px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {quickAccessItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "0",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.05)",
                  textDecoration: "none",
                  color: "#fff",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: item.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ padding: "16px 16px 16px 0" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "56px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}>
            <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.5px" }}>
              Everything you need
            </h2>
            <Link
              href="/login"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Get started →
            </Link>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "24px",
          }}>
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.03)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div style={{
                  fontSize: "32px",
                  marginBottom: "16px",
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  marginBottom: "8px",
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: "48px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)",
          border: "1px solid rgba(99, 102, 241, 0.2)",
          textAlign: "center",
          marginBottom: "56px",
        }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "12px",
            letterSpacing: "-0.5px",
          }}>
            Ready to get organized?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "16px",
            marginBottom: "24px",
            maxWidth: "500px",
            margin: "0 auto 24px",
          }}>
            Join teams already using Nexus to ship faster and stay aligned.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/login"
              style={{
                padding: "14px 32px",
                borderRadius: "500px",
                background: "#fff",
                color: "#0f0f1a",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Start for free
            </Link>
            <Link
              href="/dashboard"
              style={{
                padding: "14px 32px",
                borderRadius: "500px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              View demo
            </Link>
          </div>
          <p style={{
            marginTop: "16px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
          }}>
            Demo credentials:{" "}
            <code style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2px 8px",
              borderRadius: "4px",
              fontFamily: "monospace",
            }}>
              admin / password
            </code>
          </p>
        </section>

        {/* Stats Section */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}>
            {[
              { value: "10k+", label: "Tasks completed" },
              { value: "500+", label: "Projects tracked" },
              { value: "99%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#6366f1",
                  marginBottom: "4px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        padding: "32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
          Nexus — A demo application.{" "}
          <Link href="/login" style={{ color: "#6366f1", textDecoration: "none" }}>
            Sign in to explore
          </Link>
        </p>
      </footer>
    </div>
  );
}
