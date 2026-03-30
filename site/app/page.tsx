import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
    title: "Project Tracking",
    description: "Organize work across projects with status, priority, and progress tracking built in.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Assign tasks to team members, track ownership, and keep everyone aligned.",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Activity Feed",
    description: "Full audit trail of every action — see what changed, when, and by who.",
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <header className="border-b border-zinc-100 px-6 py-4 relative z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/30">
              N
            </div>
            <span className="text-sm font-semibold text-zinc-900">Nexus</span>
          </div>
          <Link
            href="/login"
            className="cta-primary rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/25"
          >
            Sign in
          </Link>
        </div>
      </header>

      <section className="relative px-6 py-28 text-center">
        {/* Floating decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="animate-float absolute top-20 left-[10%] w-16 h-16 rounded-2xl bg-blue-500/20 rotate-12"
          />
          <div
            className="animate-float-delayed absolute top-32 right-[15%] w-12 h-12 rounded-full bg-amber-400/30"
          />
          <div
            className="animate-float absolute bottom-20 left-[20%] w-10 h-10 rounded-xl bg-red-400/20 -rotate-12"
          />
          <div
            className="animate-float-delayed absolute top-48 left-[5%] w-8 h-8 rounded-full bg-yellow-400/40"
          />
          <div
            className="animate-float absolute bottom-32 right-[10%] w-14 h-14 rounded-2xl bg-blue-400/15 rotate-45"
          />
          <div
            className="animate-pulse-glow absolute top-16 right-[25%] w-6 h-6 rounded-full bg-red-500/25"
          />
        </div>

        <div className="mx-auto max-w-2xl relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-amber-50 px-4 py-1.5 text-xs font-medium text-blue-700 shadow-sm">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Demo app — SQLite-backed, no Docker needed
          </div>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-zinc-900">
            Your projects,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-amber-500 bg-clip-text text-transparent">
              finally organized
            </span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-zinc-500">
            Nexus is a lightweight project management tool for small teams. Track
            tasks, ship faster, and keep everyone on the same page.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/login"
              className="cta-primary group relative rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get started
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="cta-secondary rounded-xl border-2 border-zinc-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            >
              View dashboard
            </Link>
          </div>
          <p className="mt-5 text-xs text-zinc-400">
            Sign in with{" "}
            <code className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-zinc-600">
              admin / password
            </code>
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-gradient-to-b from-zinc-50 to-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="mb-3 text-3xl font-bold text-zinc-900">
              Everything your team needs
            </h2>
            <p className="text-zinc-500">Powerful features to boost your productivity</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:border-zinc-300"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.lightColor} ${f.textColor}`}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New engaging CTA section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-amber-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-float" />
        <div className="absolute bottom-10 right-20 w-16 h-16 rounded-2xl bg-white/10 animate-float-delayed rotate-12" />
        <div className="absolute top-1/2 right-[10%] w-8 h-8 rounded-full bg-yellow-300/30 animate-pulse-glow" />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to supercharge your workflow?
          </h2>
          <p className="mb-8 text-blue-100 text-lg">
            Join teams who ship faster with Nexus. Start organizing today.
          </p>
          <Link
            href="/login"
            className="cta-secondary inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-xl hover:bg-blue-50"
          >
            Start for free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <footer className="border-t border-zinc-100 px-6 py-10 text-center bg-white">
        <p className="text-sm text-zinc-400">
          Nexus — a demo application.{" "}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Sign in to explore
          </Link>
        </p>
      </footer>
    </div>
  );
}
