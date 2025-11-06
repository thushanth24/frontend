import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';

export default function TimesheetsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Timesheets"
        description="Optional module for technician time submission."
      />
      <SectionCard title="Current period">
        <p className="text-sm text-slate-600">Auto-filled from job start/complete events with manual adjustments.</p>
      </SectionCard>
      <SectionCard title="Submission history">
        <p className="text-sm text-slate-600">List of submitted periods with approval status.</p>
      </SectionCard>
    </PageContainer>
  );
}
