<template>
  <ion-page>
    <ion-content>
      <HeaderContainer title="Cllct" />
      <div
        class="flex min-h-[80vh] bg-gradient-to-r from-[#6317A7] to-[#320C54]"
      >
        <!-- first section -->
        <div
          class="hidden lg:flex flex-1 flex-col justify-start items-center p-3"
        >
          <ArrowLeftIcon
            @click="() => router.push('/home')"
            class="h-6 w-6 relative self-start cursor-pointer"
          />
          <div class="flex flex-col justify-start mt-20">
            <img
              class="h-30 w-60 object-cover"
              src="../../resources/logo/Cllct-Logo-White.svg"
            />
            <h5 class="text-4xl font-light text-white font-aileron">
              Create your cards <br />
              without limits
            </h5>
          </div>
        </div>
        <!--  -->
        <!-- second section -->
        <div
          class="container flex lg:flex-1 md:flex-1 justify-center items-start lg:items-stretch lg:p-10 lg:pb-32 md:p-10 mx-auto"
        >
          <div
            class="bg-white 2xl:w-[600px] xl:w-[600px] lg:w-3/4 md:w-3/4 w-full rounded-3xl lg:p-5 py-10 h-auto flex flex-col justify-evenly self-center lg:self-stretch"
          >
            <div
              class="flex justify-center lg:justify-start space-x-4 lg:pl-4 mb-5 lg:mb-0"
            >
              <button
                :class="checkAuthType('login')"
                @click="toggleAuth('login')"
                class="py-2 px-4 rounded-3xl uppercase text-white font-aileron"
              >
                login
              </button>
              <button
                :class="checkAuthType('otp')"
                @click="toggleAuth('otp')"
                class="py-2 px-4 rounded-3xl uppercase text-white font-aileron"
              >
                login with otp
              </button>
              <button
                :class="checkAuthType('register')"
                @click="toggleAuth('register')"
                class="py-2 px-4 rounded-3xl uppercase font-aileron"
              >
                register
              </button>
            </div>
            <!-- social icons -->
            <div
              v-if="authType === 'login' || authType === 'otp'"
              class="flex lg:justify-start justify-center px-4 lg:p-0 lg:pt-3"
            >
              <img
                class="h-8 w-16 lg:h-10 lg:w-15 object-contain cursor-pointer"
                src="../../resources/facebook-with-circle.png"
              />
              <img
                class="h-8 w-16 lg:h-10 lg:w-15 object-contain cursor-pointer"
                src="../../resources/twitter-with-circle.png"
              />
              <img
                class="h-8 w-16 lg:h-10 lg:w-15 object-contain cursor-pointer"
                src="../../resources/linkedin-with-circle.png"
              />
              <img
                class="h-8 w-16 lg:h-10 lg:w-15 object-contain cursor-pointer"
                src="../../resources/google-with-circle.png"
              />
              <img
                class="h-8 w-16 lg:h-10 lg:w-15 object-contain cursor-pointer"
                src="../../resources/github-with-circle.png"
              />
            </div>
            <div
              v-if="authType === 'login' || authType === 'otp'"
              class="flex items-center justify-between mt-6 pl-4"
            >
              <div class="bg-[#707070] h-0.5 w-5/12 opacity-20"></div>
              <div class="text-black text-center text-xs opacity-20">OR</div>
              <div class="bg-[#707070] h-0.5 w-5/12 opacity-20"></div>
            </div>
            <!-- register form -->
            <div
              class="flex flex-col justify-center px-8 lg:px-0 pt-6"
              v-if="authType === 'register'"
            >
              <AppInput :placeholder="EnterName" label="Name" />
              <AppInput :placeholder="UserName" label="User Name" />
              <AppInput :placeholder="Email" label="Email" />
              <AppInput :placeholder="Password" label="Password" />
            </div>

            <!-- login form -->
            <div
              v-if="authType === 'login'"
              class="flex flex-col justify-center px-8 lg:px-0 pt-6"
            >
              <AppInput :placeholder="Email" label="Email" />
              <AppInput label="Password" />
            </div>
            <!--  -->
            <!-- otp -->
            <div
              v-if="authType === 'otp'"
              class="flex flex-col justify-center px-8 lg:px-0 pt-6"
            >
              <AppInput :placeholder="Email" label="Email" />
              <div class="flex flex-col pl-4">
                <span class="font-aileron"
                  >Enter the OTP you received at above email</span
                >
              </div>
              <div
                id="otp"
                class="flex flex-row justify-start text-center px-2"
              >
                <input
                  v-for="item in 5"
                  :key="item"
                  class="m-2 border border-primary h-10 w-10 text-center form-control rounded bg-white"
                  type="text"
                  :id="item"
                  maxlength="1"
                  @keyup="(e) => keyPress(e, item)"
                />
              </div>
            </div>
            <!-- register checkobox -->
            <div
              v-if="authType === 'register'"
              class="flex flex-col lg:flex-row justify-between lg:items-center px-10 lg:px-0 lg:pl-4"
            >
              <div class="py-2">
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
                    class="font-aileron select-none text-black text-xs lg:text-sm"
                    >Creating an account means you’re okay with our
                    <span class="font-aileron text-orange"
                      >Terms of Service</span
                    >,
                    <span class="font-aileron text-orange">Privacy Policy</span
                    >, and our default Notification Settings.</label
                  >
                </div>
              </div>
            </div>
            <!--  -->
            <!-- login Remember me checkbox -->
            <div
              v-if="authType === 'login' || authType === 'otp'"
              class="flex flex-col lg:flex-row justify-between lg:items-center px-10 lg:px-0 lg:pl-4"
            >
              <div class="py-2">
                <div class="flex items-center mr-4 mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="A3-yes"
                    name="A3-confirmation"
                    value="yes"
                    class="opacity-0 absolute h-8 w-8"
                  />
                  <div
                    class="cursor-pointer bg-white border-2 rounded-md border-blue-400 w-4 h-4 lg:w-6 lg:h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500"
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
                    class="font-aileron select-none text-black text-xs lg:text-sm cursor-pointer"
                    >Remember Me</label
                  >
                </div>
              </div>
              <button
                v-if="authType === 'login'"
                class="lg:mx-0 font-aileron bg-orange text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
              >
                Forgot Password?
              </button>
              <button
                v-if="authType === 'otp'"
                class="lg:mx-0 font-aileron bg-orange text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
              >
                Resend OTP
              </button>
            </div>

            <!-- login button -->
            <div
              v-if="authType === 'login' || authType === 'otp'"
              class="flex flex-col lg:flex-row justify-between lg:items-center px-10 lg:px-0 lg:pl-4 mt-5 lg:mt-0"
            >
              <button
                @click="login()"
                class="flex font-aileron flex-initial lg:w-5/12 lg:mx-0 bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
              >
                Login
              </button>
              <div
                class="font-aileron text-black flex flex-wrap justify-center text-xs mt-2 lg:mt-0"
              >
                Don't have an account?
                <span
                  @click="toggleAuth('register')"
                  class="font-aileron text-orange hover:cursor-pointer"
                >
                  &nbsp; Cllct Account?
                </span>
              </div>
            </div>
            <!--  -->
            <!-- register button -->
            <div
              v-if="authType === 'register'"
              class="flex flex-col lg:flex-row justify-between lg:items-center px-10 lg:px-0 lg:pl-4 mt-5 lg:mt-0"
            >
              <button
                class="font-aileron flex flex-initial lg:w-5/12 lg:mx-0 bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
              >
                Register
              </button>
              <div
                @click="toggleAuth('login')"
                class="font-aileron text-black flex flex-wrap justify-center text-xs mt-2 lg:mt-0"
              >
                Already a member?
                <span class="font-aileron text-orange hover:cursor-pointer"
                  >&nbsp; Login?</span
                >
              </div>
            </div>
            <!--  -->
          </div>
        </div>
        <!--  -->
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
// import PopHeaderContainer from "@/components/Layouts/PopoverHeader.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import AppInput from "@/components/Input.vue";
import { mapActions } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer, ArrowLeftIcon, AppInput, IonPage, IonContent },
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
        return "bg-primary text-white";
      } else return "border border-solid border-primary text-primary";
    },
    keyPress(event: KeyboardEvent, index: any) {
      let input = <HTMLInputElement>document.getElementById(index);
      if (event.key === "Backspace") {
        input?.setAttribute("value", "");
        if (index !== 1) {
          let prevIndex: any = index - 1;
          document.getElementById(prevIndex)?.focus();
        }
      } else {
        if (index === 5 && input.value !== "") {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          input?.setAttribute("value", event.key);
          if (index !== 5) {
            let nextindex: any = index + 1;
            document.getElementById(nextindex)?.focus();
            event.preventDefault();
          }
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          input?.setAttribute("value", String.fromCharCode(event.keyCode));
          if (index !== 5) {
            let nextindex: any = index + 1;
            document.getElementById(nextindex)?.focus();
            event.preventDefault();
          }
        }
      }
    },
    ...mapActions(["login"]),
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
