import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function TechnicianCalendarPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Technician calendar"
        description="Personal schedule view for upcoming jobs and time off."
      />
      <EmptyState
        title="Calendar placeholder"
        description="Integrate day/week calendar with drag-to-schedule functionality."
        actionLabel="View schedule"
      />
    </PageContainer>
  );
}
