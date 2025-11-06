import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';

export default function NotificationsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Notifications"
        description="Filter notifications by type, date, and read state."
      />
      <SectionCard title="Filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Type · All / Alerts / Tasks / System</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Date range picker placeholder</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Read status toggle</div>
        </div>
      </SectionCard>
      <div className="mt-6">
        <DataTablePlaceholder
          title="Notification feed"
          description="Rendered from the mock data store."
          columns={['Created', 'Summary', 'Type', 'Source', 'Status']}
        />
      </div>
    </PageContainer>
  );
}
