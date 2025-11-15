// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// In-memory single user (no DB)
const users: User[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'user@nextmail.com',
    password: '123456', // plain for simplicity
  },
];

async function getUser(email: string): Promise<User | undefined> {
  return users.find((u) => u.email === email);
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log('Invalid credentials shape');
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) {
          console.log('User not found');
          return null;
        }

        // Simple password check (no bcrypt)
        if (user.password !== password) {
          console.log('Password mismatch');
          return null;
        }

        // Don't return password to the client/session
        const { password: _pw, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],
});
