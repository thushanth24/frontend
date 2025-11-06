import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function AuditLogPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Audit log"
        description="Full change history across the platform."
      />
      <SectionCard title="Filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-4">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Actor</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Entity type</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Date range</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Action type</div>
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="Audit entries"
        description="Expose before and after snapshots for critical changes."
        columns={['Timestamp', 'Actor', 'Action', 'Entity', 'Before', 'After']}
      />
    </PageContainer>
  );
}
