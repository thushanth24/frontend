import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function BranchesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Branches"
        description="Create, edit, and deactivate service branches."
        actions={<button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">New branch</button>}
      />
      <SectionCard title="Branch filters">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Search name/code/city</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Status dropdown</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Manager assigned filter</div>
        </div>
      </SectionCard>
      <DataTablePlaceholder
        title="Branch roster"
        description="Each branch row surfaces contact details, manager, and service coverage."
        columns={['Name', 'Code', 'City', 'Address', 'Phone', 'Manager', 'Tech count', 'Status', 'Actions']}
      />
      <SectionCard title="Create / Update branch" description="Form layout reference">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Name & code</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Contact (phone/email)</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Address fields</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Working hours</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Services offered multi-select</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Manager assignment lookup</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Logo upload</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Status switch</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
