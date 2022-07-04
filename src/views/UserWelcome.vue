<template>
  <div>
    <h1>Welcome</h1>
    <router-link v-if="!isLoggedIn"  to="/login"><button>Login</button></router-link> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
     data() {
    return {
      property: 'Example property.'
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {

    async getUsers() {
      console.log('At this point, this.property is now reactive and propertyComputed will update.')

      try {
       const response = await fetch("https://reqres.in/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },  
      });
       let res = await response.json();
      console.log(res)
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