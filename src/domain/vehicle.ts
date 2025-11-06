export interface Vehicle {
  id: string;
  customerId: string;
  make: string;
  model: string;
  year: number;
  plate: string;
  vin: string;
  mileageHistory: { at: string; value: number }[];
}
