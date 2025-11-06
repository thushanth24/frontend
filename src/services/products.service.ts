import { env } from '@/config/env';
import { Product } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  search?: string;
  category?: string;
  status?: string;
  lowStock?: boolean;
  page?: number;
  perPage?: number;
};

export async function listProducts(params?: ListParams): Promise<PaginatedResponse<Product>> {
  if (env.useMock) {
    return mockApi.products.list(params ?? {});
  }
  return httpClient(realEndpoints.PRODUCTS.LIST, { method: 'GET', query: params as Record<string, string> });
}

export async function saveProduct(payload: Partial<Product> & { id?: string }) {
  if (env.useMock) {
    return mockApi.products.save(payload);
  }
  const path = env.useMock ? endpoints.PRODUCTS.LIST : realEndpoints.PRODUCTS.LIST;
  return httpClient(path, {
    method: payload.id ? 'PUT' : 'POST',
    body: JSON.stringify(payload)
  });
}
