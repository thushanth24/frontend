import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function TechniciansPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Technicians"
        description="View status, skills, load, and profiles."
      />
      <DataTablePlaceholder
        title="Technician roster"
        description="Includes skill tags, status chips, and quick availability editing."
        columns={['Photo', 'Name', 'Skills', 'Status', 'Today load', 'Next available', 'Actions']}
      />
      <SectionCard title="Technician profile" description="Deep dive modal layout">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Skills & certifications</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Average completion time</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Availability override</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Recent feedback</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
