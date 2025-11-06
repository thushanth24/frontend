import { clsx } from 'clsx';

type StatusKind =
  | 'new'
  | 'approved'
  | 'assigned'
  | 'in_progress'
  | 'completed'
  | 'invoiced'
  | 'paid'
  | 'ready'
  | 'busy'
  | 'available';

const map: Record<StatusKind, string> = {
  new: 'bg-blue-100 text-blue-700',
  approved: 'bg-emerald-100 text-emerald-700',
  assigned: 'bg-purple-100 text-purple-700',
  in_progress: 'bg-amber-100 text-amber-700',
  completed: 'bg-emerald-100 text-emerald-700',
  invoiced: 'bg-sky-100 text-sky-700',
  paid: 'bg-emerald-100 text-emerald-700',
  ready: 'bg-slate-100 text-slate-700',
  busy: 'bg-rose-100 text-rose-700',
  available: 'bg-emerald-100 text-emerald-700'
};

export function StatusChip({ status, label }: { status: StatusKind; label: string }) {
  return <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize', map[status])}>{label}</span>;
}
