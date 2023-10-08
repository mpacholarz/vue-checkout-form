<template>
  <div
    class="order-summary bg-white p-2 border-b-2 border-gray-300 rounded order-first md:order-none"
  >
    <div class="border border-gray-300 border-dashed h-full p-3">
      <h3 class="uppercase font-bold mb-3 mt-2 text-sm">Your order</h3>
      <ul class="text-sm">
        <li v-for="item in basketStore.items" :key="item.name" class="flex justify-between mb-3">
          <span>{{ item.name }}</span
          ><span>$ {{ item.price / basketStore.CENT_TO_EURO }}</span>
        </li>
      </ul>
      <div class="w-full border-b border-gray-300 border-dashed mt-5 mb-4"></div>
      <ul class="text-sm">
        <li class="flex justify-between mb-3">
          <span>Total purchases</span><span>$ {{ basketStore.amount }}</span>
        </li>
        <li class="flex justify-between">
          <span>Estimated tax</span><span>$ {{ basketStore.taxAmount }}</span>
        </li>
      </ul>
      <div class="w-full border-b border-gray-300 border-dashed mt-5 mb-4"></div>
      <ul class="text-sm font-bold mb-4">
        <li class="flex justify-between">
          <span>Total</span><span class="text-lg">$ {{ basketStore.totalAmount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBasketStore } from '@/stores/basketStore'
const basketStore = useBasketStore()
</script>

<style scoped>
.order-summary {
  height: fit-content;
}
</style>
