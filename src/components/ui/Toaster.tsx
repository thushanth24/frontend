'use client';

import { useToastStore } from '@/state/toast-store';

export function Toaster() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-80 flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg border border-slate-200 bg-white p-4 shadow-lg ${toast.variant === 'error' ? 'border-rose-300' : 'border-emerald-300'}`}
        >
          <p className="text-sm font-semibold text-slate-900">{toast.title}</p>
          {toast.description ? (
            <p className="mt-1 text-xs text-slate-600">{toast.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
