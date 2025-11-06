import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';
import { EmptyState } from '@/components/common/EmptyState';

interface RoadAppointmentDetailPageProps {
  params: { id: string };
}

export default function RoadAppointmentDetailPage({ params }: RoadAppointmentDetailPageProps) {
  return (
    <PageContainer>
      <PageHeader
        title={`Road assist ticket ${params.id}`}
        description="Map, timeline, photos, and resolution summary."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Customer">
          <p className="text-sm text-slate-600">Name, phone, preferred contact.</p>
        </SectionCard>
        <SectionCard title="Vehicle">
          <p className="text-sm text-slate-600">Vehicle card with VIN and plate.</p>
        </SectionCard>
        <SectionCard title="Technician timeline">
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Assigned · 12:04</li>
            <li>En route · 12:12</li>
            <li>On site · pending</li>
          </ul>
        </SectionCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <EmptyState title="Map placeholder" description="Embed live location with route guidance." />
        <SectionCard title="Photos">
          <p className="text-sm text-slate-600">Gallery for before/after images.</p>
        </SectionCard>
      </div>
      <SectionCard title="Resolution notes">
        <p className="text-sm text-slate-600">Space for technician summary, parts used, tow status, and customer signature.</p>
      </SectionCard>
    </PageContainer>
  );
}
