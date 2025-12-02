import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui'
import Image from 'next/image'
import type { Product } from '@/entities/product'

type ProductCardProps = {
    product: Product
    actions?: React.ReactNode
}

export const ProductCard = ({ product, actions }: ProductCardProps) => {
    return (
        <Card>
            <CardHeader className='p-4'>
                <div className='relative aspect-square p-4 overflow-hidden bg-muted'>
                    {product.image ? (
                        <Image alt={product.title} className='object-contain' fill src={product.image || '/placeholder.svg'} />
                    ) : (
                        <div className='flex h-full items-center justify-center'>
                            <span className='text-sm text-muted-foreground'>No Image</span>
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <h3 className='text-xl font-bold'>{product.title}</h3>
                <div className='max-h-20 overflow-hidden'>
                    <p className='text-sm text-gray-500 text-ellipsis line-clamp-2 overflow-hidden'>{product.description}</p>
                </div>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <p className='text-lg font-bold'>{product.price} UAH</p>
                {actions ?? null}
            </CardFooter>
        </Card>
    )
}