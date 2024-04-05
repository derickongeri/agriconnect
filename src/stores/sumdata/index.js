import { defineStore } from "pinia";
import useSupabase from "src/boot/supabase";

const { supabase } = useSupabase();

export const useSumStore = defineStore({
  id: "fetchSumStore",
  state: () => ({
    userSelection: {
      grantee: "helvetas",
      code: "code11",
      year: "20202023",
      quota: "aprjun",
      aggregate: "ct"
    },
    atYears: {
      at_year1: '2022',
      at_year2: "2023"
    },
    tableType: "ct",
    currentTab: "pirs",
    sumsIndicators: null,
    selectedGrantee: "helvetas",
    selectedIndicatorCode: "code11",
    selectedYear: "2020",
    selectedQuota: "janmar",
    districts: null,
    ctTable: null,
  }),
  getters: {
    getCurrentTab: (state) => state.currentTab,
    getUserSelection: (state) => state.userSelection,
    getSumsIndicators: (state) => state.sumsIndicators,
    getSelectedGrantee: (state) => state.selectedGrantee,
    getSelectedYear: (state) => state.selectedYear,
    getSelectedQuota: (state) => state.selectedQuota,
    getSelectedTable: (state) => state.tableType,
    getctTable: (state) => state.ctTable,
    getAtYear: (state) => state.atYears,
  },
  actions: {
    async fetchDistrictData() {
      let wfsUrl =
        "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3ADistricts&outputFormat=application%2Fjson";

      let response = await axios.get(wfsUrl);

      this.districts = response;
    },

    setDistrictData(val) {
      this.districts = val;
    },

    async fetchSumsIndicators() {
      try {
        let { data: codes_sums_indicators, error } = await supabase
          .from("codes_sums_indicators")
          .select("*");
        this.sumsIndicators = codes_sums_indicators;
      } catch (error) {
        console.log(error);
      }
    },

    setCurrentTab(value) {
      this.currentTab = value;
      console.log(this.currentTab);
    },

    setTableType(value) {
      this.tableType =value
    },

    setSelectedIndicatorCode(value) {
      this.userSelection.code = value;
      console.log(this.selectedIndicatorCode);
    },

    setSelectedGrantee(value) {
      this.userSelection.grantee = value;
      console.log(this.selectedGrantee);
    },

    setSelectedYear(value) {
      this.userSelection.year = value;
    },

    setSelectedQuota(value) {
      this.userSelection.quota = value;
    },

    setSelectedAggregate(value) {
      this.userSelection.aggregate = value
    },

    setDefaultUserSelection(value) {
      this.userSelection.year = value.year
      this.userSelection.aggregate = value.aggregate
    },

    setCTtable(value) {
      this.ctTable=value
    },

    setATyears(value){
      this.atYears = value
    }
  },
});
