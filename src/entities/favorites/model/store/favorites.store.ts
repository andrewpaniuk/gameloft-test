import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  productIds: string[]
  addProduct: (id: string) => void
  removeProduct: (id: string) => void
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set) => ({
            productIds: [],
            addProduct: (id: string) =>
                set((state) => ({
                    productIds: state.productIds.includes(id) ? state.productIds : [...state.productIds, id],
                })),
            removeProduct: (id: string) =>
                set((state) => ({
                    productIds: state.productIds.filter((productId) => productId !== id),
                })),
        }),
        {
            name: 'favorites-storage',
        },
    ),
)