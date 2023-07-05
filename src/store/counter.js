import { defineStore } from "pinia";

export const counter = defineStore("counter", {
  state: () => ({
    num: 0,
  }),
  getters: {
    numPlusOne() {
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
