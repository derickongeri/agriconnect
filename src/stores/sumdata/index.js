import { defineStore } from "pinia";

export const useSumStore = defineStore({
  id: "fetchSumStore",
  state: () => ({
    userSelection: {
      selected_grantee: "",
      selected_sums_response: null,
      selected_year: null,
      selected_quota: null
    },
    currentTab: "pirs",
  }),
  getters: {
    getCurrentTab: (state) => state.currentTab,
    getUserSelection: (state) => state.userSelection
  },
  actions: {
    setCurrentTab(value) {
      this.currentTab = value
      console.log(this.currentTab)
    },
  },
});
