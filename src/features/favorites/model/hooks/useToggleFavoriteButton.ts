import { useFavoritesStore } from '@/entities/favorites/model/store/favorites.store'

export const useToggleFavoriteButton = (productId: string) => {
    const { addProduct, productIds, removeProduct } = useFavoritesStore()
    const isInFavorites = productIds.includes(productId)

    const handleToggleFavorite = () => {
        if (isInFavorites) {
            removeProduct(productId)
        } else {
            addProduct(productId)
        }
    }

    return { handleToggleFavorite, isInFavorites }
}