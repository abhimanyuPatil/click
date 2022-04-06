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
            class="bg-white 2xl:w-[600px] xl:w-[600px] lg:w-3/4 md:w-3/4 w-full rounded-3xl lg:py-16 py-10 px-5 h-auto flex flex-col justify-evenly self-center md:self-start m-auto"
          >
            <p class="text-black font-poppins text-2xl font-semibold pl-4">
              Reset Password
            </p>
            <div class="px-0 lg:pl-4">
              <div class="px-3 mb-3">
                <div v-for="error of v$.$errors" :key="error.$uid">
                  <p class="text-[#dc3545] font-poppins text-sm capitalize">
                    {{
                      error.$validator === "required"
                        ? `${error.$property} is required`
                        : `Please enter valid ${error.$property}`
                    }}
                  </p>
                </div>
              </div>
            </div>
            <div class="my-3">
              <AppInput
                @onChange="(value) => (this.password = value)"
                name="password"
                v-model="password"
                :placeholder="'New Password'"
                label="New Password"
                type="password"
              />
              <AppInput
                @onChange="(value) => (this.confirmPassword = value)"
                name="confirmPassword"
                v-model="confirmPassword"
                :placeholder="'Confirm Password'"
                label="Confirm Password"
                type="password"
              />
            </div>
            <div class="md:pl-5 flex justify-center">
              <button
                disabled
                v-if="loading"
                class="w-full flex justify-center font-aileron bg-orange text-white font-bold rounded-xl py-3 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-103 duration-300 ease-in-out text-xs"
              >
                <img
                  class="h-6 w-6"
                  src="../../public/assets/icon/loader.svg"
                />
              </button>
              <button
                v-if="!loading"
                @click="submitPassword()"
                class="w-full font-aileron bg-orange text-white font-bold rounded-xl py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-103 duration-300 ease-in-out text-xs"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import useVuelidate from "@vuelidate/core";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { required, sameAs, helpers, minLength } from "@vuelidate/validators";
import AppInput from "@/components/UI/Input.vue";
import axios from "axios";
import { baseURL } from "@/constants";

export default defineComponent({
  name: "ResetPassword",
  components: {
    AppInput,
  },
  setup() {
    const toast = useToast();
    const route = useRoute();
    const { token } = route.params;
    return { token, toast };
  },
  data() {
    return {
      v$: useVuelidate(),
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  validations() {
    return {
      password: { required, minLength: minLength(8) },
    };
  },
  methods: {
    async submitPassword() {
      const isFormCorrect = await this.v$.$validate();
      if (this.password === this.confirmPassword) {
        if (!this.v$.$error) {
          this.loading = true;
          const payload = { password: this.password };
          axios.post(`${baseURL}/auth/forget/token=${this.token}`,payload)
          .then(res=>{
            this.loading = false;  
            if(res.data.message === "Invalid Token"){
              this.toast.error("Link expired. Try again");
            }else{
              this.toast.success("Password Changed");
              this.$router.push("/auth");
            }
          })
          .catch(error=>{
              this.loading = false;
              this.toast.error(error.response?.data?.error ?? "Something went wrong. Please try again");
          })
        }
      } else {
        this.toast.error("Confirm Password should be same as New Password");
      }
    },
  },
});
</script>
