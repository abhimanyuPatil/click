<template>
  <div
    class="bg-white 2xl:w-[600px] xl:w-[600px] lg:w-3/4 md:w-3/4 w-full rounded-3xl lg:py-16 py-10 px-5 h-auto flex flex-col justify-evenly self-center md:self-start m-auto"
  >
    <div class="flex items-center">
      <ArrowLeftIcon
        @click="$emit('changeState')"
        class="h-4 w-4 text-black cursor-pointer"
      />
      <p class="font-poppins text-black ml-3">Forgot Password</p>
    </div>
    <p class="font-poppins text-black text-sm my-5 px-2 md:px-5">
      Enter the email associated with your account and we'll send an email with
      instructions to reset your password.
    </p>
    <AppInput
      @onChange="(value) => (this.email = value)"
      name="email"
      v-model="email"
      :placeholder="Email"
      label="Email"
      type="email"
    />
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
    <div class="md:pl-5 flex justify-center">
      <button
        disabled
        v-if="loading"
        class="w-full flex justify-center font-aileron bg-orange text-white font-bold rounded-xl py-3 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-103 duration-300 ease-in-out text-xs"
      >
        <img class="h-6 w-6" src="../../../public/assets/icon/loader.svg" />
      </button>
      <button
        v-if="!loading"
        @click="submitEmail()"
        class="w-full font-aileron bg-orange text-white font-bold rounded-xl py-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-103 duration-300 ease-in-out text-xs"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import AppInput from "@/components/UI/Input.vue";
import axios from "axios";
import { baseURL } from "@/constants";

export default defineComponent({
  name: "ForgotPassword",
  components: {
    ArrowLeftIcon,
    AppInput,
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    return { toast, router };
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      loading: false,
    };
  },
  validations() {
    return {
      email: { required, email },
    };
  },
  methods: {
    async submitEmail() {
      const isFormCorrect = await this.v$.$validate();
      if (!this.v$.$error) {
        this.loading = true;
        const payload = {
          email: this.email,
        };
        axios
          .post(`${baseURL}/auth/forget`, payload)
          .then((res) => {
            this.loading = false;
            this.email = "";
            this.toast.success(res.data.message);
            this.$emit("changeState");
          })
          .catch((error) => {
            this.loading = false;
            this.toast.error(
              error.response.data.error ??
                "Something went wrong. Please try again"
            );
          });
      }
    },
  },
});
</script>
