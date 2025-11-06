import invoicesJson from '@/mocks/data/invoices.json';
import { Invoice } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

let invoices: Invoice[] = [...invoicesJson];

type ListParams = {
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listInvoices(params: ListParams = {}): Promise<PaginatedResponse<Invoice>> {
  await simulateDelay();
  maybeThrow();

  const { status, page, perPage } = params;
  let filtered = [...invoices];

  if (status) {
    filtered = filtered.filter((invoice) => invoice.status === status);
  }

  return paginate(filtered, { page, perPage });
}

export async function sendInvoice(id: string) {
  await simulateDelay();
  maybeThrow();

  invoices = invoices.map((invoice) =>
    invoice.id === id
      ? { ...invoice, status: invoice.status === 'READY' ? 'SENT' : invoice.status }
      : invoice
  );

  return invoices.find((invoice) => invoice.id === id);
}
