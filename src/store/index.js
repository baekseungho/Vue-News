import Vuex from "vuex";
import Vue from "vue";

import mutations from "./mutations.js";
import actions from "./actions.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations,
  actions,
});
