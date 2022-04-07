<template>
  <div class="profile-menu-content-wrap">
    <div
      class="relative bg-white dark:bg-cardBg px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
    >
      <img src="../../resources/user-icon.svg" alt="" />
      <p class="text-black dark:text-white text-xs font-aileron">
        {{ name }}
      </p>
      <p class="text-black dark:text-white text-xs font-aileron">
        {{ location ?? "NA" }}
      </p>
    </div>
    <div class="edit-profile-btn text-center">
      <button
        @click="mode = 'edit'"
        class="font-aileron inline-block lg:mx-0 bg-[#707070] text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
      >
        Edit Profile
      </button>
    </div>
    <div class="proile-details p-3">
      <div
        class="profile-details-wrap p-4 bg-[#EFEFEF] dark:bg-cardBg rounded-md"
      >
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Email</h5>
          <input
            v-if="mode === 'edit'"
            disabled
            v-model="editEmail"
            type="email"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins disabled:bg-zinc-400 disabled:cursor-not-allowed"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ email }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Name</h5>
          <input
            v-if="mode === 'edit'"
            v-model="editName"
            type="text"
            @input="(event) => (editName = event.target.value)"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ name }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">User Name</h5>
          <input
            v-if="mode === 'edit'"
            v-model="editUserName"
            type="text"
            @input="(event) => (editUserName = event.target.value)"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ userName }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Gender</h5>
          <div v-if="mode === 'edit'" class="w-full max-w-md">
            <RadioGroup v-model="editGender">
              <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
              <div class="flex flex-wrap justify-between">
                <RadioGroupOption
                  as="template"
                  v-for="g in genders"
                  :key="g"
                  :value="g"
                  v-slot="{ active, checked }"
                  @click="editGender === g"
                >
                  <div
                    :class="[
                      active
                        ? 'ring-1 ring-offset-1 ring-offset-[#B163E2] ring-white ring-opacity-60'
                        : '',
                      checked
                        ? 'bg-light bg-opacity-80 text-white '
                        : 'bg-white ',
                    ]"
                    class="flex py-2 px-5 mt-3 w-auto rounded-lg shadow-md cursor-pointer focus:outline-none transition ease-in-out"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <div
                          v-show="checked"
                          class="flex-shrink-0 text-white mr-2"
                        >
                          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none">
                            <circle
                              cx="12"
                              cy="12"
                              r="12"
                              fill="#fff"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M7 13l3 3 7-7"
                              stroke="#fff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div class="text-xs">
                          <RadioGroupLabel
                            as="p"
                            :class="checked ? 'text-white' : 'text-gray-900'"
                            class="font-normal text-center font-aileron"
                          >
                            {{ g }}
                          </RadioGroupLabel>
                        </div>
                      </div>
                    </div>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ gender ?? "NA" }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">About Me</h5>
          <textarea
            v-if="mode === 'edit'"
            v-model="editAbout"
            type="text"
            @input="(event) => (editAbout = event.target.value)"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ about ?? "NA" }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Location</h5>
          <input
            v-if="mode === 'edit'"
            v-model="editLocation"
            type="text"
            @input="(event) => (editLocation = event.target.value)"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ location ?? "NA" }}
          </p>
        </div>
        <button
          disabled
          v-if="loading && mode === 'edit'"
          @click="submit"
          class="font-aileron flex flex-initial w-full bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-2 px-2 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition duration-300 ease-in-out text-xs disabled:cursor-not-allowed"
        >
          <img class="h-6 w-6" src="../../public/assets/icon/loader.svg" />
        </button>
        <button
          v-if="!loading && mode === 'edit'"
          @click="editProfile()"
          class="flex font-aileron flex-initial w-full bg-primary uppercase text-white text-center justify-center font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { baseURL } from "@/constants";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import axios from "axios";
import { defineComponent, ref } from "vue";
import { useToast } from "vue-toastification";
import { mapActions, mapState } from "vuex";
import Input from "./UI/Input.vue";
const genders = ["Male", "Female", "Other"];

export default defineComponent({
  components: {
    Input,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  },
  name: "ProfileView",
  data() {
    return {
      mode: "view",
      loading: false,
      editName: this.name,
      editUserName: this.userName,
      editLocation: this.location ?? "",
      editEmail: this.email,
      editGender: this.gender ?? "",
      editAbout: this.about ?? "",
      selectedView: "normal",
    };
  },
  props: {
    name: String,
    location: String,
    email: String,
    userName: String,
    gender: String,
    about: String,
  },
  mounted() {},
  setup() {
    const toast = useToast();

    return {
      genders,
      toast,
    };
  },
  computed: mapState({
    token: (state: any) => state.user.token,
  }),
  methods: {
    editProfile() {
      if (
        this.editName?.trim().length === 0 ||
        this.editUserName?.trim().length === 0 ||
        this.editLocation?.trim().length === 0 ||
        this.editAbout?.trim().length === 0 ||
        this.editGender?.trim().length === 0
      ) {
        this.toast.error("Please fill in all fields");
      } else {
        this.loading = true;
        const payload = {
          userName: this.editUserName,
          gender: this.editGender,
          about: this.editAbout,
          location: this.editLocation,
          name: this.editName,
        };
        axios
          .put(`${baseURL}/user/profile`, payload, {
            headers: { Authorization: `Bearer ${this.token}` },
          })
          .then((res) => {
            this.loading = false;
            this.setUserDetails({ ...payload, email: this.email });
            this.toast.success("Profile Edited Successfully!");
            this.mode = "view";
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
    ...mapActions("user", {
      setUserDetails: "setUserDetails",
    }),
  },
});
</script>
