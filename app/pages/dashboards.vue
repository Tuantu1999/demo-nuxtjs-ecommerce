<script setup lang="ts">
import FilterGroup from '@/components/dashboard/filter-group.vue';
import Revenue from '@/components/dashboard/revenue.vue';
</script>
<template>
  <v-sheet class="pa-4">
    <v-row class="font-weight-bold text-h6">{{ $t('dashboards_mgt') }}</v-row>
    <!-- Filters -->
    <FilterGroup />
    <!-- Statistic -->
    <Revenue />
  </v-sheet>
</template>
