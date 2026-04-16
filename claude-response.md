I investigated the codebase and set up the Alloy workspace prototyping configuration. Here's what I found and did:

**Codebase structure:**
- `site/` — Next.js frontend running on port **8080**
- `api/` — Fastify REST API (Node.js + SQLite) running on port **3001**
- Root `package.json` uses `concurrently` to run both services together

**What I created:**
- `docker-compose.alloy.yaml` with two services (`site` and `api`) and the `x-alloy` metadata block

**Key details:**
- **install-script** installs dependencies for root, api, and site packages
- **frontend-port** is `8080` (matches the Next.js dev server port directly, so no proxy is needed)
- **home-url** is `/` (the public landing page)
- The site service depends on the api service so the backend starts first
- Both services bind-mount the workspace and use the `node:22` image

I validated that the compose file parses correctly and that both services start up and serve the frontend successfully on port 8080.
