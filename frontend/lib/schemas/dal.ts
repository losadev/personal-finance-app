import 'server-only';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const verifySession = cache(async () => {
  const token = (await cookies()).get('access_token')?.value;
  if (!token) redirect('/auth/signin');

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/me`, { cache: 'no-store' });
  if (!res.ok) redirect('/auth/signin');

  const user = await res.json(); // lo que devuelva Nest: { id, email, roles, ... }
  return { isAuth: true, user };
});
