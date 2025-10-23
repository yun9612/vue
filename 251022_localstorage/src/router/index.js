import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Reserve from "@/views/Reserve.vue";
import Confirm from "@/views/Confirm.vue";
import Review from "@/views/Review.vue";

const routes = [
  { path: "/", component: Home, name: Home },
  { path: "/login", component: Login, name: Login },
  { path: "/signup", component: Signup, name: Signup },
  { path: "/reserve", component: Reserve, name: Reserve },
  { path: "/confirm", component: Confirm, name: Confirm },
  { path: "/review", component: Review, name: Review },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
