<template>
  <div id="list-view" class="bg-white dark:bg-darkBg">
    <div
      class="container mx-auto bg-white dark:bg-darkBg p-[1rem] md:p-[2rem] pb-16"
    >
      <div
        id="list-view-header"
        class="hidden items-center text-center text-white rounded-3xl px-2 sm:bg-[#6317A7] sm:h-12 sm:flex"
      >
        <p
          id="list-view-head-category"
          class="font-aileron hidden text-left pl-2 sm:w-1/12 lg:flex lg:w-1/12"
        >
          Category
        </p>
        <p
          id="list-view-head-title"
          class="font-aileron hidden text-left pl-2 sm:flex sm:w-1/3 sm:justify-center lg:w-1/5"
        >
          Title
        </p>
        <p
          id="list-view-head-tags"
          class="hidden font-aileron sm:flex sm:w-1/3 sm:justify-center lg:w-1/4"
        >
          Tags
        </p>
        <p
          id="list-view-head-name"
          class="font-aileron hidden lg:flex lg:justify-center lg:w-1/12"
        >
          Name
        </p>
        <p
          id="list-view-head-actions"
          class="font-aileron hidden sm:flex sm:w-1/3 sm:justify-center lg:w-2/5"
        >
          Actions
        </p>
      </div>
      <div
        id="list-view-row"
        v-for="item in cards"
        :key="item"
        class="flex flex-wrap items-left text-center rounded-3xl my-4 shadow-lg px-2 py-0 xl:py-1 lg:pr-0"
        v-on:click="openCardModal(item)"
      >
        <div
          id="list-view-category"
          class="min-w-max my-1 w-2/12 h-fit cursor-pointer sm:hidden lg:flex lg:w-1/12 lg:my-auto"
        >
          <div
            class="font-aileron bg-[#6317A7] text-xs p-1.5 text-white capitalize py-1 truncate shadow-md rounded-3xl lg:w-4/5 lg:p-2"
          >
            <!-- w-2/3  -->
            {{ item.category }}
          </div>
        </div>
        <div
          id="list-view-title"
          class="flex item-center sm:w-1/3 sm:pr-4 lg:w-1/5 lg:pl-4"
        >
          <img
            class="hidden self-center lg:block lg:h-1/2"
            src="../../../resources/gallery.png"
            alt="title-avatar"
          />

          <p
            class="font-aileron flex-wrap text-[#181819] dark:text-white self-center overflow-hidden text-ellipsis text-left text-xs ml-2"
          >
            {{ item.title }}
          </p>
        </div>
        <div
          id="list-view-tags"
          class="block h-8 whitespace-pre overflow-hidden text-ellipsis my-1 cursor-pointer sm:item-center sm:w-1/3 sm:pr-4 sm:truncate lg:block lg:h-8 lg:w-3/12 lg:self-center lg:text-left lg:px-4"
        >
          <span
            class="font-aileron bg-[#ECEFF4] dark:bg-dropdownBg text-[#181819] dark:text-darkWhite shadow-md text-xs h-7 rounded-3xl p-1 px-2 mr-2 sm:h-6 text-center sm:w-16"
            v-for="itemTag in item.tags.slice(0, 3)"
            :key="itemTag"
          >
            #{{ itemTag }}
          </span>
          <span
            class="font-aileron bg-[#ECEFF4] dark:bg-dropdownBg text-[#181819] dark:text-darkWhite shadow-md text-xs h-7 rounded-3xl p-1 px-2 mr-2 sm:h-6 text-center sm:w-16"
          >
            ...
          </span>
        </div>
        <div
          id="list-view-name"
          class="hidden cursor-pointer lg:flex lg:justify-center lg:self-center lg:mx-auto"
        >
          <img :src="item.image" class="h-8 w-8 inline-flex rounded-full" />
        </div>
        <div
          id="list-view-actions"
          class="flex flex-wrap justify-between items-center w-full my-1 h-fit sm:w-1/3 sm:justify-around sm:self-center md:flex-row lg:w-2/5 lg:self-center"
        >
          <div
            id="list-view-act-share"
            class="justify-center flex items-center w-1/12 h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl mb-2 group transition sm:w-fit basis-1/12 cursor-pointer hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
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
            id="list-view-act-likes"
            class="flex justify-center items-center w-2/12 h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl px-1 mb-2 group transition sm:w-fit lg:basis-2/12 cursor-pointer hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
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
            <p
              class="text-xs text-[#5E5C5C] dark:text-darkWhite font-aileron group-hover:text-white"
            >
              &nbsp; {{ formatLikes(item.likes) }}
            </p>
          </div>
          <div
            id="list-view-act-views"
            class="flex justify-center items-center w-2/12 h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl mb-2 px-1 sm:w-fit lg:basis-2/12 cursor-pointer lg:m-0 lg:h-7"
          >
            <svg
              class="fill-grey dark:fill-darkWhite h-3 w-3 object-fit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23.214 13"
            >
              <path
                id="eye"
                d="M11.607,7.04C3.991,7.04,0,12.648,0,13.54s3.991,6.5,11.607,6.5,11.607-5.611,11.607-6.5-3.993-6.5-11.607-6.5Zm0,11.5a5.081,5.081,0,0,1-5.159-5,5.083,5.083,0,0,1,5.159-5,5.081,5.081,0,0,1,5.158,5,5.08,5.08,0,0,1-5.158,5Zm0-5c-.472-.519.77-2.5,0-2.5a2.5,2.5,0,1,0,2.58,2.5c0-.635-2.179.44-2.58,0Z"
                transform="translate(0 -7.04)"
              />
            </svg>
            <p class="text-xs text-[#5E5C5C] dark:text-darkWhite font-aileron">
              &nbsp; {{ formatViews(item.views) }}
            </p>
          </div>
          <div
            id="list-view-act-rating"
            class="flex items-center justify-center w-3/12 h-6 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md px-1 p-1 mb-2 rounded-2xl sm:w-fit lg:basis-3/12 cursor-pointer lg:m-0 lg:h-7"
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
            <p class="text-xs text-[#5E5C5C] dark:text-darkWhite font-aileron">
              &nbsp;{{ formatRating(item.timesRated) }}
            </p>
          </div>
          <div
            id="list-view-act-edit"
            class="flex justify-center cursor-pointer items-center w-1/12 h-6 mb-2 mx-1 p-1 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl group transition sm:hidden sm:w-fit lg:basis-1/12 hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <img
              class="h-4 w-4 object-fit"
              src="../../../public/assets/icon/edit-icon.svg"
              alt="edit-icon"
            />
          </div>
          <div
            id="list-view-act-save"
            class="flex justify-center cursor-pointer items-center w-1/12 h-6 mb-2 mx-1 p-1 bg-[#ECEFF4] dark:bg-dropdownBg shadow-md rounded-2xl group transition sm:w-fit sm:justify-around lg:basis-1/12 hover:bg-[#6317A7] dark:hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <svg
              class="h-3 w-3 fill-grey dark:fill-darkWhite object-fit group-hover:brightness-0 group-hover:invert"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                id="save"
                d="M15.55,3.2H5.075A1.88,1.88,0,0,0,3.2,5.075v11.25A1.88,1.88,0,0,0,5.075,18.2h11.25A1.88,1.88,0,0,0,18.2,16.325V6.131L15.55,3.2Zm-1.1,5.625a.941.941,0,0,1-.938.938H7.888a.941.941,0,0,1-.938-.938V4.138h7.5V8.825Zm-.938-3.75H11.638v3.75h1.875Z"
                transform="translate(-3.2 -3.2)"
              />
            </svg>
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

export default defineComponent({
  name: "ListView",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    GlobeIcon,
  },
  props: {
    cards: null,
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
    formatLikes(count: any) {
      return (parseFloat(count) / 10000).toFixed(0);
    },
    formatViews(count: any) {
      return `${(parseFloat(count) / 100000000).toFixed(0)} k`;
    },
    formatRating(count: any) {
      return (parseFloat(count) / 100000).toFixed(0);
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
