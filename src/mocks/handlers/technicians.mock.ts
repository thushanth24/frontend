import techniciansJson from '@/mocks/data/technicians.json';
import { Technician } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

let technicians: Technician[] = [...techniciansJson];

type ListParams = {
  search?: string;
  skill?: string;
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listTechnicians(params: ListParams = {}): Promise<PaginatedResponse<Technician>> {
  await simulateDelay();
  maybeThrow();

  const { search, skill, status, page, perPage } = params;
  let filtered = [...technicians];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((tech) => tech.name.toLowerCase().includes(query));
  }

  if (skill) {
    filtered = filtered.filter((tech) => tech.skills.includes(skill));
  }

  if (status) {
    filtered = filtered.filter((tech) => tech.status === status);
  }

  return paginate(filtered, { page, perPage });
}

export async function getTechnician(id: string) {
  await simulateDelay();
  maybeThrow();
  return technicians.find((tech) => tech.id === id) || null;
}
