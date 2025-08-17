<script setup lang="ts">
const store = useDashboardStore();
</script>
<template>
  <v-row>
    <v-col cols="3">
      <v-date-input
        :label="$t('calendar.by_day')"
        prepend-icon=""
        prepend-inner-icon="$calendar"
        variant="outlined"
        persistent-placeholder
        input-format="DD-MM-YYYY"
        class="mt-2"
        density="compact"
        v-model="store.dateRange"
        multiple="range"
      ></v-date-input>
    </v-col>
    <v-col cols="3">
      <v-select
        :label="$t('calendar.by_month')"
        class="mt-2"
        variant="outlined"
        density="compact"
        item-title="label"
        item-value="value"
        return-object
        :items="getMonths()"
        v-model="store.monthSelected"
      >
        <template #selection="{ item }">
          <span>{{ $t(`calendar.${item.raw.label}`) }}</span>
        </template>
        <template #item="{ props: itemProps, item }">
          <v-list-item v-bind="itemProps" :title="$t(`calendar.${item.raw.label}`)"></v-list-item>
        </template>
      </v-select>
    </v-col>
    <v-col cols="3">
      <v-select
        :label="$t('calendar.by_year')"
        class="mt-2"
        variant="outlined"
        density="compact"
        item-title="label"
        item-value="value"
        return-object
        :items="getYears()"
        v-model="store.yearSelected"
      >
      </v-select>
    </v-col>
    <v-col cols="3" class="text-right mt-2">
      <v-btn color="primary" class="text-capitalize" @click="store.clearFilter">{{ $t('common.clear') }}</v-btn>
    </v-col>
  </v-row>
</template>
