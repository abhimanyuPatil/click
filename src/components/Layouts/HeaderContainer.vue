<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="border-b border-[#DEDEDE] pb-3 bg-white">
    <div class="container md:container md:mx-auto flex flex-col gap-2 mx-auto">
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
          <a @click="() => router.push('/home')">
          <img
            src="../../../resources/logo-icon.svg"
            alt=""
            width="78"
            height="48"
            class="cursor-pointer"
          />
          </a>
          <div class="flex items-center ml-10 gap-9 hidden md:flex">
            <h5 class="text-lg font-semibold text-black cursor-pointer">
              Collections
            </h5>
            <h5 class="text-lg font-semibold text-black cursor-pointer">
              Projects
            </h5>
          </div>
        </div>
        <div class="mobmenu-icon md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="flex items-center gap-7 hidden md:flex">
          <div
            class="relative flex items-center justify-center bg-[#E1E1E1] hover:bg-[#6317A7] cursor-pointer w-11 h-11 rounded-full group transition ease-out duration-200"
          >
            <img
              src="../../../resources/brush-icon.svg"
              alt=""
              class="group-hover:brightness-0 group-hover:invert"
            />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              T
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] hover:bg-[#6317A7] cursor-pointer fill-white w-11 h-11 group transition ease-out duration-200"
          >
            <img
              src="../../../resources/string-icon.svg"
              alt=""
              class="group-hover:brightness-0 group-hover:invert"
            />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              S
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] hover:bg-[#6317A7] cursor-pointer fill-white w-11 h-11 group transition ease-out duration-200"
          >
            <img
              class="group-hover:brightness-0 group-hover:invert"
              src="../../../resources/box-icon.svg"
              alt=""
            />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              A
            </div>
          </div>
          <button
            v-if="!isLoggedIn"
            @click="() => router.push('/auth')"
            class="w-24 h-11 px-2 bg-primary uppercase text-xs text-white text-center justify-center font-bold rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Login
          </button>

          <Popover v-if="isLoggedIn" class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
                >
                  <img src="../../../resources/user-icon.svg" alt="" />
                </div>
                <h3 class="text-[#5E5C5C] text-sm font-semibold">John Doe</h3>
              </div>
            </PopoverButton>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-100 max-w-md sm:px-0"
              >
                <!--====================================================================
              NAV PROFILE VIEW START
              =====================================================================-->

                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  v-if="isProfileScreen === 'nav'"
                >
                  <div
                    class="relative bg-white px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
                  >
                    <img src="../../../resources/user-icon.svg" alt="" />
                    <p class="text-black text-xs">John Dess</p>
                    <p class="text-black text-xs">Mumbai</p>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        @click="toggleProfile('profileView')"
                        class="text-base font-medium text-gray-900"
                      >
                        Profile
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p class="text-base font-medium text-gray-900">
                        Subscription
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p class="text-base font-medium text-gray-900">Payment</p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p class="text-base font-medium text-gray-900">
                        Langugae
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p class="text-base font-medium text-gray-900">
                        Settings
                      </p>
                    </div>
                  </div>
                </div>

                <!--====================================================================
              NAV PROFILE VIEW END
              =====================================================================-->

                <!--====================================================================
              PROFILE VIEW START
              =====================================================================-->
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white w-[250px]"
                  v-if="isProfileScreen === 'profileView'"
                >
                  <div
                    class="profile-nav-back flex justify-between items-center p-2 text-center border-b"
                  >
                    <p @click="toggleProfile('nav')">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 flex-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    </p>
                    <h5 class="m-0 flex-1">Profile</h5>
                  </div>
                  <div class="profile-menu-content-wrap">
                    <div
                      class="relative bg-white px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
                    >
                      <img src="../../../resources/user-icon.svg" alt="" />
                      <p class="text-black text-xs">John Dess</p>
                      <p class="text-black text-xs">Mumbai</p>
                    </div>
                    <div class="edit-profile-btn text-center">
                      <button
                        class="inline-block lg:mx-0 bg-[#707070] text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
                      >
                        Edit Profile
                      </button>
                    </div>

                    <div class="proile-details p-3">
                      <div
                        class="profile-details-wrap p-4 bg-[#EFEFEF] rounded-md"
                      >
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">Email</h5>
                          <p class="m-0 text-xs">johndoe0007 @gmail.com</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">Name</h5>
                          <p class="m-0 text-xs">John Doe</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">User Name</h5>
                          <p class="m-0 text-xs">Qrsedwert</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">Gender</h5>
                          <p class="m-0 text-xs">Male</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">About Me</h5>
                          <p class="m-0 text-xs">
                            Loren Ispusm dssadg adgsadgsagsg
                          </p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="text-[#7630B4] text-sm mb-1">Location</h5>
                          <p class="m-0 text-xs">Mumbai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--====================================================================
              PROFILE VIEW END
              =====================================================================-->
              </PopoverPanel>
            </transition>
          </Popover>
          <div class="relative">
            <button
              class="text-sm uppercase text-center pb-1 w-24 h-11 font-semibold text-black rounded-3xl bg-[#FBBB0B]"
            >
              create
            </button>
            <div
              class="absolute cursor-pointer w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1"
            >
              +
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-between w-full h-11 rounded-3xl border-[#9B9B9B] border hidden md:flex"
      >
        <div class="flex items-center w-full gap-3">
          <div class="flex items-center ml-4">
            <img
              src="../../../resources/search-icon.svg"
              alt=""
              width="20"
              height="20"
            />
          </div>
          <input
            type="text"
            placeholder="Web..."
            class="w-12/12 h-full border-none outline-none bg-transparent"
          />
        </div>
        <div
          class="flex items-center gap-3 h-full border-l border-[#9B9B9B] mr-3 pl-3"
        >
          <div :class="checkSearchType('all')" @click="toggleSearchType('all')">
            All
          </div>
          <div
            :class="checkSearchType('collections')"
            @click="toggleSearchType('collections')"
          >
            Collections
          </div>
          <div
            :class="checkSearchType('project')"
            @click="toggleSearchType('project')"
          >
            Project
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full hidden md:flex">
        <div class="header-badges-wrap flex items-center gap-3">
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            Location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            Sites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            Books
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            Movies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            Songs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex cursor-pointer"
          >
            News
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div class="sort-filters flex items-center gap-3">
          <div class="sort-filter-item">
            <span class="text-grey font-light">Zoom</span>
            <p>
              100%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </div>
          <div class="sort-filter-item">
            <span class="text-grey font-light">Sort</span>
            <p>
              Most Popular
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </div>
          <div class="sort-filter-item">
            <span class="text-grey font-light">Zoom</span>
            <p>
              List View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Popover,
  PopoverButton,
  // PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { mapGetters, mapActions } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "HeaderContainer",
  data() {
    return {
      isProfileScreen: "nav",
      searchType: "all",
    };
  },
  methods: {
    toggleProfile(state: "nav" | "profileView") {
      this.isProfileScreen = state;
    },
    toggleSearchType(type: string) {
      this.searchType = type;
    },
    checkSearchType(type: string) {
      if (type === this.searchType) {
        return "h-6 pt-0.5 px-2 text-xs font-bold text w-auto bg-[#6317A7] rounded-3xl text-center text-white cursor-pointer";
      } else
        return "text-xs h-6 w-auto px-2 pt-0.5 font-bold text text-black cursor-pointer";
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  props: {
    title: String,
  },
  components: {
    Popover,
    PopoverButton,
    // PopoverGroup,
    PopoverPanel,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
