import { format } from 'date-fns';

export function formatCurrency(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value);
}

export function formatDate(value: string | Date, formatStr = 'MMM d, yyyy') {
  return format(typeof value === 'string' ? new Date(value) : value, formatStr);
}
