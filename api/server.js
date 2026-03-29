import Fastify from 'fastify'
import cors from '@fastify/cors'
import Database from 'better-sqlite3'
import { randomBytes } from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const db = new Database(path.join(__dirname, 'demo.db'))

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    avatar TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active',
    priority TEXT DEFAULT 'medium',
    progress INTEGER DEFAULT 0,
    owner_id INTEGER,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (owner_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'todo',
    priority TEXT DEFAULT 'medium',
    project_id INTEGER,
    assignee_id INTEGER,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (assignee_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    action TEXT NOT NULL,
    resource_type TEXT,
    resource_id INTEGER,
    resource_name TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info',
    read INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`)

const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get()
if (userCount.count === 0) {
  const addUser = db.prepare('INSERT INTO users (username, password, name, role, avatar) VALUES (?, ?, ?, ?, ?)')
  addUser.run('admin', 'password', 'Alex Johnson', 'Administrator', 'AJ')
  addUser.run('jane', 'jane123', 'Jane Smith', 'Designer', 'JS')
  addUser.run('john', 'john123', 'John Doe', 'Developer', 'JD')
  addUser.run('sarah', 'sarah123', 'Sarah Connor', 'Engineer', 'SC')

  const addProject = db.prepare(`INSERT INTO projects (name, description, status, priority, progress, owner_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now', ?), datetime('now', ?))`)
  addProject.run('Website Redesign', 'Complete overhaul of the company website with a modern UI/UX', 'active', 'high', 75, 1, '-8 days', '-2 hours')
  addProject.run('Mobile App v2', 'Native mobile app for iOS and Android with offline support', 'active', 'high', 42, 2, '-14 days', '-1 day')
  addProject.run('API Platform', 'RESTful API gateway with rate limiting and analytics', 'active', 'medium', 91, 1, '-21 days', '-3 hours')
  addProject.run('Analytics Dashboard', 'Real-time data visualization and reporting suite', 'review', 'medium', 63, 3, '-10 days', '-30 minutes')
  addProject.run('Auth & SSO', 'OAuth 2.0 and SAML single sign-on implementation', 'completed', 'low', 100, 2, '-30 days', '-5 days')

  const addTask = db.prepare(`INSERT INTO tasks (title, status, priority, project_id, assignee_id, created_at) VALUES (?, ?, ?, ?, ?, datetime('now', ?))`)
  addTask.run('Design new landing page hero', 'in_progress', 'high', 1, 2, '-3 days')
  addTask.run('Implement dark mode toggle', 'todo', 'medium', 1, 4, '-2 days')
  addTask.run('Redesign mobile navigation', 'done', 'high', 1, 2, '-6 days')
  addTask.run('Accessibility audit and fixes', 'todo', 'medium', 1, 3, '-1 day')
  addTask.run('Setup iOS CI/CD pipeline', 'in_progress', 'high', 2, 4, '-5 days')
  addTask.run('Android push notifications', 'todo', 'medium', 2, 3, '-4 days')
  addTask.run('Offline data sync logic', 'todo', 'high', 2, 3, '-2 days')
  addTask.run('REST endpoint documentation', 'in_progress', 'medium', 3, 1, '-7 days')
  addTask.run('Rate limiting middleware', 'done', 'high', 3, 4, '-10 days')
  addTask.run('Webhook event handlers', 'todo', 'low', 3, 2, '-3 days')
  addTask.run('Build chart component library', 'in_progress', 'high', 4, 3, '-4 days')
  addTask.run('CSV and PDF export feature', 'todo', 'medium', 4, 1, '-2 days')
  addTask.run('Real-time updates via SSE', 'todo', 'high', 4, 4, '-1 day')
  addTask.run('Google OAuth integration', 'done', 'high', 5, 1, '-25 days')
  addTask.run('SAML SSO setup', 'done', 'medium', 5, 2, '-20 days')
  addTask.run('Session token management', 'done', 'high', 5, 4, '-15 days')

  const addActivity = db.prepare(`INSERT INTO activities (user_id, action, resource_type, resource_id, resource_name, created_at) VALUES (?, ?, ?, ?, ?, datetime('now', ?))`)
  addActivity.run(1, 'created project', 'project', 1, 'Website Redesign', '-8 days')
  addActivity.run(2, 'completed task', 'task', 3, 'Redesign mobile navigation', '-2 days')
  addActivity.run(4, 'started task', 'task', 5, 'Setup iOS CI/CD pipeline', '-2 days')
  addActivity.run(1, 'updated project', 'project', 3, 'API Platform', '-5 hours')
  addActivity.run(3, 'commented on task', 'task', 11, 'Build chart component library', '-4 hours')
  addActivity.run(2, 'started task', 'task', 1, 'Design new landing page hero', '-3 hours')
  addActivity.run(4, 'completed task', 'task', 9, 'Rate limiting middleware', '-2 hours')
  addActivity.run(3, 'updated project', 'project', 4, 'Analytics Dashboard', '-90 minutes')
  addActivity.run(1, 'created task', 'task', 13, 'Real-time updates via SSE', '-1 hour')
  addActivity.run(2, 'commented on project', 'project', 2, 'Mobile App v2', '-40 minutes')
  addActivity.run(3, 'started task', 'task', 11, 'Build chart component library', '-20 minutes')
  addActivity.run(1, 'moved project to review', 'project', 4, 'Analytics Dashboard', '-10 minutes')

  const addNotif = db.prepare(`INSERT INTO notifications (user_id, title, message, type, created_at) VALUES (?, ?, ?, ?, datetime('now', ?))`)
  addNotif.run(1, 'Task completed', 'Jane completed "Redesign mobile navigation"', 'success', '-2 days')
  addNotif.run(1, 'New comment', 'John commented on "Build chart component library"', 'info', '-4 hours')
  addNotif.run(1, 'Ready for review', 'Analytics Dashboard is ready for your review', 'warning', '-90 minutes')
  addNotif.run(1, 'Project milestone', 'Auth & SSO reached 100% — all tasks complete', 'success', '-5 days')
  addNotif.run(1, 'Overdue task', '"Android push notifications" is past its due date', 'error', '-30 minutes')
}

const fastify = Fastify({ logger: true })
await fastify.register(cors, { origin: true })

function getSessionUser(req) {
  const auth = req.headers['authorization'] ?? ''
  const token = auth.replace('Bearer ', '')
  if (!token) return null
  return db.prepare(`
    SELECT u.id, u.username, u.name, u.role, u.avatar
    FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = ?
  `).get(token) ?? null
}

// ── Auth ──────────────────────────────────────────────────────────────────────

fastify.post('/api/login', async (req, reply) => {
  const { username, password } = req.body ?? {}
  const user = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?').get(username, password)
  if (!user) return reply.status(401).send({ error: 'Invalid credentials' })

  const token = randomBytes(24).toString('hex')
  db.prepare('INSERT INTO sessions (token, user_id) VALUES (?, ?)').run(token, user.id)
  db.prepare(`INSERT INTO activities (user_id, action, resource_type, resource_name) VALUES (?, ?, ?, ?)`).run(user.id, 'signed in', 'session', 'the app')

  return { token, user: { id: user.id, username: user.username, name: user.name, role: user.role, avatar: user.avatar } }
})

fastify.post('/api/logout', async (req) => {
  const auth = req.headers['authorization'] ?? ''
  const token = auth.replace('Bearer ', '')
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token)
  return { ok: true }
})

fastify.get('/api/me', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })
  return user
})

