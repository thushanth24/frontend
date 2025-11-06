import { ReactNode } from 'react';
import { DashboardScaffold } from '@/components/layout/DashboardScaffold';

export default function CommonLayout({ children }: { children: ReactNode }) {
  return <DashboardScaffold>{children}</DashboardScaffold>;
}
