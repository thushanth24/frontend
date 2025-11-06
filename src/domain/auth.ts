import { Role } from '@/config/roles';

export interface AuthUser {
  id: string;
  name: string;
  role: Role;
  branches: Array<{
    id: string;
    name: string;
  }>;
}

export interface AuthSuccessResponse {
  token: string;
  user: AuthUser;
}

export interface ApiError {
  code: string;
  message: string;
  fields?: Record<string, string>;
}

export interface AuthErrorResponse {
  error: ApiError;
}

export type LoginResponse = AuthSuccessResponse | AuthErrorResponse;
