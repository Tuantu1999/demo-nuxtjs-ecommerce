<script setup lang="ts">
definePageMeta({
  layout: 'login'
});

const store = useAuthStore();

const isDisable = computed(() => {
  return !store.email || !store.password;
});

const backToLogin = () => {
  window.history.back();
};

const register = () => {
  //
};

onMounted(() => {
  store.initStore();
});
</script>
<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-lg" elevation="10">
          <v-btn icon="mdi-arrow-left" elevation="0" @click="backToLogin()"></v-btn>
          <v-card-title class="d-flex justify-center">
            <v-avatar size="64">
              <v-img src="@/assets/logo.jpg" alt="Logo" />
            </v-avatar>
          </v-card-title>

          <v-card-subtitle class="text-center text-h6 font-weight-bold">
            {{ $t('login.new_password') }}
          </v-card-subtitle>

          <v-card-text class="text-center text-body-2 mb-4"> {{ $t('login.set_new_password') }} </v-card-text>

          <v-form>
            <v-text-field
              label="Your Email / Phone Number"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :rules="[$rules.required]"
              v-model="store.email"
            />

            <v-text-field
              label="Password"
              prepend-inner-icon="mdi-lock"
              type="password"
              variant="outlined"
              density="comfortable"
              :rules="[$rules.required, $rules.minLength(8)]"
              v-model="store.password"
            />

            <v-btn
              block
              color="primary"
              class="mt-4"
              size="large"
              :disabled="isDisable"
              :loading="store.loading"
              @click="register()"
              >{{ $t('login.verify') }}</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
