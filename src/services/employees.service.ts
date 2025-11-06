import { env } from '@/config/env';
import { Employee, EmployeePayload } from '@/domain';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  search?: string;
  role?: string;
  status?: string;
  branchId?: string;
  page?: number;
  perPage?: number;
};

export async function listEmployees(params?: ListParams): Promise<PaginatedResponse<Employee>> {
  if (env.useMock) {
    return mockApi.employees.list(params ?? {});
  }

  return httpClient(realEndpoints.EMPLOYEES.LIST, {
    method: 'GET',
    query: params as Record<string, string>
  });
}

export async function getEmployee(id: string) {
  if (env.useMock) {
    return mockApi.employees.detail(id);
  }
  return httpClient(realEndpoints.EMPLOYEES.DETAIL(id));
}

export async function saveEmployee(payload: EmployeePayload) {
  if (env.useMock) {
    return mockApi.employees.save(payload);
  }
  return httpClient(env.useMock ? endpoints.EMPLOYEES.CREATE : realEndpoints.EMPLOYEES.CREATE, {
    method: payload.id ? 'PUT' : 'POST',
    body: JSON.stringify(payload)
  });
}

export async function deleteEmployee(id: string) {
  if (env.useMock) {
    return mockApi.employees.delete(id);
  }
  return httpClient(realEndpoints.EMPLOYEES.DETAIL(id), { method: 'DELETE' });
}
