import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Tab1Page from "../views/Tab1Page.vue";
import Auth from "../views/Auth.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Auth,
    // children: [
    //   {
    //     path: '',
    //     redirect: '/tabs/tab1'
    //   },
    //   {
    //     path: 'tab1',
    //     component: () => import('@/views/Tab1Page.vue')
    //   },
    //   {
    //     path: 'tab2',
    //     component: () => import('@/views/Tab2Page.vue')
    //   },
    //   {
    //     path: 'tab3',
    //     component: () => import('@/views/Tab3Page.vue')
    //   }
    // ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
