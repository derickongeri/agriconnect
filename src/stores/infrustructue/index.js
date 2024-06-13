
import { defineStore } from "pinia";
import { axios } from "src/boot/axios"

export const useInfrastructureStore = defineStore({
  id: "fectchInfrastructureStore",
  state: () => ({
    userSelection: {
      grantee: "",
      infrastructureClass: "",
      infrastructureType: "",
    },
    infFilters: {
      filterStatus: false,
      // grantee: "All",
      district: null,
      valueChain: null,
      costTZSmin: null,
      costTZSmax: null,
      costEURmin: null,
      costEURmax: null,
    },
    classfilter: { class3filter: "all", class4filter: null },
    districts: [],
    filteredFeatures: []
  }),
  getters: {
    getClassfilter: (state) => state.classfilter,
    getDistricts: (state) => state.districts,
    getInfFilters: (state) => state.infFilters,
    getFeatures: (state) => state.filteredFeatures
  },
  actions: {
    setClass3filter(val) {
      this.classfilter.class3filter = val;
    },
    setClass4filter(val) {
      this.classfilter.class4filter = val;
    },
    setDistricts(val) {
      this.districts = val;
    },
    setSelectedDistrict(val) {
      console.log(val);
      this.infFilters.district = val;
    },
    setSelectedcostTZ(min, max) {
      console.log(min, max);
      this.infFilters.costTZSmin = min;
      this.infFilters.costTZSmax = max;
    },
    setSelectedcostEUR(min, max) {
      console.log(min, max);
      this.infFilters.costEURmin = min;
      this.infFilters.costEURmax = max;
    },
    setValueChain(val) {
      this.infFilters.valueChain = val;
    },
    setFilterStatus(val) {
      this.infFilters.filterStatus = true;
    },
    clearAllFilters() {
      this.infFilters.filterStatus = false;
    },
    setFeatures(val) {
      this.filteredFeatures = val
    }
  },
});
