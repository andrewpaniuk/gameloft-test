import { MOCK_PRODUCTS } from '@/_mock-data'
import { useFavoritesStore } from '../store/favorites.store'

export const useGetProductFavorites = () => {
    const prodcuctIds = useFavoritesStore((state) => state.productIds)
    return MOCK_PRODUCTS.filter((product) => prodcuctIds.includes(product.id))
}