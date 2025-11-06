import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function ProductsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Products & parts"
        description="Monitor inventory, pricing, and suppliers."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Add product</button>}
      />
      <SectionCard title="Filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-4">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Search SKU/name</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Category</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Low stock toggle</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Status</div>
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="Inventory table"
        description="Displays per-branch stock with sortable columns."
        columns={['SKU', 'Name', 'Category', 'Unit', 'Cost', 'Sell price', 'Stock by branch', 'Reorder level', 'Status', 'Actions']}
      />
      <SectionCard title="Product form" description="Capture pricing, inventory, and supplier info.">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Name & SKU</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Category & unit</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Cost & sell price</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Tax percentage</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Stock per branch grid</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Supplier selection</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
