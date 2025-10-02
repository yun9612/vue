import { createRouter, createWebHistory } from "vue-router";

import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import Login from "@/views/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/reser", component: Reser },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
