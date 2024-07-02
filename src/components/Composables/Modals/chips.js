export const infGroups = [
  {
    icon: "factory",
    name: "Processing/storage",
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
    icon: "mdi-sprout",
    name: "Nursery",
    color: "light-green-14",
    value: "Nursery",
  },
  {
    icon: "water_drop",
    name: "Water/Irrigation",
    color: "blue-7",
    value: "Water",
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
    icon: "school",
    name: "Leaning center",
    color: "blue-grey-4",
    value: "Learning",
  },
  {
    icon: "fax",
    name: "Office",
    color: "light-blue-10",
    value: "Office",
  },
];

export const Processing = [
  {
    icon: "factory",
    name: "Processing Hub",
    color: "pink",
    value: "Processing",
  },
  {
    icon: "factory",
    name: "Tea Factory",
    color: "brown-7",
    value: "Tea Factory",
  },
  {
    icon: "mdi-silo",
    name: "Storage",
    color: "blue-grey",
    value: "Onion Storage",
  },
  {
    icon: "mdi-package",
    name: "Quality Assurance/Preservation",
    color: "primary",
    value: "Quality Assurance and Preservation",
  },
  {
    icon: "mdi-factory",
    name: "Pulping Unit",
    color: "lime-10",
    value: "Rehabilitation of the Central Pulping Unit",
  },
  {
    icon: "mdi-solar-power-variant",
    name: "Solar Dryers",
    color: "amber-7",
    value: "Solar Dryers",
  },
  {
    icon: "mdi-mortar-pestle",
    name: "Miller/Grinder/Mixer",
    color: "light-blue-10",
    value: "Poultry Feeds and Grinder Mixer",
  },
  {
    icon: "mdi-leaf",
    name: "Tea Leaf Scanner",
    color: "green-10",
    value: "Tea Leaf Analysis Scanner",
  },
  {
    icon: "mdi-coffee-maker",
    name: "Coffee Cupping Equipment",
    color: "red-4",
    value: "Coffee Cupping Lab Equipment",
  },
];

export const Digital = [
  {
    icon: "wifi",
    name: "Communication",
    color: "light-blue-10",
    value: "Communication and Digital Infrastructure",
  },
  {
    icon: "thermostat",
    name: "Weather Station",
    color: "pink",
    value: "Weather Station",
  },
];
export const Equipment = [
  {
    icon: "mdi-greenhouse",
    name: "Screen House",
    color: "positive",
    value: "Screen House",
  },
  {
    icon: "precision_manufacturing",
    name: "Pilate Machines",
    color: "pink",
    value: "Pilate Machines",
  },
  {
    icon: "mdi-gas-burner",
    name: "Biogas Digester",
    color: "lime-8",
    value: "Biogas Digester",
  },
  {
    icon: "mdi-landslide",
    name: "Soil Scanners",
    color: "light-blue-10",
    value: "Soil Scanners",
  },
  {
    icon: "water",
    name: "Moisture Meters",
    color: "light-blue-12",
    value: "Moisture Meters",
  },
];
export const Learning = [
  {
    icon: "tour",
    name: "Demonstration Plot",
    color: "light-blue-10",
    value: "Demonstration Plot",
  },
  {
    icon: "local_library",
    name: "Farmer Field Schools",
    color: "light-green-14",
    value: "Farmer Field Schools",
  },
  {
    icon: "hub",
    name: "Learning Hub",
    color: "pink",
    value: "Learning Hub",
  },
  {
    icon: "science",
    name: "Fertilizer Trial",
    color: "orange",
    value: "Fertilizer Trial",
  },
];
export const Market = [
  {
    icon: "payments",
    name: "Market Centre",
    color: "pink",
    value: "Market Centre",
  },
];
export const Nursery = [
  {
    icon: "mdi-tree",
    name: "Tea Mother Bush",
    color: "lime-8",
    value: "Tea Mother Bush",
  },
  {
    icon: "mdi-sprout",
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
    value: "Project Office",
  },
  {
    icon: "groups",
    name: "Cooperative Office",
    color: "indigo",
    value: "Cooperative Office",
  },
];

export const Water = [
  {
    icon: "water",
    name: "Irrigation",
    color: "light-blue-5",
    value: "Irrigation Infrastructure",
  },
  {
    icon: "adjust",
    name: "Boreholes",
    color: "red-10",
    value: "Boreholes",
  },
  {
    icon: "mdi-solar-power-variant-outline",
    name: "Solar Powered Pump",
    color: "amber",
    value: "Solar Powered Pump",
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
