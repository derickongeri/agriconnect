<template>
  <q-page class="page-body">
    <div
      class="page-bg"
      style="position: absolute; min-width: 100vw; min-height: 100vh"
    >
      <div
        class="login-outer absolute-center"
        style="width: 40vw; height: 55vh; border-radius: 20px"
      >
        <div
          class="text-center absolute-center"
          style="position: absolute; width: 65%;"
        >
          <img
            class="q-my-lg"
            src="src/assets/LOGO-AGRI-CONNECT.png"
            style="width: 65%"
          />

          <div class="q-mt-lg text-h5 text-white" style="font-weight: 700">
            Log In
          </div>

          <div style="margin: auto; max-width: 300px" class="q-pt-lg">
            <div class="text-caption text-left text-white">
              Username/Email Address
            </div>
            <q-input
              class="q-px-none"
              keep-color
              style="max-width: 300px"
              v-model="email"
              dense
              outlined
              color="grey-4"
              bg-color="grey-4"
              type="email"
            />
            <div class="text-caption text-left text-white q-mt-md">
              Password
            </div>
            <q-input
              v-model="password"
              dense
              outlined
              keep-color
              color="grey-4"
              bg-color="grey-4"
              type="password"
            />

            <div class="row items-center">
              <div class="text-caption text-left text-white q-my-md">
                <q-checkbox
                  class="q-px-none q-mx-mone text-caption"
                  keep-color
                  color="grey-4"
                  label="Remember me"
                  v-model="rememberMe"
                  size="xs"
                />
              </div>
              <q-space />

              <router-link
                to="home"
                style="text-decoration: none;"
              >
              <span class="text-primary" style="font-size: small;">Forgot password?</span>
            </router-link>

            </div>

            <q-btn
              style="width: 300px"
              no-caps
              color="primary"
              label="Log In"
            />

            <div class="text-caption text-center text-white q-my-xs">
              Not yet registered?
              <router-link
                to="signup"
                style="text-decoration: none;"
              >
              <span class="text-primary">Create an account</span>
            </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";

const password = ref(""),
  rememberMe = ref(false),
  email = ref("");
</script>

<style scoped>

</style>
