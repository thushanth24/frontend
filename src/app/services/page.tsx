import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function ServicesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Services catalogue"
        description="Manage maintenance, repair, and detailing services."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Add service</button>}
      />
      <SectionCard title="Filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Search name/code</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Category</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Status</div>
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="Service listings"
        description="Displays code, duration, pricing, and status."
        columns={['Name', 'Code', 'Category', 'Duration (min)', 'Base labor cost', 'Status', 'Actions']}
      />
      <SectionCard title="Service form" description="Include description, consumables, and linked checklists.">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Name & code</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Category</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Description</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Standard duration</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Base labor cost</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Attach checklists</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
