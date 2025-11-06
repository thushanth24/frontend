import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';

export default function NotFound() {
  return (
    <PageContainer>
      <PageHeader
        title="Page not found"
        description="The screen you are looking for was moved or deleted."
      />
      <div className="mt-10 text-sm text-slate-600">
        <p>Please verify the URL or return to your dashboard.</p>
        <Link href="/login" className="text-primary-600 hover:underline">
          Go to login
        </Link>
      </div>
    </PageContainer>
  );
}
