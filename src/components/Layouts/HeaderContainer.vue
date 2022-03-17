<template>
  <div
    v-if="!isMobile()"
    class="border-b border-[#DEDEDE] pb-3 bg-white dark:bg-darkBg"
  >
    <div class="container md:container md:mx-auto flex flex-col gap-2 mx-auto">
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
          <a @click="() => router.push('/home')">
            <img
              v-if="localTheme === 'dark'"
              src="../../../resources/logo/Cllct-Logo-White.svg"
              alt=""
              width="78"
              height="48"
              class="cursor-pointer"
            />
            <img
              v-if="localTheme === 'light'"
              src="../../../resources/logo-icon.svg"
              alt=""
              width="78"
              height="48"
              class="cursor-pointer"
            />
          </a>
          <div class="items-center ml-10 gap-9 hidden md:flex">
            <h5
              class="text-lg font-semibold font-aileron text-black cursor-pointer dark:text-white"
            >
              Collections
            </h5>
            <h5
              class="text-lg font-semibold font-aileron text-black cursor-pointer dark:text-white"
            >
              Projects
            </h5>
          </div>
        </div>
        <div class="mobmenu-icon md:hidden text-black cursor-pointer">
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
            @click="changeTheme()"
            class="relative flex items-center justify-center bg-[#E1E1E1] dark:bg-dropdownBg hover:bg-[#6317A7] dark:hover:bg-[#6317A7] cursor-pointer w-10 h-10 rounded-full group transition ease-out duration-200"
          >
            <img
              src="../../../resources/brush-icon.svg"
              alt=""
              class="w-[40%] group-hover:brightness-0 group-hover:invert"
            />
            <div
              v-if="showControls"
              class="flex justify-center items-center absolute font-aileron w-4 h-4 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-xs"
            >
              <p>T</p>
            </div>
          </div>
          <div
            class="relative font-aileron flex items-center justify-center rounded-full bg-[#E1E1E1] dark:bg-dropdownBg hover:bg-[#6317A7] dark:hover:bg-[#6317A7] cursor-pointer fill-white w-10 h-10 group transition ease-out duration-200"
          >
            <img
              src="../../../resources/string-icon.svg"
              alt=""
              class="w-[40%] group-hover:brightness-0 group-hover:invert"
            />
            <div
              v-if="showControls"
              class="flex justify-center items-center absolute font-aileron w-4 h-4 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-xs"
            >
              <p>S</p>
            </div>
          </div>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <div
                class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] dark:bg-dropdownBg hover:bg-[#6317A7] dark:hover:bg-[#6317A7] cursor-pointer fill-white w-10 h-10 group transition ease-out duration-200"
              >
                <img
                  class="w-[40%] group-hover:brightness-0 group-hover:invert"
                  src="../../../resources/box-icon.svg"
                  alt=""
                />
                <div
                  v-if="showControls"
                  class="flex justify-center items-center absolute font-aileron w-4 h-4 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-xs"
                >
                  <p>A</p>
                </div>
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
                class="w-[calc(100%+15rem)] absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-100 sm:px-0"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-cardBg w-full"
                >
                  <div class="grid grid-cols-4 gap-2">
                    <div
                      class="flex align-center justify-center flex-col p-3 mb-3 text-center cursor-pointer"
                    >
                      <svg
                        class="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        style="fill: #6317a7; transform: ; msfilter: "
                      >
                        <path
                          d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                        ></path>
                      </svg>
                      <p
                        class="text-sm text-center text-gray-500 dark:text-white"
                      >
                        All
                      </p>
                    </div>
                    <div
                      class="flex align-center justify-center flex-col p-3 mb-3 text-center cursor-pointer"
                    >
                      <svg
                        class="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style="fill: #6317a7; transform: ; msfilter: "
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"
                        ></path>
                      </svg>
                      <p class="text-sm text-gray-500 dark:text-white">Sites</p>
                    </div>
                    <div
                      class="flex align-center justify-center flex-col p-3 mb-3 text-center cursor-pointer"
                    >
                      <svg
                        class="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style="fill: #6317a7; transform: ; msfilter: "
                      >
                        <path
                          d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"
                        ></path>
                        <path d="M8 6h9v2H8z"></path>
                      </svg>
                      <p class="text-sm text-gray-500 dark:text-white">Books</p>
                    </div>
                    <div
                      class="flex align-center justify-center flex-col p-3 mb-3 text-center cursor-pointer"
                    >
                      <svg
                        class="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style="fill: #6317a7; transform: ; msfilter: "
                      >
                        <path
                          d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zM9.535 9 6.868 5h2.597l2.667 4H9.535zm5 0-2.667-4h2.597l2.667 4h-2.597zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"
                        ></path>
                      </svg>
                      <p class="text-sm text-gray-500 dark:text-white">Movie</p>
                    </div>

                    <div
                      class="flex align-center justify-center flex-col p-3 mb-3 text-center cursor-pointer"
                    >
                      <svg
                        class="mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style="fill: #6317a7; transform: ; msfilter: "
                      >
                        <path
                          d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"
                        ></path>
                        <path
                          d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"
                        ></path>
                      </svg>
                      <p class="text-sm text-gray-500 dark:text-white">News</p>
                    </div>
                  </div>
                </div>
                <!--====================================================================
                        GRID VIEW END
                        =====================================================================-->
              </PopoverPanel>
            </transition>
          </Popover>

          <!--Categories Popup Content End-->

          <button
            v-if="!isLoggedIn"
            @click="() => router.push('/auth')"
            class="font-aileron w-24 h-9 px-2 bg-primary uppercase text-xs text-white text-center justify-center font-bold rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Login
          </button>
          <Popover v-if="isLoggedIn" class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-white',
                'px-3 py-1 group bg-white dark:bg-transparent dark:text-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
                >
                  <img src="../../../resources/user-icon.svg" alt="" />
                </div>
                <h3
                  class="text-[#5E5C5C] dark:text-white text-sm font-semibold font-aileron"
                >
                  John Doe
                </h3>
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
                    class="relative bg-white dark:bg-cardBg px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
                  >
                    <img src="../../../resources/user-icon.svg" alt="" />
                    <p class="font-aileron text-black dark:text-white text-xs">
                      John Dess
                    </p>
                    <p class="font-aileron text-black dark:text-white text-xs">
                      Mumbai
                    </p>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        @click="toggleProfile('profileView')"
                        class="font-aileron text-base font-medium text-gray-900 dark:text-white"
                      >
                        Profile
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        class="font-aileron text-base font-medium text-gray-900 dark:text-white"
                      >
                        Subscription
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        class="font-aileron text-base font-medium text-gray-900 dark:text-white"
                      >
                        Payment
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white dark:bg-cardBg px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        class="font-aileron text-base font-medium text-gray-900 dark:text-white"
                      >
                        Langugae
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
                  >
                    <div class="ml-4 pr-4">
                      <p
                        class="font-aileron text-base font-medium text-gray-900"
                      >
                        Settings
                      </p>
                    </div>
                  </div>
                </div>

                <!--====================================================================
                        NAV PROFILE VIEW END
                        =====================================================================--><!--====================================================================PROFILE VIEW START=====================================================================-->
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-cardBg w-[250px]"
                  v-if="isProfileScreen === 'profileView'"
                >
                  <div
                    class="profile-nav-back flex justify-between items-center p-2 text-center border-b dark:border-darkBorder"
                  >
                    <p @click="toggleProfile('nav')">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 flex-0 fill-black dark:fill-white cursor-pointer"
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
                    <h5
                      class="m-0 flex-1 font-aileron text-black dark:text-white"
                    >
                      Profile
                    </h5>
                  </div>
                  <div class="profile-menu-content-wrap">
                    <div
                      class="relative bg-white dark:bg-cardBg px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
                    >
                      <img src="../../../resources/user-icon.svg" alt="" />
                      <p
                        class="text-black dark:text-white text-xs font-aileron"
                      >
                        John Dess
                      </p>
                      <p
                        class="text-black dark:text-white text-xs font-aileron"
                      >
                        Mumbai
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
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            Email
                          </h5>
                          <p
                            class="font-aileron m-0 text-xs text-black dark:text-white"
                          >
                            johndoe0007 @gmail.com
                          </p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            Name
                          </h5>
                          <p class="font-aileron m-0 text-xs">John Doe</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            User Name
                          </h5>
                          <p class="font-aileron m-0 text-xs">Qrsedwert</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            Gender
                          </h5>
                          <p class="font-aileron m-0 text-xs">Male</p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            About Me
                          </h5>
                          <p class="font-aileron m-0 text-xs">
                            Loren Ispusm dssadg adgsadgsagsg
                          </p>
                        </div>
                        <div class="profile-details-item mb-3">
                          <h5 class="font-aileron text-[#7630B4] text-sm mb-1">
                            Location
                          </h5>
                          <p class="font-aileron m-0 text-xs">Mumbai</p>
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
          <div
            class="relative transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <button
              class="font-aileron text-sm uppercase text-center w-24 h-9 font-semibold text-black rounded-3xl bg-[#FBBB0B]"
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
        class="flex items-center justify-between w-full h-11 rounded-3xl border-[#9B9B9B] dark:border-darkBorder dark:bg-cardBg border md:flex"
      >
        <div class="flex basis-3/5 items-center w-full gap-3 h-11">
          <div class="flex items-center ml-4">
            <img
              src="../../../resources/search-icon.svg"
              alt=""
              width="20"
              height="20"
            />
          </div>
          <div class="relative w-full">
            <input
              id="dropdown"
              type="text"
              placeholder="Search topic"
              @change="query = $event.target.value"
              class="w-full h-[50px] border-none outline-none bg-[transparent] text-[#2A2A2A] text-aileron"
            />
            <TransitionRoot
              :show="isOpen"
              enter="transition-opacity duration-75"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transition-opacity duration-150"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                v-if="isOpen"
                class="absolute w-full bg-white rounded z-10 px-3 shadow-md mt-2"
              >
                <p
                  class="font-poppins text-black my-2 cursor-pointer"
                  v-for="person in filteredPeople"
                  :key="person.id"
                >
                  {{ person.name }}
                </p>
              </div>
            </TransitionRoot>
          </div>
        </div>
        <div
          class="hidden md:flex items-center gap-3 h-full border-l border-[#9B9B9B] dark:border-darkBorder mr-3 pl-3"
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
          <p
            class="font-aileron font-bold text-[#373636] dark:text-white text-sm"
          >
            Select Category :
          </p>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'font-aileron bg-[#eceff4] dark:bg-dropdownBg text-xs px-3 py-2 font-bold bg-gray-100 text-[#373636] dark:text-white rounded-3xl shadow-md flex justify-between cursor-pointer group hover:bg-primary hover:text-[#fff]',
              ]"
            >
              {{ selectedCategory }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3"
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
                class="absolute bg-white dark:bg-dropdownBg z-10 left-1/2 transform -translate-x-1/2 mt-2 px-2 w-[calc(100%+4rem)] max-w-md sm:px-0"
              >
                <PopoverButton
                  :as="span"
                  v-for="item in categories"
                  :key="item"
                  :class="selectedClass(item)"
                  @click="setSelectedCategory(item)"
                >
                  {{ item }}
                </PopoverButton>
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <div class="sort-filters flex items-center gap-3">
          <ViewDropdown
            @onChange="changeZoom"
            :selected="zoom"
            :label="'Zoom'"
            :options="[
              { label: '100%', value: '100' },
              { label: '80%', value: '80' },
              { label: '50%', value: '50' },
            ]"
          />
          <ViewDropdown
            @onChange="changeSort"
            :selected="sort"
            :label="'Sort By'"
            :options="[
              { label: 'Latest', value: 'latest' },
              { label: 'Relevance', value: 'relevance' },
              { label: 'Popular', value: 'popular' },
            ]"
          />
          <ViewDropdown
            @onChange="changeLayout"
            :selected="layout"
            :label="'View'"
            :options="[
              { label: 'List View', value: 'list' },
              { label: 'Card View', value: 'card' },
              { label: 'Grid View', value: 'grid' },
            ]"
          />
        </div>
      </div>
    </div>
  </div>

  <!--============================================================================
  MOBILE HEADER START
  ==============================================================================-->

  <div v-if="isMobile()" class="border-[#DEDEDE] bg-white pt-2 pb-4">
    <div class="container md:container md:mx-auto flex flex-col mx-auto">
      <div
        class="flex flex-wrap items-center justify-between border-gray-200 border-b-[1px]"
      >
        <div class="flex items-center gap-3">
          <a class="text-black" @click="isNavActive = !isNavActive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[30px] w-[30px]"
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
          </a>
          <a @click="() => router.push('/home')">
            <img
              src="../../../resources/logo-icon.svg"
              alt=""
              width="100"
              height="48"
              class="cursor-pointer"
            />
          </a>
        </div>
        <div class="flex items-center">
          <a
            href=""
            class="font-aileron w-24 py-[10px] px-2 bg-purple-700 uppercase text-xs text-white text-center justify-center font-bold rounded-full focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >Create</a
          >
        </div>
      </div>
      <MobileSearch />
    </div>
  </div>

  <!--=========================================================================
    MOBILE HEADER END
  ===========================================================================-->

  <!--==========================================================================
  MOBILE HAMBURGER NAVIGATION MENU START
  ============================================================================-->
  <div
    v-if="isMobile()"
    :class="[
      isNavActive
        ? 'border-b border-[#DEDEDE] bg-transparent fixed h-[100%] w-[100%] left-[0%] top-0 z-[999999] transition-[all] duration-700 shadow-md'
        : 'border-b border-[#DEDEDE] bg-transparent fixed h-[100%] w-[100%] -left-[100%] top-0 z-[999999] transition-[all] duration-700 shadow-md',
    ]"
  >
    <div
      v-if="isMobile()"
      class="border-b border-[#DEDEDE] bg-white dark:bg-darkBg absolute h-[100%] w-[70%]"
    >
      <div class="flex items-center justify-between py-4 px-3">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <a @click="isNavActive = !isNavActive">
                <svg
                  class="h-6 w-6 fill-black dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex">
              <a
                class="border border-gray-500 rounded-full py-[5px] px-6 font-aileron text-gray-700 dark:text-darkWhite dark:bg-dropdownBg dark:border-darkBorder font-bold"
              >
                Login
              </a>
            </div>
          </div>

          <div class="flex flex-wrap flex-col py-10">
            <SwitchGroup class="pb-3">
              <div class="flex items-center">
                <SwitchLabel
                  class="mr-4 text-black dark:text-darkWhite font-bold"
                  >Enable Dark Mode</SwitchLabel
                >
                <Switch
                  v-model="enabled"
                  @click="changeTheme()"
                  :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
                  class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span
                    :class="enabled ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
                  />
                </Switch>
              </div>
            </SwitchGroup>
            <a
              href=""
              class="font-bold text-[18px] text-black dark:text-darkWhite font-aileron pb-3"
              >Collections</a
            >
            <a
              href=""
              class="font-bold text-[18px] text-black dark:text-darkWhite font-aileron pb-3"
              >Projects</a
            >
            <a
              href=""
              class="font-bold text-[18px] text-black dark:text-darkWhite font-aileron pb-3"
              >Categories</a
            >
            <a
              href=""
              class="font-bold text-[18px] text-black dark:text-darkWhite font-aileron pb-3"
              >Projects</a
            >
          </div>
          <div class="flex flex-wrap gap-3 py-6 absolute bottom-0">
            <button
              class="flex items-center justify-center gap-1 bg-[#6317A7] px-3 py-2 rounded-full text-white w-[200px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53c0-.706-.572-1.278-1.279-1.278zm-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53A1.277 1.277 0 0 0 5.656 8.71zm8.889-3.809.768-1.388a.343.343 0 0 0-.133-.47.344.344 0 0 0-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 0 0-.471-.135.345.345 0 0 0-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809zM9.76 6.869a.346.346 0 1 1 .005-.693.346.346 0 0 1-.005.693zm4.48 0a.347.347 0 0 1 0-.692.346.346 0 0 1 0 .692zM7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 0 0 2.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148v7.092z"
                ></path>
              </svg>
              <div>
                <p class="text-xs font-semiBold font-poppins text-white">
                  Google Play
                </p>
              </div>
            </button>
            <button
              class="flex items-center justify-center gap-1 bg-[#ED4E94] px-3 py-2 rounded-full text-white w-[200px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"
                ></path>
              </svg>
              <div>
                <p class="text-xs font-semiBold font-poppins text-white">
                  App Store
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="isNavActive = !isNavActive"
      v-if="isMobile()"
      class="border-b border-[#DEDEDE] absolute bg-black opacity-20 h-[100%] w-[30%] left-[70%]"
    ></div>
  </div>
  <!--======================================================================
  MOBILE HAMBURGER NAVIGATION MENU END
  =======================================================================-->
