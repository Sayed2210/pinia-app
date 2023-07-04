<template>
  <div class="home">
    <h1>Pinia App</h1>
    <h2>Number {{ num }}</h2>
    <h2>Getter {{ storegetter }}</h2>
    <button @click="inc">++</button>
    <button @click="dec">--</button>
  </div>
</template>
<!-- option api -->
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
</script>
