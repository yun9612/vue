// 페이지 가져오기
import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import AboutVue from "@/views/About.vue";
import LoginVue from "@/views/Login.vue";
// 페이지 주소와 연결
const routes = [
  { path: "/", component: HomeVue },
  { path: "/about", component: AboutVue },
  { path: "/login", component: LoginVue },
];
// 라우터 생성
const router = createRouter({ history: createWebHistory(), routes });

export default router;
