import { NextRequest, NextResponse } from 'next/server'

const API = 'http://127.0.0.1:3001'

async function proxy(req: NextRequest, params: Promise<{ path: string[] }>) {
  const { path } = await params
  const url = `${API}/api/${path.join('/')}${req.nextUrl.search}`

  const headers = new Headers()
  const auth = req.headers.get('authorization')
  const ct = req.headers.get('content-type')
  if (auth) headers.set('authorization', auth)
  if (ct) headers.set('content-type', ct)

  const body = req.method !== 'GET' && req.method !== 'HEAD' ? await req.text() : undefined
  const res = await fetch(url, { method: req.method, headers, body })
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
