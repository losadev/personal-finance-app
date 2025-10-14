import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const r = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await r.json();
  if (!r.ok) {
    return NextResponse.json(data, { status: r.status });
  }

  const res = NextResponse.json(data);
  res.cookies.set('access_token', data.access_token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false, 
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return res;
}
