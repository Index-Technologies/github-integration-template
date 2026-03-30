import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const API = 'http://127.0.0.1:3001'

const SKIP_HEADERS = new Set(['host', 'connection', 'transfer-encoding', 'keep-alive'])

async function proxy(req: NextRequest, params: Promise<{ path: string[] }>) {
  const { path } = await params
  const url = `${API}/api/${path.join('/')}${req.nextUrl.search}`

  const headers = new Headers()
  req.headers.forEach((value, key) => {
    if (!SKIP_HEADERS.has(key.toLowerCase())) {
      headers.set(key, value)
    }
  })

  const body = req.method !== 'GET' && req.method !== 'HEAD' ? await req.text() : undefined

  const res = await fetch(url, { method: req.method, headers, body, cache: 'no-store' })
  const data = await res.text()

  return new NextResponse(data, {
    status: res.status,
    headers: { 'content-type': res.headers.get('content-type') ?? 'application/json' },
  })
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, params)
}
export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, params)
}
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, params)
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxy(req, params)
}
