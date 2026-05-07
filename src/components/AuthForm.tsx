"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {
  mode: "login" | "signup";
}

export const AuthForm = ({ mode }: Props) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSignup = mode === "signup";
  let title = "Log in";
  let subtitle = "Use the demo account to explore MyApp with seeded product data.";
  let action = "/api/auth/login";
  let button = "Log in to MyApp";
  let switchText = "Need an account?";
  let switchLink = "/signup";
  let switchLabel = "Sign up";

  if (isSignup) {
    title = "Create account";
    subtitle = "Create a local demo account and start with the shared MyApp workspace.";
    action = "/api/auth/signup";
    button = "Create account";
    switchText = "Already have an account?";
    switchLink = "/login";
    switchLabel = "Log in";
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(event.currentTarget);
    const response = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    setLoading(false);

    if (!response.ok) {
      const body = (await response.json()) as { error?: string };
      setError(body.error ?? "Something went wrong.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div className="brand">MyApp</div>
        <div>
          <h1>Run product work from one calm workspace.</h1>
          <p>
            Track projects, triage tasks, share docs, and manage the team with a
            fake but realistic product management app.
          </p>
        </div>
      </section>
      <section className="auth-panel">
        <div className="auth-card">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <form className="form" onSubmit={submit}>
            {isSignup && (
              <label className="field">
                Name
                <input name="name" autoComplete="name" required />
              </label>
            )}
            <label className="field">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                defaultValue="demo@myapp.local"
                required
              />
            </label>
            <label className="field">
              Password
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                defaultValue="password"
                required
              />
            </label>
            {error && <div className="error">{error}</div>}
            <button className="button" disabled={loading} type="submit">
              {button}
            </button>
          </form>
          <p className="hint">
            Demo account: <strong>demo@myapp.local</strong> /{" "}
            <strong>password</strong>
          </p>
          <p className="hint">
            {switchText} <Link href={switchLink}>{switchLabel}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
