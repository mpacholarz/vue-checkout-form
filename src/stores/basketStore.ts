import { defineStore } from 'pinia'

interface Product {
  id: number
  name: string
  price: number
}
interface State {
  items: Product[]
  tax: number
  CENT_TO_EURO: number
}

const product_1: Product = {
  id: 1,
  name: 'Apple Watch Sport',
  price: 58000
}
const product_2: Product = {
  id: 2,
  name: 'Modern Buckle',
  price: 38000
}

export const useBasketStore = defineStore('basket', {
  state: (): State => ({
    items: [product_1, product_2],
    tax: 0.23,
    CENT_TO_EURO: 100
  }),
  getters: {
    totalItems: (state) => state.items.length,
    amount: (state) => state.items.reduce((acc, item) => acc + item.price, 0) / state.CENT_TO_EURO,
    taxAmount: (state) =>
      (state.items.reduce((acc, item) => acc + item.price, 0) * state.tax) / state.CENT_TO_EURO,
    totalAmount(state) {
      return (
        this.taxAmount + state.items.reduce((acc, item) => acc + item.price, 0) / state.CENT_TO_EURO
      )
    }
  },
  actions: {
    addItem(item: Product) {
      this.items.push(item)
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    }
  }
})
