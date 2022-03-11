<template>
  <div
    class="flex items-center justify-between w-full h-11 rounded-3xl border-[#9B9B9B] border md:flex"
  >
    <div class="flex basis-3/5 items-center w-full gap-3 h-11">
      <div class="flex items-center ml-4">
        <img
          src="../../../resources/search-icon.svg"
          alt=""
          width="20"
          height="20"
        />
      </div>
      <div class="relative w-full">
        <input
          id="dropdown-responsive"
          type="text"
          placeholder="Search topic"
          @change="query = $event.target.value"
          class="w-full h-[50px] border-none outline-none bg-[transparent] text-[#2A2A2A] text-aileron"
        />
        <TransitionRoot
          :show="isOpen"
          enter="transition-opacity duration-75"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            v-if="isOpen"
            class="absolute w-full bg-white rounded z-10 px-3 shadow-md mt-2"
          >
            <p
              class="font-poppins text-black my-2 cursor-pointer"
              v-for="person in filteredPeople"
              :key="person.id"
            >
              {{ person.name }}
            </p>
          </div>
        </TransitionRoot>
      </div>
    </div>
    <div class="flex basis-2/5 md:hidden h-full border-l-2">
      <Listbox v-model="selectedType">
        <div class="relative mt-1 w-full">
          <ListboxButton
            class="relative font-aileron w-full py-2 pl-3 pr-10 text-left bg-transparent rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-sm"
          >
            <span class="block truncate text-black">{{ selectedType }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-100" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ListboxOptions
              class="z-10 absolute w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="type in types"
                :key="type"
                :value="type"
                as="template"
              >
                <li
                  :class="[
                    active ? 'text-amber-900 bg-primary' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium text-white' : 'font-normal',
                      'block text-sm font-aileron',
                    ]"
                    >{{ type }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-white"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useRouter } from "vue-router";
const types = ["All", "Projects", "Collections"];
const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
export default defineComponent({
  name: "MobileSearch",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    TransitionRoot,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  data() {
    const selectedType = ref(types[0]);
    return {
      selectedType,
      types,
    };
  },
  setup() {
    const router = useRouter();
    let isOpen = ref(false);
    let selected = ref(people[0]);
    let query = ref("");
    let filteredPeople = computed(() =>
      query.value === ""
        ? people
        : people.filter((person) =>
            person.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.value.toLowerCase().replace(/\s+/g, ""))
          )
    );
    return { router, selected, query, filteredPeople, isOpen };
  },
  mounted() {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobile) {
      let responsiveInput = <HTMLInputElement>(
        document?.getElementById("dropdown-responsive")
      );
      responsiveInput.addEventListener("focusin", () => {
        this.isOpen = true;
      });
      responsiveInput.addEventListener("blur", () => {
        this.isOpen = false;
      });
    }
  },
});
</script>
