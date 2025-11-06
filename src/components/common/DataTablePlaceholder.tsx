interface DataTablePlaceholderProps {
  title: string;
  description?: string;
  columns: string[];
}

export function DataTablePlaceholder({ title, description, columns }: DataTablePlaceholderProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-dashed border-slate-300 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">{title}</h3>
        {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      </div>
      <div className="divide-y divide-slate-100">
        <div className="grid grid-cols-12 bg-slate-100 px-6 py-3 text-xs font-medium uppercase tracking-wide text-slate-500">
          {columns.map((column) => (
            <span key={column} className="truncate">
              {column}
            </span>
          ))}
        </div>
        <div className="space-y-4 px-6 py-6 text-sm text-slate-500">
          <p>
            Table data is sourced from mock services. Replace this component with a real
            data table when integrating with the production API.
          </p>
        </div>
      </div>
    </div>
  );
}
