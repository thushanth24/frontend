import { env } from '@/config/env';
import { Branch, BranchPayload } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  search?: string;
  status?: string;
  city?: string;
  page?: number;
  perPage?: number;
};

export async function listBranches(params?: ListParams): Promise<PaginatedResponse<Branch>> {
  if (env.useMock) {
    return mockApi.branches.list(params ?? {});
  }
  return httpClient(realEndpoints.BRANCHES.LIST, { method: 'GET', query: params as Record<string, string> });
}

export async function saveBranch(payload: BranchPayload) {
  if (env.useMock) {
    return mockApi.branches.save(payload);
  }

  return httpClient(env.useMock ? endpoints.BRANCHES.LIST : realEndpoints.BRANCHES.LIST, {
    method: payload.id ? 'PUT' : 'POST',
    body: JSON.stringify(payload)
  });
}
