export const infGroups = [
  {
    icon: "fax",
    name: "Office",
    color: "light-blue-10",
    value: "Office",
  },
  {
    icon: "conveyor_belt",
    name: "Processing/Sorting/storage",
    color: "pink",
    value: "Processing",
  },
  {
    icon: "solar_power",
    name: "Farm Equipment",
    color: "amber-14",
    value: "Equipment",
  },
  {
    icon: "shopping_basket",
    name: "Market",
    color: "purple-14",
    value: "Market",
  },
  {
    icon: "rss_feed",
    name: "Digital Infrastructure",
    color: "cyan",
    value: "Digital",
  },
  {
    icon: "eco",
    name: "Nursery",
    color: "light-green-14",
    value: "Nursery",
  },
  {
    icon: "factory",
    name: "Plant/Machinery",
    color: "lime-7",
    value: "Machinery",
  },
  {
    icon: "school",
    name: "Leaning center",
    color: "blue-grey-14",
    value: "Learning",
  },
  {
    icon: "water_drop",
    name: "Water/Irrigation",
    color: "light-blue-11",
    value: "Water",
  },
];

export const processingChips = [
  {
    icon: "fax",
    name: "Project Office",
    color: "light-blue-10",
    value: "Office",
  },
  {
    icon: "conveyor_belt",
    name: "Processing/Sorting/storage",
    color: "pink",
    value: "Processing",
  },
  {
    icon: "solar_power",
    name: "Farm Equipment",
    color: "amber-14",
    value: "Equipment",
  },
  {
    icon: "shopping_basket",
    name: "Market",
    color: "purple-14",
    value: "Market",
  },
];

export const Digital = [
  {
    icon: "wifi",
    name: "Communication",
    color: "light-blue-10",
    value: "Office",
  },
  {
    icon: "thermostat",
    name: "Weather Station",
    color: "pink",
    value: "Processing",
  },
];
export const Equipment = [
  {
    icon: "compost",
    name: "Biogas Digester",
    color: "lime-8",
    value: "Office",
  },
  {
    icon: "water",
    name: "Moisture Meters",
    color: "light-blue-12",
    value: "Office",
  },
  {
    icon: "precision_manufacturing",
    name: "Pilate Machines",
    color: "pink",
    value: "Office",
  },
  {
    icon: "fence",
    name: "Screen House",
    color: "positive",
    value: "Office",
  },
  {
    icon: "satellite",
    name: "Soil Scanners",
    color: "light-blue-10",
    value: "Office",
  },
];
export const Learning = [
  {
    icon: "tour",
    name: "Demonstration Plot",
    color: "light-blue-10",
    value: "Office",
  },
  {
    icon: "local_library",
    name: "Farmer Field Schools",
    color: "light-green-14",
    value: "Processing",
  },
  {
    icon: "hub",
    name: "Learning Hub",
    color: "pink",
    value: "Processing",
  },
  {
    icon: "science",
    name: "Fertilizer Trial",
    color: "orange",
    value: "Processing",
  },
];
export const Market = [
  {
    icon: "payments",
    name: "Market Centre",
    color: "pink",
    value: "Processing",
  },
];
export const Nursery = [
  {
    icon: "conveyor_belt",
    name: "Tea Mother Bush",
    color: "lime-8",
    value: "Processing",
  },
  {
    icon: "eco",
    name: "Nursery",
    color: "light-green-14",
    value: "Nursery",
  },
];
export const Office = [
  {
    icon: "gite",
    name: "Project Office",
    color: "pink",
    value: "Processing",
  },
  {
    icon: "groups",
    name: "Cooperative Office",
    color: "indigo",
    value: "Office",
  },
];
export const Processing = [
  {
    icon: "fax",
    name: "Project Office",
    color: "light-blue-10",
    value: "Office",
  },
  {
    icon: "conveyor_belt",
    name: "Processing/Sorting/storage",
    color: "pink",
    value: "Processing",
  },
];
export const Water = [
  {
    icon: "water",
    name: "Irrigation",
    color: "light-blue-5",
    value: "Office",
  },
  {
    icon: "adjust",
    name: "Boreholes",
    color: "indigo",
    value: "Processing",
  },
];

export function fetchChip(attribute) {
  let chips;
  switch (attribute) {
    case "Equipment":
      return Equipment;
    case "Water":
      return Water;
    case "Processing":
      return Processing;
    case "Market":
      return Market;
    case "Office":
      return Office;
    case "Nursery":
      return Nursery;
    case "Learning":
      return Learning;
    case "Digital":
      return Digital;
    default:
      return infGroups;
  }
}
