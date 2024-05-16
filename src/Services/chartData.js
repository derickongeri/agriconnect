const createPieChart = (obj, grantee) => {
  const { district, total, value, ...rest } = obj;

  const totalOtherValues = Object.keys(rest)
    .filter((key) => key !== grantee)
    .reduce((sum, key) => sum + rest[key], 0);

  const data = {
    labels: [grantee, "Other Grantees"],
    datasets: [
      {
        backgroundColor: ["#8BCC00", "#dce1de"],
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 0,
        borderWidth: 2,
        spacing: 0,
        cutout: "75%",
        radius: "90%",
        data: [rest[grantee], totalOtherValues],
      },
    ],
  };

  const options = {
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
        text: grantee,
        align: "start",
      },
    },
  };

  return {
    data,
    options,
  };
};

const createBarChart = (obj) => {
  const { district, total, value, ...rest } = obj;

  const labels = Object.keys(rest);
  const values = Object.values(rest);

  const labelValuePairs = labels.map((label, index) => ({
    label,
    value: values[index],
  }));

  labelValuePairs.sort((a, b) => b.value - a.value);

  const sortedLabels = labelValuePairs.map((pair) => pair.label);
  const sortedValues = labelValuePairs.map((pair) => pair.value);

  return {
    labels: sortedLabels,
    datasets: [
      {
        backgroundColor: ["#364958", "#3B6064", "#55828B", "#87BBA2"],
        borderColor: "rgba(0, 0, 0, 0)",
        borderRadius: 5,
        borderWidth: 2,
        spacing: 0,
        cutout: "50%",
        radius: "75%",
        data: sortedValues,
      },
    ],
  };
};

export function fadataProcessor(results, grantee) {
  let listData = null;
  let cardData = null;
  let barchartData = null;
  let peichartData = null;

  listData = results.filter(
    (obj) =>
      obj.district !== "Total" && obj.district !== "All (National Coverage)"
  );
  listData.sort((a, b) => b[grantee] - a[grantee]);
  listData.filter((obj) => obj[grantee] !== 0);
  cardData = results.find((obj) => obj.district === "Total");
  barchartData = createBarChart(cardData);
  peichartData = createPieChart(cardData, grantee);

  return {
    listData,
    cardData,
    barchartData,
    peichartData,
  };
}
