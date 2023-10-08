<template>
  <main class="py-8 px-4 max-w-5xl w-full mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="md:col-span-3">
        <h3 class="text-sm uppercase font-bold mb-3">
          <span class="step-number">{{ currentStepIdx + 1 }}</span> {{ getCurrentStep.title }}
        </h3>
      </div>
      <component :is="getCurrentStep.component" @prev="prev" @next="next" @submit="submit" />
      <OrderSummary />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { string, object } from 'yup'
import PersonalInformation from '@/components/checkoutForm/PersonalInformation.vue'
import PaymentsDetails from '@/components/checkoutForm/PaymentsDetails.vue'
import OrderSummary from '@/components/OrderSummary.vue'

const currentStepIdx = ref(0)
const steps = [
  {
    title: 'Personal Information',
    component: PersonalInformation
  },
  {
    title: 'Payments Details',
    component: PaymentsDetails
  }
]
const validationSchema = [
  object({
    firstName: string().required().min(3),
    lastName: string().required().min(3),
    email: string().email().required(),
    postalCode: string()
      .required()
      .matches(/^[0-9]{5}?$/),
    phoneNumber: string()
      .required()
      .matches(/^\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/),
    country: string().required()
  }),
  object({
    cardnumber: string()
      .required()
      .matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/),
    seccode: string()
      .required()
      .matches(/^[0-9]{3}$/),
    expdate: string()
      .required()
      .matches(/^[0-9]{2}\/[0-9]{2}$/)
  })
]

const getCurrentStep = computed(() => steps[currentStepIdx.value] || PersonalInformation)
const currentSchema = computed(() => validationSchema[currentStepIdx.value])

const isLastStep = computed(() => currentStepIdx.value === steps.length - 1)
const hasPrevStep = computed(() => currentStepIdx.value > 0)

const { handleSubmit } = useForm({
  keepValuesOnUnmount: true,
  validationSchema: currentSchema
})

const submit = handleSubmit((values) => {
  if (!isLastStep.value) {
    return
  }
  console.table(values)
})

const next = handleSubmit(() => {
  if (isLastStep.value) {
    return
  }
  currentStepIdx.value++
})

const prev = () => {
  if (!hasPrevStep.value) {
    return
  }
  currentStepIdx.value--
}
</script>

<style scoped lang="scss">
.step-number {
  background-color: black;
  color: white;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  @media screen and (min-width: 66rem) {
    margin-left: calc(-25px - 0.5rem);
    margin-right: 0.5rem;
  }
}
</style>
