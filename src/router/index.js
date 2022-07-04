import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLogin from "../views/UserLogin.vue";
import UserWelcome from "../views/UserWelcome.vue"

const routes = [
 
  {
    path: "/",
    name: "Welcome",
    component: UserWelcome,
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
