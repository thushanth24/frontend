'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToastStore } from '@/state/toast-store';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const pushToast = useToastStore((state) => state.push);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    pushToast({ title: 'Password reset sent', description: `Check ${email} for next steps.` });
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Reset your password</h1>
        <p className="text-sm text-slate-500">
          Enter the email address associated with your AutoOps account.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Email
          <Input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>
      <div className="text-center text-xs">
        <Link href="/login" className="text-primary-600 hover:underline">
          Return to login
        </Link>
      </div>
    </div>
  );
}
