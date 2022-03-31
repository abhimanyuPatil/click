<template>
  <div>
    <div class="px-8 lg:pl-4">
      <div class="rounded p-3">
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
    <div class="flex flex-col justify-center px-8 lg:px-0">
      <AppInput
        @onChange="(value) => (this.name = value)"
        name="name"
        v-model="name"
        :placeholder="'Enter Name'"
        label="Name"
        type="text"
      />
      <AppInput
        @onChange="(value) => (this.username = value)"
        name="username"
        v-model="username"
        :placeholder="UserName"
        label="User Name"
        type="text"
      />
      <AppInput
        @onChange="(value) => (this.email = value)"
        name="email"
        v-model="email"
        :placeholder="Email"
        label="Email"
        type="email"
      />
      <AppInput
        @onChange="(value) => (this.password = value)"
        name="password"
        v-model="password"
        :placeholder="Password"
        label="Password"
        type="password"
      />
    </div>
    <div
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
            required
            :checked="this.tcChecked"
            @input="this.tcChecked = !this.tcChecked"
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
            <span class="font-aileron text-orange">Terms of Service</span>,
            <span class="font-aileron text-orange">Privacy Policy</span>, and
            our default Notification Settings.</label
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center px-10 lg:px-0 lg:pl-4 mt-5 lg:mt-0"
    >
      <button
        disabled
        v-if="loading"
        @click="submit"
        class="font-aileron flex flex-initial lg:w-5/12 lg:mx-0 bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-2 px-2 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out text-xs disabled:cursor-not-allowed"
      >
        <img class="h-6 w-6" src="../../../public/assets/icon/loader.svg" />
      </button>
      <button
        v-if="!loading"
        @click="submit"
        class="font-aileron flex flex-initial lg:w-5/12 lg:mx-0 bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
      >
        Register
      </button>
      <div
        @click="$emit('changeAuth')"
        class="font-aileron text-black flex flex-wrap justify-center text-xs mt-2 lg:mt-0"
      >
        Already a member?
        <span class="font-aileron text-orange hover:cursor-pointer"
          >&nbsp; Login?</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import toastConfig, { baseURL } from "../../constants";
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
import axios from "axios";
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import AppInput from "../UI/Input.vue";
export default defineComponent({
  name: "RegisterComponent",
  components: {
    AppInput,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      username: "",
      email: "",
      password: "",
      tcChecked: false,
      loading: false,
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(5) },
      username: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
    };
  },
  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!this.tcChecked) {
        this.toast.error("Please accept the terms and conditions", toastConfig);
      } else {
        if (!this.v$.$error) {
          this.loading = true;
          const payload = {
            email: this.email,
            userName: this.username,
            name: this.name,
            password: this.password,
          };
          axios
            .post(`${baseURL}/auth/registration`, payload, {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              console.log("res", res.data);
              this.toast.success(
                "Registration Done! Please login to continue."
              );
              this.loading = false;
              this.$emit("changeAuth");
            })
            .catch((error) => {
              this.loading = false;
              console.log("error", error.response.data);
              this.toast.error(error.response.data.error);
            });
        }
      }
    },
  },
});
</script>
