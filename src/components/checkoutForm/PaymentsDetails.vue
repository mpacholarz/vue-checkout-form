<template>
  <div class="payments-details md:col-span-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-5">
      <div class="md:col-span-2">
        <BaseInput
          label="Credit Card Number"
          placeholder="0000-0000-0000-0000"
          name="cardnumber"
          maska="####-####-####-####"
        >
          <template #append-icon>
            <VisaIcon class="w-10 h-3 mr-2 -ml-1"></VisaIcon>
          </template>
        </BaseInput>
      </div>
      <BaseInput label="Security code" placeholder="***" name="seccode" maska="###" type="password">
        <template #append-icon>
          <Popover class="relative z-50">
            <PopoverButton><InfoIcon /></PopoverButton>

            <PopoverPanel class="absolute z-10 w-48 bg-gray-900 opacity-90 text-white rounded p-3">
              <p>How to find your secure code</p>
            </PopoverPanel>
          </Popover>
        </template>
      </BaseInput>
      <BaseInput label="Expiration date" placeholder="MM/YY" maska="##/##" name="expdate" />
    </div>
    <div class="md:col-span-2 flex flex-col gap-3">
      <BaseButton class="mt-8" @click="$emit('submit')">
        <template #icon>
          <CheckoutIcon class="w-3.5 h-3.5 mr-2"></CheckoutIcon>
        </template>
        Complete order
      </BaseButton>
      <BaseButton @click="$emit('prev')" text> Previous step </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import BaseInput from '../base/BaseInput.vue'
import CheckoutIcon from '../icon/CheckoutIcon.vue'
import BaseButton from '../base/BaseButton.vue'
import VisaIcon from '../icon/VisaIcon.vue'
import InfoIcon from '../icon/InfoIcon.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

defineEmits(['submit', 'prev', 'next'])

const creditCardsecureCodeHint = `
  <div class="flex flex-col gap-3">
    <h3 class="text-sm font-bold">How to find your secure code</h3>
    <img src="/solutions.jpg" alt="" />
  </div>
`
</script>
