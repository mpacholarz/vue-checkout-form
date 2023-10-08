<template>
  <div class="payments-details md:col-span-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-5">
      <div class="md:col-span-2">
        <BaseInput
          label="Credit Card Number"
          placeholder="0000-0000-0000-0000"
          name="cardnumber"
          maska="####-####-####-####"
        />
      </div>
      <BaseInput
        label="Security code"
        placeholder="***"
        name="seccode"
        maska="###"
        type="password"
      />
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

defineEmits(['submit', 'prev', 'next'])
</script>
