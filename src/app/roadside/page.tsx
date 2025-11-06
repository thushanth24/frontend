import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';
import { SectionCard } from '@/components/layout/SectionCard';

export default function RoadsidePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Roadside dashboard"
        description="Mobile-first view of active roadside jobs."
      />
      <SectionCard title="Active jobs">
        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-600">
          Job cards with status chips and quick actions (En-route, On-site, Completed).
        </div>
      </SectionCard>
      <EmptyState
        title="Map + navigation"
        description="Embed map with current location and destination."
        actionLabel="Open in maps"
      />
    </PageContainer>
  );
}
