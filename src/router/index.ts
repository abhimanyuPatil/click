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
    path: "/home",
    component: Auth,
  },
  {
    path: "/home-1",
    component: HomeNormalGrid,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
