export interface PaginationMeta {
  total: number;
  page: number;
  perPage: number;
  pages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface PaginationParams {
  page?: number;
  perPage?: number;
}

export function paginate<T>(items: T[], { page = 1, perPage = 20 }: PaginationParams): PaginatedResponse<T> {
  const start = (page - 1) * perPage;
  const paginated = items.slice(start, start + perPage);
  return {
    data: paginated,
    meta: {
      total: items.length,
      page,
      perPage,
      pages: Math.max(1, Math.ceil(items.length / perPage))
    }
  };
}
