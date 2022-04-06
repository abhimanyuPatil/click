import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import ResetPassword from "../views/ResetPassword.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/forgotPassword/:token",
    component: ResetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
