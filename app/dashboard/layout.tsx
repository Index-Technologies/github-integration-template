import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <aside className="w-56 border-r border-black/5 bg-white px-4 py-8 dark:border-white/10 dark:bg-zinc-950">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-black dark:bg-zinc-800 dark:text-zinc-50"
          >
            Dashboard
          </Link>
          <Link
            href="/todos"
            className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            Todos
          </Link>
        </nav>
      </aside>
      <main className="flex-1 px-8 py-8">{children}</main>
    </div>
  );
}
