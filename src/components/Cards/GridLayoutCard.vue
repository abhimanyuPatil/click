<template>
  <div id="regular-grid" class="bg-white dark:bg-darkBg">
    <div
      class="masonry-1-col md:masonry-2-col lg:masonry-5-col xl:masonry-5-col 2xl:masonry-6-col bg-white dark:bg-darkBg container mx-auto py-[3rem] pb-[4rem]"
    >
      <div
        v-for="item in cards"
        v-on:click="openCardModal(item)"
        :key="item"
        class="break-inside shadow-md mb-5 duration-300 ease-in-out cursor-pointer dark:bg-cardBg"
      >
        <div class="portfolio-image relative">
          <img
            :class="getImageClass(item.height)"
            :src="item.image"
            class="w-full rounded"
          />
          <div
            class="absolute bottom-3 right-2 flex items-center font-poppins text-xs text-[#ffff]"
          >
            <svg
              v-for="item in 5"
              :key="item"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              style="fill: rgba(251, 187, 11, 1); transform: ; msfilter: "
            >
              <path
                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="portfolio-content py-4 pb-2">
          <!-- from content -->
          <div class="portfolio-title flex items-center px-3">
            <div
              class="p-[5px] md:p-[8px] rounded-xl mr-2"
              :style="getColor()"
            ></div>
            <h4
              class="text-[10px] md:text-xs font-semibold font-aileron text-gray-600 dark:text-darkMuted m-0"
            >
              {{ item.from }}
            </h4>
          </div>
          <!-- title -->
          <h3
            class="text-[14px] md:text-[14px] font-aileron text-[#181819] dark:text-white font-semibold mb-0 mt-3 px-3"
          >
            {{ item.title }}
          </h3>
          <p
            class="text-grey dark:text-darkWhite font-aileron px-3 text-[12px] my-1"
          >
            {{ item.description }}
          </p>
          <!-- tags -->
          <div class="flex items-center flex-wrap px-3 py-2">
            <p
              v-for="tag in item.tags"
              :key="tag"
              class="font-aileron text-[#7E7E7E] dark:text-darkMuted text-[10px] md:text-xs flex mt-1"
            >
              #{{ tag }} &nbsp;
            </p>
          </div>

          <!-- likes views share and star -->
          <div
            class="flex md:flex-row items-center md:justify-between lg:justify-between my-2 px-3"
          >
            <div
              class="flex items-center font-poppins text-[#D1D1D1] text-xs justify-between p-0 md:pr-5"
            >
              <LikesBox />

              <ViewsBox />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                class="ml-2 cursor-pointer fill-[#d1d1d1] hover:fill-[#6317A7]"
              >
                <path
                  d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
                ></path>
              </svg>
            </div>
          </div>
          <!-- user view -->
          <div
            class="flex items-center justify-between border-t-[0.8px] border-[#ccc] px-2 pt-2"
          >
            <div class="flex items-center">
              <img
                class="h-10 w-10 object-scale-down"
                src="../../../resources/dp.png"
              />
              <div class="px-2">
                <h4
                  class="text-[#504E4E] dark:text-white font-aileron font-semibold text-sm mb-0 mt-0"
                >
                  {{ item.owner }}
                </h4>
                <p
                  class="capitalize text-[#7E7E7E] dark:text-darkMuted font-aileron text-xs"
                >
                  {{ item.category }}
                </p>
              </div>
            </div>
            <button
              class="p-2 flex font-aileron flex-initial lg:w-3/12 lg:mx-0 bg-primary uppercase text-white text-center justify-center font-bold rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-[10px]"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
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
              class="w-full max-w-[90%] h-[90vh] transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all"
            >
              <div class="flex">
                <div class="flex w-[70%] rounded-none">
                  <img :src="currentItem?.image" class="w-full object-cover" />
                </div>
                <div class="max-w-[30%] flex flex-col">
                  <div class="bg-white p-4 text-left">
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
                    <p class="text-xs px-3 text-grey">
                      {{ currentItem?.description }}
                    </p>
                  </div>
                  <div class="p-4 bg-gray-200 flex justify-between">
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
  name: "DetailView",
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
      return require("../../../resources/home-page/portfolios/Portfolio-" +
        item +
        ".jpg");
    },
    getImageClass(height: boolean) {
      if (height) {
        return "h-[300px]";
      } else {
        return "";
      }
    },
    openCardModal(item: any) {
      console.log("item", item);
      this.currentItem = item;
      this.openModal();
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    },
  },
});
</script>
