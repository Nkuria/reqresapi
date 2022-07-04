<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
     ...mapMutations(["setUser", "setToken"]), 
async login(e) {
      e.preventDefault();
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      let res = await response.json();

      this.setUser(this.email);
      this.setToken(res.token);
      this.$router.push("/");
    },
  },
};
</script>