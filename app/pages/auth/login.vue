<script setup lang="ts"></script>
<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-lg" elevation="10">
          <v-card-title class="d-flex justify-center">
            <v-avatar size="64">
              <v-img src="@/assets/logo.jpg" alt="Logo" />
            </v-avatar>
          </v-card-title>

          <v-card-subtitle class="text-center text-h6 font-weight-bold"> Welcome back to E-Com! </v-card-subtitle>
          <p>{{ $t('hello') }}</p>
          <v-card-text class="text-center text-body-2 mb-4"> Sign in to continue </v-card-text>

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
              <v-checkbox label="Remember Me" class="pa-0" />
              <!-- <NuxtLink to="/forgot-password" class="text-caption text-blue-darken-2"> Forgot Password? </NuxtLink> -->
            </v-row>

            <v-btn block color="primary" class="mt-4" size="large">Login</v-btn>
          </v-form>

          <div class="text-center my-4">OR</div>

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
            Don’t have an account?
            <NuxtLink to="/auth/register" class="text-blue-darken-2 font-weight-medium">Register</NuxtLink>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
