<template>
  <div class="bg-white" id="square-grid">
    <div class="container mx-auto bg-white py-[4rem]">
      <div
        class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:md:grid-cols-2 gap-4"
      >
        <div
          class="mb-0 pb-[2%] portfolio-box rounded hover:scale-105 duration-300 ease-in-out cursor-pointer sm:mb-5 sm:pt-2 sm:pb-0"
          v-for="item in cards"
          :key="item"
        >
          <div class="portfolio-image">
            <img :src="generateLink(item)" class="w-full" />
          </div>
          <div class="portfolio-content flex py-3 sm:py-0 sm:mt-2">
            <div class="portfolio-title flex items-center min-w-0 mr-[10%]">
              <span
                class="p-[10px] rounded-3xl mr-1"
                :style="getColor()"
              ></span>
              <p
                :title="item.from"
                class="font-aileron text-gray-600 text-sm font-semibold truncate font-bold"
              >
                {{ item.from }}
              </p>
            </div>
            <div
              class="flex items-end lg:items-center justify-between font-poppins text-[#D1D1D1] text-xs ml-auto"
            >
              <div><ViewsBox /></div>
              <div class="ml-2"><LikesBox /></div>

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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LikesBox from "@/components/UI/Likes.vue";
import ViewsBox from "@/components/UI/Views.vue";

export default defineComponent({
  name: "GridView",
  components: {
    LikesBox,
    ViewsBox,
  },
  props: {
    cards: Array,
    isMinimal: Boolean,
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
