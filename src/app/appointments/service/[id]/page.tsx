import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';

interface ServiceAppointmentDetailPageProps {
  params: { id: string };
}

export default function ServiceAppointmentDetailPage({ params }: ServiceAppointmentDetailPageProps) {
  return (
    <PageContainer>
      <PageHeader
        title={`Service appointment ${params.id}`}
        description="Read-only view of the customer, vehicle, services, and timeline."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Customer">
          <p className="text-sm text-slate-600">Name, phone, email, history, communication log.</p>
        </SectionCard>
        <SectionCard title="Vehicle">
          <p className="text-sm text-slate-600">Make, model, VIN, plate, mileage in/out.</p>
        </SectionCard>
        <SectionCard title="Status timeline">
          <ul className="space-y-2 text-sm text-slate-600">
            <li>New · 2024-04-03 12:00</li>
            <li>Approved · 2024-04-03 13:05</li>
            <li>Assigned · 2024-04-04 09:15</li>
            <li>In progress · 2024-04-05 12:30</li>
          </ul>
        </SectionCard>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Requested services">
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Brake Pad Replacement</li>
            <li>• Synthetic Oil Change</li>
          </ul>
        </SectionCard>
        <SectionCard title="Parts reserved">
          <p className="text-sm text-slate-600">Product references, quantities, and stock source.</p>
        </SectionCard>
      </div>
      <SectionCard title="Notes & attachments">
        <p className="text-sm text-slate-600">Use this area to display technician notes, photos, and documents.</p>
      </SectionCard>
    </PageContainer>
  );
}
