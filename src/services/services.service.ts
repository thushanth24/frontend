import { env } from '@/config/env';
import { ServiceItem } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  search?: string;
  category?: string;
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listServices(params?: ListParams): Promise<PaginatedResponse<ServiceItem>> {
  if (env.useMock) {
    return mockApi.services.list(params ?? {});
  }
  return httpClient(realEndpoints.SERVICES.LIST, { method: 'GET', query: params as Record<string, string> });
}

export async function saveService(payload: Partial<ServiceItem> & { id?: string }) {
  if (env.useMock) {
    return mockApi.services.save(payload);
  }

  const path = env.useMock ? endpoints.SERVICES.LIST : realEndpoints.SERVICES.LIST;
  return httpClient(path, {
    method: payload.id ? 'PUT' : 'POST',
    body: JSON.stringify(payload)
  });
}
