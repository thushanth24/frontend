import { Role } from '@/config/roles';
import type { Branch } from './branch';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  branches: Pick<Branch, 'id' | 'name'>[];
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
}

export type EmployeePayload = Omit<Employee, 'id' | 'createdAt'> & { id?: string };
