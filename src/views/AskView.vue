<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),

    // ...mapGetters({
    //   fetchedAsk: "fetchedAsk",
    // }),

    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
