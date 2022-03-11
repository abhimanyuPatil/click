<template>
  <ion-app>
    <ion-router-outlet />
    <vue-progress-bar></vue-progress-bar>
  </ion-app>
</template>

<style>
html,
body {
  font-family: "Aileron", sans-serif;
}
</style>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance?.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
      internalInstance?.appContext.config.globalProperties.$Progress.finish();
    }, 3500);
  },
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
