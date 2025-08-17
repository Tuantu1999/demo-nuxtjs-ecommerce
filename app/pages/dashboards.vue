<script setup lang="ts">
import FilterGroup from '@/components/dashboard/filter-group.vue';
</script>
<template>
  <v-sheet class="pa-4">
    <v-row class="font-weight-bold text-h6">{{ $t('dashboards_mgt') }}</v-row>
    <!-- Filters -->
    <FilterGroup />
  </v-sheet>
</template>
