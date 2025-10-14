'use client';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  const onLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' }); // MISMO DOMINIO
    router.replace('/auth/signin');
  };
  return <button className='text-white' onClick={onLogout}>Logout</button>;
}
