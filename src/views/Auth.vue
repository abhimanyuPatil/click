<template>
  <HeaderContainer title="Cllct" />
  <div class="min-h-screen flex bg-gradient-to-r from-[#A020F0] to-[#320C54]">
    <div class="hidden lg:flex flex-1 flex-col justify-start items-center p-3">
      <ArrowLeftIcon class="h-6 w-6 relative self-start" />
      <div class="flex flex-col justify-start mt-20">
        <img
          class="h-30 w-60 object-cover"
          src="../../resources/mainlogo.png"
        />
        <h5 class="text-4xl font-light">
          Create your cards <br />
          without limits
        </h5>
      </div>
    </div>
    <div
      class="container flex lg:flex-1 md:flex-1 justify-center items-center lg:items-stretch lg:p-10 lg:pb-32 md:p-10"
    >
      <div class="bg-white w-3/4 rounded-3xl lg:p-5 pt-10 h-auto">
        <div class="flex justify-center lg:justify-start space-x-4 lg:pl-4">
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
        <div class="flex mt-6 justify-start px-4 lg:p-0">
          <img
            class="h-8 w-16 lg:h-10 lg:w-20 object-contain"
            src="../../resources/facebook-with-circle.png"
          />
          <img
            class="h-8 w-16 lg:h-10 lg:w-20 object-contain"
            src="../../resources/twitter-with-circle.png"
          />
          <img
            class="h-8 w-16 lg:h-10 lg:w-20 object-contain"
            src="../../resources/linkedin-with-circle.png"
          />
          <img
            class="h-8 w-16 lg:h-10 lg:w-20 object-contain"
            src="../../resources/google-with-circle.png"
          />
          <img
            class="h-8 w-16 lg:h-10 lg:w-20 object-contain"
            src="../../resources/github-with-circle.png"
          />
        </div>
        <div class="flex flex-col justify-center px-8 lg:px-0 pt-6">
          <AppInput :placeholder="Email" label="Email" />
          <AppInput label="Password" />
          <div
            class="flex flex-col lg:flex-row justify-between lg:items-center lg:pl-4"
          >
            <div class="py-4">
              <div class="flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  id="A3-yes"
                  name="A3-confirmation"
                  value="yes"
                  class="opacity-0 absolute h-8 w-8"
                />
                <div
                  class="bg-white border-2 rounded-md border-blue-400 w-4 h-4 lg:w-6 lg:h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
                >
                  <svg
                    class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#1F73F1"
                        fill-rule="nonzero"
                      >
                        <path
                          d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <label
                  for="A3-yes"
                  class="select-none text-black text-xs lg:text-sm"
                  >Remember Me</label
                >
              </div>
            </div>
            <button
              class="lg:mx-0 bg-orange text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
            >
              Forgot Password?
            </button>
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
import AppInput from "@/components/Input.vue";
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer, ArrowLeftIcon, AppInput },
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
