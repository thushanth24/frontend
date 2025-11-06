import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function SectionCard({ title, description, children, footer }: SectionCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {description ? (
          <p className="text-sm text-slate-600">{description}</p>
        ) : null}
      </header>
      <div className="space-y-4 text-sm text-slate-700">{children}</div>
      {footer ? <footer className="mt-6 border-t pt-4 text-right text-xs text-slate-500">{footer}</footer> : null}
    </section>
  );
}
