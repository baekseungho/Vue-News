import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
export default {
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
};
