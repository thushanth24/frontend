import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';

export default function ServiceAppointmentsAssignedPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Service appointments · Assigned"
        description="Track in-progress work and reassign when necessary."
      />
      <DataTablePlaceholder
        title="Assigned appointments"
        description="Shows technician, status, ETA, and reassign action."
        columns={['Ticket', 'Customer', 'Vehicle', 'Services', 'Technician', 'Status', 'ETA', 'Actions']}
      />
    </PageContainer>
  );
}
