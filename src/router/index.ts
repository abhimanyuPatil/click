import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Auth from "../views/Auth.vue";
import HomeNormalGrid from "../views/Home-Normal-Grid.vue";
import Home from "../views/Home.vue";
import HomeRegularGrid from "../views/Home-Regular-Grid.vue";
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
    path: "/home-regular",
    component: HomeRegularGrid,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
