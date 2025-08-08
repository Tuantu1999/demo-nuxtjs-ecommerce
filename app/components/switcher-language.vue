<script setup lang="ts">
const { locale } = useI18n();

const SwitcherLanguage = (lang: 'en' | 'vi') => {
  locale.value = lang;
};
</script>
<template>
  <div class="d-flex">
    <v-img class="cursor-pointer" :width="25" contain src="@/assets/vi.jpg" @click="SwitcherLanguage('vi')"></v-img>
    <span class="mx-2">/</span>
    <v-img class="cursor-pointer" :width="25" contain src="@/assets/en.jpg" @click="SwitcherLanguage('en')"></v-img>
  </div>
</template>
