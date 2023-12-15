export const data = {
  labels: ["Adult Male", "Adult Female", "Youth Female", "Youth Male"],
  datasets: [
    {
      backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
      borderColor: "rgba(0, 0, 0, 0)",
      borderRadius: 5,
      borderWidth: 2,
      spacing: 0,
      cutout: "0",
      radius: "80%",
      data: [40, 20, 80, 10],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};
