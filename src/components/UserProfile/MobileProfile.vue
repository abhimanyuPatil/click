<template>
  <div class="bg-white dark:bg-darkBg h-screen w-full">
    <div
      class="flex flex-col justify-center h-3/5 items-center"
      v-if="!isLoggedIn"
    >
      <h3
        class="font-aileron text-lg text-center text-black dark:text-darkWhite"
      >
        Login to Access this space!
      </h3>
      <button
        @click="() => router.push('/auth')"
        class="font-aileron bg-orange text-white font-bold rounded-full py-3 px-4 w-2/5 mt-5 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
      >
        Login
      </button>
    </div>
    <div v-if="isLoggedIn">
      <ProfileView
        :about="user?.about"
        :email="user?.email"
        :gender="user?.gender"
        :location="user?.location"
        :name="user?.name"
        :userName="user?.userName"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { baseURL } from "@/constants";
import axios from "axios";
import Vue, { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { mapActions, mapState } from "vuex";
import ProfileView from "./ProfileView.vue";
export default defineComponent({
  name: "MobileProfile",
  components: {
    ProfileView,
  },
  mounted() {},

  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  computed: mapState({
    isLoggedIn: (state: any) => state.user.isLoggedIn,
    token: (state: any) => state.user.token,
    user: (state: any) => state.user.user,
    userId: (state: any) => state.user.userId,
  }),
  methods: {
    ...mapActions("user", {
      loginReq: "login",
      setUserDetails: "setUserDetails",
    }),
  },
  watch: {
    isLoggedIn(prevState, newState) {
      if (newState) {
        this.loginReq({ token: this.token, userId: this.userId });
      }
    },
  },
});
</script>
