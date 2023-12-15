<template>
  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 100%"
      separator-class="bg-accent"
      separator-style="width: 0px"
    >
      <template v-slot:before>
        <div class="bg-grey-9" style="min-height: 100vh">
          <div
            class="row justify-center items-center text-h6 text-white"
            style="height: 6vh; background-color: #99ca3d"
          >
            <img src="~/src/assets/LOGO.png" style="width: 100%; height: 40%" />
          </div>
          <q-tabs
            v-model="tab"
            vertical
            switch-indicator
            active-color="grey-9"
            active-bg-color="grey-3"
            class="q-pt-xl text-grey-4 bg-grey-9"
          >
            <q-tab name="pirs" icon="mdi-bullseye-arrow" label="SUMS" />
            <q-tab
              name="infrastructure"
              icon="mdi-factory"
              label="Infrastructure"
            />
            <q-tab name="tarura" icon="mdi-road-variant" label="Tarura" />
            <q-tab name="" icon="mdi-nutrition" label="Nutrition" />
          </q-tabs>
          <q-space />
          <q-btn style="position: absolute; bottom: 0%" flat label="Homepage" />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          class="q-ml-lg"
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color: #ffffff00; max-width: 20vw; margin-top: 12%"
        >
          <q-tab-panel style="background-color: #ffffff00" name="pirs">
            <sumsPannel/>
          </q-tab-panel>

          <q-tab-panel name="infrastructure">
            <infrustructurePannel/>
          </q-tab-panel>

          <q-tab-panel name="tarura">
            <taruraPannel/>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import selectGrantee from 'src/Reusable/selectGrantee.vue'
import sumsForm from 'src/components/Forms/sumsForm.vue'
import infrustructureForm from 'src/components/Forms/infrastructureForm.vue'
import taruraForm from 'src/components/Forms/Tarura.vue'

import {useSumStore} from 'src/stores/sumdata/index.js'

export default {
  components: {
    granteeSelection: selectGrantee,
    sumsPannel: sumsForm,
    infrustructurePannel: infrustructureForm,
    taruraPannel: taruraForm
  },
  setup() {
    const store = useSumStore();

    const tab = ref("pirs"),
      splitterModel = ref(30)

    const currentTab = computed(() => {
      return tab.value
    })

    watch(currentTab, () => {
      console.log('current tab', currentTab.value)
      store.setCurrentTab(currentTab.value)
    })

    return {
      tab,
      splitterModel,
    };
  },
};
</script>

<style scoped>
.separator {
  background-color: none;
  border: none;
}
</style>
