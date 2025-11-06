import branchesJson from '@/mocks/data/branches.json';
import { Branch } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

const branchSeed = branchesJson as unknown as Array<Branch & { status: string }>;

let branches: Branch[] = branchSeed.map((branch) => ({
  ...branch,
  status: branch.status as Branch['status'],
  manager: branch.manager ? { ...branch.manager } : null
}));

type ListParams = {
  search?: string;
  status?: string;
  city?: string;
  page?: number;
  perPage?: number;
};

export async function listBranches(params: ListParams = {}): Promise<PaginatedResponse<Branch>> {
  await simulateDelay();
  maybeThrow();

  const { search, status, city, page, perPage } = params;

  let filtered = [...branches];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((branch) =>
      branch.name.toLowerCase().includes(query) ||
      branch.code.toLowerCase().includes(query) ||
      branch.address.city.toLowerCase().includes(query)
    );
  }

  if (status) {
    filtered = filtered.filter((branch) => branch.status === status);
  }

  if (city) {
    filtered = filtered.filter((branch) => branch.address.city.toLowerCase() === city.toLowerCase());
  }

  return paginate(filtered, { page, perPage });
}

export async function saveBranch(payload: Partial<Branch> & { id?: string }) {
  await simulateDelay();
  maybeThrow();

  if (payload.id) {
    branches = branches.map((branch) => (branch.id === payload.id ? ({ ...branch, ...payload } as Branch) : branch));
    return branches.find((branch) => branch.id === payload.id);
  }

  const newBranch: Branch = {
    ...(payload as Branch),
    id: `br-${crypto.randomUUID()}`,
    manager: payload.manager || null,
    techCount: payload.techCount ?? 0,
    servicesOffered: payload.servicesOffered ?? [],
    status: payload.status ?? 'ACTIVE'
  };

  branches = [newBranch, ...branches];
  return newBranch;
}
