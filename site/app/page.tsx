import Link from "next/link";

const features = [
  {
    icon: "◈",
    title: "Project Tracking",
    description: "Organize work across projects with status, priority, and progress tracking built in.",
  },
  {
    icon: "⬡",
    title: "Team Collaboration",
    description: "Assign tasks to team members, track ownership, and keep everyone aligned.",
  },
  {
    icon: "◎",
    title: "Activity Feed",
    description: "Full audit trail of every action — see what changed, when, and by who.",
  },
];

const testimonials = [
  {
    quote: "Nexus transformed how our team ships products. We're 2x faster now.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechFlow",
  },
  {
    quote: "Finally, a project tool that doesn't get in the way. Simple and powerful.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "LaunchPad",
  },
  {
    quote: "The activity feed alone saved us hours of status meetings every week.",
    author: "Emily Rodriguez",
    role: "Team Lead",
    company: "BuildCo",
  },
];

const stats = [
  { value: "10k+", label: "Active teams" },
  { value: "2M+", label: "Tasks completed" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "User rating" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <header style={{
        borderBottom: "1px solid #f4f4f5",
        padding: "16px 24px",
        position: "sticky",
        top: 0,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 50
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              display: "flex",
              height: "36px",
              width: "36px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              fontSize: "14px",
              fontWeight: "700",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.35)"
            }}>
              N
            </div>
            <span style={{ fontSize: "18px", fontWeight: "700", color: "#18181b" }}>Nexus</span>
          </div>
          <Link
            href="/login"
            style={{
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(99, 102, 241, 0.35)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Hero Section - Bigger & Bolder */}
      <section style={{
        padding: "100px 24px 120px",
        textAlign: "center",
        background: "linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%)"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            marginBottom: "24px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            border: "1px solid #e0e7ff",
            backgroundColor: "#eef2ff",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#4338ca"
          }}>
            <span style={{
              height: "8px",
              width: "8px",
              borderRadius: "9999px",
              backgroundColor: "#6366f1",
              boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)"
            }} />
            Demo app — SQLite-backed, no Docker needed
          </div>
          <h1 style={{
            marginBottom: "28px",
            fontSize: "clamp(48px, 8vw, 80px)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
            color: "#18181b"
          }}>
            Your projects,
            <br />
            <span style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              finally organized
            </span>
          </h1>
          <p style={{
            marginBottom: "40px",
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#71717a",
            maxWidth: "600px",
            margin: "0 auto 40px"
          }}>
            Nexus is a lightweight project management tool for small teams.
            Track tasks, ship faster, and keep everyone on the same page.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/login"
              style={{
                borderRadius: "14px",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                padding: "18px 36px",
                fontSize: "16px",
                fontWeight: "700",
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.4)",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
            >
              Get started free →
            </Link>
            <Link
              href="/dashboard"
              style={{
                borderRadius: "14px",
                border: "2px solid #e4e4e7",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#3f3f46",
                textDecoration: "none",
                backgroundColor: "#ffffff",
                transition: "border-color 0.2s, background-color 0.2s"
              }}
            >
              View dashboard
            </Link>
          </div>
          <p style={{ marginTop: "20px", fontSize: "13px", color: "#a1a1aa" }}>
            Sign in with{" "}
            <code style={{
              borderRadius: "6px",
              backgroundColor: "#f4f4f5",
              padding: "4px 8px",
              fontFamily: "monospace",
              fontWeight: "500"
            }}>
              admin / password
            </code>
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        backgroundColor: "#18181b",
        padding: "48px 24px"
      }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px",
          textAlign: "center"
        }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontSize: "36px",
                fontWeight: "800",
                background: "linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px"
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "#a1a1aa", fontWeight: "500" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "100px 24px", backgroundColor: "#fafafa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "700",
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px"
            }}>
              Features
            </span>
            <h2 style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#18181b",
              letterSpacing: "-0.02em"
            }}>
              Everything your team needs
            </h2>
          </div>
          <div style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
          }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #e4e4e7",
                  backgroundColor: "#ffffff",
                  padding: "32px",
                  transition: "box-shadow 0.3s, transform 0.3s"
                }}
              >
                <div style={{
                  marginBottom: "20px",
                  display: "flex",
                  height: "56px",
                  width: "56px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
                  fontSize: "24px",
                  color: "#6366f1"
                }}>
                  {f.icon}
                </div>
                <h3 style={{
                  marginBottom: "12px",
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#18181b"
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#71717a"
                }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section style={{ padding: "100px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: "700",
              color: "#6366f1",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px"
            }}>
              Testimonials
            </span>
            <h2 style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#18181b",
              letterSpacing: "-0.02em"
            }}>
              Loved by teams everywhere
            </h2>
          </div>
          <div style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
          }}>
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #e4e4e7",
                  backgroundColor: "#fafafa",
                  padding: "32px",
                  position: "relative"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "24px",
                  right: "28px",
                  fontSize: "48px",
                  color: "#e0e7ff",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1"
                }}>
                  "
                </div>
                <p style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#3f3f46",
                  marginBottom: "24px",
                  fontStyle: "italic"
                }}>
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    color: "#4338ca",
                    fontSize: "16px"
                  }}>
                    {t.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div style={{ fontWeight: "700", color: "#18181b", fontSize: "15px" }}>
                      {t.author}
                    </div>
                    <div style={{ fontSize: "13px", color: "#71717a" }}>
                      {t.role} at {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: "20px"
          }}>
            Ready to get organized?
          </h2>
          <p style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: "36px",
            lineHeight: "1.7"
          }}>
            Join thousands of teams already using Nexus to ship faster and stay aligned.
          </p>
          <Link
            href="/login"
            style={{
              display: "inline-block",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              padding: "18px 40px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#4f46e5",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.2s"
            }}
          >
            Start for free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #f4f4f5",
        backgroundColor: "#18181b",
        padding: "48px 24px",
        textAlign: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
          <div style={{
            display: "flex",
            height: "32px",
            width: "32px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            fontSize: "12px",
            fontWeight: "700",
            color: "#ffffff"
          }}>
            N
          </div>
          <span style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff" }}>Nexus</span>
        </div>
        <p style={{ fontSize: "14px", color: "#71717a" }}>
          A demo application.{" "}
          <Link href="/login" style={{ color: "#a5b4fc", textDecoration: "none" }}>
            Sign in to explore
          </Link>
        </p>
      </footer>
    </div>
  );
}
