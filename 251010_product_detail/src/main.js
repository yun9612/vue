// 사용 안함
import "./assets/main.css";
import "./assets/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
