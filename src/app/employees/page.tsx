import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function EmployeesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Employees"
        description="Manage the full staff directory, including admins, managers, and technicians."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">New employee</button>}
      />
      <SectionCard title="Filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-4">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Search name/email/phone</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Role filter</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Branch multi-select</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Status toggle</div>
        </div>
      </SectionCard>
      <div className="mt-6 space-y-6">
        <DataTablePlaceholder
          title="Employee directory"
          description="Sortable, filterable table with bulk actions."
          columns={['Photo', 'Name', 'Role', 'Email', 'Phone', 'Status', 'Branches', 'Created', 'Actions']}
        />
        <SectionCard title="Employee form" description="Stubbed form showcasing required fields.">
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-lg border border-dashed border-slate-300 p-4">First / Last name</div>
            <div className="rounded-lg border border-dashed border-slate-300 p-4">Email & phone</div>
            <div className="rounded-lg border border-dashed border-slate-300 p-4">Role selection</div>
            <div className="rounded-lg border border-dashed border-slate-300 p-4">Branch assignment (multi)</div>
            <div className="rounded-lg border border-dashed border-slate-300 p-4">Employment ID & hire date</div>
            <div className="rounded-lg border border-dashed border-slate-300 p-4">Status + force reset</div>
          </div>
        </SectionCard>
      </div>
    </PageContainer>
  );
}
