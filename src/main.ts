import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "@aacassandra/vue3-progressbar";

import { IonicVue } from "@ionic/vue";

import "../public/assets/css/style.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import VueVirtualScroller from "vue3-virtual-scroller";
import "vue3-virtual-scroller/dist/vue3-virtual-scroller.css";
import { store } from "./store/index";
import VueCustomTooltip, {
  TooltipOptions,
} from "@adamdehaven/vue-custom-tooltip";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const opt: TooltipOptions = {
  name: "VueCustomTooltip",
  color: "#fff",
  background: "#000",
  borderRadius: 100,
  fontWeight: 400,
};

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
