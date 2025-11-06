'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToastStore } from '@/state/toast-store';
import { login } from '@/services/auth.service';
import { useSession } from '@/state/session-store';

export default function LoginPage() {
  const [email, setEmail] = useState('avery.johnson@autoops.test');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const pushToast = useToastStore((state) => state.push);
  const { setSession } = useSession();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await login({ email, password });
      if ('error' in response) {
        pushToast({ variant: 'error', title: 'Login failed', description: response.error.message });
        return;
      }
      pushToast({ title: 'Welcome back', description: `Signed in as ${response.user.name}` });
      setSession({
        user: {
          id: response.user.id,
          name: response.user.name,
          role: response.user.role,
          branches: response.user.branches
        }
      });
    } catch (error: any) {
      pushToast({ variant: 'error', title: 'Unexpected error', description: error?.error?.message ?? 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Sign in to AutoOps</h1>
        <p className="text-sm text-slate-500">Use any email from the mock dataset to preview role-based dashboards.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Email
          <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Password
          <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link href="/forgot-password" className="text-primary-600 hover:underline">
          Forgot password?
        </Link>
        <span>Mock credentials only</span>
      </div>
    </div>
  );
}