// ── Stats ─────────────────────────────────────────────────────────────────────

fastify.get('/api/stats', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  const totalProjects = db.prepare('SELECT COUNT(*) as n FROM projects').get().n
  const activeProjects = db.prepare("SELECT COUNT(*) as n FROM projects WHERE status = 'active'").get().n
  const totalTasks = db.prepare('SELECT COUNT(*) as n FROM tasks').get().n
  const doneTasks = db.prepare("SELECT COUNT(*) as n FROM tasks WHERE status = 'done'").get().n
  const openTasks = db.prepare("SELECT COUNT(*) as n FROM tasks WHERE status != 'done'").get().n
  const totalMembers = db.prepare('SELECT COUNT(*) as n FROM users').get().n
  const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return { totalProjects, activeProjects, totalTasks, doneTasks, openTasks, totalMembers, completionRate }
})

// ── Projects ──────────────────────────────────────────────────────────────────

fastify.get('/api/projects', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  return db.prepare(`
    SELECT p.*,
      u.name AS owner_name,
      (SELECT COUNT(*) FROM tasks t WHERE t.project_id = p.id) AS task_count,
      (SELECT COUNT(*) FROM tasks t WHERE t.project_id = p.id AND t.status = 'done') AS done_count
    FROM projects p
    LEFT JOIN users u ON p.owner_id = u.id
    ORDER BY p.updated_at DESC
  `).all()
})

