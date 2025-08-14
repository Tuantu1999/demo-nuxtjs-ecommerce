<script setup lang="ts"></script>
<template>
  <div class="app-layout">
    <header class="header">Header</header>

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
  background-color: red;
  height: 60px;
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
