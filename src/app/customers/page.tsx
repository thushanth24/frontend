import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function CustomersPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Customers"
        description="Manage customer directory and view service history."
      />
      <DataTablePlaceholder
        title="Customer list"
        description="Search, filter, and view outstanding balances."
        columns={['Name', 'Phone', 'Email', 'Visits', 'Outstanding', 'Actions']}
      />
      <SectionCard title="Customer detail" description="Tabs for vehicles, appointments, invoices, and communication.">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Profile summary</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Vehicles tab</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Appointments timeline</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Invoices tab</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
