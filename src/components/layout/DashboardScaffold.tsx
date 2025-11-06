import { ReactNode } from 'react';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { AppHeader } from '@/components/layout/AppHeader';

export function DashboardScaffold({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-slate-100">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 bg-slate-50">{children}</main>
      </div>
    </div>
  );
}
