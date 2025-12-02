import { MOCK_PRODUCTS } from '@/_mock-data'
import { ProductCard } from '@/entities/product'
import { ToggleCartButton } from '@/features/cart'
import { ToggleFavoriteButton } from '@/features/favorites'
import { Carousel } from '@/widgets/header/ui/carousel'

const Home = () => {
    return (
        <div className='container mx-auto pt-10'>
            <Carousel>
                {MOCK_PRODUCTS.map((product) => (
                    <ProductCard
                        actions={
                            <div className='flex gap-2'>
                                <ToggleCartButton productId={product.id} />
                                <ToggleFavoriteButton productId={product.id} />
                            </div>
                        } 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default Home