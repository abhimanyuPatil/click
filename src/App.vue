<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
html,
body {
  font-family: Aileron, sans-serif
}
</style>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
//import { BoxIcons } from 'boxicons/css';

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
