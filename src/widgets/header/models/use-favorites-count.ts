import { useFavoritesStore } from '@/entities/favorites/model/store/favorites.store'

export const useFavoritesCount = () => {
    const { productIds } = useFavoritesStore()
    return productIds.length
}