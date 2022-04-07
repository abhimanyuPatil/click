import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueCustomTooltip, {
  TooltipOptions
} from "@adamdehaven/vue-custom-tooltip";
import { IonicVue } from "@ionic/vue";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/display.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/typography.css";
import firebase from "firebase/compat/app";
import { createApp } from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import VueVirtualScroller from "vue3-virtual-scroller";
import "vue3-virtual-scroller/dist/vue3-virtual-scroller.css";
import "../public/assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index";
/* Theme variables */
import "./theme/variables.css";

const opt: TooltipOptions = {
  name: "VueCustomTooltip",
  color: "#fff",
  background: "#000",
  borderRadius: 100,
  fontWeight: 400,
};

const firebaseConfig = {
  apiKey: "AIzaSyCA_uv1YENK9xX96dBgOBN6lPHKTyITLHg",
  authDomain: "cllit-c33ca.firebaseapp.com",
  projectId: "cllit-c33ca",
  storageBucket: "cllit-c33ca.appspot.com",
  messagingSenderId: "629796329553",
  appId: "1:629796329553:web:793c9a65b7d7c039188070",
};
firebase.initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(VueVirtualScroller)
  .use(store)
  .use(VueCustomTooltip, opt)
  .use(VueProgressBar, {
    color: "rgb(99, 23, 167)",
    failedColor: "red",
    height: "2px",
  })
  .use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
  });

router.isReady().then(() => {
  app.use(VueCustomTooltip, opt);
  app.mount("#app");
});
