import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { StatusChip } from '@/components/ui/StatusChip';

export default function TechnicianDashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Technician daily overview"
        description="Stay on top of your assignments, track progress, and update job statuses."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Next appointment" description="Work order snapshot">
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <p className="text-slate-900">SRV-1002 · Brake Pad Replacement</p>
              <StatusChip status="assigned" label="Assigned" />
            </div>
            <p>Start time: 13:00 · Bay 4</p>
            <p>Customer: Nia Patel · (973) 555-2211</p>
            <p>Vehicle: 2019 Ford F-150 · TRK-8841</p>
            <div className="flex gap-3">
              <button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Start job</button>
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">View work order</button>
            </div>
          </div>
        </SectionCard>
        <SectionCard title="Quick stats">
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center justify-between">
              <span>Assigned today</span>
              <span className="font-semibold text-slate-900">3</span>
            </li>
            <li className="flex items-center justify-between">
              <span>In progress</span>
              <span className="font-semibold text-amber-600">1</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Completed</span>
              <span className="font-semibold text-emerald-600">2</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Roadside pending</span>
              <span className="font-semibold text-sky-600">1</span>
            </li>
          </ul>
        </SectionCard>
      </div>
      <SectionCard title="Today&apos;s timeline" description="Visual placeholder for schedule view" >
        <div className="flex flex-col gap-4 rounded-lg border border-dashed border-slate-200 p-6 text-sm text-slate-500">
          <p>09:00 · SRV-0998 · Oil change · Completed</p>
          <p>11:30 · SRV-1001 · Diagnostics · In progress</p>
          <p>13:00 · SRV-1002 · Brake Pad Replacement · Assigned</p>
          <p>15:30 · RD-7001 · Road assist · En-route</p>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
