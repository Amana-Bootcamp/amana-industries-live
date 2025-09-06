export interface Factory {
  id: number;
  name: string;
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    address: string;
  };
  status: 'operational' | 'maintenance';
  established: string;
  employees: number;
  specialization: string[];
  production_capacity_monthly: number;
  contact: {
    manager: string;
    phone: string;
    email: string;
  };
  // Add other fields from your API if needed
}

export interface ApiResponse {
  message: string;
  company_info: {
    name: string;
    // Add other fields if needed
  };
  factory_data: Factory[];
}