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
          style="position: relative; width: 65%; margin: auto"
        >
          <img
            class="q-mt-xl q-pt-md"
            src="src/assets/LOGO-AGRI-CONNECT.png"
            style="width: 65%"
          />

          <div class="q-mt-lg text-h5 text-white" style="font-weight: 700">
            Create Account
          </div>

          <q-form @submit.prevent="">
            <div style="margin: auto; max-width: 300px" class="q-py-lg">
              <div class="text-caption text-left text-white">Full Name:</div>
              <div class="row justify-between q-gutter-x-md">
                <div class="col">
                  <q-input
                    class="q-px-none"
                    keep-color
                    style="max-width: 300px"
                    v-model="form.firstName"
                    label="first name"
                    dense
                    outlined
                    color="grey-4"
                    bg-color="grey-4"
                    lazy-rules
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is required *',
                    ]"
                  />
                </div>
                <div class="col">
                  <q-input
                    class="q-px-none"
                    keep-color
                    style="max-width: 300px"
                    v-model="form.lastName"
                    label="last name"
                    dense
                    outlined
                    color="grey-4"
                    bg-color="grey-4"
                    lazy-rules
                    :rules="[
                      (val) => (val && val.length > 0) || 'Field is required *',
                    ]"
                  />
                </div>
              </div>

              <div class="text-caption text-left text-white q-mt-md">
                Email Address:
              </div>
              <q-input
                class="q-px-none"
                keep-color
                style="max-width: 300px"
                v-model="form.email"
                dense
                outlined
                color="grey-4"
                bg-color="grey-4"
                type="email"
                :label="$t('email address')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required *',
                ]"
              />
              <div class="text-caption text-left text-white q-mt-md">
                Create Password:
              </div>
              <q-input
                :type="isPwd ? 'password' : 'text'"
                outlined
                keep-color
                color="grey-4"
                bg-color="grey-4"
                dense
                v-model="form.password"
                :label="$t('password')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required *',
                ]"
                ><template v-slot:append>
                  <q-icon
                    size="xs"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>

              <div class="text-caption text-left text-white q-mt-md">
                Confirm Password:
              </div>

              <q-input
                :type="isPwd ? 'password' : 'text'"
                outlined
                keep-color
                color="grey-4"
                bg-color="grey-4"
                dense
                v-model="confirmedpassword"
                :label="$t('password')"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Field is required *',
                  (val) => val === form.password || 'passwords should match',
                ]"
                ><template v-slot:append>
                  <q-icon
                    size="xs"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>

              <q-btn
                style="width: 300px"
                no-caps
                type="submit"
                class="q-mt-lg"
                color="primary"
                label="Sign Up"
                @click="handleRegister"
              />

              <div class="text-caption text-center text-white q-my-xs">
                Already registered?
                <router-link to="login" style="text-decoration: none">
                  <span class="text-primary">Login</span>
                </router-link>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import userAuthUser from "src/composables/userAuthdjango.js";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

const router = useRouter();
const { register } = userAuthUser();
const { notifyError, notifySuccess } = useNotify();

const confirmedpassword = ref("");
const isPwd = ref(true);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
});

//method to handle login and redirect to dashboard
const handleRegister = async () => {
  if (confirmedpassword.value === form.value.password) {
    try {
      await register(form.value);
      notifySuccess("Success");
      router.push({
        name: "loginPage",
        query: { email: form.value.email },
        // path: "/dashboard"
      });
    } catch (error) {
      notifyError(error);
    }
  } else {
    notifyError(`Your passwords do not match`);
  }
};
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
