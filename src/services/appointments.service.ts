import { env } from '@/config/env';
import { PaginatedResponse } from '@/lib/pagination';
import { mockApi } from '@/mocks';
import { RoadAppointment, ServiceAppointment } from '@/domain';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

type ListParams = {
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listNewServiceAppointments(params?: ListParams): Promise<PaginatedResponse<ServiceAppointment>> {
  if (env.useMock) {
    return mockApi.appointments.listService({ ...(params ?? {}), status: 'NEW' });
  }
  return httpClient(realEndpoints.APPOINTMENTS.SERVICE_NEW, { method: 'GET', query: params as Record<string, string> });
}

export async function listAssignedServiceAppointments(params?: ListParams): Promise<PaginatedResponse<ServiceAppointment>> {
  if (env.useMock) {
    return mockApi.appointments.listService({ ...(params ?? {}), status: 'ASSIGNED' });
  }
  return httpClient(realEndpoints.APPOINTMENTS.SERVICE_ASSIGNED, { method: 'GET', query: params as Record<string, string> });
}

export async function getServiceAppointment(id: string) {
  if (env.useMock) {
    return mockApi.appointments.serviceDetail(id);
  }
  return httpClient(realEndpoints.APPOINTMENTS.SERVICE_NEW.replace('?status=new', `/${id}`));
}

export async function listNewRoadAppointments(params?: ListParams): Promise<PaginatedResponse<RoadAppointment>> {
  if (env.useMock) {
    return mockApi.appointments.listRoad({ ...(params ?? {}), status: 'NEW' });
  }
  return httpClient(realEndpoints.APPOINTMENTS.ROAD_NEW, { method: 'GET', query: params as Record<string, string> });
}

export async function listAssignedRoadAppointments(params?: ListParams): Promise<PaginatedResponse<RoadAppointment>> {
  if (env.useMock) {
    return mockApi.appointments.listRoad({ ...(params ?? {}), status: 'ASSIGNED' });
  }
  return httpClient(realEndpoints.APPOINTMENTS.ROAD_ASSIGNED, { method: 'GET', query: params as Record<string, string> });
}

export async function getRoadAppointment(id: string) {
  if (env.useMock) {
    return mockApi.appointments.roadDetail(id);
  }
  return httpClient(realEndpoints.APPOINTMENTS.ROAD_NEW.replace('?status=new', `/${id}`));
}

export async function assignTechnician(payload: { id: string; technicianId: string; technicianName: string }) {
  if (env.useMock) {
    return mockApi.appointments.assign(payload);
  }

  const path = typeof realEndpoints.APPOINTMENTS.ASSIGN_TECH === 'function'
    ? realEndpoints.APPOINTMENTS.ASSIGN_TECH(payload.id)
    : realEndpoints.APPOINTMENTS.ASSIGN_TECH;

  return httpClient(path, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
