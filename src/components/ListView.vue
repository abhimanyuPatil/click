<template>
  <!-- <ul>
      <li v-for="item in cards" :key="item">
        <router-link :to="`/items/${item.id}`"
          >{{ item.name }} ({{ item.id }})</router-link
        >
        astro phiyics
      </li>
    </ul> -->
  <ion-row class="container mx-auto">
    <ion-row
      class="flex items-center w-full mx-8 text-center h-12 text-white bg-[#6317A7] rounded-3xl mt-12"
    >
      <ion-text class="basis-1/12">Category</ion-text>
      <ion-text class="basis-2/12">Title</ion-text>
      <ion-text class="basis-4/12">Tags</ion-text>
      <ion-text class="basis-1/12">Name</ion-text>
      <ion-text class="basis-4/12">Actions</ion-text>
    </ion-row>

    <ion-row
      class="flex text-center mx-8 w-full h-12 rounded-3xl my-4 shadow-md"
      v-for="item in cards"
      :key="item"
    >
      <ion-col class="basis-1/12 h-fit overflow-hidden truncate">
        <ion-chip class="bg-[#6317A7] shadow text-white">
          <ion-label> {{ item.category }} </ion-label>
        </ion-chip>
      </ion-col>
      <ion-col class="basis-2/12 h-fit overflow-hidden truncate">
        <img src="../../resources/icons/media-icon.svg" alt="title-avatar" />
        <ion-label>{{ item.title }}</ion-label>
      </ion-col>
      <ion-col class="basis-4/12 h-fit overflow-hidden truncate">
        <ion-chip
          class="bg-[#ECEFF4] shadow text-xs h-fit"
          v-for="itemTag in item.tags"
          :key="itemTag"
        >
          <ion-label>#{{ itemTag }}</ion-label>
        </ion-chip>
      </ion-col>
      <ion-col class="basis-1/12 flex justify-center">
        <ion-avatar class="h-fit">
          <img :src="item.image" class="h-3/5 w-3/5 inline-flex" />
        </ion-avatar>
      </ion-col>
      <ion-col class="basis-4/12 h-fit flex overflow-hidden truncate">
        <ion-chip class="basis-1/12 bg-[#6317A7] shadow">
          <img src="../../resources/icons/share-icon.svg" alt="share-icon" />
        </ion-chip>
        <ion-chip class="basis-2/12 bg-[#ECEFF4] shadow">
          <img src="../../resources/icons/like-icon.svg" alt="like-icon" />
          <ion-label>{{ item.likes }}</ion-label>
        </ion-chip>
        <ion-chip class="basis-2/12 bg-[#ECEFF4] shadow">
          <img src="../../resources/icons/eye-icon.svg" alt="eye-icon" />
          <ion-label>{{ item.views }}</ion-label>
        </ion-chip>
        <ion-chip class="basis-3/12 bg-[#ECEFF4] shadow">
          <img src="" alt="rate-icon" />
          <ion-label>{{ item.timesRated }}</ion-label>
        </ion-chip>
        <ion-chip class="basis-1/12 bg-[#ECEFF4] shadow">
          <img src="../../resources/icons/edit-icon.svg" alt="edit-icon" />
        </ion-chip>
        <ion-chip class="basis-1/12 bg-[#ECEFF4] shadow">
          <img src="../../resources/icons/save-icon.svg" alt="save-icon" />
        </ion-chip>
      </ion-col>
      <!-- <div class="portfolio-image">
          <img :src="generateLink(item)" class="w-full" />
        </div>
        <div class="portfolio-content">
          <div class="portfolio-title flex items-center py-4 px-3">
            <div class="p-[10px] rounded mr-2" :style="getColor()"></div>
            <h4
              class="text-[14px] font-semibold font-aileron text-gray-600 m-0"
            >
              from web design Ledger
            </h4>
          </div>
        </div> -->
    </ion-row>
  </ion-row>
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
  },
});
</script>
