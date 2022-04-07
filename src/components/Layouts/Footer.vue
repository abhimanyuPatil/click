<template>
  <div
    class="flex justify-between items-center flex-wrap bg-white dark:bg-cardBg fixed bottom-0 w-full z-[999] px-3 py-3 gap-3 md:hidden border-t-[1px] border-gray-400"
  >
    <div @click="setCurrentScreen('home')" class="flex flex-col items-center justify-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-purple-700"
        viewBox="0 0 22 22"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
        ></path>
      </svg>
      <p
        class="text-gray-900 dark:text-darkWhite font-aileron text-sm font-bold"
      >
        Home
      </p>
    </div>
    <div
      @click="setCurrentScreen('collections')"
      class="flex flex-col items-center justify-center text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-purple-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
        <path
          fill-rule="evenodd"
          d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <p
        class="text-gray-900 dark:text-darkWhite font-aileron text-sm font-bold"
      >
        Collections
      </p>
    </div>
    <div
      @click="setCurrentScreen('applications')"
      class="flex flex-col items-center justify-center text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 fill-purple-700"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"
        ></path>
      </svg>
      <p
        class="text-gray-900 dark:text-darkWhite font-aileron text-sm font-bold"
      >
        Applications
      </p>
    </div>
    <div
      @click="setCurrentScreen('projects')"
      class="flex flex-col items-center justify-center text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-purple-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
        />
      </svg>
      <p
        class="text-gray-900 dark:text-darkWhite font-aileron text-sm font-bold"
      >
        Projects
      </p>
    </div>
    <div
      @click="setCurrentScreen('profile')"
      class="flex flex-col items-center justify-center text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 fill-purple-700"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <p
        class="text-gray-900 dark:text-darkWhite font-aileron text-sm font-bold"
      >
        Profile
      </p>
    </div>
  </div>

  <footer
    class="bg-white dark:bg-darkBg border-t-[1px] border-[#707070] dark:border-darkBorder py-1 hidden lg:fixed lg:bottom-0 w-full"
  >
    <div class="container sm:container mx-auto">
      <div
        class="grid lg:grid-cols-[25%_minmax(28%,_0fr)_minmax(20%,_1fr)_21%] sm:grid-cols-2 grid-cols-1 gap-4 auto-cols-max content-center"
      >
        <div class="grid-1">
          <div class="flex items-center gap-6">
            <img
              v-if="theme === 'light'"
              class="h-10 w-15 object-cover"
              src="../../../resources/Cllct-black.png"
              alt="black-logo"
            />
            <img
              v-if="theme === 'dark'"
              class="h-10 w-15 object-cover"
              src="../../../resources/logo/Cllct-Logo-White.svg"
              alt="black-logo"
            />
            <p class="text-black dark:text-white text-xs font-poppins">
              © {{ new Date().getFullYear() }} Cllct. All rights reserved.
            </p>
          </div>
        </div>
        <div class="grid-2 flex items-center">
          <div class="flex items-center">
            <ul class="md:flex block items-center justify-between gap-6">
              <li>
                <a
                  class="text-black dark:text-white text-xs font-poppins cursor-pointer"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  class="text-black dark:text-white text-xs font-poppins cursor-pointer"
                  >Help</a
                >
              </li>
              <li>
                <a
                  class="text-black dark:text-white text-xs font-poppins cursor-pointer"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a
                  class="text-black dark:text-white text-xs font-poppins cursor-pointer"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-3 flex items-center">
          <div class="flex items-center gap-3 flex items-center">
            <button
              class="flex items-center gap-1 bg-[#6317A7] px-3 py-2 rounded-full text-white"
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
                <!-- <span class="text-xs text-white">Available on</span> -->
                <p class="text-xs font-semiBold font-poppins text-white">
                  Google Play
                </p>
              </div>
            </button>
            <button
              class="flex items-center gap-1 bg-[#ED4E94] px-3 py-2 rounded-full text-white"
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
                <!-- <span class="text-xs text-white">Available on</span> -->
                <p class="text-xs font-semiBold font-poppins text-white">
                  App Store
                </p>
              </div>
            </button>
          </div>
        </div>
        <div class="grid-4 flex items-center justify-start lg:justify-end">
          <div class="flex items-center gap-5 justify-start lg:justify-end">
            <button
              class="rounded-full bg-pink flex justify-center items-center w-[30px] h-[30px] p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                ></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-pink flex justify-center items-center w-[30px] h-[30px] p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                ></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-pink flex justify-center items-center w-[30px] h-[30px] p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                ></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-pink flex justify-center items-center w-[30px] h-[30px] p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M19.545 15.025v-2.421h2.422v-1.815h-2.422V8.368H17.73v2.421h-2.421v1.815h2.421v2.421zM8.052 8.302c1.133 0 1.896.484 2.33.896l1.722-1.67c-1.048-.98-2.415-1.58-4.052-1.58C4.714 5.947 2 8.659 2 12s2.714 6.053 6.052 6.053c3.493 0 5.812-2.457 5.812-5.913 0-.503-.064-.86-.153-1.24H8.049v2.256h3.332c-.158.951-1.011 2.556-3.329 2.556-2.003 0-3.637-1.665-3.637-3.704 0-2.042 1.634-3.706 3.637-3.706z"
                ></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-pink flex justify-center items-center w-[30px] h-[30px] p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "FooterComponent",
  components: {},
  computed: mapState({
    theme: (state: any) => state.layout.theme,
  }),
  methods: {
    ...mapActions("layout", {
      setCurrentScreen: "setCurrentScreen",
    }),
  },
});
</script>