</template>

<script lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { mapActions, mapState } from "vuex";
import ViewDropdown from "../ViewLayoutDropdowns/Flex.vue";
import MobileSearch from "../Responsive/MobileSearch.vue";
const categories = [
  "All",
  "Location",
  "Sites",
  "Books",
  "Movies",
  "Songs",
  "News",
];
const types = ["All", "Projects", "Collections"];
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonIcon,
} from "@ionic/vue";
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
export default defineComponent({
  name: "HeaderContainer",
  data() {
    const selectedType = ref(types[0]);
    const enabled = ref(false);

    return {
      isProfileScreen: "nav",
      searchType: "all",
      selectedCategory: categories[0],
      categories,
      selectedType,
      types,
      isNavActive: false,
      showControls: false,
      localTheme: "light",
      enabled,
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
        return "font-aileron h-6 pt-0.5 px-2 text-xs font-bold text w-auto bg-[#6317A7] rounded-3xl text-center text-white cursor-pointer";
      } else {
        return "font-aileron text-xs h-6 w-auto px-2 pt-0.5 font-bold text text-black dark:text-darkMuted cursor-pointer";
      }
    },
    setSelectedCategory(category: string) {
      this.selectedCategory = category;
    },
    selectedClass(category: string) {
      if (category === this.selectedCategory) {
        return "w-full font-aileron text-xs px-3 py-2 text-center justify-center font-bold text-[#fff] flex cursor-pointer bg-primary";
      } else {
        return "w-full font-aileron text-xs px-3 py-2 text-center justify-center font-bold text-[#373636] dark:text-white flex cursor-pointer hover:bg-primary hover:text-[#fff]";
      }
    },
    toggleControls() {
      this.showControls = !this.showControls;
    },
    changeTheme() {
      if (this.localTheme === "light") {
        this.localTheme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        this.localTheme = "light";
        document.documentElement.classList.remove("dark");
      }
      this.toggleTheme();
    },
    ...mapActions("layout", {
      changeLayout: "changeLayout",
      changeZoom: "changeZoom",
      changeSort: "changeSort",
      toggleTheme: "toggleTheme",
    }),
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: mapState({
    isLoggedIn: (state: any) => state.user.isLoggedIn,
    layout: (state: any) => state.layout.layout,
    zoom: (state: any) => state.layout.zoom,
    sort: (state: any) => state.layout.sort,
    theme: (state: any) => state.layout.theme,
  }),
  props: { title: String },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ViewDropdown,
    TransitionRoot,
    CheckIcon,
    SelectorIcon,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonIcon,
    MobileSearch,
    Switch,
    SwitchGroup,
    SwitchLabel,
  },
  setup() {
    const router = useRouter();
    let isOpen = ref(false);
    let selected = ref(people[0]);
    let query = ref("");
    let filteredPeople = computed(() =>
      query.value === ""
        ? people
        : people.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.value.toLowerCase().replace(/\s+/g, ""))
          )
    );
    return { router, selected, query, filteredPeople, isOpen };
  },
  mounted() {
    this.localTheme = this.theme;
    if (!this.isMobile()) {
      let input = <HTMLInputElement>document?.getElementById("dropdown");
      input.addEventListener("focusin", () => {
        this.isOpen = true;
      });
      input.addEventListener("blur", () => {
        this.isOpen = false;
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.altKey) this.toggleControls();
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Alt") this.toggleControls();
    });
  },
});
</script>
