<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout class="position-relative">
      <div class="position-absolute top-10 right-0">
        <switcher-language />
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use '@/assets/style.scss';
</style>
