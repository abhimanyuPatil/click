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
            class="text-[14px] md:text-[18px] font-aileron text-[#181819] font-semibold mb-0 mt-3"
          >
            {{ item.title }}
          </h3>
          <!-- tags -->
          <div class="flex items-center">
            <p
              v-for="tag in item.tags"
              :key="tag"
              class="font-aileron text-[#7E7E7E] text-[10px] md:text-xs flex mt-2"
            >
              #{{tag}} &nbsp;
            </p>
          </div>

          <!-- likes views share and star -->
          <div
            class="flex flex-col md:flex-row items-center md:justify-between lg:justify-between my-5"
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
                class="ml-2 cursor-pointer"
                style="fill: rgba(209, 209, 209, 1); transform: ; msfilter: "
              >
                <path
                  d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"
                ></path>
              </svg>
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
          <!-- user view -->
          <div
            class="flex items-center justify-start border-t-[0.8px] border-grey pt-2"
          >
            <div>
              <img
                class="h-10 w-10 object-scale-down"
                src="../../resources/dp.png"
              />
            </div>
            <div class="px-2">
              <h4
                class="text-[#504E4E] font-aileron font-semibold text-base mb-1"
              >
                {{ item.owner }}
              </h4>
              <p class="capitalize text-[#7E7E7E] font-aileron text-xs">
                {{ item.category }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LikesBox from "@/components/Likes.vue";
import ViewsBox from "@/components/Views.vue";

export default defineComponent({
  name: "DetailView",
  components:{
    LikesBox,
    ViewsBox
  },
  props: {
    cards: Array,
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
