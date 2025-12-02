import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
  productIds: string[]
  addProduct: (id: string) => void
  removeProduct: (id: string) => void
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            productIds: [],
            addProduct: (id: string) =>
                set((state) => ({
                    productIds: state.productIds.includes(id) ? state.productIds : [...state.productIds, id],
                })),
            removeProduct: (id: string) =>
                set((state) => ({
                    productIds: state.productIds.filter((item) => item !== id),
                })),
        }),
        {
            name: 'cart-storage',
        },
    ),
)
