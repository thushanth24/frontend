import servicesJson from '@/mocks/data/services.json';
import { ServiceItem } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

let services: ServiceItem[] = [...servicesJson];

type ListParams = {
  search?: string;
  category?: string;
  status?: string;
  page?: number;
  perPage?: number;
};

export async function listServices(params: ListParams = {}): Promise<PaginatedResponse<ServiceItem>> {
  await simulateDelay();
  maybeThrow();

  const { search, category, status, page, perPage } = params;

  let filtered = [...services];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((service) =>
      service.name.toLowerCase().includes(query) ||
      service.code.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    );
  }

  if (category) {
    filtered = filtered.filter((service) => service.category === category);
  }

  if (status) {
    filtered = filtered.filter((service) => service.status === status);
  }

  return paginate(filtered, { page, perPage });
}

export async function saveService(payload: Partial<ServiceItem> & { id?: string }) {
  await simulateDelay();
  maybeThrow();

  if (payload.id) {
    services = services.map((service) => (service.id === payload.id ? ({ ...service, ...payload } as ServiceItem) : service));
    return services.find((service) => service.id === payload.id);
  }

  const newService: ServiceItem = {
    ...(payload as ServiceItem),
    id: `srv-${crypto.randomUUID()}`,
    status: payload.status ?? 'ACTIVE'
  };

  services = [newService, ...services];
  return newService;
}
