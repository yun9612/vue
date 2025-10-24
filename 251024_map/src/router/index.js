import Map_location from "@/views/Map_location.vue";
import Map_Marker from "@/views/Map_Marker.vue";
import Mapview from "@/views/Mapview.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Mapview },
  { path: "/mapmarker", component: Map_Marker },
  { path: "/maplocation", component: Map_location },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
