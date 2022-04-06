<template>
  <ion-page>
    <ion-content>
      <!-- <HeaderContainer title="Cllct" /> -->
      <div
        class="flex min-h-[100vh] bg-gradient-to-r from-[#6317A7] to-[#320C54]"
      >
        <!-- first section -->
        <div
          class="hidden lg:flex flex-1 flex-col justify-start items-center p-3"
        >
          <ArrowLeftIcon
            @click="() => router.push('/home')"
            class="h-6 w-6 relative text-white self-start cursor-pointer"
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
          <ForgotPassword
            v-if="state === 'forgot'"
            @changeState="state = 'auth'"
          />
          <div
            v-if="state !== 'forgot'"
            class="bg-white 2xl:w-[600px] xl:w-[600px] lg:w-3/4 md:w-3/4 w-full rounded-3xl lg:p-5 py-10 h-auto flex flex-col justify-evenly self-center lg:self-stretch"
          >
            <div
              class="grid grid-cols-1 md:flex justify-center lg:justify-start space-x-0 md:space-x-4 px-20 lg:px-0 lg:pl-4 mb-5 lg:mb-0"
            >
              <button
                :class="checkAuthType('login')"
                @click="toggleAuth('login')"
                class="py-2 px-4 rounded-3xl uppercase text-white font-aileron text-base md:text-xs"
              >
                login
              </button>
              <button
                :class="checkAuthType('otp')"
                @click="toggleAuth('otp')"
                class="py-2 px-4 rounded-3xl uppercase text-white font-aileron mt-5 md:mt-0 text-base md:text-xs"
              >
                login with otp
              </button>
              <button
                :class="checkAuthType('register')"
                @click="toggleAuth('register')"
                class="py-2 px-4 rounded-3xl uppercase text-white font-aileron mt-5 md:mt-0 text-base md:text-xs"
              >
                register
              </button>
            </div>
            <!-- social icons -->
            <div
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
            <RegisterComponent
              @changeAuth="toggleAuth('login')"
              v-if="authType === 'register'"
            />
            <!-- login form -->
            <LoginComponent
              @changeState="state = 'forgot'"
              @changeAuth="toggleAuth('register')"
              v-if="authType === 'login'"
            />
            <!--  -->
            <!-- otp -->
            <OtpLogin
              @changeAuth="toggleAuth('register')"
              v-if="authType === 'otp'"
            />
            <!--  -->
          </div>
        </div>
        <!--  -->
      </div>
      <!-- <Footer /> -->
      <!-- <MobileTabs /> -->
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import Footer from "@/components/Layouts/Footer.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import AppInput from "@/components/UI/Input.vue";
import RegisterComponent from "@/components/Auth/Register.vue";
import LoginComponent from "@/components/Auth/Login.vue";
import ForgotPassword from "@/components/Auth/ForgotPassword.vue";
import OtpLogin from "@/components/Auth/OtpLogin.vue";
import { mapActions } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AuthView",
  components: {
    HeaderContainer,
    ArrowLeftIcon,
    AppInput,
    IonPage,
    IonContent,
    Footer,
    RegisterComponent,
    LoginComponent,
    OtpLogin,
    ForgotPassword,
  },
  data() {
    return {
      authType: "login",
      state: "auth",
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
