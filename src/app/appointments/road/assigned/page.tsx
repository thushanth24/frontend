import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { EmptyState } from '@/components/common/EmptyState';

export default function RoadAppointmentsAssignedPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Road assist · Assigned"
        description="Monitor active roadside work with live map preview."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <DataTablePlaceholder
          title="Assigned roadside tickets"
          description="Shows technician, status, and last update."
          columns={['Ticket', 'Technician', 'Status', 'Updated', 'Customer', 'Actions']}
        />
        <EmptyState title="Live map" description="Surface technician location and route."
          actionLabel="Integrate map" />
      </div>
    </PageContainer>
  );
}
