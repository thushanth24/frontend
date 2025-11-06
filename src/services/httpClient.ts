import { env } from '@/config/env';

interface RequestOptions extends RequestInit {
  query?: Record<string, string | number | boolean | undefined>;
}

function buildUrl(path: string, query?: Record<string, string | number | boolean | undefined>) {
  const url = new URL(path, env.apiBaseUrl);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
}

export async function httpClient<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { query, headers, ...init } = options;
  const response = await fetch(buildUrl(path, query), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {})
    }
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => undefined);
    throw errorBody || { error: { code: 'HTTP_ERROR', message: 'Request failed' } };
  }

  return (await response.json()) as T;
}
