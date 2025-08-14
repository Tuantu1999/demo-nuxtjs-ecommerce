<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  if (typeof window === 'undefined') {
    isLoading.value = false;
    return;
  }
});
</script>
<template>
  <div>
    <p>This is home pages!</p>
  </div>
</template>
