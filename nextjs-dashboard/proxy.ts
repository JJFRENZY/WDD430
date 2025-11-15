// proxy.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Run proxy on *most* routes, skipping static assets & API
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
