import { defineStore } from "pinia";

export const counter = defineStore("counter", {
  state: () => ({
    num: 0,
  }),
  getters: {
    numPlusone() {
      return this.num + 1;
    },
  },
  actions: {
    inc() {
      this.num++;
    },
    dec() {
      this.num--;
    },
  },
});
