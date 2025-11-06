import { env } from '@/config/env';
import { Invoice } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listInvoices(params?: ListParams): Promise<PaginatedResponse<Invoice>> {
  if (env.useMock) {
    return mockApi.invoices.list(params ?? {});
  }
  return httpClient(realEndpoints.INVOICES.LIST, { method: 'GET', query: params as Record<string, string> });
}

export async function sendInvoice(id: string) {
  if (env.useMock) {
    return mockApi.invoices.send(id);
  }
  const path = typeof realEndpoints.INVOICES.SEND === 'function' ? realEndpoints.INVOICES.SEND(id) : realEndpoints.INVOICES.SEND;
  return httpClient(path, { method: 'POST' });
}
