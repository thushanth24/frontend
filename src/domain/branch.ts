export interface Branch {
  id: string;
  name: string;
  code: string;
  address: {
    street: string;
    city: string;
    postal: string;
  };
  phone: string;
  email: string;
  manager: { id: string; name: string } | null;
  techCount: number;
  workingHours: string;
  servicesOffered: string[];
  status: 'ACTIVE' | 'INACTIVE';
}

export type BranchPayload = Omit<Branch, 'id'> & { id?: string };
