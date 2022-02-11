<template>
  <HeaderContainer title="Cllct" />
  <div class="min-h-screen flex bg-gradient-to-r from-[#A020F0] to-[#320C54]">
    <div class="hidden lg:flex flex-1 flex-col justify-start items-center p-3">
      <ArrowLeftIcon class="h-6 w-6 relative self-start" />
      <div class="flex flex-col justify-start mt-20">
        <img
          class="h-40 w-80 object-cover"
          src="../../resources/mainlogo.png"
        />
        <h5 class="text-4xl font-light">
          Create your cards <br />
          without limits
        </h5>
      </div>
    </div>
    <div class="flex flex-1 justify-conter p-10 pb-32">
      <div class="bg-white w-full rounded-3xl p-5 pt-10">
        <div class="flex justify-start space-x-4 pl-4">
          <button
            :class="checkAuthType('login')"
            @click="toggleAuth('login')"
            class="py-2 px-4 rounded-3xl uppercase"
          >
            login
          </button>
          <button
            :class="checkAuthType('register')"
            @click="toggleAuth('register')"
            class="py-2 px-4 rounded-3xl uppercase"
          >
            register
          </button>
        </div>
        <div class="flex mt-6 justify-start">
          <img
            class="h-10 w-20 object-contain"
            src="../../resources/facebook-with-circle.png"
          />
          <img
            class="h-10 w-20 object-contain"
            src="../../resources/twitter-with-circle.png"
          />
          <img
            class="h-10 w-20 object-contain"
            src="../../resources/linkedin-with-circle.png"
          />
          <img
            class="h-10 w-20 object-contain"
            src="../../resources/google-with-circle.png"
          />
          <img
            class="h-10 w-20 object-contain"
            src="../../resources/github-with-circle.png"
          />
        </div>
        <div class="flex">
          <div class="flex m-4">
            <div
              class="flex flex-4 items-center justify-center bg-light rounded-l-lg text-white px-6"
            >
              Email
            </div>
            <input
              type="text"
              placeholder=""
              class="py-3 px-2 w-100 text-md border bg-[#ECECEC] flex-6 focus:border-0 active:border-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer, ArrowLeftIcon },
  data() {
    return {
      authType: "login",
    };
  },
  methods: {
    toggleAuth(state: string) {
      this.authType = state;
    },
    checkAuthType(state: string) {
      if (state === this.authType) {
        return "bg-primary";
      } else return "border border-solid border-primary text-primary";
    },
  },
});
</script>