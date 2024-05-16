import { colors } from "quasar";

export const data = {
  labels: ["Adult Male", "Adult Female", "Youth Female", "Youth Male"],
  datasets: [
    {
      backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
      borderColor: "rgba(0, 0, 0, 0)",
      borderRadius: 0,
      borderWidth: 2,
      spacing: 0,
      cutout: "65%",
      radius: "70%",
      data: [40, 20, 80, 10],
    },
  ],
};

export const bardata = {
  labels: [
    "Helvetas",
    "Viagro",
    "Rikolto",
    "Pdf",
    "Idh",
    "Trias",
    "SolidaridadCERT",
    "SolidaridadPACE",
  ],
  datasets: [
    {
      backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
      borderColor: "rgba(0, 0, 0, 0)",
      borderRadius: 5,
      borderWidth: 2,
      spacing: 0,
      cutout: "50%",
      radius: "65%",
      data: [80, 60, 50, 45, 40, 25, 20, 10],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "left",
      labels: {
        usePointStyle: true,
      },
    },
  },
};

export const baroptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
      inflateAmount: 0,
      borderRadius: 2,
      borderSkipped: false,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
      align: "start",
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};
