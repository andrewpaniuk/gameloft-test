import { useCartStore } from '../store/cart.store'
import { MOCK_PRODUCTS } from '@/_mock-data'

export const useGetProductCart = () => {
    const prodcuctIds = useCartStore((state) => state.productIds)
    return MOCK_PRODUCTS.filter((product) => prodcuctIds.includes(product.id))
}