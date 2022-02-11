<template>
  <HeaderContainer title="Cllct" />
  <div class="min-h-screen flex bg-gradient-to-r from-[#A020F0] to-[#320C54]">
    <div class="hidden lg:flex flex-1 flex-col justify-start items-center p-3">
      <ArrowLeftIcon class="h-6 w-6 relative self-start"/>
      <div class="flex flex-col justify-start mt-20">
        <img
          class="h-40 w-80 object-cover"
          src="../../resources/mainlogo.png"
        />
        <h5 class="text-4xl font-light">Create your cards <br /> without limits</h5>
      </div>
    </div>
    <div class="flex flex-1">03</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import {  ArrowLeftIcon} from '@heroicons/vue/outline'
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer,ArrowLeftIcon },
});
</script>