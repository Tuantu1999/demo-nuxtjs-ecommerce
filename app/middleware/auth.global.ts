export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  const publicPages = ['/auth/login', '/auth/register', '/auth/forgot-password'];

  if (!auth.isLoggedIn && !publicPages.includes(to.path)) {
    return navigateTo('/auth/login');
  }

  if (process.client) {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (!(token && email && password)) {
      return navigateTo('/auth/login');
    }
  }
});
