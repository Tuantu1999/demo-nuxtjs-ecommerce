<script setup lang="ts">
const router = useRouter();

const forgotPwd = () => {
  router.push('/auth/forgot-password');
};
</script>
<template>
  <v-container class="fill-height mt-3" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-lg" elevation="10">
          <v-card-title class="d-flex justify-center">
            <v-avatar size="64">
              <v-img src="@/assets/logo.jpg" alt="Logo" />
            </v-avatar>
          </v-card-title>

          <v-card-subtitle class="text-center text-h6 font-weight-bold"> {{ $t('login.welcome') }} </v-card-subtitle>
          <v-card-text class="text-center text-body-2 mb-4"> {{ $t('login.continue') }} </v-card-text>

          <v-form>
            <v-text-field
              label="Your Email / Phone Number"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              density="comfortable"
              class="mb-3"
            />

            <v-text-field
              label="Password"
              prepend-inner-icon="mdi-lock"
              type="password"
              variant="outlined"
              density="comfortable"
            />

            <v-row justify="space-between" align="center">
              <v-checkbox :label="$t('login.remember')" class="pa-0" />
              <div class="text-caption text-blue-darken-2 cursor-pointer" @click="forgotPwd()">
                {{ $t('login.forgot_password') }}
              </div>
            </v-row>

            <v-btn block color="primary" class="mt-4" size="large">{{ $t('common.login') }}</v-btn>
          </v-form>

          <div class="text-center my-4">{{ $t('common.or') }}</div>

          <div class="d-flex justify-center">
            <v-btn icon variant="outlined" color="grey">
              <v-icon>mdi-apple</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" color="blue-darken-2" class="mx-2">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" color="red">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </div>

          <div class="text-center mt-6 text-caption">
            {{ $t('login.dont_have_account') }}
            <NuxtLink to="/auth/register" class="text-blue-darken-2 font-weight-medium">{{
              $t('login.register')
            }}</NuxtLink>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
