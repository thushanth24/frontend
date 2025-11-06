export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  preferredContact?: 'EMAIL' | 'PHONE' | 'SMS';
}
