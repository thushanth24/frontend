'use client';

import Link from 'next/link';
import { useSession } from '@/state/session-store';
import { Button } from '@/components/ui/Button';

export function AppHeader() {
  const session = useSession();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur">
      <div className="flex items-center gap-3 text-sm text-slate-600">
        <Link href="/search" className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200">
          Global search
        </Link>
        <Link href="/notifications" className="text-xs font-medium text-primary-600 hover:underline">
          Notifications
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-500">
          Signed in as{' '}
          <strong className="text-slate-800">{session.user?.name ?? 'Guest'}</strong>
        </span>
        <Button variant="secondary" size="sm">
          Sign out
        </Button>
      </div>
    </header>
  );
}
