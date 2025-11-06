import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';

export default function ReportsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Reports"
        description="Download operational insights for admins and managers."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <SectionCard title="Employee directory export">
          <p className="text-sm text-slate-600">CSV with roles, contact info, and branch assignments.</p>
        </SectionCard>
        <SectionCard title="Service revenue mix">
          <p className="text-sm text-slate-600">Pie and trend charts summarising service categories.</p>
        </SectionCard>
        <SectionCard title="Road assist response times">
          <p className="text-sm text-slate-600">Highlight SLA adherence across branches.</p>
        </SectionCard>
        <SectionCard title="Inventory valuation">
          <p className="text-sm text-slate-600">Export stock and valuation per branch.</p>
        </SectionCard>
      </div>
    </PageContainer>
  );
}
