import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import Product from "@/views/Product.vue";
import User from "@/views/User.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/post/:postId", component: Post },
  { path: "/product/:id", component: Product },
  { path: "/user/:name", component: User },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
