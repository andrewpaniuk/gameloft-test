'use client'

import { ProductTableWithAction } from '@/widgets/product-table-with-action'
import { ToggleFavoriteButton } from '@/features/favorites'
import { useGetProductFavorites } from '@/entities/favorites/model/hooks/useGetProductFavorites'


const FavoritesPage = () => {
    const products = useGetProductFavorites()

    if (products.length === 0) {
        return (
            <div className='container mx-auto pt-10'>
                <p className='text-gray-500'>Немає вибраних товарів</p>
            </div>
            
        )
    }

    return (
        <div className='container mx-auto pt-10'>
            <h1 className='text-2xl font-bold mb-4'>Вибрані товари:</h1>
            <div className='flex flex-col gap-2'>
                <ProductTableWithAction products={products} renderAction={(product) => <ToggleFavoriteButton productId={product.id} />} />
            </div>
        </div>
    )
}

export default FavoritesPage