export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  unit: string;
  costPrice: number;
  sellPrice: number;
  tax: number;
  stockByBranch: Record<string, number>;
  reorderLevel: number;
  supplier: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export type ProductPayload = Omit<Product, 'id'> & { id?: string };
