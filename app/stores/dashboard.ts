import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('DashboardStore', {
  state: () => ({
    dateRange: '' as String,
    monthSelected: ref<string | null>(null),
    yearSelected: '' as string | null
  }),
  getters: {
    //
  },
  actions: {
    clearFilter() {
      this.dateRange = '';
      this.monthSelected = null;
      this.yearSelected = null;
    }
  }
});
