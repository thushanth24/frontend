import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/Toaster';
import { AppProviders } from '@/state/providers';

export const metadata: Metadata = {
  title: 'AutoOps – Workshop Operations',
  description: 'Role-based automobile repair management UI.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-100">
        <AppProviders>
          <div className="flex min-h-screen">
            {children}
          </div>
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
