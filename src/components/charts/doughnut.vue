<template>
    <div
    class="q-pa-md bg-white"
    style="
      width: 98%;
      height: 29vh;
      border: 0px solid rgb(160, 160, 160);
      position: relative;
    "
  >
  <Doughnut :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  props: {
    data: {
      type: Object,
      default: {
        labels: ["Adult Male", "Adult Female", "Youth Female", "Youth Male"],
        datasets: [
          {
            backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
            borderColor: "rgba(0, 0, 0, 0)",
            borderRadius: 0,
            borderWidth: 2,
            spacing: 0,
            cutout: "65%",
            radius: "80%",
            data: [40, 20, 80, 10],
          },
        ],
      },
    },
    options: {
      type: Object,
      default: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "left",
            labels: {
              usePointStyle: true,
            },
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
            align: "start",
          },
        },
      },
    },
  },
  data() {
    return {}
  }
}
</script>
