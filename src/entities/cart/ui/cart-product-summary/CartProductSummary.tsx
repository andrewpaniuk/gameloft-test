import { useCartPrices } from '../../model/hooks/useCartPrices'
import clsx from 'clsx'

export const CartProductSummary = () => {
    const { totalPrice, isSale, salePrice, discount, finalPrice } = useCartPrices()
    return (
        <div className='flex flex-col gap-1 items-end'>
            <span>Разом: <strong className={clsx({ 'line-through text-red-500': isSale })}>{totalPrice} UAH</strong></span>
            {isSale && (
                <>
                    <span>Знижка: <strong>{discount}%</strong></span>
                    <span>Економія: <strong>{salePrice} UAH</strong></span>
                    <span>Фінальна ціна: <strong>{finalPrice} UAH</strong></span>
                </>
            )}
        </div>
    )
}