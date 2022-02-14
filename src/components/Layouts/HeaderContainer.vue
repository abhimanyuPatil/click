<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="border-b border-[#DEDEDE] pb-3 bg-white">
    <div class="container md:container md:mx-auto flex flex-col gap-2 mx-auto">
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
          <img
            src="../../../resources/logo-icon.svg"
            alt=""
            width="78"
            height="48"
          />
          <div class="flex items-center ml-10 gap-9">
            <h5 class="text-lg font-semibold text-black">Collections</h5>
            <h5 class="text-lg font-semibold text-black">Projects</h5>
          </div>
        </div>
        <div class="flex items-center gap-7">
          <div
            class="relative flex items-center justify-center fill-white bg-[#6317A7] w-11 h-11 rounded-full"
          >
            <img
              src="../../../resources/brush-icon.svg"
              alt=""
              width="20"
              height="20"
            />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              T
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
          >
            <img src="../../../resources/string-icon.svg" alt="" class="" />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              S
            </div>
          </div>
          <div
            class="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
          >
            <img src="../../../resources/box-icon.svg" alt="" />
            <div
              class="absolute w-5 h-5 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-sm"
            >
              A
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div
              class="flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
            >
              <img src="../../../resources/user-icon.svg" alt="" />
            </div>
            <h3 class="text-[#5E5C5C] text-sm font-semibold">John Doe</h3>
          </div>
          <div class="relative">
            <button
              class="text-sm uppercase text-center pb-1 w-24 h-11 font-semibold text-black rounded-3xl bg-[#FBBB0B]"
            >
              create
            </button>
            <div
              class="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1"
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between w-full h-11 rounded-3xl border-[#9B9B9B] border">
        <div class="flex items-center w-full gap-3">
          <div class="flex items-center ml-4">
            <img
              src="../../../resources/search-icon.svg"
              alt=""
              width="20"
              height="20"
            />
          </div>
          <input
            type="text"
            placeholder="Web..."
            class="w-12/12 h-full border-none outline-none bg-transparent"
          />
        </div>
        <div class="flex items-center gap-3 h-full border-l border-[#9B9B9B] mr-3">
          <div class="h-6 mx-2 pt-0.5 text-xs font-bold text w-14 bg-[#ECEFF4] rounded-3xl text-center text-black">
            All
          </div>
          <div class="text-xs font-bold text text-black">Collections</div>
          <div class="text-xs font-bold text text-black">Project</div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full">
        <div class="header-badges-wrap flex items-center gap-3">
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded flex">
              All 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded flex">
              Location
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded flex">
              Sites
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded flex">
              Books 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded">
              Movies
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded flex">
              Songs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </span>
          <span class="text-xs px-2 py-0.5 font-bold bg-gray-100 text-black-600 rounded">
              News
          </span>
        </div>
        <div class="sort-filters flex items-center gap-3">
            <div class="sort-filter-item">
              <span class="text-grey font-light">Zoom</span>
              <p>100% <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg></p>
            </div>
            <div class="sort-filter-item">
              <span class="text-grey font-light">Sort</span>
              <p>Most Popular <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg></p>
            </div>
            <div class="sort-filter-item">
              <span class="text-grey font-light">View</span>
              <p>List View <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg></p>
            </div>
        </div>
          
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContainer",
  props: {
    title: String,
  },
};
</script>
