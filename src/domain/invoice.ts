import type { Customer } from './customer';
import type { Vehicle } from './vehicle';

export interface InvoiceItem {
  kind: 'LABOR' | 'PART';
  refId: string;
  name: string;
  qty: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  appointmentId: string;
  customer: Customer;
  vehicle: Vehicle;
  items: InvoiceItem[];
  tax: number;
  discount: number;
  total: number;
  status: 'READY' | 'SENT' | 'PAID';
  createdAt: string;
}
