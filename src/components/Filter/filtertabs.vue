<template>
  <div>
    <q-splitter
      class="filters-lg"
      v-model="splitterModellg"
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
                style="border-radius: 10px; min-width: 30%"
              >
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

    <q-splitter
      class="filters-md"
      v-model="splitterModel"
      reverse
      style="height: 100%"
      separator-class="bg-accent"
      separator-style="width: 0px"
      :limits="[80]"
    >
      <template v-slot:before>
        <div
          style="min-height: 100vh; min-width: 100%; background-color: #eff1f2"
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
            <q-item
              v-for="tabItem in tabs"
              :key="tabItem.name"
              :clickable="true"
              v-ripple
              class="q-mb-sm"
              :class="{ 'q-tab-active': tab === tabItem.name }"
              @click="setActiveTab(tabItem.name)"
              style="border-radius: 0px"
            >
              <q-item-section class="">
                <q-btn
                  dense
                  flat
                  round
                  :color="tab === tabItem.name ? 'white' : 'grey-8'"
                  :icon="tabItem.icon"
                >
                  <!-- <q-icon
                    class="q-ma-xs"
                    :color="tab === tabItem.name ? 'white' : 'grey-8'"
                    :name="tabItem.icon"
                  /> -->
                  <!-- {{ tabItem.label }} -->
                  <q-tooltip anchor="center right" self="center start">
                    {{ tabItem.label }}
                  </q-tooltip>
                </q-btn>
              </q-item-section>
            </q-item>
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

          <q-tab-panel class="" name="infrastructure">
            <infrustructurePannel />
          </q-tab-panel>

          <q-tab-panel name="tarura">
            <taruraPannel />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>

    <div @touchstart.stop @mousedown.stop class="row mobile-element bg-white mobile-tabs" style="width: 100vw">
      <div v-if="tabPannel" class="row">
        <q-space />
        <q-btn
          flat
          round
          icon="mdi-chevron-down"
          @click="tabPannel = !tabPannel"
        />
      </div>
      <div v-if="!tabPannel" class="column items-center">
        <q-list dense style="width: 40%; max-height: 16px; border-top: 4px solid grey">
          <q-item clickable v-ripple @click="tabPannel = !tabPannel">

          </q-item>
        </q-list>
      </div>
      <q-scroll-area
        v-if="tabPannel"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="height: 500px; min-width: 300px"
      >
        <q-tab-panels
          class=""
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color: #ffffff00"
        >
          <q-tab-panel style="background-color: #ffffff00" name="pirs">
            <sumsPannel />
          </q-tab-panel>

          <q-tab-panel class="" name="infrastructure">
            <infrustructurePannel />
          </q-tab-panel>

          <q-tab-panel name="tarura">
            <taruraPannel />
          </q-tab-panel>
        </q-tab-panels>
      </q-scroll-area>
    </div>

    <q-footer class="mobile-element q-py-sm bg-white" style="border-radius: 10px ;" bordered>
      <!-- <q-tab-panels
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

        <q-tab-panel class="" name="infrastructure">
          <infrustructurePannel />
        </q-tab-panel>

        <q-tab-panel name="tarura">
          <taruraPannel />
        </q-tab-panel>
      </q-tab-panels> -->
      <q-tabs
        switch-indicator
        indicator-color="transparent"
        inline-label
        no-caps
        active-color="white"
        active-bg-color="primary"
        class="row justify-between text-grey-9"
        style="min-width: 100vw"
      >
        <q-item
          v-for="tabItem in tabs"
          :key="tabItem.name"
          :clickable="true"
          v-ripple
          class="col"
          :class="{ 'q-tab-active-mobile': tab === tabItem.name }"
          @click="
            setActiveTab(tabItem.name);
            tabPannel = true;
          "
          style="border-radius: 0px"
        >
          <q-item-section class="">
            <q-btn
              dense
              flat
              :color="tab === tabItem.name ? 'primary' : 'grey-8'"
            >
              <q-icon
                class="q-ma-xs"
                :color="tab === tabItem.name ? 'primary' : 'grey-8'"
                :name="tabItem.icon"
              />
              <!-- {{ tabItem.label }} -->
            </q-btn>
          </q-item-section>
        </q-item>
      </q-tabs>
    </q-footer>
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
      splitterModel = ref(85),
      splitterModellg = ref(70),
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
      splitterModellg,
      setActiveTab,
      tabPannel: ref(true),
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

.q-tab-active-mobile {
  background-color: #8bcc0046;
  color: rgb(73, 73, 73);
  padding: 4px;
}
</style>
