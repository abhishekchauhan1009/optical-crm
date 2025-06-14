export interface Patient {
  id: string;
  name: string;
  address: string;
  mobile: string;
  leftEyeNumber: string;
  rightEyeNumber: string;
  axis: string;
  cylindricalNumber: string;
  visitDate: string;
  lastVisit: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    role: string;
  } | null;
}

export type CurrentView = 'login' | 'dashboard' | 'patient-form' | 'search-patient';

export interface PatientStats {
  today: number;
  thisMonth: number;
  lastMonth: number;
  total: number;
}