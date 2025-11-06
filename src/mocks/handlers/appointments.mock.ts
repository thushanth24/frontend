import serviceAppointmentsJson from '@/mocks/data/appointments.service.json';
import roadAppointmentsJson from '@/mocks/data/appointments.road.json';
import { RoadAppointment, ServiceAppointment } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

let serviceAppointments: ServiceAppointment[] = [...serviceAppointmentsJson];
let roadAppointments: RoadAppointment[] = [...roadAppointmentsJson];

type ListParams = {
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listServiceAppointments(params: ListParams = {}): Promise<PaginatedResponse<ServiceAppointment>> {
  await simulateDelay();
  maybeThrow();
  const { status, page, perPage } = params;
  let filtered = [...serviceAppointments];
  if (status) {
    filtered = filtered.filter((appointment) => appointment.status === status);
  }
  return paginate(filtered, { page, perPage });
}

export async function listRoadAppointments(params: ListParams = {}): Promise<PaginatedResponse<RoadAppointment>> {
  await simulateDelay();
  maybeThrow();
  const { status, page, perPage } = params;
  let filtered = [...roadAppointments];
  if (status) {
    filtered = filtered.filter((appointment) => appointment.status === status);
  }
  return paginate(filtered, { page, perPage });
}

export async function getServiceAppointment(id: string) {
  await simulateDelay();
  maybeThrow();
  return serviceAppointments.find((appointment) => appointment.id === id) || null;
}

export async function getRoadAppointment(id: string) {
  await simulateDelay();
  maybeThrow();
  return roadAppointments.find((appointment) => appointment.id === id) || null;
}

export async function assignTechnician(payload: { id: string; technicianId: string; technicianName: string }) {
  await simulateDelay();
  maybeThrow();

  serviceAppointments = serviceAppointments.map((appointment) =>
    appointment.id === payload.id
      ? {
          ...appointment,
          assignedTech: { id: payload.technicianId, name: payload.technicianName },
          status: appointment.type === 'SERVICE' ? 'ASSIGNED' : appointment.status
        }
      : appointment
  );

  roadAppointments = roadAppointments.map((appointment) =>
    appointment.id === payload.id
      ? {
          ...appointment,
          assignedTech: { id: payload.technicianId, name: payload.technicianName },
          status: 'ASSIGNED'
        }
      : appointment
  );

  return { success: true };
}
