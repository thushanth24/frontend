import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';

interface MyWorkOrderPageProps {
  params: { id: string };
}

export default function MyWorkOrderPage({ params }: MyWorkOrderPageProps) {
  return (
    <PageContainer>
      <PageHeader
        title={`Work order ${params.id}`}
        description="Interactive checklist, parts usage, labour tracking, and customer signature."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Checklist">
          <p className="text-sm text-slate-600">Step-by-step actions with completion toggles and notes.</p>
        </SectionCard>
        <SectionCard title="Parts used">
          <p className="text-sm text-slate-600">Search SKU, add quantity, auto cost.</p>
        </SectionCard>
        <SectionCard title="Labour tracking">
          <p className="text-sm text-slate-600">Start/stop timer and manual adjustments.</p>
        </SectionCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Photos">
          <p className="text-sm text-slate-600">Before/after uploads displayed in a gallery.</p>
        </SectionCard>
        <SectionCard title="Customer sign-off">
          <p className="text-sm text-slate-600">Capture signature, mileage out, and road test notes.</p>
        </SectionCard>
      </div>
      <SectionCard title="Actions">
        <div className="flex gap-3">
          <button className="rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white">Complete work</button>
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">Save progress</button>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
