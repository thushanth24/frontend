import employeesJson from '@/mocks/data/employees.json';
import { Employee, EmployeePayload } from '@/domain';
import { Role } from '@/config/roles';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

const employeeSeed = employeesJson as unknown as Array<Employee & { status: string; role: string }>;

let employees: Employee[] = employeeSeed.map((employee) => ({
  ...employee,
  role: employee.role as Role,
  status: employee.status as Employee['status'],
  branches: employee.branches.map((branch) => ({
    id: branch.id,
    name: branch.name
  }))
}));

type ListParams = {
  search?: string;
  role?: string;
  status?: string;
  branchId?: string;
  page?: number;
  perPage?: number;
};

export async function listEmployees(params: ListParams = {}): Promise<PaginatedResponse<Employee>> {
  await simulateDelay();
  maybeThrow();

  const { search, role, status, branchId, page, perPage } = params;

  let filtered = [...employees];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((employee) =>
      `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query) ||
      employee.phone.toLowerCase().includes(query)
    );
  }

  if (role) {
    filtered = filtered.filter((employee) => employee.role === role);
  }

  if (status) {
    filtered = filtered.filter((employee) => employee.status === status);
  }

  if (branchId) {
    filtered = filtered.filter((employee) => employee.branches.some((branch) => branch.id === branchId));
  }

  return paginate(filtered, { page, perPage });
}

export async function getEmployee(id: string) {
  await simulateDelay();
  maybeThrow();

  return employees.find((employee) => employee.id === id) || null;
}

export async function saveEmployee(payload: EmployeePayload) {
  await simulateDelay();
  maybeThrow();

  if (payload.id) {
    employees = employees.map((employee) => (employee.id === payload.id ? { ...employee, ...payload } : employee));
    return employees.find((employee) => employee.id === payload.id);
  }

  const newEmployee: Employee = {
    ...(payload as Employee),
    id: `emp-${crypto.randomUUID()}`,
    createdAt: new Date().toISOString()
  };

  employees = [newEmployee, ...employees];
  return newEmployee;
}

export async function deleteEmployee(id: string) {
  await simulateDelay();
  maybeThrow();
  employees = employees.filter((employee) => employee.id !== id);
  return { success: true };
}
