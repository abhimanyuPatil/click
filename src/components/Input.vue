<template>
  <div class="flex flex-wrap items-stretch w-full mb-4 relative lg:pl-4">
    <div class="hidden lg:flex lg:w-1/4 -mr-px">
      <div
        class="w-full flex items-center leading-normal bg-light rounded-l-2xl border border-r-0 border-grey-light px-3 text-sm"
      >
        {{ label }}
      </div>
    </div>
    <input
      type="text"
      class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded-2xl lg:rounded-l-none px-3 relative focus:border-0 active:border-0 bg-[#ECECEC] invalid:border-pink-500 invalid:text-pink-600"
      :placeholder="label"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  props: {
    label: String,
  },
});
</script>
