import { defineStore } from "pinia";
import { axios } from "src/boot/axios";

export const useInfrastructureStore = defineStore({
  id: "fectchInfrastructureStore",
  state: () => ({
    userSelection: {
      grantee: "",
      infrastructureClass: "",
      infrastructureType: "",
    },
    class3filter: "",
  }),
  getters: {
    getClassfilter: (state) => state.class3filter,
  },
  actions: {
    setClassfilter(val) {
      console.log(val)
      this.class3filter = val;
    },
  },
});
