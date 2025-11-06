'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Role } from '@/config/roles';

export interface SessionBranch {
  id: string;
  name: string;
}

export interface SessionState {
  user?: {
    id: string;
    name: string;
    role: Role;
    branches: SessionBranch[];
  };
  activeBranch?: SessionBranch;
}

interface SessionContextValue extends SessionState {
  setSession: (session: SessionState) => void;
  setActiveBranch: (branch: SessionBranch | undefined) => void;
}

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionState>({});
  const value = useMemo(
    () => ({
      ...session,
      setSession,
      setActiveBranch: (branch: SessionBranch | undefined) =>
        setSession((prev) => ({ ...prev, activeBranch: branch }))
    }),
    [session]
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return ctx;
}
