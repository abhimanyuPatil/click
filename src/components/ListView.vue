<template>
  <!-- <ul>
      <li v-for="item in cards" :key="item">
        <router-link :to="`/items/${item.id}`"
          >{{ item.name }} ({{ item.id }})</router-link
        >
        astro phiyics
      </li>
    </ul> -->
  <div id="list-view" class="bg-white">
    <div class="container mx-auto bg-white py-[4rem]">
      <div
        id="list-view-header"
        class="flex items-center mx-8 text-center h-12 text-white bg-[#6317A7] rounded-3xl mt-12 px-2"
      >
        <p id="list-view-head-category" class="w-1/12 text-left pl-2">
          Category
        </p>
        <p id="list-view-head-title" class="w-2/12 text-left pl-2 font-aileron">Title</p>
        <p id="list-view-head-tags" class="w-4/12 font-aileron">Tags</p>
        <p id="list-view-head-name" class="w-1/12 font-aileron">Name</p>
        <p id="list-view-head-actions" class="w-4/12 font-aileron">Actions</p>
      </div>
      <div
        id="list-view-row"
        v-for="item in cards"
        :key="item"
        class="flex items-center text-center mx-8 rounded-3xl my-4 shadow-custom px-2 py-1"
      >
        <div
          id="list-view-category"
          class="flex lg:w-1/12 h-fit cursor-pointer"
        >
          <div
            class="font-aileron basis-3/5 bg-[#6317A7] w-2/3 text-xs p-1.5 text-white uppercase py-1 truncate shadow rounded-lg"
          >
            {{ item.category }}
          </div>
        </div>
        <div id="list-view-title" class="lg:w-2/12 flex item-center">
          <img
            class="h-1/2"
            src="../../resources/gallery.png"
            alt="title-avatar"
          />
          <p
            class="font-aileron text-[#181819] overflow-hidden text-ellipsis flex-wrap text-left text-xs ml-2"
          >
            {{ item.title }}
          </p>
        </div>
        <div
          id="list-view-tags"
          class="lg:w-4/12 h-fit flex justify-start pl-36 lg:pl-8 truncate cursor-pointer"
        >
          <div
            class="bg-[#ECEFF4] shadow text-xs h-fit rounded-lg p-2 mx-1"
            v-for="itemTag in item.tags"
            :key="itemTag"
          >
            <p class="font-aileron text-[#181819] text-xs">
              #{{ itemTag }} &nbsp;
            </p>
          </div>
        </div>
        <div
          id="list-view-name"
          class="lg:w-1/12 flex justify-center cursor-pointer"
        >
          <img :src="item.image" class="h-8 w-8 inline-flex rounded-full" />
        </div>
        <div id="list-view-actions" class="lg:w-4/12 flex h-fit justify-around">
          <div
            id="list-view-act-share"
            class="basis-1/12 bg-[#6317A7] shadow justify-center flex items-center rounded-2xl py-2 cursor-pointer"
          >
            <img
              class="h-3 w-3 object-fit"
              src="../../resources/icons/share-icon.svg"
              alt="share-icon"
            />
          </div>
          <div
            id="list-view-act-likes"
            class="basis-2/12 px-2 bg-[#ECEFF4] shadow flex justify-center items-center rounded-2xl cursor-pointer"
          >
            <img
              class="h-3 w-3 object-fit"
              src="../../resources/icons/like-icon.svg"
              alt="like-icon"
            />
            <p class="text-xs text-[#5E5C5C] font-aileron">
              &nbsp; {{ formatLikes(item.likes) }}
            </p>
          </div>
          <div
            id="list-view-act-views"
            class="basis-2/12 px-2 bg-[#ECEFF4] shadow flex justify-center items-center rounded-2xl cursor-pointer"
          >
            <img
              class="h-3 w-3 object-fit"
              src="../../resources/icons/eye-icon.svg"
              alt="views-icon"
            />
            <p class="text-xs text-[#5E5C5C] font-aileron">
              &nbsp; {{ formatViews(item.views) }}
            </p>
          </div>
          <div
            id="list-view-act-rating"
            class="basis-3/12 px-2 bg-[#ECEFF4] shadow flex items-center justify-center rounded-2xl cursor-pointer"
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
            class="basis-1/12 bg-[#ECEFF4] shadow items-center rounded-2xl flex justify-center cursor-pointer"
          >
            <img
              class="h-4 w-4 object-fit"
              src="../../resources/icons/edit-icon.svg"
              alt="edit-icon"
            />
          </div>
          <div
            id="list-view-act-save"
            class="basis-1/12 bg-[#ECEFF4] shadow items-center rounded-2xl flex justify-center cursor-pointer"
          >
            <img
              class="h-4 w-4 object-fit"
              src="../../resources/icons/save-icon.svg"
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
