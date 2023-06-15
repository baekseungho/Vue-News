<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(function (response) {
        console.log(response);
        vm.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
