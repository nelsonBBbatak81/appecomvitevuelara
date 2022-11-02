import "./bootstrap";
import "../css/app.css";
import router from "./router/index";
import Layout from "./layout/Layout.vue";
import Navigation from "./components/Navigation.vue";
import FooterContent from "./components/Footer/Footer.vue";
import Toaster from "@meforma/vue-toaster";
import { createPinia } from "pinia";

// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-bundler";

const pinia = createPinia();
const app = createApp({});

// registerBaseComponents(app);

app.component("nav-bar", Navigation);
app.component("footer-content", FooterContent);
app.component("layout-component", Layout);

app.use(router);
app.use(pinia);
app.use(Toaster);

app.mount("#app");
