'use client'

import { Button } from '@/shared/ui'

type OrderButtonProps = {
    productIds: string[]
    className?: string
}

export const OrderButton = ({ productIds, className }: OrderButtonProps) => {

    const handleOrder = () => {
        alert(`Ordering... ${productIds.join(', ')}`)
    }

    return (
        <Button className={className} onClick={handleOrder}>Оформити замовлення</Button>
    )
}