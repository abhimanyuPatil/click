<template>
  <Popover class="relative w-full" v-slot="{ open }">
    <PopoverButton
      :class="[
        open ? 'text-gray-900' : 'text-gray-500',
        'flex w-full py-3 justify-center items-center flex-col bg-grey dark:bg-cardBg font-medium hover:text-gray-900 focus:outline-none text-center',
      ]"
    >
      <p
        class="flex font-aileron text-xs text-[#404040] dark:text-darkWhite cursor-pointer text-center"
      >
        {{ label }}
      </p>
      <div class="cursor-pointer flex items-center text-[#404040] mt-2">
        <p
          class="text-center font-aileron text-base font-bold mr-2 dark:text-darkWhite"
        >
          {{ selected.label }}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          class="fill-black dark:fill-white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </PopoverButton>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute bg-white dark:bg-dropdownBg z-10 mt-3 w-full text-center flex justify-center flex-col px-3"
      >
        <PopoverButton
          @click="$emit('onChange', item)"
          v-for="item in options"
          :key="item"
          class="cursor-pointer text-black dark:text-darkWhite font-aileron my-2 text-sm"
        >
          <p>
            {{ item.label }}
          </p>
        </PopoverButton>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  Popover,
  PopoverButton,
  // PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
export default defineComponent({
  name: "HeroSectionDropdown",
  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
    selected: { type: Object, required: true },
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
});
</script>
