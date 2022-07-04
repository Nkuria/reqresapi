<template>
  <div>
    <h1>Welcome</h1>
    <p v-if="!isLoggedIn">Login to view all users</p>
    <router-link v-if="!isLoggedIn" to="/login"><button>Login</button></router-link>
     <ul v-if="isLoggedIn" v-for="user in users" v-bind:key="user.id">
      <li>{{ user.email }}</li>
      <p>{{ user.first_name }}</p>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: []
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {

    async getUsers() {
      

      try {
        const response = await fetch("https://reqres.in/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let res = await response.json();
        console.log(res)
        this.users = res.data;
      } catch (error) {
        console.log(error);
      }
    },


  },

  created() {
    this.getUsers();

  }

};
</script>