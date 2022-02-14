<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="border-b border-[#DEDEDE] pb-3 bg-white">
    <div class="container md:container md:mx-auto flex flex-col gap-2 mx-auto">
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
          <img
            src="../../../resources/logo-icon.svg"
            alt=""
            width="78"
            height="48"
          />
          <div class="flex items-center ml-10 gap-9 hidden md:flex">
            <h5 class="text-lg font-semibold text-black">Collections</h5>
            <h5 class="text-lg font-semibold text-black">Projects</h5>
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
            class="relative flex items-center justify-center fill-white bg-[#6317A7] w-11 h-11 rounded-full"
          >
            <img
              src="../../../resources/brush-icon.svg"
              alt=""
              width="20"
              height="20"
            />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              T
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
          >
            <img src="../../../resources/string-icon.svg" alt="" class="" />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              S
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
          >
            <img src="../../../resources/box-icon.svg" alt="" />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              A
            </div>
          </div>
          <Popover class="relative" v-slot="{ open }">
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
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
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
                      <p class="text-base font-medium text-gray-900">Profile</p>
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
              class="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1"
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
          class="flex items-center gap-3 h-full border-l border-[#9B9B9B] mr-3"
        >
          <div
            class="h-6 mx-2 pt-0.5 text-xs font-bold text w-14 bg-[#ECEFF4] rounded-3xl text-center text-black"
          >
            All
          </div>
          <div class="text-xs font-bold text text-black">Collections</div>
          <div class="text-xs font-bold text text-black">Project</div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full hidden md:flex">
        <div class="header-badges-wrap flex items-center gap-3">
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex"
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
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex"
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
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex"
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
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex"
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
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded"
          >
            Movies
          </span>
          <span
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded flex"
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
            class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-[#373636] rounded"
          >
            News
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

<script>
import {
  Popover,
  PopoverButton,
  // PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";

export default {
  name: "HeaderContainer",
  props: {
    title: String,
  },
  components: {
    Popover,
    PopoverButton,
    // PopoverGroup,
    PopoverPanel,
  },
};
</script>
