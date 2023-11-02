import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/style.sass";
import store from "./store";

createApp(App).use(store).mount("#app");
