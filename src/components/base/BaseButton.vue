<template>
  <div>
    <button type="button" :class="text ? 'btn-primary-text' : 'btn-primary'">
      <slot name="icon"></slot>
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  text: {
    type: Boolean,
    default: false
  }
})
</script>
