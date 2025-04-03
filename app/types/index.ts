export interface User {
  id: string;
  name: string;
  email: string;
  role: 'faculty' | 'hod' | 'admin';
  department?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  role: string;
} 