'use client'

import { Badge, Button } from '@/shared/ui'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useBasketCount } from '../models/use-basket-count'

export const BasketButton = () => {
    const count = useBasketCount()
    return (
        <Badge count={count}>
            <Link href='/cart'>
                <Button variant='icon'>
                    <ShoppingCart size={20} />
                </Button>
            </Link> 
        </Badge>
    )
}