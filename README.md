# AutoOps Frontend

Role-based automobile repair management interface built with Next.js App Router. The UI is backed by a mock service layer that can be swapped for real APIs by toggling environment variables.

## Getting started

```bash
npm install
npm run dev
```

The development server starts on [http://localhost:3000](http://localhost:3000).

## Environment configuration

| Variable | Description |
| --- | --- |
| `USE_MOCK` / `NEXT_PUBLIC_USE_MOCK` | When `1`, API calls are routed through the local mock handlers. Set to `0` to send requests to the real backend. |
| `API_BASE_URL` / `NEXT_PUBLIC_API_BASE_URL` | Base URL for the real backend when mocks are disabled. |

Copy `.env.example` to `.env.local` and adjust values as required.

```bash
cp .env.example .env.local
```

## Mock architecture

```
UI → services → mocks.handlers → mocks.data JSON
```

* `src/services/*` reads from `env.useMock` to determine whether to call the mock router or the configured HTTP endpoint.
* Mock handlers implement list/search/filter/sort logic in-memory and simulate latency and flaky responses.
* Mock JSON is stored in `src/mocks/data` with consistent identifiers across files.

## Folder highlights

* `src/app` – App Router pages organised by role and feature.
* `src/components` – Presentational UI pieces (tables, forms, modals, placeholders).
* `src/domain` – Shared TypeScript types.
* `src/services` – HTTP layer with endpoint definitions and mock switching.
* `src/mocks` – JSON fixtures and mock handlers.
* `src/state` – Simple client-side stores for session and toast notifications.

## Switching to a real backend

1. Set `NEXT_PUBLIC_USE_MOCK=0` and `NEXT_PUBLIC_API_BASE_URL` (and server-side equivalents) in `.env.local`.
2. Update `src/services/endpoints.ts` if real endpoint routes differ.
3. Replace mock handler logic with real HTTP responses as services already consume the shared `httpClient` helper.
4. Remove `src/mocks` if no longer required.

## Scripts

* `npm run dev` – Start the Next.js development server.
* `npm run build` – Compile the production bundle.
* `npm run start` – Run the production server.
* `npm run lint` – Lint the codebase.
* `npm run typecheck` – Type check without emitting files.

