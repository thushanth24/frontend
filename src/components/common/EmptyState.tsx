interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
}

export function EmptyState({ title, description, actionLabel }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white p-12 text-center">
      <div className="text-3xl">🚗</div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-slate-500">{description}</p>
      {actionLabel ? (
        <button className="mt-6 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-500">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
