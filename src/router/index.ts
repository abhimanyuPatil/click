import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Auth from "../views/Auth.vue";
import HomeNormalGrid from "../views/Home-Normal-Grid.vue";
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
    component: HomeNormalGrid,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
