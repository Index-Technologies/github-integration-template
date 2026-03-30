"use client"

import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

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

export default function HomePage() {
  const { openAuthModal } = useAuth();
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
              N
            </div>
            <span className="text-sm font-semibold text-zinc-900">Nexus</span>
          </div>
          <button
            onClick={() => openAuthModal()}
            className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Sign in
          </button>
        </div>
      </header>

      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Demo app — SQLite-backed, no Docker needed
          </div>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-zinc-900">
            Your projects,
            <br />
            <span className="text-indigo-600">finally organized</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-zinc-500">
            Nexus is a lightweight project management tool for small teams. Track
            tasks, ship faster, and keep everyone on the same page.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => openAuthModal()}
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Get started →
            </button>
            <Link
              href="/dashboard"
              className="rounded-xl border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              View dashboard
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-400">
            Sign in with{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono">
              admin / password
            </code>
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-zinc-900">
            Everything your team needs
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-600">
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

      <footer className="border-t border-zinc-100 px-6 py-8 text-center">
        <p className="text-xs text-zinc-400">
          Nexus — a demo application.{" "}
          <button
            onClick={() => openAuthModal()}
            className="text-indigo-600 hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            Sign in to explore
          </button>
        </p>
      </footer>
    </div>
  );
}
