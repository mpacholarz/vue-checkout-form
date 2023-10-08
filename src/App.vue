<template>
  <header class="bg-gray-100 border-b">
    <div class="px-4 max-w-5xl mx-auto">
      <h1
        class="flex gap-2 py-3 align-middle items-center text-gray-900 font-bold uppercase text-sm"
      >
        <svg
          class="w-4 h-4 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
          />
        </svg>
        Vue Checkout Form
      </h1>
    </div>
  </header>
  <RouterView />
  <footer class="p-4 bg-white mt-auto">
    <div class="mx-auto text-center">
      <span class="text-sm text-gray-500">© 2023 All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
