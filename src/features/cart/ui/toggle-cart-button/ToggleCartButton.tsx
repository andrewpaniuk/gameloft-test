'use client'

import { Button } from '@/shared/ui'
import clsx from 'clsx'
import { ShoppingCart } from 'lucide-react'
import { useToggleCartButton } from '../../model/hooks/useToggleCartButton'

type ToggleCartButtonProps = {
    productId: string
}

export const ToggleCartButton = ({ productId }: ToggleCartButtonProps) => {
    const { handleToggleCart, isInCart } = useToggleCartButton(productId)

    return (
        <Button className={clsx(isInCart && 'text-red-500!')} onClick={handleToggleCart} variant='icon'><ShoppingCart size={20} /></Button>
    )
}