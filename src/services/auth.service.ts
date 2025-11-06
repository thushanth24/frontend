import { env } from '@/config/env';
import { LoginResponse } from '@/domain';
import { mockApi } from '@/mocks';
import { endpoints, realEndpoints } from './endpoints';
import { httpClient } from './httpClient';

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  if (env.useMock) {
    return mockApi.auth.login(payload);
  }
  return httpClient<LoginResponse>(realEndpoints.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
