'use client'

import { Button } from '@/shared/ui'
import clsx from 'clsx'
import { Heart } from 'lucide-react'
import { useToggleFavoriteButton } from '../../model/hooks/useToggleFavoriteButton'

type ToggleFavoriteButtonProps = {
    productId: string
}

export const ToggleFavoriteButton = ({ productId }: ToggleFavoriteButtonProps) => {
    const { handleToggleFavorite, isInFavorites } = useToggleFavoriteButton(productId)

    return (
        <Button className={clsx(isInFavorites && 'text-red-500!')} onClick={handleToggleFavorite} variant='icon'><Heart size={20} /></Button>
    )
}