'use client'

import { OrderButton, ToggleCartButton } from '@/features/cart'
import { CartProductSummary, useGetProductCart } from '@/entities/cart'
import { ProductTableWithAction } from '@/widgets/product-table-with-action'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui'


const CartPage = () => {
    const products = useGetProductCart()

    if (products.length === 0) {
        return (
            <div className='container mx-auto pt-10'>
                <p className='text-gray-500'>Немає товарів у кошику</p>
            </div>
            
        )
    }

    const productIds = products.map((product) => product.id)

    return (
        <div className='container mx-auto pt-10'>
            <h1 className='text-2xl font-bold mb-4'>Кошик покупок:</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-4'>
                <div>
                    <ProductTableWithAction products={products} renderAction={(product) => <ToggleCartButton productId={product.id} />} />
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Підсумок покупки</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CartProductSummary />
                        </CardContent>
                        <CardFooter>
                            <OrderButton className='w-full' productIds={productIds} />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CartPage