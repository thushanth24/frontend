import employeesJson from '@/mocks/data/employees.json';
import { maybeThrow, simulateDelay } from './utils';

export async function login({ email }: { email: string; password: string }) {
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
      role: match.role,
      branches: match.branches
    }
  };
}
