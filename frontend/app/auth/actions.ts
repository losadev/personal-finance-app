// app/(auth)/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUpAction(data: {
  name: string;
  email: string;
  password: string;
}) {
  // Llama a tu backend
  const res = await fetch("http://localhost:3001/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Importante: no cachear esta petición
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // Lanza un error para gestionarlo en el cliente si quieres
    throw new Error("Signup failed");
  }

  // Invalidar páginas/segmentos que dependan de los datos del usuario
  revalidatePath("/");

  // Redirigir *desde el servidor*
  redirect("/");
}

export async function signInAction(data: { email: string; password: string }) {
  // Llama a tu backend
  const res = await fetch("http://localhost:3001/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Importante: no cachear esta petición
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // Lanza un error para gestionarlo en el cliente si quieres
    throw new Error("Signin failed");
  }

  // Invalidar páginas/segmentos que dependan de los datos del usuario
  revalidatePath("/");

  // Redirigir *desde el servidor*
  redirect("/");
}
