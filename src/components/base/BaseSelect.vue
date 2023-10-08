<template>
  <div>
    <div
      class="bg-white rounded py-2 px-2.5 h-14 mb-1 border-b-2"
      :class="errorMessage ? 'border-red-300' : 'border-b-gray-300'"
    >
      <label :for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
      <select
        :id="name"
        :name="name"
        class="bg-transparent text-gray-900 text-base block w-full p-0 -ml-1 py-1"
        v-model="value"
      >
        <option :value="undefined" selected disabled hidden>{{ placeholder }}</option>
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.name }}
        </option>
      </select>
    </div>
    <span v-if="errorMessage" class="text-xs text-red-600 px-2 absolute">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
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

const { value, errorMessage } = useField(() => props.name)
</script>
