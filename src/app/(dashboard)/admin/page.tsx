import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';

export default function AdminDashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Admin overview"
        description="High-level health of branches, employees, and product catalogues."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Create quick action</button>}
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Key metrics" description="Snapshots generated from mock data to inform your next action.">
          <ul className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            <li className="rounded-lg bg-primary-50 p-4">
              <p className="text-xs uppercase tracking-wide text-primary-700">Active employees</p>
              <p className="mt-1 text-2xl font-semibold text-primary-900">38</p>
              <p className="text-xs text-primary-600">+6 vs last month</p>
            </li>
            <li className="rounded-lg bg-emerald-50 p-4">
              <p className="text-xs uppercase tracking-wide text-emerald-700">Branches</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-900">5</p>
              <p className="text-xs text-emerald-600">3 operating today</p>
            </li>
            <li className="rounded-lg bg-indigo-50 p-4">
              <p className="text-xs uppercase tracking-wide text-indigo-700">Catalog items</p>
              <p className="mt-1 text-2xl font-semibold text-indigo-900">86</p>
              <p className="text-xs text-indigo-600">Services & products</p>
            </li>
            <li className="rounded-lg bg-amber-50 p-4">
              <p className="text-xs uppercase tracking-wide text-amber-700">Pending approvals</p>
              <p className="mt-1 text-2xl font-semibold text-amber-900">12</p>
              <p className="text-xs text-amber-600">Awaiting manager review</p>
            </li>
          </ul>
        </SectionCard>
        <SectionCard title="Quick actions">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span>Invite new employee</span>
              <button className="text-primary-600">Start</button>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span>Create branch</span>
              <button className="text-primary-600">Start</button>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
              <span>Upload product spreadsheet</span>
              <button className="text-primary-600">Upload</button>
            </li>
          </ul>
        </SectionCard>
      </div>
      <div className="mt-6 space-y-6">
        <DataTablePlaceholder
          title="Branch performance"
          description="Simulated summary by branch across the past 30 days."
          columns={['Branch', 'Appointments', 'Revenue', 'Utilisation', 'Net Promoter Score']}
        />
        <DataTablePlaceholder
          title="Recent audit log entries"
          description="High fidelity log streamed from the mock server."
          columns={['Timestamp', 'Actor', 'Action', 'Entity', 'Before', 'After']}
        />
      </div>
    </PageContainer>
  );
}
