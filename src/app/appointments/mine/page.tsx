import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';

export default function MyAppointmentsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="My appointments"
        description="Technician-centric view of today, upcoming, and completed jobs."
      />
      <SectionCard title="Tabs">
        <div className="rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600">
          Tabs: Today · Upcoming · Completed
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="Appointment cards"
        description="Cards or table with start time, services, status, and actions."
        columns={['Ticket', 'Start', 'Customer', 'Vehicle', 'Services', 'Status', 'Actions']}
      />
    </PageContainer>
  );
}
