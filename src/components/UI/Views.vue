<template>
  <div class="flex items-center ml-2 group">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 20.833 11.667"
      class="ml-1 cursor-pointer fill-[#d1d1d1] group-hover:fill-[#6317A7]"
    >
      <path
        id="eye"
        d="M10.417,7.04C3.582,7.04,0,12.073,0,12.873s3.582,5.833,10.417,5.833,10.417-5.035,10.417-5.833S17.25,7.04,10.417,7.04Zm0,10.32a4.56,4.56,0,0,1-4.63-4.486,4.561,4.561,0,0,1,4.63-4.488,4.56,4.56,0,0,1,4.629,4.488,4.559,4.559,0,0,1-4.629,4.486Zm0-4.486c-.424-.465.691-2.243,0-2.243a2.245,2.245,0,1,0,2.316,2.243c0-.57-1.955.395-2.316,0Z"
        transform="translate(0 -7.04)"
      />
    </svg>
    <p class="text=[10px] font-bold font-aileron group-hover:text-light">&nbsp;7.5k</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ViewsBox",
  props: {
    count: Number,
  },
});
</script>
