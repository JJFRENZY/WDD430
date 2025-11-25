// app/ui/login-form.tsx
'use client';

import { useFormState } from 'react-dom';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';

export default function LoginForm() {
  // authenticate returns either an error string or undefined
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <div className="relative mt-1">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-sm"
            placeholder="user@nextmail.com"
          />
          <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <div className="relative mt-1">
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 text-sm"
            placeholder="Enter your password"
          />
          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {state && (
        <p className="text-sm text-red-600">
          {state}
        </p>
      )}

      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}
