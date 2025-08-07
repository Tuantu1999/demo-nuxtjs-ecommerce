export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  const publicPages = ['/auth/login', '/auth/register'];

  if (!auth.isLoggedIn && !publicPages.includes(to.path)) {
    return navigateTo('/auth/login');
  }
});
