<template>
  <div class="row items-center" style="width: 100%;">
    <div class="col-6">
      <pieChart />
    </div>
    <div class="col-6">
      <barChart/>
    </div>
  </div>
</template>

<script>
import pieChart from "src/components/charts/pieChart.vue";
import barChart from "src/components/charts/barChart.vue"

export default {
  name: "App",
  components: { pieChart, barChart },
};
</script>
