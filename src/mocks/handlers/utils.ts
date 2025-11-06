const MIN_DELAY = 200;
const MAX_DELAY = 800;
const ERROR_RATE = 0.08;

export async function simulateDelay() {
  const timeout = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

export function maybeThrow() {
  if (Math.random() < ERROR_RATE) {
    const error = {
      error: {
        code: 'MOCK_ERROR',
        message: 'Simulated network issue. Try again.',
        fields: {}
      }
    };
    throw error;
  }
}
