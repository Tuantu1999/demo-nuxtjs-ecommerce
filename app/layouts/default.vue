<script setup lang="ts">
import CustomHeader from './custom-header.vue';
import Sidebar from './sidebar.vue';
</script>
<template>
  <div class="app-layout">
    <header class="header">
      <CustomHeader />
    </header>

    <div class="body d-flex">
      <aside class="sidebar">
        <Sidebar />
      </aside>
      <v-divider class="mx-3" vertical></v-divider>

      <main class="content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: fit-content;
  width: 100%;
}
.sidebar {
  width: 20%;
  height: 100vh;
}
.content {
  width: 80%;
}
</style>
