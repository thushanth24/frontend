import { Role } from '@/config/roles';

export interface GuardConfig {
  role?: Role;
  requiresBranch?: boolean;
}

export interface GuardResult {
  allow: boolean;
  redirect?: string;
}

export function evaluateGuard({
  userRole,
  allowedRoles,
  hasBranch,
  requiresBranch = false
}: {
  userRole?: Role;
  allowedRoles?: Role[];
  hasBranch: boolean;
  requiresBranch?: boolean;
}): GuardResult {
  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    return { allow: false, redirect: '/login' };
  }

  if (!userRole) {
    return { allow: false, redirect: '/login' };
  }

  if (requiresBranch && !hasBranch) {
    return { allow: false, redirect: '/select-branch' };
  }

  return { allow: true };
}
