<template>
  <div class="q-pa-lg">
    <div class="q-gutter-md">
      <div class="row items-center">
        <div class="col">No of Lanes</div>
        <div class="q-mx-md">
          <q-btn
            unelevated
            outline
            padding="none"
            color="primary"
            :icon="icon"
            ><q-menu
              :offset="[0, 5]"
              style="background: #00000000"
              anchor="top middle"
              self="bottom middle"
            >
              <div
                style="background: #00000000"
                class="row q-gutter-sm q-pa-xs"
              >
                <q-btn
                  v-close-popup
                  unelevated
                  size="sm"
                  padding="none"
                  color="grey-7"
                  icon="mdi-less-than-or-equal"
                  @click="setIcon('less-than-or-equal')"
                />
                <q-btn
                  v-close-popup
                  unelevated
                  size="sm"
                  padding="none"
                  color="grey-7"
                  icon="mdi-equal"
                  @click="setIcon('equal')"
                />
                <q-btn
                  v-close-popup
                  unelevated
                  size="sm"
                  padding="none"
                  color="grey-7"
                  icon="mdi-greater-than-or-equal"
                  @click="setIcon('greater-than-or-equal')"
                />
              </div> </q-menu
          ></q-btn>
        </div>
        <div class="col">
          <q-pagination
            v-model="current"
            outline
            max="2"
            color="primary"
            active-design="unelevated"
            active-color=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const current = ref(null),
      icon = ref("mdi-dots-vertical"),
      oparant = ref (null);

const setIcon = (val) => {
  if(val == 'equal'){
    icon.value = "mdi-equal"
  }else if(val == 'less-than-or-equal'){
    icon.value = "mdi-less-than-or-equal"
  }else{
    icon.value = "mdi-greater-than-or-equal"
  }
};
</script>
