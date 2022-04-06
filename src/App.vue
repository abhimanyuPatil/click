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
import axios from "axios";
import { baseURL } from "./constants";
import { mapActions } from "vuex";

export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance();
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    internalInstance?.appContext.config.globalProperties.$Progress.start();
    setTimeout(() => {
      internalInstance?.appContext.config.globalProperties.$Progress.finish();
    }, 3500);
  },
  mounted() {
    const token = localStorage.getItem("user-token");
    const id = localStorage.getItem("user-id");
    if (!!token) {
      this.loginReq({ token: token, userId: id });
      axios
        .get(`${baseURL}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.setUserDetails(res.data);
        })
        .catch((error) => {
          console.log("error", error);
          this.logoutReq()
        });
    }
  },
  methods: {
    ...mapActions("user", {
      loginReq: "login",
      setUserDetails: "setUserDetails",
      logoutReq: "logout",
    }),
  },
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
