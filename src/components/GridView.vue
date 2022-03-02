<template>
  <div class="bg-white" id="square-grid">
    <div class="container mx-auto bg-white py-[4rem]">
      <div
        class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:md:grid-cols-3 gap-4"
      >
        <div
          class="portfolio-box shadow-md rounded mb-5 hover:scale-105 duration-300 ease-in-out cursor-pointer"
          v-for="item in cards"
          :key="item"
        >
          <div class="portfolio-image">
            <img :src="generateLink(item)" class="w-full" />
          </div>
          <div class="portfolio-content">
            <div class="portfolio-title flex items-center py-4 px-3">
              <div class="p-[10px] rounded mr-2" :style="getColor()"></div>
              <h4
                class="text-[14px] font-semibold font-aileron text-gray-600 m-0"
              >
                {{item.from}}
              </h4>
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
  name: "GridView",
  props: {
    cards: Array,
    isMinimal:Boolean
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
