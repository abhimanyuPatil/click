<template>
  <div id="regular-grid" class="bg-white">
    <div
      class="masonry-1-col md:masonry-3-col lg:masonry-4-col xl:masonry-5-col bg-white container mx-auto py-[4rem]"
    >
      <div
        v-for="item in cards"
        :key="item"
        class="break-inside shadow-md rounded mb-5 hover:scale-105 duration-300 ease-in-out cursor-pointer"
      >
        <div class="portfolio-image">
          <img :src="item.image" class="w-full" />
        </div>
        <div class="portfolio-content py-4 px-3">
          <!-- from content -->
          <div class="portfolio-title flex items-center">
            <div
              class="p-[8px] md:p-[10px] rounded mr-2"
              :style="getColor()"
            ></div>
            <h4
              class="text-[12px] md:text-[14px] font-semibold font-aileron text-gray-600 m-0"
            >
              {{ item.from }}
            </h4>
          </div>
          <!-- title -->
          <h3
            class="text-[14px] md:text-[18px] font-aileron text-[#181819] font-semibold mb-0"
          >
            {{ item.title }}
          </h3>
          <!-- tags -->
          <p class="font-aileron text-[#7E7E7E] text-[10px] md:text-xs">
            {{ item.tags }}
          </p>
          <!-- likes views share and star -->
          <div
            class="flex flex-col md:flex-row items-center md:justify-between lg:justify-between my-5"
          >
            <div
              class="flex items-center font-poppins text-[#D1D1D1] text-xs justify-between p-0 md:pr-5"
            >
              <LikesBox />

              <ViewsBox />
            </div>
            <div class="flex items-center font-poppins text-xs text-[#5E5C5C]">
              2k
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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailView",
  props: {
    cards: [],
  },
  methods: {
    getColor() {
      return {
        background: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      };
    },
    generateLink(item: any) {
      return require("../../resources/home-page/portfolios/Portfolio-" +
        item +
        ".jpg");
    },
  },
});
</script>
