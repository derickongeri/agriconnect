<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-white q-py-md">
      <q-toolbar>
        <q-toolbar-title>
          <img class="q-pl-md" src="~src/assets/LOGO-AGRI-CONNECT.png" style="width: 20%" />
          <img
            src="~src/assets/sponsors.svg"
            class="q-pl-md q-pb-xs"
            style="width: 20%"
          />
        </q-toolbar-title>

        <q-tabs
          class="q-mr-lg text-grey-9"
          no-caps
          dense
          active-color="primary"
        >
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/dashboard" label="Dashboard" />
        </q-tabs>

        <q-avatar class="q-mr-lg" color="light-green-10" text-color="white">J</q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
