// proxy.ts
// Minimal no-op proxy for W03. Runs on every request and just continues.

import { NextResponse } from 'next/server';

export default function proxy() {
  // Just let the request continue without changes
  return NextResponse.next();
}

export const config = {
  // Run proxy on *most* routes, skipping static assets & API
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
