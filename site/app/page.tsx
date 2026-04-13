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

const steps = [
  {
    number: "1",
    title: "Create a project",
    description:
      "Add your project with a name, description, and priority level. Set up in seconds.",
    icon: "◈",
  },
  {
    number: "2",
    title: "Add tasks & assign",
    description:
      "Break work into tasks, set statuses, and assign to team members.",
    icon: "⬡",
  },
  {
    number: "3",
    title: "Track progress",
    description:
      "Watch completion rates update automatically. See who did what in the activity feed.",
    icon: "◎",
  },
];

const testimonials = [
  {
    quote:
      "Finally, a PM tool that doesn't require a PhD to set up. We were productive from day one.",
    name: "Sarah Chen",
    role: "Founder, Pixel Studio",
    avatar: "SC",
  },
  {
    quote:
      "The activity feed alone saves us hours of status meetings every week.",
    name: "Marcus Johnson",
    role: "Tech Lead, Buildcraft",
    avatar: "MJ",
  },
  {
    quote:
      "Clean, fast, and does exactly what we need. Nothing more, nothing less.",
    name: "Elena Rodriguez",
    role: "Product Manager, Launchpad",
    avatar: "ER",
  },
];

const stats = [
  { value: "10k+", label: "Teams using Nexus" },
  { value: "500k", label: "Tasks completed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<50ms", label: "Avg. response time" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
              N
            </div>
            <span className="text-sm font-semibold text-zinc-900">Nexus</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="px-6 pt-24 pb-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-4 py-1.5 text-xs font-medium text-indigo-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
            Built for teams who ship fast
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Project management
            <br />
            <span className="text-indigo-600">without the bloat</span>
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-zinc-500">
            Nexus helps small teams organize projects, track progress, and stay
            aligned — without the complexity of enterprise tools.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/login"
              className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md sm:w-auto"
            >
              Start free trial
            </Link>
            <Link
              href="/dashboard"
              className="group w-full rounded-lg border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 sm:w-auto"
            >
              View demo
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-zinc-400">
            Demo credentials:{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono">
              admin / password
            </code>
          </p>
        </div>
      </section>

      {/* ===================== PRODUCT PREVIEW ===================== */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-zinc-300" />
                <div className="h-3 w-3 rounded-full bg-zinc-300" />
                <div className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>
              <div className="ml-4 flex-1 rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-400">
                nexus.app/dashboard
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="flex min-h-[400px]">
              {/* Mini sidebar */}
              <div className="hidden w-48 bg-slate-900 p-4 sm:block">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-indigo-500" />
                  <div className="h-3 w-16 rounded bg-slate-700" />
                </div>
                <div className="space-y-2">
                  <div className="h-8 rounded-lg bg-slate-700" />
                  <div className="h-8 rounded-lg bg-slate-800" />
                  <div className="h-8 rounded-lg bg-slate-800" />
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 bg-zinc-50 p-4 sm:p-6">
                {/* Stats row */}
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[65, 12, 8, 89].map((value, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-zinc-200 bg-white p-3 sm:p-4"
                    >
                      <div className="mb-2 h-2 w-16 rounded bg-zinc-200" />
                      <div className="text-xl font-bold text-zinc-900 sm:text-2xl">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project cards */}
                <div className="space-y-3">
                  {[
                    { name: "Website Redesign", progress: 75 },
                    { name: "Mobile App v2", progress: 45 },
                    { name: "API Integration", progress: 90 },
                  ].map((project, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-indigo-100" />
                        <div>
                          <div className="font-medium text-zinc-900">
                            {project.name}
                          </div>
                          <div className="text-xs text-zinc-400">
                            {project.progress}% complete
                          </div>
                        </div>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 sm:w-32">
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="border-t border-zinc-100 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              How it works
            </p>
            <h2 className="text-3xl font-bold text-zinc-900">
              Simple by design
            </h2>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-10 hidden h-px w-[calc(100%-80px)] bg-zinc-200 sm:block" />
                )}

                {/* Icon with number */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50">
                  <span className="text-3xl text-indigo-600">{step.icon}</span>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="border-t border-zinc-100 bg-zinc-50/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Features
            </p>
            <h2 className="text-3xl font-bold text-zinc-900">
              Everything your team needs
            </h2>
            <p className="mt-4 text-base text-zinc-500">
              No unnecessary complexity. Just the essentials, done right.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-600 transition-colors group-hover:bg-indigo-100">
                  {f.icon}
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL PROOF ===================== */}
      <section className="border-t border-zinc-100 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          {/* Stats bar */}
          <div className="mb-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials header */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-zinc-900">
              Loved by teams everywhere
            </h2>
          </div>

          {/* Testimonial cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="border-t border-zinc-100 bg-indigo-600 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to organize your team?
          </h2>
          <p className="mb-8 text-indigo-100">
            Start for free. No credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/login"
              className="w-full rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 sm:w-auto"
            >
              Get started free
            </Link>
            <Link
              href="/dashboard"
              className="w-full rounded-lg border border-indigo-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 sm:w-auto"
            >
              View demo
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-zinc-100 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-[10px] font-bold text-white">
                N
              </div>
              <span className="text-sm font-medium text-zinc-900">Nexus</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link
                href="/login"
                className="transition-colors hover:text-zinc-900"
              >
                Sign in
              </Link>
              <Link
                href="/dashboard"
                className="transition-colors hover:text-zinc-900"
              >
                Demo
              </Link>
              <span className="text-zinc-300">|</span>
              <span>A demo application</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
