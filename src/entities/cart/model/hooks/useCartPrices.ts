import { useCartStore } from '../store/cart.store'
import { useGetProductCart } from './useGetProductCart'

const discount = 10

export const useCartPrices = () => {
    const productIds = useCartStore((state) => state.productIds)
    const products = useGetProductCart()
    const isSale = productIds.length > 5
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0)
    const salePrice = isSale ? totalPrice * (discount * 0.01) : 0
    const finalPrice = totalPrice - salePrice

    return {
        isSale,
        totalPrice,
        salePrice,
        finalPrice,
        discount,
    }
}