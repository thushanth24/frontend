import { ReactNode } from 'react';
import { DashboardScaffold } from '@/components/layout/DashboardScaffold';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardScaffold>{children}</DashboardScaffold>;
}
