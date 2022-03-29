import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import UserPanel from "../views/User-Panel.vue";

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
    path: "/user-panel",
    component:UserPanel,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
