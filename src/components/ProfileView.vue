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
            v-model="editEmail"
            type="email"
            @input="editEmail = event.target.value"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
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
            @input="editName = event.target.value"
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
            @input="editUserName = event.target.value"
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
          <div v-if="mode === 'edit'" class="flex justify-between flex-wrap">
            <div class="form-check flex items-center">
              <input
                @click="editGender === 'male'"
                class="form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-primary checked:border-purple-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="male"
                @change="editGender === 'male'"
                value="male"
                id="male"
                :checked="editGender?.toLowerCase() === 'male'"
              />
              <label
                class="form-check-label inline-block text-gray-800 text-sm font-aileron"
                for="usergender"
              >
                Male
              </label>
            </div>
            <div class="form-check flex items-center">
              <input
                v-model="editGender"
                @change="editGender === 'female'"
                @click="editGender === 'female'"
                :checked="editGender?.toLowerCase() === 'female'"
                class="form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-primary checked:border-purple-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="female"
                id="female"
                value="female"
              />
              <label
                class="form-check-label inline-block text-gray-800 text-sm font-aileron"
                for="usergender"
              >
                Female
              </label>
            </div>
            <div class="form-check flex items-center mt-2">
              <input
                @change="editGender === 'na'"
                @click="editGender === 'na'"
                :checked="editGender?.toLowerCase() === 'na'"
                class="form-check-input appearance-none rounded-full h-3 w-3 border border-gray-300 bg-white checked:bg-primary checked:border-purple-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="na"
                id="na"
                value="na"
              />
              <label
                class="form-check-label inline-block text-gray-800 text-sm font-aileron"
                for="usergender"
              >
                Rather Not Say
              </label>
            </div>
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
            @input="editAbout = event.target.value"
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
            @input="editLocation = event.target.value"
            class="bg-[#ECECEC] text-xs text-black border border-grey w-full px-2 py-2 rounded-xl font-poppins"
          />
          <p
            v-if="mode === 'view'"
            class="font-aileron m-0 text-xs text-black dark:text-white"
          >
            {{ location ?? "NA" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import { defineComponent } from "vue";
import Input from "./UI/Input.vue";

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
      editName: this.name,
      editUserName: this.userName,
      editLocation: this.location,
      editEmail: this.email,
      editGender: this.gender,
      editAbout: this.about,
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
});
</script>
