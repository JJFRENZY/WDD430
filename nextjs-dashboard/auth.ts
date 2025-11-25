// auth.ts
// Temporary stub auth for W03 assignment.
// This avoids bundling next-auth (and its Node-only dependencies) during build.

export async function auth() {
  // Pretend no user is logged in for now.
  return null;
}

// Allow any arguments so existing calls like signIn('credentials', {...}) don't error.
export async function signIn(..._args: any[]) {
  // No-op stub for signIn.
  return;
}

// Allow options like { redirectTo: '/' } so SideNav can call signOut({ redirectTo: '/' }).
export async function signOut(..._args: any[]) {
  // No-op stub for signOut.
  return;
}
