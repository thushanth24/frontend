import { env } from '@/config/env';
import { Technician } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  search?: string;
  skill?: string;
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listTechnicians(params?: ListParams): Promise<PaginatedResponse<Technician>> {
  if (env.useMock) {
    return mockApi.technicians.list(params ?? {});
  }
  return httpClient(realEndpoints.TECHNICIANS.LIST, { method: 'GET', query: params as Record<string, string> });
}

export async function getTechnician(id: string) {
  if (env.useMock) {
    return mockApi.technicians.detail(id);
  }
  return httpClient(`${realEndpoints.TECHNICIANS.LIST}/${id}`);
}
