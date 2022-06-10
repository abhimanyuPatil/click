<template>
  <div class="bg-white dark:bg-darkBg" id="square-grid">
    <div class="container mx-auto bg-white dark:bg-darkBg pb-[4rem] pt-2">
      <div
        class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:md:grid-cols-2 gap-4"
      >
        <div
          class="dark:bg-cardBg mb-0 pb-[2%] portfolio-box rounded hover:scale-105 duration-300 ease-in-out cursor-pointer sm:mb-5 sm:pt-2 sm:pb-0"
          v-for="item in cards"
          :key="item"
        >
          <div class="portfolio-image">
            <img :src="generateLink(item)" class="w-full rounded" />
          </div>
          <div class="portfolio-content flex py-3 sm:py-0 sm:mt-2">
            <VueCustomTooltip :label="item.from" class="min-w-0">
              <div class="portfolio-title flex items-center min-w-0">
                <span
                  class="p-[10px] rounded-3xl mr-1"
                  :style="getColor()"
                ></span>

                <p
                  class="font-aileron text-gray-600 dark:text-darkWhite text-sm font-semibold truncate font-bold"
                >
                  {{ item.from }}
                </p>
              </div>
            </VueCustomTooltip>
            <div
              class="flex items-end lg:items-center justify-between font-poppins text-[#D1D1D1] text-xs ml-auto"
            >
              <div><ViewsBox /></div>
              <div class="ml-2"><LikesBox /></div>

              <!-- <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="ml-2 cursor-pointer fill-[#d1d1d1] hover:fill-[#6317A7]"
              >
                <path
                  d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
                ></path>
              </svg> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10 hidden md:block">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black dark:bg-white bg-opacity-25 dark:bg-opacity-25"
        ></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-[90%] h-[90vh] transform overflow-hidden rounded-none bg-white dark:bg-cardBg align-middle shadow-xl transition-all"
            >
              <div class="flex">
                <div class="relative flex w-[70%] rounded-none">
                  <img :src="currentItem?.image" class="w-full object-cover" />
                  <div class="absolute flex items-center top-36 right-5">
                    <div
                      class="rounded-full px-4 py-2 text-xs text-white mx-3"
                      v-for="opt in ['Save', 'Permalink', 'Book']"
                      :key="opt"
                      :class="
                        opt === 'Book'
                          ? 'bg-primary'
                          : 'bg-[#000000] bg-opacity-50 '
                      "
                    >
                      {{ opt }}
                    </div>
                  </div>
                </div>
                <div class="max-w-[30%] flex flex-col justify-between">
                  <div
                    class="px-4 py-0 text-left flex flex-col basis-[55%] justify-end"
                  >
                    <div class="portfolio-title flex items-start px-3">
                      <div
                        class="p-[5px] md:p-[10px] rounded-sm mr-2"
                        :style="getColor()"
                      ></div>
                      <div>
                        <h3
                          class="text-[10px] md:text-xs font-semibold font-aileron text-gray-600 dark:text-darkMuted m-0"
                        >
                          {{ currentItem?.title }}
                        </h3>
                        <h4
                          class="text-[10px] md:text-xs font-aileron text-gray-600 dark:text-darkMuted m-0"
                        >
                          {{ currentItem?.from }}
                        </h4>
                        <div class="flex items-center">
                          <svg
                            v-for="item in 5"
                            :key="item"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            style="
                              fill: rgba(251, 187, 11, 1);
                              transform: ;
                              msfilter: ;
                            "
                          >
                            <path
                              d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                            ></path>
                          </svg>
                          <p class="text-[10px] mt-1 ml-1">12.2k</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap px-3 py-2">
                      <p
                        v-for="tag in currentItem?.tags"
                        :key="tag"
                        class="font-aileron text-primary cursor-pointer dark:text-darkMuted text-[10px] md:text-xs flex mt-1"
                      >
                        #{{ tag }} &nbsp;
                      </p>
                    </div>
                    <div class="flex items-center px-3">
                      <GlobeIcon class="w-3 h-3 text-gray-600" />
                      <p class="text-[10px] text-gray-600 ml-1">Public</p>
                    </div>
                    <p class="text-xs px-3 text-grey dark:text-darkWhite">
                      {{ currentItem?.description }}
                    </p>
                    <div class="flex items-center mt-10">
                      <img
                        class="h-10 w-10 object-scale-down flex basis-[10%]"
                        src="../../../resources/dp.png"
                      />
                      <div
                        class="text-[#686868] dark:text-darkMuted font-poppins text-xs flex flex-wrap basis-[50%]"
                      >
                        Sk and
                        <p class="text-orange">&nbsp;136&nbsp;</p>
                        Liked,
                        <p class="text-orange">&nbsp;320&nbsp;</p>
                        viewed this post.
                      </div>
                      <div class="flex items-center justify-around basis-[40%]">
                        <div
                          class="justify-center flex items-center h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl mb-2 p-3 group transition sm:w-fit cursor-pointer hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            class="cursor-pointer fill-grey dark:fill-darkWhite group-hover:fill-white"
                          >
                            <path
                              d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
                            ></path>
                          </svg>
                        </div>
                        <div
                          class="flex justify-center items-center h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl mb-2 p-3 group transition sm:w-fit cursor-pointer hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            class="cursor-pointer fill-grey dark:fill-darkWhite group-hover:fill-white"
                          >
                            <path
                              d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"
                            ></path>
                          </svg>
                        </div>
                        <div
                          class="flex justify-center cursor-pointer items-center h-6 mb-2 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md p-3 rounded-2xl group transition sm:w-fit hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
                        >
                          <img
                            class="h-4 w-4 object-fit"
                            src="../../../public/assets/icon/edit-icon.svg"
                            alt="edit-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col basis-[35%] border-t-[1px] p-3 border-[#707070] overflow-y-scroll bg-white dark:bg-cardBg"
                  >
                    <div
                      class="border-[1px] border-[#B96AFF] bg-[#FAF5FF] dark:bg-[#6317A7] text-[#6317A7] dark:text-white text-xs py-3 text-center rounded-lg"
                    >
                      Verified user only can comment on this post
                    </div>
                    <div :key="i" v-for="i in 3" class="flex items-start my-4">
                      <img
                        class="h-10 w-10 object-scale-down"
                        src="../../../resources/dp.png"
                      />
                      <div class="text-left pl-3">
                        <h4
                          class="font-aileron text-[#343434] dark:text-darkWhite"
                        >
                          Alex Philips
                        </h4>
                        <p class="text-xs text-[#9B9B9B] dark:text-darkMuted">
                          @alex
                        </p>
                        <p class="text-[#6A6868] dark:text-darkWhite text-sm">
                          Amazing work
                        </p>
                        <div class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            class="cursor-pointer fill-[#5E5C5C] dark:fill-darkWhite group-hover:fill-white"
                          >
                            <path
                              d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"
                            ></path>
                          </svg>
                          <p
                            class="text-xs ml-2 text-[#5E5C5C] dark:text-darkWhite font-aileron group-hover:text-white"
                          >
                            2 likes
                          </p>
                          <p
                            class="text-xs ml-4 text-[#5E5C5C] dark:text-darkWhite font-aileron group-hover:text-white"
                          >
                            4 days ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="p-2 bg-[#F3F3F3] dark:bg-cardBg dark:border-t-[0.5px] flex justify-between basis-[8%] items-center"
                  >
                    <div class="flex items-center">
                      <img
                        class="h-10 w-10 object-scale-down"
                        src="../../../resources/dp.png"
                      />
                      <div class="px-2 text-left">
                        <h4
                          class="text-[#504E4E] dark:text-white font-aileron font-semibold text-sm mb-0 mt-0"
                        >
                          {{ currentItem?.owner }}
                        </h4>
                        <p
                          class="capitalize text-[#7E7E7E] dark:text-darkMuted font-aileron text-xs"
                        >
                          {{ currentItem?.category }}
                        </p>
                      </div>
                    </div>
                    <button
                      class="font-aileron w-24 h-9 px-2 bg-primary uppercase text-xs text-white text-center justify-center font-bold rounded-lg shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                      VISIT
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { GlobeIcon } from "@heroicons/vue/solid";
import { defineComponent } from "vue";
import LikesBox from "@/components/UI/Likes.vue";
import ViewsBox from "@/components/UI/Views.vue";

export default defineComponent({
  name: "GridView",
  components: {
    LikesBox,
    ViewsBox,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    GlobeIcon,
  },
  props: {
    cards: Array,
    isMinimal: Boolean,
  },
  setup() {
    const isOpen = ref(false);
    const currentItem = null;
    return {
      isOpen,
      currentItem,
    };
  },
  methods: {
    getColor() {
      return {
        background: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      };
    },
    generateLink(item: any) {
      return item.image;
    },
    openCardModal(item: any) {
      if (this.isMobile()) {
        alert("navigate to new screen");
      } else {
        this.currentItem = item;
        this.openModal();
      }
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    },
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
});
</script>
