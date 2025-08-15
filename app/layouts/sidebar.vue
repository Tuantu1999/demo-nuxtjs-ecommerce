<script setup lang="ts">
import { ADMIN, S_ADMIN } from '@/constant';

const router = useRouter();
// Admin panel items
const items = [
  { label: 'dashboards_mgt', icon: 'mdi-chart-bar', to: '/dashboards', auth: [S_ADMIN] },
  { label: 'warehouse_mgt', icon: 'mdi-shape', to: '/warehouse', auth: [S_ADMIN, ADMIN] },
  { label: 'products_mgt', icon: 'mdi-store-cog-outline', to: '', auth: [S_ADMIN, ADMIN] },
  { label: 'customers_mgt', icon: 'mdi-account-multiple', to: '', auth: [S_ADMIN, ADMIN] },
  { label: 'staff_mgt', icon: 'mdi-account-multiple', to: '', auth: [S_ADMIN] },
  { label: 'invoices_mgt', icon: 'mdi-receipt-text', to: '', auth: [S_ADMIN, ADMIN] },
  { label: 'sales_mgt', icon: 'mdi-cart-percent', to: '', auth: [S_ADMIN, ADMIN] },
  { label: 'settings', icon: 'mdi-cog', to: '', auth: [S_ADMIN] }
];

// User panel items
const itemsUser = [
  {
    id: 1,
    title: 'home',
    icon: 'mdi-home',
    children: [
      { id: 2, title: 'Calendar : app' },
      { id: 3, title: 'Chrome : app' },
      { id: 4, title: 'Webstorm : app' }
    ],
    to: '',
    auth: []
  },
  {
    id: 5,
    title: 'profile',
    icon: 'mdi-account',
    to: '',
    auth: []
  },
  {
    id: 6,
    title: 'sales',
    icon: 'mdi-sale',
    to: '',
    auth: []
  },
  {
    id: 7,
    title: 'news',
    icon: 'mdi-newspaper',
    to: '',
    auth: []
  },
  {
    id: 8,
    title: 'contact',
    icon: 'mdi-account-box',
    to: '',
    auth: []
  }
];

const getPages = (to: string) => {
  router.push(to);
};
</script>
<template>
  <div>
    <!-- For Admin -->
    <v-list density="compact">
      <v-list-item v-for="(item, i) in items" :key="i" :value="item">
        <v-list-item-title class="d-flex align-center">
          <v-icon color="primary" :icon="item.icon" class="mr-2"></v-icon>
          <span @click="getPages(item.to)" class="cursor-pointer">
            {{ $t(item.label) }}
          </span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <!-- For User -->
    <v-treeview :items="itemsUser" item-value="label" hide-actions indent-lines separate-roots open-on-click>
      <template v-slot:prepend="{ item }">
        <v-icon color="primary" :icon="item.icon"></v-icon>
      </template>
      <template v-slot:title="{ item }">
        {{ $t(item.title) }}
      </template>
    </v-treeview>
  </div>
</template>
<style lang="scss" scoped></style>
