import type { Customer } from './customer';
import type { Vehicle } from './vehicle';
import type { Technician } from './technician';

export type AppointmentStatus =
  | 'NEW'
  | 'APPROVED'
  | 'ASSIGNED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'INVOICED';

export type RoadAppointmentStatus = 'NEW' | 'ASSIGNED' | 'EN_ROUTE' | 'ON_SITE' | 'TOWING' | 'COMPLETED';

export interface ServiceAppointment {
  id: string;
  ticketNo: string;
  type: 'SERVICE';
  branchId: string;
  customer: Pick<Customer, 'id' | 'name' | 'phone' | 'email'>;
  vehicle: Vehicle;
  requestedServices: { id: string; name: string }[];
  preferredTime: string;
  assignedTech: Pick<Technician, 'id' | 'name'> | null;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
}

export interface RoadAppointment {
  id: string;
  ticketNo: string;
  type: 'ROAD';
  location: { lat: number; lng: number; address: string };
  issueType: string;
  vehicle: Vehicle;
  customer: Pick<Customer, 'id' | 'name' | 'phone' | 'email'>;
  assignedTech: Pick<Technician, 'id' | 'name'> | null;
  status: RoadAppointmentStatus;
  photos: string[];
  createdAt: string;
}
