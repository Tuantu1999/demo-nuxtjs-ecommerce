<script setup lang="ts">
definePageMeta({
  layout: 'login'
});

const store = useAuthStore();

const backToLogin = () => {
  window.history.back();
};

const onVerify = () => {
  console.log('Verification initiated');
};
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
            {{ $t('login.forgot_password') }}
          </v-card-subtitle>

          <v-card-text class="text-center text-body-2 mb-4"> {{ $t('login.send_verification') }} </v-card-text>

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

            <v-btn
              block
              color="primary"
              class="mt-4"
              size="large"
              :disabled="!store.email"
              :loading="store.loading"
              @click="onVerify()"
              >{{ $t('login.verify') }}</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
