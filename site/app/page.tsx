import Link from "next/link";

const features = [
  {
    icon: "◈",
    title: "Project Tracking",
    description:
      "Organize work across projects with status, priority, and progress tracking built in.",
  },
  {
    icon: "⬡",
    title: "Team Collaboration",
    description:
      "Assign tasks to team members, track ownership, and keep everyone aligned.",
  },
  {
    icon: "◎",
    title: "Activity Feed",
    description:
      "Full audit trail of every action — see what changed, when, and by who.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 3 projects", "2 team members", "Basic activity log"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per user/month",
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "Unlimited members",
      "Full activity history",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      {/* Header */}
      <header
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid #e5e5e5",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "16px",
              }}
            >
              N
            </div>
            <span
              style={{ fontSize: "18px", fontWeight: 700, color: "#18181b" }}
            >
              Nexus
            </span>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              href="#features"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#52525b",
                textDecoration: "none",
              }}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#52525b",
                textDecoration: "none",
              }}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "100px 24px 120px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "100px",
              background:
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%)",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
              }}
            />
            <span
              style={{ fontSize: "13px", fontWeight: 600, color: "#9333ea" }}
            >
              Demo app — SQLite-backed, no Docker needed
            </span>
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#18181b",
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}
          >
            Ship projects
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              10x faster
            </span>
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: "#71717a",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Nexus is the project management tool that gets out of your way.
            Track tasks, collaborate seamlessly, and ship with confidence.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/login"
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(147, 51, 234, 0.3)",
              }}
            >
              Get started free →
            </Link>
            <Link
              href="/dashboard"
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "2px solid #e5e5e5",
                color: "#18181b",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              View demo
            </Link>
          </div>

          <p
            style={{
              marginTop: "24px",
              fontSize: "13px",
              color: "#a1a1aa",
            }}
          >
            Sign in with{" "}
            <code
              style={{
                background: "#f4f4f5",
                padding: "4px 8px",
                borderRadius: "6px",
                fontFamily: "monospace",
              }}
            >
              admin / password
            </code>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        style={{
          padding: "100px 24px",
          background: "#fafafa",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#18181b",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Everything you need
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#71717a",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Powerful features to help your team move faster and ship better
              products.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  background: "#ffffff",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(219, 39, 119, 0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {f.icon}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#18181b",
                    marginBottom: "8px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#71717a",
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        style={{
          padding: "100px 24px",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: "#18181b",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Simple pricing
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#71717a",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Start free, upgrade when you need more. No hidden fees, no
              surprises.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  background: plan.highlighted
                    ? "linear-gradient(135deg, #9333ea 0%, #db2777 100%)"
                    : "#ffffff",
                  border: plan.highlighted ? "none" : "1px solid #e5e5e5",
                  boxShadow: plan.highlighted
                    ? "0 8px 40px rgba(147, 51, 234, 0.25)"
                    : "none",
                  transform: plan.highlighted ? "scale(1.05)" : "none",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: plan.highlighted ? "rgba(255,255,255,0.9)" : "#9333ea",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {plan.name}
                  </span>
                </div>

                <div style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "48px",
                      fontWeight: 800,
                      color: plan.highlighted ? "#ffffff" : "#18181b",
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period !== "contact us" && (
                    <span
                      style={{
                        fontSize: "15px",
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.8)"
                          : "#71717a",
                        marginLeft: "4px",
                      }}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.9)"
                      : "#71717a",
                    marginBottom: "24px",
                  }}
                >
                  {plan.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px 0",
                  }}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "14px",
                        color: plan.highlighted ? "#ffffff" : "#52525b",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          color: plan.highlighted ? "#ffffff" : "#9333ea",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px 24px",
                    borderRadius: "10px",
                    background: plan.highlighted
                      ? "#ffffff"
                      : "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
                    color: plan.highlighted ? "#9333ea" : "#ffffff",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
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
      <footer
        style={{
          padding: "40px 24px",
          background: "#18181b",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "12px",
            }}
          >
            N
          </div>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
            Nexus
          </span>
        </div>
        <p style={{ fontSize: "13px", color: "#71717a" }}>
          A demo application.{" "}
          <Link
            href="/login"
            style={{
              background: "linear-gradient(135deg, #9333ea 0%, #db2777 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sign in to explore →
          </Link>
        </p>
      </footer>
    </div>
  );
}
