import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionCard } from '@/components/layout/SectionCard';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Settings"
        description="Company profile, branding, and configuration."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <SectionCard title="Company profile">
          <p className="text-sm text-slate-600">Name, contact info, default currency.</p>
        </SectionCard>
        <SectionCard title="Branding">
          <p className="text-sm text-slate-600">Logo uploads, primary/secondary colours.</p>
        </SectionCard>
        <SectionCard title="Appointment status definitions">
          <p className="text-sm text-slate-600">Customise workflow states for service and roadside tickets.</p>
        </SectionCard>
        <SectionCard title="Permissions map">
          <p className="text-sm text-slate-600">Read-only view of role capabilities.</p>
        </SectionCard>
      </div>
    </PageContainer>
  );
}
