'use client'

import { Badge, Button } from '@/shared/ui'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useFavoritesCount } from '../models/use-favorites-count'

export const FavoritesButton = () => {
    const count = useFavoritesCount()
    return (
        <Badge count={count}>
            <Link href='/favorites'>
                <Button variant='icon'>
                    <Heart size={20} />
                </Button>
            </Link>
        </Badge>
    )
}