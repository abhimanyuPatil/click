<template>
  <div id="list-view" class="bg-white">
    <div class="container mx-auto bg-white pb-[4rem] pt-1">
      <div
        id="list-view-header"
        class="hidden items-center text-center text-white rounded-3xl px-2 mx-8 sm:bg-[#6317A7] sm:h-12 sm:flex sm:mt-8"
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
        class="flex flex-wrap items-left text-center mx-8 rounded-3xl my-4 shadow-lg px-2 py-0 xl:py-1 lg:pr-0"
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
            class="font-aileron flex-wrap text-[#181819] self-center overflow-hidden text-ellipsis text-left text-xs ml-2"
          >
            {{ item.title }}
          </p>
        </div>
        <div
          id="list-view-tags"
          class="block h-8 whitespace-pre overflow-hidden text-ellipsis my-1 cursor-pointer sm:item-center sm:w-1/3 sm:pr-4 sm:truncate lg:block lg:h-8 lg:w-3/12 lg:self-center lg:text-left lg:px-4"
        >
          <span
            class="font-aileron bg-[#ECEFF4] text-[#181819] shadow-md text-xs h-7 rounded-3xl p-1 px-2 mr-2 sm:h-6 text-center sm:w-16"
            v-for="itemTag in item.tags.slice(0, 3)"
            :key="itemTag"
          >
            #{{ itemTag }}
          </span>
          <span
            class="font-aileron bg-[#ECEFF4] text-[#181819] shadow-md text-xs h-7 rounded-3xl p-1 px-2 mr-2 sm:h-6 text-center sm:w-16"
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
            class="justify-center flex items-center w-1/12 h-6 bg-[#ECEFF4] shadow-md rounded-2xl mb-2 group transition sm:w-fit basis-1/12 cursor-pointer hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <img
              class="h-3 w-3 object-fit group-hover:brightness-0 group-hover:invert"
              src="../../../public/assets/icon/share-solid.svg"
              alt="share-icon"
            />
          </div>
          <div
            id="list-view-act-likes"
            class="flex justify-center items-center w-2/12 h-6 bg-[#ECEFF4] shadow-md rounded-2xl px-1 mb-2 group transition sm:w-fit lg:basis-2/12 cursor-pointer hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <img
              class="h-3 w-3 object-fit group-hover:brightness-0 group-hover:invert"
              src="../../../public/assets/icon/like-icon.svg"
              alt="like-icon"
            />
            <p
              class="text-xs text-[#5E5C5C] font-aileron group-hover:text-white"
            >
              &nbsp; {{ formatLikes(item.likes) }}
            </p>
          </div>
          <div
            id="list-view-act-views"
            class="flex justify-center items-center w-2/12 h-6 bg-[#ECEFF4] shadow-md rounded-2xl mb-2 px-1 sm:w-fit lg:basis-2/12 cursor-pointer lg:m-0 lg:h-7"
          >
            <img
              class="h-3 w-3 object-fit"
              src="../../../public/assets/icon/eye-icon.svg"
              alt="views-icon"
            />
            <p class="text-xs text-[#5E5C5C] font-aileron">
              &nbsp; {{ formatViews(item.views) }}
            </p>
          </div>
          <div
            id="list-view-act-rating"
            class="flex items-center justify-center w-3/12 h-6 bg-[#ECEFF4] shadow-md px-1 p-1 mb-2 rounded-2xl sm:w-fit lg:basis-3/12 cursor-pointer lg:m-0 lg:h-7"
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
            <p class="text-xs text-[#5E5C5C] font-aileron">
              &nbsp;{{ formatRating(item.timesRated) }}
            </p>
          </div>
          <div
            id="list-view-act-edit"
            class="flex justify-center cursor-pointer items-center w-1/12 h-6 mb-2 mx-1 p-1 bg-[#ECEFF4] shadow-md rounded-2xl group transition sm:hidden sm:w-fit lg:basis-1/12 hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <img
              class="h-4 w-4 object-fit"
              src="../../../public/assets/icon/edit-icon.svg"
              alt="edit-icon"
            />
          </div>
          <div
            id="list-view-act-save"
            class="flex justify-center cursor-pointer items-center w-1/12 h-6 mb-2 mx-1 p-1 bg-[#ECEFF4] shadow-md rounded-2xl group transition sm:w-fit sm:justify-around lg:basis-1/12 hover:bg-[#6317A7] lg:m-0 lg:h-7"
          >
            <img
              class="h-3 w-3 object-fit group-hover:brightness-0 group-hover:invert"
              src="../../../public/assets/icon/save-icon.svg"
              alt="save-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListView",
  props: {
    cards: null,
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
  },
});
</script>
