<script setup lang="ts">
import { useNoticeStore } from '@/stores/notice';

const store = useNoticeStore();
</script>
<template>
  <v-row no-gutters class="align-center">
    <v-col cols="1" class="d-flex justify-center">
      <v-img src="@/assets/icon-green.svg" alt="Logo" width="64px" height="64px" />
    </v-col>
    <v-col cols="9">
      <v-text-field
        append-inner-icon="mdi-magnify"
        density="compact"
        :label="$t('common.search')"
        variant="solo"
        hide-details
        single-line
      ></v-text-field>
    </v-col>
    <v-col cols="2" class="d-flex justify-space-between px-4">
      <v-icon color="primary" size="32" class="cursor-pointer">mdi-facebook-messenger</v-icon>
      <v-icon color="primary" size="32" class="cursor-pointer">mdi-bell</v-icon>
      <v-icon v-if="store.isHasNotice" color="primary" size="32" class="cursor-pointer">mdi-bell-badge</v-icon>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-icon icon="mdi-account-circle" v-bind="props" color="primary" size="32"></v-icon>
        </template>

        <v-list>
          <v-list-item>
            <switcher-language />
          </v-list-item>
          <v-list-item class="cursor-pointer">{{ $t('login.change_password') }}</v-list-item>
          <v-list-item class="cursor-pointer">
            {{ $t('common.logout') }}
            <v-icon>mdi-logout</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
  <v-divider></v-divider>
</template>
<style lang="scss" scoped></style>
