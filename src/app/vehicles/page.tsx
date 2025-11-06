import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { DataTablePlaceholder } from '@/components/common/DataTablePlaceholder';
import { SectionCard } from '@/components/layout/SectionCard';

export default function VehiclesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Vehicles"
        description="Track vehicle details, mileage history, and associated customers."
      />
      <DataTablePlaceholder
        title="Vehicle list"
        description="Support VIN lookup, customer filtering, and mileage history."
        columns={['Customer', 'Make', 'Model', 'Year', 'Plate', 'VIN', 'Mileage', 'Actions']}
      />
      <SectionCard title="Vehicle detail" description="Work order history and notes.">
        <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Service history table</div>
          <div className="rounded-lg border border-dashed border-slate-300 p-4">Mileage chart placeholder</div>
        </div>
      </SectionCard>
    </PageContainer>
  );
}
