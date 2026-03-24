# github-integration-template

A starter template for the **Alloy Agent** product. It provides a working full-stack app with fake auth, a homepage, and a dashboard — intended as a base to extend rather than a finished product.

## Structure

```
api/        Fastify REST API (Node.js)
site/       Vite + React frontend
package.json  root workspace — run both together from here
```

## How it works

- **api** runs on port `3001`. It exposes three endpoints: `POST /api/login`, `POST /api/logout`, and `GET /api/me`. Auth is fake — credentials are hardcoded, and sessions are kept in memory.
- **site** runs on port `5173` via Vite. It proxies `/api` requests to the API. The frontend is a React SPA with three routes: `/` (homepage), `/login`, and `/dashboard` (protected).
- Auth state is stored in `localStorage` (token + user). The dashboard includes a sidebar, header, content area, and footer.

## Getting started

Install dependencies in each package, then run both from the root:

```bash
cd api && npm install
cd ../site && npm install
cd .. && npm run both
```

App is at `http://localhost:8080`. Default credentials: `admin` / `password`.

## Environment setup

### Config

Alloy Agent environment config for this repo:

```json
{
  "homeUrl": "/",
  "services": [
    {
      "name": "site",
      "start": "cd site && npm run dev -- --host",
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
