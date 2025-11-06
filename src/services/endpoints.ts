export const endpoints = {
  EMPLOYEES: {
    LIST: '/mock/employees',
    CREATE: '/mock/employees',
    DETAIL: (id: string) => `/mock/employees/${id}`
  },
  BRANCHES: {
    LIST: '/mock/branches'
  },
  SERVICES: {
    LIST: '/mock/services'
  },
  PRODUCTS: {
    LIST: '/mock/products'
  },
  APPOINTMENTS: {
    SERVICE_NEW: '/mock/appointments/service/new',
    SERVICE_ASSIGNED: '/mock/appointments/service/assigned',
    ROAD_NEW: '/mock/appointments/road/new',
    ROAD_ASSIGNED: '/mock/appointments/road/assigned',
    ASSIGN_TECH: '/mock/appointments/assign'
  },
  INVOICES: {
    LIST: '/mock/invoices',
    SEND: '/mock/invoices/send'
  },
  TECHNICIANS: {
    LIST: '/mock/technicians'
  },
  AUTH: {
    LOGIN: '/mock/auth/login'
  }
} as const;

export const realEndpoints = {
  EMPLOYEES: {
    LIST: '/api/employees',
    CREATE: '/api/employees',
    DETAIL: (id: string) => `/api/employees/${id}`
  },
  BRANCHES: {
    LIST: '/api/branches'
  },
  SERVICES: {
    LIST: '/api/services'
  },
  PRODUCTS: {
    LIST: '/api/products'
  },
  APPOINTMENTS: {
    SERVICE_NEW: '/api/appointments/service?status=new',
    SERVICE_ASSIGNED: '/api/appointments/service?status=assigned',
    ROAD_NEW: '/api/appointments/road?status=new',
    ROAD_ASSIGNED: '/api/appointments/road?status=assigned',
    ASSIGN_TECH: (id: string) => `/api/appointments/${id}/assign`
  },
  INVOICES: {
    LIST: '/api/invoices',
    SEND: (id: string) => `/api/invoices/${id}/send`
  },
  TECHNICIANS: {
    LIST: '/api/technicians'
  },
  AUTH: {
    LOGIN: '/api/auth/login'
  }
} as const;
