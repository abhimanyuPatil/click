<template>
  <Popover class="relative" v-slot="{ open }">
    <div class="sort-filter-item mr-2.5">
      <PopoverButton
        :class="[
          open ? 'text-gray-900' : 'text-gray-500',
          'group bg-white dark:bg-transparent font-medium hover:text-gray-900 focus:outline-none text-right',
        ]"
      >
        <div
          class="flex justify-end pr-1 font-aileron text-xs text-grey dark:text-darkMuted font-light cursor-pointer text-right"
          >{{ label }}</div
        >
        <p
          class="cursor-pointer items-center text-grey dark:text-white font-aileron flex text-[14px] font-bold mt-2"
        >
          {{ selected.label }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            fill="none"
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
        </p>
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
          class="absolute bg-white dark:bg-dropdownBg z-10 left-1/2 transform -translate-x-1/2 mt-3 w-28 text-center flex justify-center flex-col px-3"
        >
          <PopoverButton
            @click="$emit('onChange', item)"
            v-for="item in options"
            :key="item"
            class="cursor-pointer text-black dark:text-white font-aileron my-2 text-sm"
          >
            <p>
              {{ item.label }}
            </p>
          </PopoverButton>
        </PopoverPanel>
      </transition>
    </div>
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
  name: "ViewDropdown",
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
