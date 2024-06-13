<template>
  <div class="q-pa-sm">
    <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
      inline
      
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref([]),
      options: [
        { label: 'Concrete', value: 'bat' },
        { label: 'Gravel', value: 'friend' },
        { label: 'DBST', value: 'bat' },
        { label: 'Earhen', value: 'friend' },
        { label: 'Non-Engineered', value: 'bat' }
      ]
    }
  }
}
</script>
