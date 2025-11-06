import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function CalendarPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Branch calendar"
        description="Day and week views across technician lanes."
      />
      <EmptyState
        title="Scheduling grid"
        description="Integrate with your scheduling component to support drag-and-drop assignments."
        actionLabel="Connect calendar"
      />
    </PageContainer>
  );
}
