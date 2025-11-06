'use client';

import { ReactNode } from 'react';
import { SessionProvider } from '@/state/session-store';

export function AppProviders({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
