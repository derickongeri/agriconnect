<template>
  <q-page class="page-body">
    <div
      class="page-bg"
      style="position: absolute; min-width: 100vw; min-height: 100vh"
    >
      <div
        class="login-outer absolute-center"
        style="min-width: 40vw; min-height: 65vh; border-radius: 20px"
      >
        <div
          class="text-center"
          style="position: relative; width: 65%; margin:auto"
        >
          <img
            class="q-my-lg"
            src="src/assets/LOGO-AGRI-CONNECT.png"
            style="width: 65%"
          />

          <div class="q-mt-lg text-h5 text-white" style="font-weight: 700">
            Create Account
          </div>

          <div style="margin: auto; max-width: 300px" class="q-py-lg">
            <div class="text-caption text-left text-white">Full Name:</div>
            <q-input
              class="q-px-none"
              keep-color
              style="max-width: 300px"
              v-model="userFullName"
              dense
              outlined
              color="grey-4"
              bg-color="grey-4"
            />
            <div class="text-caption text-left text-white q-mt-md">
              Email Address:
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
              Create Password:
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

            <div class="text-caption text-left text-white q-mt-md">
              Confirm Password:
            </div>

            <q-input
            class="q-mb-md"
              dense
              outlined
              keep-color
              color="grey-4"
              bg-color="grey-4"
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  size="xs"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-btn
              style="width: 300px"
              no-caps
              class="q-mt-lg"
              color="primary"
              label="Sing Up"
            />

            <div class="text-caption text-center text-white q-my-xs">
              Already registered?
              <router-link to="login" style="text-decoration: none">
                <span class="text-primary">Login</span>
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
  userFullName = ref(""),
  isPwd = ref(true),
  email = ref("");
</script>

<style scoped>
.page-bg {
  background-image: url("src/assets/bgImg2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-outer {
  background-color: #026a37;
}
</style>
