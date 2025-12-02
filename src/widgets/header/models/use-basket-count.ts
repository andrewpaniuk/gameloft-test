import { useCartStore } from '@/entities/cart'

export const useBasketCount = () => {
    const { productIds } = useCartStore()
    return productIds.length
}