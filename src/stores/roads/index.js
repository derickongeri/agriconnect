import { defineStore } from "pinia";
import { axios } from "src/boot/axios";

export const useRoadStore = defineStore({
  id: "fetchRoadsStore",
  state: () => ({
    roadFilters: {
      filterStatus: false,
      roadPhase: "All",
      roadClass: [],
      roadFund: [],
      raodStatus: null,
      noLanes: null,
    },
    class3filter: "",
    filterdFeatures: null,
  }),
  getters: {
    getRoadPhase: (state) => state.roadFilters.roadPhase,
    getRoadFilters: (state) => state.roadFilters,
    getFilteredFeatures: (state) => state.filterdFeatures
  },
  actions: {
    setRoadPhase(val) {
      this.roadFilters.roadPhase = val;
    },
    setRoadClass(val) {
      this.roadFilters.roadClass = val;
    },
    setRoadFund(val) {
      this.roadFilters.roadFund = val;
    },
    setRoadStatus(val) {
      this.roadFilters.raodStatus = val;
    },
    setFilterStatus() {
      this.roadFilters.filterStatus = true;
    },
    clearAllFilters() {
      this.roadFilters.filterStatus = false;
    },
    setFilterFeatures(val) {
      this.filterdFeatures = val;
    },
  },
});
