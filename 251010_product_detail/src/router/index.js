import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/reser", component: Reser },
];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
