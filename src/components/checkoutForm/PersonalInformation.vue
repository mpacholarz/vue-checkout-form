<template>
  <div class="personal-information md:col-span-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-6">
      <BaseInput label="First name" placeholder="Elon" name="firstName" />
      <BaseInput label="Last name" placeholder="Musk" name="lastName" />
      <div class="md:col-span-2">
        <BaseInput label="Email" placeholder="elon@spacex.com" name="email" type="email" />
      </div>
      <BaseSelect
        label="Country"
        placeholder="Choose Country"
        name="country"
        :options="countryOptions"
      />
      <BaseInput label="Postal Code" placeholder="10001" name="postalCode" maska="#####" />
      <div class="md:col-span-2">
        <BaseInput
          label="Phone Number"
          placeholder="(212) 692-93-92"
          maska="(###) ###-##-##"
          name="phoneNumber"
        />
      </div>
    </div>
    <div class="md:col-span-2">
      <BaseButton class="mt-8 md:col-span-3" @click="$emit('next')">
        <template #icon>
          <CheckoutIcon class="w-3.5 h-3.5 mr-2"></CheckoutIcon>
        </template>
        Next
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import CheckoutIcon from '@/components/icon/CheckoutIcon.vue'
import BaseButton from '../base/BaseButton.vue'

defineEmits(['submit', 'prev', 'next'])

const countryOptions = [
  {
    value: 'usa',
    name: 'United States'
  },
  {
    value: 'poland',
    name: 'Poland'
  }
]
</script>
