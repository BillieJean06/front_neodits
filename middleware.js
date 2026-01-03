import { NextResponse } from "next/server"

export function middleware(req) {
  const token = req.cookies.get("synapse_token")?.value

  const protectedRoutes = ["/dashboard", "/admin"]

  if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}
