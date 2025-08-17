import { defineStore } from 'pinia';

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    token: null as string | null,
    email: '' as string,
    password: '' as string,
    loading: false as boolean,
    isRemember: false as boolean
  }),
  getters: {
    isLoggedIn: (state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access_token') || state.token;
        const email = localStorage.getItem('username') || state.email;
        const password = localStorage.getItem('password') || state.password;
        return !!(token && email && password);
      }
      return false;
    }
  },
  actions: {
    initStore() {
      this.email = '';
      this.password = '';
    },
    login(email: string, password: string) {
      const token = 'mocked_token'; // Replace with actual token retrieval logic
      this.email = email;
      this.password = password;
      this.token = token;

      if (this.isRemember) {
        localStorage.setItem('username', this.email);
        localStorage.setItem('password', this.password);
        localStorage.setItem('access_token', token);
      }
    },
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('access_token');
    }
  }
});
