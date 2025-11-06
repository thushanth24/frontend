import { env } from '@/config/env';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  if (env.useMock) {
    return mockApi.auth.login(payload);
  }
  return httpClient(realEndpoints.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
