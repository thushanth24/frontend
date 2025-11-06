import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { EmptyState } from '@/components/common/EmptyState';

export default function AvailabilityPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Technician availability"
        description="Configure shifts, breaks, and time-off approvals."
      />
      <SectionCard title="Shift rules">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Standard shift templates</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Break policies</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Capacity per slot</div>
        </div>
      </SectionCard>
      <EmptyState
        title="Availability grid"
        description="Visualise weekly availability and approve time-off requests."
        actionLabel="Launch planner"
      />
    </PageContainer>
  );
}
