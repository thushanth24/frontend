import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Input } from '@/components/ui/Input';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';

export default function GlobalSearchPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Global search"
        description="Search across customers, vehicles, appointments, invoices, and products in one place."
      />
      <div className="mt-6 space-y-4">
        <Input placeholder="Search by name, ticket number, VIN, invoice, or SKU" />
        <DataTablePlaceholder
          title="Search results"
          description="Mock results demonstrate the combined entity layout."
          columns={['Type', 'Primary', 'Secondary', 'Branch', 'Updated']}
        />
      </div>
    </PageContainer>
  );
}
