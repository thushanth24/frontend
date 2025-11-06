export const ROLES = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  TECHNICIAN: 'TECHNICIAN'
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  ADMIN: 'Administrator',
  MANAGER: 'Manager',
  TECHNICIAN: 'Technician'
};
