<template>
  <div>
    <div
      class="bg-white rounded py-2 px-2.5 h-14 mb-1 border-b-2"
      :class="errorMessage ? 'border-red-300' : 'border-b-gray-300'"
    >
      <label :for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
      <input
        :type="type"
        :name="name"
        :id="name"
        v-model="value"
        class="bg-transparent text-gray-900 text-base block w-full p-0"
        :placeholder="placeholder"
      />
    </div>
    <span v-if="errorMessage" class="text-xs text-red-600 px-2 absolute">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, watch } from 'vue'
import { useField } from 'vee-validate'
import { Mask } from 'maska'

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
  maska: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})

const { value, errorMessage, handleChange } = useField(() => props.name)

const mask = new Mask({ mask: props.maska })
const maskedValue = computed(() => (props.maska ? mask.masked(value.value) : value.value))

watch(value, () => {
  if (!props.maska) return
  handleChange(maskedValue.value)
})
</script>
