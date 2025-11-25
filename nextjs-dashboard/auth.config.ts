// auth.config.ts
// Simplified auth config for W03.
// We are not using next-auth in this assignment, so this is just a plain object.

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        // Block access to /dashboard/* if not logged in
        if (isLoggedIn) return true;
        return false;
      }

      // If logged in and trying to hit a non-dashboard page (e.g. /),
      // send them to /dashboard instead
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      // Allow access to public routes (like /login, /)
      return true;
    },
  },
};
