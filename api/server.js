import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true })

await fastify.register(cors, { origin: 'http://localhost:8080' })

const FAKE_USERS = [
  { username: 'admin', password: 'password', name: 'Admin User', role: 'Administrator' },
  { username: 'jane', password: 'jane123', name: 'Jane Smith', role: 'Editor' },
]

// In a real app this would be a signed JWT or session. Here it's just a map.
const activeSessions = new Map()

fastify.post('/api/login', async (req, reply) => {
  const { username, password } = req.body ?? {}
  const user = FAKE_USERS.find(u => u.username === username && u.password === password)
  if (!user) {
    return reply.status(401).send({ error: 'Invalid credentials' })
  }
  const token = `fake-token-${username}-${Date.now()}`
  activeSessions.set(token, { username: user.username, name: user.name, role: user.role })
  return { token, user: { username: user.username, name: user.name, role: user.role } }
})

fastify.post('/api/logout', async (req, reply) => {
  const auth = req.headers['authorization'] ?? ''
  const token = auth.replace('Bearer ', '')
  activeSessions.delete(token)
  return { ok: true }
})

fastify.get('/api/me', async (req, reply) => {
  const auth = req.headers['authorization'] ?? ''
  const token = auth.replace('Bearer ', '')
  const user = activeSessions.get(token)
  if (!user) {
    return reply.status(401).send({ error: 'Unauthorized' })
  }
  return user
})

await fastify.listen({ port: 3001, host: '0.0.0.0' })
