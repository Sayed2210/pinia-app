<template>
  <div class="home">
    <h1>Pinia App</h1>
    <h2>Number {{ num }}</h2>
    <h2>Getter {{ numPlusOne }}</h2>
    <button @click="inc">++</button>
    <button @click="dec">--</button>
    <button @click="store.$reset">reset</button>
  </div>
</template>
<!-- option api
<script>
import { counter } from "@/store/counter";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(counter, ["num"]),
    storegetter() {
      return counter().numPlusone;
    },
  },
  methods: {
    ...mapActions(counter, ["inc", "dec"]),
  },
};
</script> -->

<!-- com api -->
<script setup>
import { counter } from "@/store/counter";
import { storeToRefs } from "pinia";
const store = counter();
const { num, numPlusOne } = storeToRefs(store);
const inc = store.inc;
const dec = store.dec;
</script>
