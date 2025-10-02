import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Products from "@/views/Products.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import SignUp from "@/views/SignUp.vue";

// 페이지 주소 연결
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/products", component: Products },
  { path: "/products/:name/:price", component: ProductDetail },
  { path: "/signup", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes, //경로 정의
});

export default router;
