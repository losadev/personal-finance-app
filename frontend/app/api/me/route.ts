import { cookies } from "next/headers";

export default async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value ?? "";

  const res = await fetch(`${process.env.NEST_API_URL}/me`, {
    headers: { cookie: `access_token=${token}` },
    cache: "no-store",
  });

  return new Response(await res.text(), {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") ?? "application/json",
    },
  });
}
