<template>
  <div class="flex items-center text=[10px] hover:text-light">
    77
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      class="cursor-pointer fill-[#d1d1d1] hover:fill-[#6317A7]"
    >
      <path
        d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LikesBox",
  props: {
    count: Number,
  },
});
</script>
