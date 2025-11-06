import { assignTechnician, getRoadAppointment, getServiceAppointment, listRoadAppointments, listServiceAppointments } from './handlers/appointments.mock';
import { listBranches, saveBranch } from './handlers/branches.mock';
import { listEmployees, getEmployee, saveEmployee, deleteEmployee } from './handlers/employees.mock';
import { listInvoices, sendInvoice } from './handlers/invoices.mock';
import { login } from './handlers/auth.mock';
import { listProducts, saveProduct } from './handlers/products.mock';
import { listServices, saveService } from './handlers/services.mock';
import { getTechnician, listTechnicians } from './handlers/technicians.mock';

export const mockApi = {
  employees: {
    list: listEmployees,
    detail: getEmployee,
    save: saveEmployee,
    delete: deleteEmployee
  },
  branches: {
    list: listBranches,
    save: saveBranch
  },
  services: {
    list: listServices,
    save: saveService
  },
  products: {
    list: listProducts,
    save: saveProduct
  },
  appointments: {
    listService: listServiceAppointments,
    listRoad: listRoadAppointments,
    serviceDetail: getServiceAppointment,
    roadDetail: getRoadAppointment,
    assign: assignTechnician
  },
  invoices: {
    list: listInvoices,
    send: sendInvoice
  },
  technicians: {
    list: listTechnicians,
    detail: getTechnician
  },
  auth: {
    login
  }
};
