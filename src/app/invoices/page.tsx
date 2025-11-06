import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function InvoicesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Invoices"
        description="Review, send, and manage payment status for completed work."
      />
      <DataTablePlaceholder
        title="Invoices"
        description="Columns include status, totals, and send actions."
        columns={['Invoice #', 'Customer', 'Vehicle', 'Amount', 'Status', 'Created', 'Actions']}
      />
      <SectionCard title="Invoice detail" description="Inline detail view for selected invoice.">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Line items list</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Totals + tax</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Send email dialog</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Payment history</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
