<template>
  <div class="bg-white border-b-2 border-gray-300 rounded py-2 px-2.5">
    <label :for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
    <select
      :id="name"
      :name="name"
      class="bg-transparent text-gray-900 text-base block w-full p-0 -ml-1 py-1"
    >
      <option disabled selected>{{ placeholder }}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  options: {
    type: Array<{ value: string; name: string }>,
    default: () => []
  }
})
</script>
