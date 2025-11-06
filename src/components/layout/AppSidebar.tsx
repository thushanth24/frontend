'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useSession } from '@/state/session-store';
import { ROLE_LABELS, ROLES } from '@/config/roles';

const adminLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/employees', label: 'Employees' },
  { href: '/branches', label: 'Branches' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/admin/audit', label: 'Audit Log' },
  { href: '/reports', label: 'Reports' },
  { href: '/settings', label: 'Settings' }
];

const managerLinks = [
  { href: '/manager', label: 'Dashboard' },
  { href: '/technicians', label: 'Technicians' },
  { href: '/appointments/service/new', label: 'Service - New' },
  { href: '/appointments/service/assigned', label: 'Service - Assigned' },
  { href: '/appointments/road/new', label: 'Road - New' },
  { href: '/appointments/road/assigned', label: 'Road - Assigned' },
  { href: '/invoices', label: 'Invoices' },
  { href: '/customers', label: 'Customers' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/availability', label: 'Availability' },
  { href: '/reports', label: 'Reports' }
];

const technicianLinks = [
  { href: '/technician', label: 'My Dashboard' },
  { href: '/appointments/mine', label: 'My Appointments' },
  { href: '/roadside', label: 'Roadside' },
  { href: '/technician/calendar', label: 'Calendar' },
  { href: '/technician/timesheets', label: 'Timesheets' }
];

function linksForRole(role: string | undefined) {
  switch (role) {
    case ROLES.ADMIN:
      return adminLinks;
    case ROLES.MANAGER:
      return managerLinks;
    case ROLES.TECHNICIAN:
      return technicianLinks;
    default:
      return [];
  }
}

export function AppSidebar() {
  const pathname = usePathname();
  const session = useSession();
  const links = linksForRole(session.user?.role);

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/70 px-6 py-8 lg:flex lg:flex-col lg:gap-6">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">AutoOps</span>
        <p className="mt-2 text-lg font-semibold text-slate-900">{ROLE_LABELS[session.user?.role ?? ROLES.ADMIN]}</p>
        {session.activeBranch ? (
          <p className="text-xs text-slate-500">{session.activeBranch.name}</p>
        ) : (
          <Link href="/select-branch" className="text-xs text-primary-600 hover:underline">
            Select branch
          </Link>
        )}
      </div>
      <nav className="flex-1 space-y-1 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition-colors',
              pathname.startsWith(link.href)
                ? 'bg-primary-50 text-primary-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
