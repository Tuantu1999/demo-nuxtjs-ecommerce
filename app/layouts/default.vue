<script setup lang="ts">
import CustomHeader from './custom-header.vue';
</script>
<template>
  <div class="app-layout">
    <header class="header">
      <CustomHeader />
    </header>

    <div class="body d-flex">
      <aside class="sidebar">Sidebar</aside>

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
  background-color: yellow;
  width: 20%;
  height: 100%;
}
.content {
  width: 80%;
}
</style>
