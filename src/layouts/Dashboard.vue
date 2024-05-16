<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-white q-py-md">
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

        <q-btn class="q-mr-xl" unelevated round color="primary" label="DO">
          <q-menu anchor="bottom end" self="top right" :offset="[0, 12]">
            <q-list>
              <q-item clickable v-close-popup to="/upload">
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

        <!-- <q-btn
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
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted, onBeforeMount } from "vue";

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
