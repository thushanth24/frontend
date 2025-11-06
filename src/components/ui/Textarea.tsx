import { forwardRef, TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={clsx(
        'block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 disabled:cursor-not-allowed disabled:bg-slate-100',
        className
      )}
      {...props}
    />
  );
});
