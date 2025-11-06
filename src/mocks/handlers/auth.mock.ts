import employeesJson from '@/mocks/data/employees.json';
import { LoginResponse } from '@/domain';
import { Role } from '@/config/roles';
import { maybeThrow, simulateDelay } from './utils';

export async function login({ email }: { email: string; password: string }): Promise<LoginResponse> {
  await simulateDelay();
  maybeThrow();

  const match = employeesJson.find((employee) => employee.email.toLowerCase() === email.toLowerCase());
  if (!match) {
    return {
      error: {
        code: 'INVALID_CREDENTIALS',
        message: 'The supplied email or password is incorrect',
        fields: { email: 'Unknown user' }
      }
    };
  }

  return {
    token: `mock-token-${match.id}`,
    user: {
      id: match.id,
      name: `${match.firstName} ${match.lastName}`,
      role: match.role as Role,
      branches: match.branches.map((branch) => ({
        id: branch.id,
        name: branch.name
      }))
    }
  };
}
