import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function ServiceAppointmentsNewPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Service appointments · New"
        description="Approve or reject incoming service requests."
      />
      <SectionCard title="Assign technician modal" description="Call-to-action triggers modal listing available technicians.">
        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-600">
          Modal layout: technician table with skills, availability, and assign button.
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="New appointments queue"
        description="Includes approve, decline, and assign actions."
        columns={['Ticket', 'Customer', 'Vehicle', 'Services', 'Preferred time', 'Notes', 'Actions']}
      />
    </PageContainer>
  );
}
