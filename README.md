# github-integration-template

A starter template for the **Alloy Agent** product. It provides a working full-stack demo app with auth, a homepage, dashboard, projects, and activity feed — intended as a base to extend.

## Structure

```
api/          Fastify REST API (Node.js) with SQLite persistence
site/         Next.js frontend (TypeScript + Tailwind CSS)
package.json  root workspace — run both together from here
```

## How it works

- **api** runs on port `3001`. Backed by SQLite (`api/demo.db`, auto-created on first run). Exposes endpoints for auth, projects, tasks, activity, notifications, and team members. Sessions are token-based and stored in the database.
- **site** runs on port `8080` via Next.js. Three main sections: a public landing page (`/`), a login page (`/login`), and a protected dashboard (`/dashboard`) with overview, projects, and activity views.
- Auth state is stored in `localStorage` (token + user). Dashboard pages fetch live data from the API.

## Getting started

Install dependencies in each package, then run both from the root:

```bash
cd api && npm install
cd ../site && npm install
cd .. && npm run both
```

App is at `http://localhost:8080`. Default credentials: `admin` / `password`.

Other demo accounts: `jane` / `jane123` (Designer), `john` / `john123` (Developer).

## Environment setup

### Config

Alloy Agent environment config for this repo:

```json
{
  "homeUrl": "/",
  "services": [
    {
      "name": "site",
      "start": "cd site && npm run dev",
      "install": "cd site && npm install"
    },
    {
      "name": "api",
      "start": "cd api && npm run dev",
      "install": "cd api && npm install"
    }
  ]
}
```

---

🎲 Fun fact: Octopuses have three hearts and blue blood!
