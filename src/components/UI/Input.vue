<template>
  <div class="flex flex-wrap items-stretch w-full mb-4 relative lg:pl-4">
    <div class="hidden lg:flex lg:w-1/4 -mr-px">
      <div
        class="w-full flex items-center leading-normal bg-light rounded-l-2xl border border-r-0 border-grey-light px-3 text-xs font-poppins text-white"
      >
        {{ label }}
      </div>
    </div>
    <input
      :type="type"
      class="text-black font-poppins flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded-2xl lg:rounded-l-none px-3 relative focus:border-0 active:border-0 bg-[#ECECEC] invalid:border-pink-500 invalid:text-pink-600"
      :placeholder="label"
      :disabled="disabled"
      @input="(event) => $emit('onChange', event.target.value)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  props: {
    label: String,
    name: String,
    type: String,
    disabled:Boolean
  },
});
</script>
