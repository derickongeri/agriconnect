<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      reverse
      style="height: 100%"
      separator-class="bg-accent"
      separator-style="width: 0px"
      :limits="[65]"
    >
      <template v-slot:before>
        <!-- <div
          style="min-height: 100vh; min-width: 200px; background-color: #eff1f2"
        >
          <q-tabs
            vertical
            switch-indicator
            indicator-color="transparent"
            inline-label
            no-caps
            active-color="white"
            active-bg-color="primary"
            class="q-pt-xl text-grey-9"
          >
            <div class="q-pa-sm" style="max-width: 250px">
              <q-list>
                <q-item
                  v-for="tabItem in tabs"
                  :key="tabItem.name"
                  :clickable="true"
                  v-ripple
                  class="q-mb-sm"
                  :class="{ 'q-tab-active': tab === tabItem.name }"
                  @click="setActiveTab(tabItem.name)"
                  style="border-radius: 10px"
                >
                  <q-item-section  avatar>
                    <q-icon
                      :color="tab === tabItem.name ? 'white' : 'grey-8'"
                      :name="tabItem.icon"
                    />
                  </q-item-section>
                  <q-item-section class="text-subtitle2">{{
                    tabItem.label
                  }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tabs>
          <q-space />
          <q-btn style="position: absolute; bottom: 0%" flat label="Homepage" />
        </div> -->
        <div
          style="min-height: 100vh; min-width: 150px; background-color: #eff1f2"
        >
          <q-tabs
            vertical
            switch-indicator
            indicator-color="transparent"
            inline-label
            no-caps
            active-color="white"
            active-bg-color="primary"
            class="q-pt-xl text-grey-9"
          >
            <div class="q-pa-sm">
              <q-item
                v-for="tabItem in tabs"
                :key="tabItem.name"
                :clickable="true"
                v-ripple
                class="q-mb-sm"
                :class="{ 'q-tab-active': tab === tabItem.name }"
                @click="setActiveTab(tabItem.name)"
                style="border-radius: 10px; min-width:30%"
              >
                <!-- <q-item-section  avatar>
                    <q-icon
                      :color="tab === tabItem.name ? 'white' : 'grey-8'"
                      :name="tabItem.icon"
                    />
                  </q-item-section> -->
                <q-item-section class="text-subtitle2">
                  <div class="row items-center">
                    <q-icon
                    class="q-mr-xs"
                    :color="tab === tabItem.name ? 'white' : 'grey-8'"
                      :name="tabItem.icon"
                    />
                    {{ tabItem.label }}
                  </div>
                </q-item-section>
              </q-item>
            </div>
          </q-tabs>
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          class=""
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color: #ffffff00; margin-top: 12%"
        >
          <q-tab-panel style="background-color: #ffffff00" name="pirs">
            <sumsPannel />
          </q-tab-panel>

          <q-tab-panel class="" style="max-width: 24vw" name="infrastructure">
            <infrustructurePannel />
          </q-tab-panel>

          <q-tab-panel name="tarura">
            <taruraPannel />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import selectGrantee from "src/Reusable/selectGrantee.vue";
import sumsForm from "src/components/Forms/sumsForm.vue";
import infrustructureForm from "src/components/Forms/infrastructureForm.vue";
import taruraForm from "src/components/Forms/Tarura.vue";

import { useSumStore } from "src/stores/sumdata/index.js";

export default {
  components: {
    granteeSelection: selectGrantee,
    sumsPannel: sumsForm,
    infrustructurePannel: infrustructureForm,
    taruraPannel: taruraForm,
  },
  setup() {
    const store = useSumStore();

    const tab = ref(store.getCurrentTab),
      splitterModel = ref(70),
      tabs = ref([
        { name: "pirs", label: "SUMS", icon: "mdi-bullseye-arrow" },
        {
          name: "infrastructure",
          label: "INFRASTRUCTURE",
          icon: "mdi-factory",
        },
        { name: "tarura", label: "TARURA", icon: "mdi-road-variant" },
        { name: "", label: "Nutrition", icon: "mdi-rice" },
      ]);

    const currentTab = computed(() => {
      return tab.value;
    });

    const setActiveTab = (tabName) => {
      tab.value = tabName;
    };

    watch(currentTab, () => {
      console.log("current tab", currentTab.value);
      store.setCurrentTab(currentTab.value);
    });

    return {
      tab,
      tabs,
      splitterModel,
      setActiveTab,
    };
  },
};
</script>

<style scoped>
.separator {
  background-color: none;
  border: none;
}

.q-tab-active {
  background-color: #8bcc00;
  color: white;
}
</style>
