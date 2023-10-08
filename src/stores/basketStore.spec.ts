import { setActivePinia, createPinia } from 'pinia'
import { useBasketStore } from '@/stores/basketStore'
import { describe, beforeEach, it, expect } from 'vitest'

describe('Basket Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add item', () => {
    const store = useBasketStore()
    store.addItem({
      id: 3,
      name: 'Apple Watch',
      price: 58000
    })
    expect(store.items).toHaveLength(3)
  })

  it('should remove item', () => {
    const store = useBasketStore()
    store.removeItem(1)
    expect(store.items).toHaveLength(1)
  })

  it('should calculate total items', () => {
    const store = useBasketStore()
    expect(store.totalItems).toBe(2)
  })

  it('should calculate amount', () => {
    const store = useBasketStore()
    expect(store.amount).toBe(960)
  })

  it('should calculate tax amount', () => {
    const store = useBasketStore()
    expect(store.taxAmount).toBe(220.8)
  })

  it('should calculate total amount', () => {
    const store = useBasketStore()
    expect(store.totalAmount).toBe(1180.8)
  })
})
