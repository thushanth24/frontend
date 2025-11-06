import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { EmptyState } from '@/components/common/EmptyState';

export default function ManagerDashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Manager dashboard"
        description="Track approvals, assignments, and team capacity across workshops."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Create announcement</button>}
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Today&apos;s counts">
          <dl className="grid gap-4 text-sm md:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">New service requests</dt>
              <dd className="text-2xl font-semibold text-slate-900">8</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Road assists</dt>
              <dd className="text-2xl font-semibold text-slate-900">3</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Pending invoices</dt>
              <dd className="text-2xl font-semibold text-slate-900">5</dd>
            </div>
          </dl>
        </SectionCard>
        <SectionCard title="Technician load" description="Balanced view per technician.">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span>Anna Patel</span>
              <span className="text-emerald-600">Available 15:00</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Jon Fernandez</span>
              <span className="text-amber-600">Busy · 5 jobs</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Riley Chen</span>
              <span className="text-sky-600">Roadside en-route</span>
            </li>
          </ul>
        </SectionCard>
        <SectionCard title="Active roadside map">
          <EmptyState title="Map preview" description="Connect a map provider to display live roadside jobs." />
        </SectionCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <DataTablePlaceholder
          title="Approval queue"
          description="Service appointments waiting on your sign-off."
          columns={['Ticket', 'Customer', 'Vehicle', 'Requested services', 'Preferred time', 'Action']}
        />
        <DataTablePlaceholder
          title="Roadside pipeline"
          description="Drag-and-drop kanban board placeholder."
          columns={['Status', 'Tickets', 'Technicians', 'ETAs']}
        />
      </div>
    </PageContainer>
  );
}
