export interface ServiceItem {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  standardDurationMin: number;
  baseLaborCost: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export type ServicePayload = Omit<ServiceItem, 'id'> & { id?: string };
