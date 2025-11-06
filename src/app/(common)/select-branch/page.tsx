'use client';

import { useSession } from '@/state/session-store';
import branches from '@/mocks/data/branches.json';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';

export default function SelectBranchPage() {
  const { setActiveBranch } = useSession();

  return (
    <PageContainer>
      <PageHeader
        title="Choose your branch"
        description="Select a primary branch to personalise dashboards and filters."
      />
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {branches.map((branch) => (
          <div key={branch.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{branch.name}</h2>
              <p className="text-sm text-slate-500">{branch.address.street}</p>
              <p className="text-xs text-slate-400">{branch.address.city} · {branch.code}</p>
            </div>
            <dl className="grid gap-2 text-xs text-slate-500">
              <div className="flex justify-between">
                <dt>Phone</dt>
                <dd>{branch.phone}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Manager</dt>
                <dd>{branch.manager?.name ?? 'Unassigned'}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Techs</dt>
                <dd>{branch.techCount}</dd>
              </div>
            </dl>
            <Button onClick={() => setActiveBranch({ id: branch.id, name: branch.name })}>
              Set as default
            </Button>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
