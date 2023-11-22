import { $axios } from '@/utils';

export const login = (email, password) =>
  $axios.post(`${import.meta.env.VITE_API_BASE}/login`, {
    userEmail: email,
    password,
  });