fastify.post('/api/projects', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  const { name, description, priority } = req.body ?? {}
  if (!name?.trim()) return reply.status(400).send({ error: 'Name is required' })

  const { lastInsertRowid } = db.prepare(
    'INSERT INTO projects (name, description, priority, owner_id) VALUES (?, ?, ?, ?)'
  ).run(name.trim(), description ?? '', priority ?? 'medium', user.id)

  const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(lastInsertRowid)
  db.prepare(`INSERT INTO activities (user_id, action, resource_type, resource_id, resource_name) VALUES (?, ?, ?, ?, ?)`).run(user.id, 'created project', 'project', project.id, project.name)

  return project
})

// ── Tasks ─────────────────────────────────────────────────────────────────────

fastify.get('/api/tasks', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  const { project_id } = req.query ?? {}
  const base = `
    SELECT t.*, u.name AS assignee_name, u.avatar AS assignee_avatar, p.name AS project_name
    FROM tasks t
    LEFT JOIN users u ON t.assignee_id = u.id
    LEFT JOIN projects p ON t.project_id = p.id
  `
  if (project_id) {
    return db.prepare(base + ' WHERE t.project_id = ? ORDER BY t.created_at DESC').all(project_id)
  }
  return db.prepare(base + ' ORDER BY t.created_at DESC').all()
})

fastify.post('/api/tasks', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  const { title, description, priority, project_id, assignee_id } = req.body ?? {}
  if (!title?.trim()) return reply.status(400).send({ error: 'Title is required' })

  const { lastInsertRowid } = db.prepare(
    'INSERT INTO tasks (title, description, priority, project_id, assignee_id) VALUES (?, ?, ?, ?, ?)'
  ).run(title.trim(), description ?? '', priority ?? 'medium', project_id ?? null, assignee_id ?? null)

  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(lastInsertRowid)
  db.prepare(`INSERT INTO activities (user_id, action, resource_type, resource_id, resource_name) VALUES (?, ?, ?, ?, ?)`).run(user.id, 'created task', 'task', task.id, task.title)

  return task
})

fastify.patch('/api/tasks/:id', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(req.params.id)
  if (!task) return reply.status(404).send({ error: 'Task not found' })

  const { status, title, priority } = req.body ?? {}
  db.prepare(`
    UPDATE tasks
    SET status = COALESCE(?, status),
        title = COALESCE(?, title),
        priority = COALESCE(?, priority),
        updated_at = datetime('now')
    WHERE id = ?
  `).run(status ?? null, title ?? null, priority ?? null, task.id)

  const action = status === 'done' ? 'completed task' : 'updated task'
  db.prepare(`INSERT INTO activities (user_id, action, resource_type, resource_id, resource_name) VALUES (?, ?, ?, ?, ?)`).run(user.id, action, 'task', task.id, task.title)

  return db.prepare('SELECT * FROM tasks WHERE id = ?').get(task.id)
})

// ── Activity ──────────────────────────────────────────────────────────────────

fastify.get('/api/activity', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  return db.prepare(`
    SELECT a.*, u.name AS user_name, u.avatar AS user_avatar
    FROM activities a
    JOIN users u ON a.user_id = u.id
    ORDER BY a.created_at DESC
    LIMIT 30
  `).all()
})

// ── Notifications ─────────────────────────────────────────────────────────────

fastify.get('/api/notifications', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  return db.prepare('SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC').all(user.id)
})

fastify.patch('/api/notifications/:id/read', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  db.prepare('UPDATE notifications SET read = 1 WHERE id = ? AND user_id = ?').run(req.params.id, user.id)
  return { ok: true }
})

fastify.patch('/api/notifications/read-all', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  db.prepare('UPDATE notifications SET read = 1 WHERE user_id = ?').run(user.id)
  return { ok: true }
})

// ── Members ───────────────────────────────────────────────────────────────────

fastify.get('/api/members', async (req, reply) => {
  const user = getSessionUser(req)
  if (!user) return reply.status(401).send({ error: 'Unauthorized' })

  return db.prepare('SELECT id, username, name, role, avatar, created_at FROM users ORDER BY name').all()
})

await fastify.listen({ port: 3001, host: '0.0.0.0' })
