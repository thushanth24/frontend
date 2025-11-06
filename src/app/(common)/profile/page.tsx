'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useSession } from '@/state/session-store';

export default function ProfilePage() {
  const session = useSession();

  return (
    <PageContainer>
      <PageHeader
        title="Profile & preferences"
        description="Update contact details, passwords, and notification channels."
      />
      <form className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Contact details">
          <div className="space-y-4 text-sm">
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Full name</span>
              <Input defaultValue={session.user?.name ?? ''} placeholder="Your name" />
            </label>
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</span>
              <Input type="email" defaultValue="avery.johnson@autoops.test" />
            </label>
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Phone</span>
              <Input defaultValue="212-555-0123" />
            </label>
          </div>
        </SectionCard>
        <SectionCard title="Password">
          <div className="space-y-4 text-sm">
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Current password</span>
              <Input type="password" placeholder="••••••" />
            </label>
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">New password</span>
              <Input type="password" placeholder="New password" />
            </label>
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Confirm new password</span>
              <Input type="password" placeholder="Repeat new password" />
            </label>
          </div>
        </SectionCard>
        <SectionCard title="Notifications" description="Control how you receive updates.">
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked /> Email alerts
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> SMS updates
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked /> In-app notifications
            </label>
          </div>
        </SectionCard>
        <SectionCard title="Default branch">
          <p className="text-sm text-slate-600">Set the default branch used for dashboards and reporting.</p>
          <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 p-4 text-sm">
            <div>
              <p className="font-medium text-slate-900">Midtown Service Hub</p>
              <p className="text-xs text-slate-500">NYC01 · New York</p>
            </div>
            <Button variant="secondary">Change</Button>
          </div>
        </SectionCard>
        <div className="lg:col-span-2 text-right">
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </PageContainer>
  );
}
