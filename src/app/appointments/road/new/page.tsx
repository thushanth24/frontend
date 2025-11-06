import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';
import { EmptyState } from '@/components/common/EmptyState';

export default function RoadAppointmentsNewPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Road assist · New"
        description="Assign mobile technicians to new roadside jobs."
      />
      <SectionCard title="Technician picker" description="Choose from available roadside technicians.">
        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-600">List with distance/ETA</div>
      </SectionCard>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <DataTablePlaceholder
          title="New roadside jobs"
          description="Includes location, issue, customer, and assign action."
          columns={['Ticket', 'Customer', 'Vehicle', 'Issue', 'Location', 'Requested', 'Actions']}
        />
        <EmptyState title="Mini map" description="Embed map preview for the selected job." />
      </div>
    </PageContainer>
  );
}
