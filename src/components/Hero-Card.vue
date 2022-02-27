<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex w-full items-center hero-section text-center h-3/6">
    <div class="md:container m-auto">
      <div class="hero-content-wrap md:w-1/2 m-auto w-full">
        <h1 class="text-white font-semibold font-poppins">
          Create your cards without limits
        </h1>
        <p class="text-white font-poppins font-regular">
          Leading destination to find & showcase creative cards and home to the
          world's best professionals.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCard",
  props: {
    title: String,
  },
};
</script>
