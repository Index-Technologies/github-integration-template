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
  {
    icon: "⚡",
    title: "Real-time Updates",
    description:
      "Changes sync instantly across your team. No refresh needed.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your project",
    description: "Set up your workspace in seconds. Define goals, timelines, and team structure.",
  },
  {
    number: "02",
    title: "Assign tasks",
    description: "Break work into tasks and assign them to the right people with deadlines.",
  },
  {
    number: "03",
    title: "Track progress",
    description: "Monitor completion rates, identify blockers, and ship on time.",
  },
];

const testimonials = [
  {
    quote: "Nexus transformed how our team collaborates. We shipped 40% faster in the first month.",
    name: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechFlow",
    avatar: "SC",
  },
  {
    quote: "Finally, a project tool that doesn't get in the way. Clean, fast, and intuitive.",
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "Designlab",
    avatar: "MJ",
  },
  {
    quote: "The activity feed alone has saved us hours of status meetings every week.",
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "LaunchPad",
    avatar: "ER",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small projects",
    features: ["Up to 3 projects", "5 team members", "Basic activity feed", "7-day history"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per user/month",
    description: "For growing teams that need more power",
    features: ["Unlimited projects", "Unlimited members", "Advanced analytics", "Priority support", "Custom fields"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "per user/month",
    description: "Enterprise-grade features for large teams",
    features: ["Everything in Pro", "SSO & SAML", "Audit logs", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800/50 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">
                N
              </div>
              <span className="text-base font-semibold text-white">Nexus</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white">
                Features
              </a>
              <a href="#pricing" className="text-sm text-zinc-400 transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm text-zinc-400 transition-colors hover:text-white">
                Testimonials
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Trusted by 500+ teams worldwide
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ship projects faster with
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              {" "}your team aligned
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Nexus is the modern project management tool built for teams who want to move fast.
            Track tasks, collaborate in real-time, and never miss a deadline.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="w-full rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-indigo-400 sm:w-auto"
            >
              Start Free →
            </Link>
            <Link
              href="/dashboard"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-zinc-800 sm:w-auto"
            >
              View Live Demo
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            No credit card required · Free forever for small teams
          </p>
        </div>
      </section>

      {/* Product Screenshot Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-indigo-500/10">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <div className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="ml-4 text-xs text-zinc-500">nexus.app/dashboard</span>
            </div>
            <div className="p-6">
              {/* Mock Dashboard UI */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="h-6 w-32 rounded bg-zinc-800" />
                  <div className="mt-2 h-4 w-48 rounded bg-zinc-800/50" />
                </div>
                <div className="h-9 w-28 rounded-lg bg-indigo-500/20" />
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4">
                    <div className="h-3 w-16 rounded bg-zinc-700/50 mb-2" />
                    <div className="h-8 w-12 rounded bg-zinc-700" />
                    <div className="mt-2 h-3 w-20 rounded bg-zinc-800" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl border border-zinc-800 bg-zinc-800/30 p-4">
                  <div className="h-4 w-32 rounded bg-zinc-700 mb-4" />
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="mb-3 flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
                      <div className="h-4 w-4 rounded bg-indigo-500/30" />
                      <div className="h-4 flex-1 rounded bg-zinc-700/50" />
                      <div className="h-6 w-16 rounded-full bg-emerald-500/20" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-800/30 p-4">
                  <div className="h-4 w-24 rounded bg-zinc-700 mb-4" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="mb-2 flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-zinc-700" />
                      <div className="h-3 flex-1 rounded bg-zinc-800" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            The dashboard your team will actually want to use
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-zinc-800/50 bg-zinc-900/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              How it works
            </h2>
            <p className="text-lg text-zinc-400">
              Get your team up and running in minutes, not days
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-indigo-500/50 to-transparent md:block" />
                )}
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-xl font-bold text-indigo-400">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Everything your team needs
            </h2>
            <p className="text-lg text-zinc-400">
              Powerful features without the complexity
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl text-indigo-400">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-t border-zinc-800/50 bg-zinc-900/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-zinc-400">
              See what our customers have to say
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-400">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-zinc-400">
              Start free, upgrade when you need to
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-6 ${
                  tier.highlighted
                    ? "border-indigo-500 bg-indigo-500/5"
                    : "border-zinc-800 bg-zinc-900/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold text-white">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-sm text-zinc-500">/{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>
                </div>
                <ul className="mb-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="text-emerald-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-indigo-500 text-white hover:bg-indigo-400"
                      : "border border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Join thousands of teams already using Nexus to ship faster.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-indigo-400"
          >
            Start Free Today →
          </Link>
          <p className="mt-4 text-sm text-zinc-500">
            Sign in with{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-zinc-400">
              admin / password
            </code>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
                  N
                </div>
                <span className="text-sm font-semibold text-white">Nexus</span>
              </div>
              <p className="text-sm text-zinc-500">
                Project management for teams who ship.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-zinc-500 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-sm text-zinc-500 hover:text-white">Pricing</a></li>
                <li><Link href="/dashboard" className="text-sm text-zinc-500 hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-white">About</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-800/50 pt-8 text-center">
            <p className="text-sm text-zinc-600">
              © 2026 Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
