import { useCartStore } from '@/entities/cart'

export const useToggleCartButton = (productId: string) => {
    const { addProduct, productIds, removeProduct } = useCartStore()
    const isInCart = productIds.includes(productId)

    const handleToggleCart = () => {
        if (isInCart) {
            removeProduct(productId)
        } else {
            addProduct(productId)
        }
    }

    return { handleToggleCart, isInCart }
}