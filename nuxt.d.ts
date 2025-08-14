import type { rules } from '@/plugins/rules';

declare module '#app' {
  interface NuxtApp {
    $rules: typeof rules;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $rules: typeof rules;
  }
}

export {};
