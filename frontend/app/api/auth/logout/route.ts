// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // llama a Nest (servidor a servidor)
  await fetch("http://localhost:3001/api/auth/logout", { method: "POST" });

  // borra también en el dominio del front (por si la cookie la estabas poniendo aquí)
  const res = NextResponse.json({ ok: true });

  res.cookies.set("access_token", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true en prod con HTTPS
    expires: new Date(0),
    path: "/", // <-- igual que al setear
  });

  return res;
}
