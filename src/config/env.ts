export const env = {
  useMock: process.env.NEXT_PUBLIC_USE_MOCK === '1' || process.env.NEXT_PUBLIC_USE_MOCK === 'true' || process.env.USE_MOCK === '1',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://localhost:3000'
};
