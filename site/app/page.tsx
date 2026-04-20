import Link from "next/link";

const features = [
  {
    icon: "◈",
    title: "PROJECT TRACKING",
    description:
      "Organize work across projects with status, priority, and progress tracking built in.",
  },
  {
    icon: "⬡",
    title: "TEAM COLLAB",
    description:
      "Assign tasks to team members, track ownership, and keep everyone aligned.",
  },
  {
    icon: "◎",
    title: "ACTIVITY FEED",
    description:
      "Full audit trail of every action — see what changed, when, and by who.",
  },
];

const stats = [
  { value: "00:00:42", label: "UPTIME" },
  { value: "∞", label: "PROJECTS" },
  { value: "256-bit", label: "ENCRYPTED" },
  { value: "v1.0", label: "BUILD" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-mono text-[#00ff9d]">
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0 neon-grid" />
      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0 neon-scanlines opacity-60" />
      {/* Moving scan bar */}
      <div className="neon-scanbar" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 neon-vignette" />

      <div className="relative z-10">
        {/* Top status strip */}
        <div className="border-b border-[#00ff9d]/20 bg-black/70 px-6 py-2 text-[10px] uppercase tracking-[0.3em] text-[#00ff9d]/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff9d] neon-box-sm" />
              <span>connection://secure</span>
            </div>
            <div className="hidden items-center gap-6 sm:flex">
              <span>lat: 37.7749° N</span>
              <span>lon: 122.4194° W</span>
              <span className="text-[#00ff9d]">sys.ok</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="border-b border-[#00ff9d]/20 bg-black/60 px-6 py-5 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-[#00ff9d] bg-black text-sm font-bold text-[#00ff9d] neon-box neon-text-sm">
                N
              </div>
              <span className="text-sm font-bold tracking-[0.4em] text-[#00ff9d] neon-text-sm">
                NEXUS
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.3em] text-[#00ff9d]/40 sm:inline">
                // ops.terminal
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="hidden border border-[#00ff9d]/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#00ff9d] neon-hover sm:inline-block"
              >
                <span className="neon-hover-text">DASHBOARD</span>
              </Link>
              <Link
                href="/login"
                className="px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest neon-btn-solid"
              >
                &gt; sign_in
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-5xl">
            {/* Tag */}
            <div className="mb-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 border border-[#00ff9d]/40 bg-[#00ff9d]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff9d]">
                <span className="h-2 w-2 animate-pulse bg-[#00ff9d] neon-box-sm" />
                SYSTEM ONLINE — SQLITE · NO DOCKER
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-8 text-center text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
              <span className="block">Your projects,</span>
              <span className="block">
                <span className="text-[#00ff9d] neon-text neon-text-pulse">
                  finally_online
                </span>
                <span className="ml-2 inline-block h-14 w-4 bg-[#00ff9d] align-middle neon-box neon-blink sm:h-16" />
              </span>
            </h1>

            {/* Sub */}
            <div className="mx-auto mb-12 max-w-2xl border-l-2 border-[#00ff9d]/40 pl-5 text-left text-sm leading-7 text-[#00ff9d]/75 sm:text-base">
              <p>
                <span className="text-[#00ff9d]">$</span> Nexus is a lightweight
                project management terminal for small teams.
              </p>
              <p>
                <span className="text-[#00ff9d]">$</span> Track tasks. Ship
                faster. Stay aligned.
              </p>
              <p>
                <span className="text-[#00ff9d]">$</span> No bloat. No ceremony.
                Just signal.
                <span className="ml-1 inline-block h-4 w-2 bg-[#00ff9d]/80 align-middle neon-blink" />
              </p>
            </div>

            {/* CTAs */}
            <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] neon-btn-solid"
              >
                [ initialize ] →
              </Link>
              <Link
                href="/dashboard"
                className="border border-[#00ff9d]/60 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#00ff9d] neon-hover"
              >
                <span className="neon-hover-text">view_dashboard</span>
              </Link>
            </div>

            {/* Creds */}
            <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[#00ff9d]/50">
              auth_override:{" "}
              <code className="ml-1 border border-[#00ff9d]/40 bg-[#00ff9d]/5 px-2 py-1 text-[#00ff9d]">
                admin / password
              </code>
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-[#00ff9d]/20 bg-black/50 px-6 py-8 backdrop-blur-sm">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center border-x border-[#00ff9d]/10 px-3 text-center"
              >
                <div className="text-2xl font-bold text-[#00ff9d] neon-text-sm">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#00ff9d]/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-[#00ff9d]/60">
              // core_modules
            </div>
            <h2 className="mb-14 text-center text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Everything your team needs
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group relative border border-[#00ff9d]/30 bg-black/80 p-6 neon-hover"
                >
                  {/* Corner marks */}
                  <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#00ff9d]" />
                  <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#00ff9d]" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#00ff9d]" />
                  <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#00ff9d]" />

                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#00ff9d] bg-black text-2xl text-[#00ff9d] neon-text-sm neon-box">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00ff9d]/50">
                      mod.0{i + 1}
                    </span>
                  </div>

                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white neon-hover-text">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#00ff9d]/70">
                    {f.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#00ff9d]/60">
                    <span className="h-1.5 w-1.5 animate-pulse bg-[#00ff9d]" />
                    active
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-[#00ff9d]/20 px-6 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 border border-[#00ff9d]/30 bg-black/70 p-10 text-center neon-box">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#00ff9d]/60">
              // ready_to_deploy
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              Plug in. Ship signal.
              <br />
              <span className="text-[#00ff9d] neon-text">Skip the noise.</span>
            </h3>
            <Link
              href="/login"
              className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] neon-btn-solid"
            >
              &gt; establish_connection
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#00ff9d]/20 bg-black/70 px-6 py-8 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-[#00ff9d]/50 sm:flex-row">
            <div>
              <span className="text-[#00ff9d]">&gt;</span> nexus.demo_env //
              all systems nominal
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-[#00ff9d] hover:underline neon-text-sm"
              >
                establish_connection()
              </Link>
              <span className="inline-block h-3 w-2 bg-[#00ff9d] align-middle neon-blink" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
