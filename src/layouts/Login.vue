<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white my-font text-white q-py-md">
      <q-toolbar>
        <q-toolbar-title>
          <img
            class="q-pl-md"
            src="~src/assets/LOGO-AGRI-CONNECT.png"
            style="width: 20%"
          />
          <img
            src="~src/assets/sponsors.svg"
            class="q-pl-md q-pb-xs"
            style="width: 20%"
          />
        </q-toolbar-title>

        <q-tabs
          class="q-mr-md text-grey-9"
          no-caps
          dense
          active-color="primary"
        >
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/dashboard" label="Dashboard" />
        </q-tabs>

        <q-btn
          v-if="user"
          class="q-mr-xl"
          unelevated
          round
          color="primary"
          :label="
            getInitials(
              user.firstName,
              user.lastName
            )
          "
        >
          <q-menu anchor="bottom end" self="top right" :offset="[0, 12]">
            <q-list>
              <q-item v-if="user.grantee !== ''" clickable v-close-popup to="/user/upload">
                <q-item-section>
                  <q-item-label>Upload Data</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon color="grey-7" name="mdi-cloud-upload" />
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon color="grey-7" name="mdi-logout" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          v-else
          class="q-mr-xl"
          unelevated
          round
          color="primary"
          icon="mdi-account"
        >
          <q-menu anchor="bottom middle" self="top middle">
            <q-list>
              <q-item clickable v-close-popup to="/User/login">
                <q-item-section>
                  <q-item-label>Login</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/User/signup">
                <q-item-section>
                  <q-item-label>Sign Up</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container class="my-font">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, defineComponent, ref, onBeforeMount } from "vue";

import userAuthUser from "src/composables/userAuthdjango";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const { logout, user } = userAuthUser();

    const { locale } = useI18n({ useScope: "global" });

    //const locale = ref($q.lang.getLocale())

    const rightDrawerOpen = ref(false);

    const matchMediaDesktop = ref(false),
      matchMediaMobile = ref(false);

    onBeforeMount(() => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    });

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Do you really want to leave?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: "login" });
      });
    };

    const getInitials = (first, last) => {
      const name = first + ` ` + last;

      // Split the name into parts based on spaces
      const nameParts = name.split(" ");

      // Initialize an empty string to store the initials
      let initials = "";

      // Iterate through each part of the name
      nameParts.forEach((part) => {
        // Take the first character of each part and add it to the initials string
        initials += part.charAt(0);
      });

      // Return the initials in uppercase
      return initials.toUpperCase();
    };

    return {
      currentPath: ref(router.currentRoute.value.path),
      handleLogout,
      user,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
        console.log(router.currentRoute.value.path);
      },
      link: ref("inbox"),
      toggleSettings: ref(false),
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "fr", label: "French" },
        // { value: "es-ES", label: "Spanish" },
        // { value: "sw", label: "Swahili" },
      ],
      tab: ref("images"),
      matchMediaDesktop,
      matchMediaMobile,
      getInitials,
    };
  },
};
</script>
