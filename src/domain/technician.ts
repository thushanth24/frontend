export interface Technician {
  id: string;
  name: string;
  photo: string;
  skills: string[];
  status: 'AVAILABLE' | 'BUSY' | 'OFF';
  todayLoad: number;
  nextAvailable: string;
  certifications: string[];
}
