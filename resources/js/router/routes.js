// Pages
import Index from "../pages/Index.vue";
import About from "../pages/About.vue";
import Home from "../pages/admin/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
    { path: "/", component: Index },
    { path: "/about", component: About },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/admin/home", component: Home },
];

export default routes;
