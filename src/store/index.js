import Vuex from "vuex";
import Vue from "vue";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

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
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((response) => {
          console.log(response.data);
          context.commit("SET_NEWS", response.data);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then((response) => {
          console.log(response);
          commit("SET_JOBS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(function (response) {
          console.log(response);
          commit("SET_ASK", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
