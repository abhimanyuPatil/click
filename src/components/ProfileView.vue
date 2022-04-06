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
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ email }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Name</h5>
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ name }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">User Name</h5>
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ userName }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Gender</h5>
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ gender ?? "NA" }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">About Me</h5>
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ about ?? "NA" }}
          </p>
        </div>
        <div class="profile-details-item mb-3">
          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">Location</h5>
          <p class="font-aileron m-0 text-xs text-black dark:text-white">
            {{ location ?? "NA" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  name: "ProfileView",
  props: {
    name: String,
    location: String,
    email: String,
    userName: String,
    gender: String,
    about: String,
  },
});
</script>
