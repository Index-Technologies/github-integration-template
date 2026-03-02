interface Post {
  id: number;
  title: string;
  body: string;
}

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    { cache: "no-store" }
  );
  const posts: Post[] = await res.json();
  const fetchedAt = new Date().toLocaleTimeString();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Dashboard
        </h1>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          Server-rendered at {fetchedAt}
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-sm font-semibold capitalize text-black dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
