"use client";

import Link from "next/link";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

const quickActions = [
  {
    icon: "✦",
    title: "Create Project",
    description: "Start a new project",
    href: "/dashboard",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    icon: "◈",
    title: "View Dashboard",
    description: "See your overview",
    href: "/dashboard",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  },
  {
    icon: "⬡",
    title: "Join Team",
    description: "Collaborate with others",
    href: "/dashboard",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  },
  {
    icon: "◎",
    title: "Activity Feed",
    description: "Recent updates",
    href: "/dashboard/activity",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
  },
];

const features = [
  {
    icon: "📋",
    title: "Project Tracking",
    description: "Organize work across projects with status and progress",
    href: "/dashboard/projects",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    description: "Assign tasks and keep everyone aligned",
    href: "/dashboard",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop",
  },
  {
    icon: "📊",
    title: "Activity History",
    description: "Full audit trail of every action",
    href: "/dashboard/activity",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
  },
  {
    icon: "✅",
    title: "Task Management",
    description: "Track todos and ship faster",
    href: "/todos",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=240&fit=crop",
  },
];

const getStarted = [
  {
    icon: "🚀",
    title: "Quick Start Guide",
    description: "Get up and running in minutes",
    href: "/dashboard",
  },
  {
    icon: "📖",
    title: "Documentation",
    description: "Learn all the features",
    href: "/dashboard",
  },
  {
    icon: "💬",
    title: "Community",
    description: "Join the discussion",
    href: "/dashboard",
  },
];

export default function HomePage() {
  const greeting = getGreeting();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #1a1a2e 0%, #121212 100%)",
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
        background: "rgba(18, 18, 18, 0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "14px",
          }}>
            N
          </div>
          <span style={{ fontWeight: 600, fontSize: "18px" }}>Nexus</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/dashboard"
            style={{
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            style={{
              background: "#fff",
              color: "#121212",
              padding: "10px 24px",
              borderRadius: "500px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "32px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Greeting */}
        <h1 style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "24px",
          background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {greeting}
        </h1>

        {/* Quick Actions Grid */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
          }}>
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "#fff",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
              >
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: action.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                }}>
                  {action.icon}
                </div>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>{action.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)",
          borderRadius: "16px",
          padding: "48px",
          marginBottom: "48px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99, 102, 241, 0.3)",
              padding: "6px 12px",
              borderRadius: "500px",
              fontSize: "12px",
              fontWeight: 500,
              marginBottom: "16px",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                background: "#6366f1",
                borderRadius: "50%",
              }} />
              Demo app — SQLite-backed, no Docker needed
            </div>
            <h2 style={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "16px",
            }}>
              Your projects,
              <br />
              <span style={{ color: "#a78bfa" }}>finally organized</span>
            </h2>
            <p style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              marginBottom: "24px",
            }}>
              Nexus is a lightweight project management tool for small teams.
              Track tasks, ship faster, and keep everyone on the same page.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/login"
                style={{
                  background: "#6366f1",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "500px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Get started →
              </Link>
              <Link
                href="/dashboard"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "500px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                View dashboard
              </Link>
            </div>
            <p style={{
              marginTop: "16px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
            }}>
              Sign in with{" "}
              <code style={{
                background: "rgba(255,255,255,0.1)",
                padding: "2px 8px",
                borderRadius: "4px",
                fontFamily: "monospace",
              }}>
                admin / password
              </code>
            </p>
          </div>
        </section>

        {/* Features Carousel */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700 }}>Explore Features</h3>
            <Link
              href="/dashboard"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Show all
            </Link>
          </div>
          <div style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}>
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                style={{
                  minWidth: "200px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "16px",
                  textDecoration: "none",
                  color: "#fff",
                  transition: "background 0.2s, transform 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <div style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  background: `url(${feature.image}) center/cover`,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    width: "40px",
                    height: "40px",
                    background: "#6366f1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}>
                    {feature.icon}
                  </div>
                </div>
                <h4 style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.4,
                }}>
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Get Started Section */}
        <section style={{ marginBottom: "48px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>
            Get Started
          </h3>
          <div style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            paddingBottom: "16px",
            scrollbarWidth: "none",
          }}>
            {getStarted.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  minWidth: "280px",
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)",
                  borderRadius: "12px",
                  padding: "20px",
                  textDecoration: "none",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)";
                }}
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(99, 102, 241, 0.3)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "24px 32px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          Nexus — a demo application.{" "}
          <Link href="/login" style={{ color: "#a78bfa", textDecoration: "none" }}>
            Sign in to explore
          </Link>
        </p>
      </footer>
    </div>
  );
}
