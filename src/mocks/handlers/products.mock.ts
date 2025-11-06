import productsJson from '@/mocks/data/products.json';
import { Product } from '@/domain';
import { paginate, PaginatedResponse } from '@/lib/pagination';
import { maybeThrow, simulateDelay } from './utils';

let products: Product[] = [...productsJson];

type ListParams = {
  search?: string;
  category?: string;
  status?: string;
  lowStock?: boolean;
  page?: number;
  perPage?: number;
};

export async function listProducts(params: ListParams = {}): Promise<PaginatedResponse<Product>> {
  await simulateDelay();
  maybeThrow();

  const { search, category, status, lowStock, page, perPage } = params;
  let filtered = [...products];

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(query) || product.sku.toLowerCase().includes(query)
    );
  }

  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (status) {
    filtered = filtered.filter((product) => product.status === status);
  }

  if (lowStock) {
    filtered = filtered.filter((product) => Object.values(product.stockByBranch).some((value) => value <= product.reorderLevel));
  }

  return paginate(filtered, { page, perPage });
}

export async function saveProduct(payload: Partial<Product> & { id?: string }) {
  await simulateDelay();
  maybeThrow();

  if (payload.id) {
    products = products.map((product) => (product.id === payload.id ? ({ ...product, ...payload } as Product) : product));
    return products.find((product) => product.id === payload.id);
  }

  const newProduct: Product = {
    ...(payload as Product),
    id: `prd-${crypto.randomUUID()}`,
    stockByBranch: payload.stockByBranch ?? {},
    status: payload.status ?? 'ACTIVE'
  };

  products = [newProduct, ...products];
  return newProduct;
}
