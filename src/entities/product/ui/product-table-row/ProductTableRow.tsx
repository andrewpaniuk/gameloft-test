import type { Product } from '../../model/types'

type ProductTableRowProps = {
    product: Product
    children: React.ReactNode
}

export const ProductTableRow = ({ product, children }: ProductTableRowProps) => {
    return (
        <tr className='[&>td]:py-2 [&>td]:px-4 odd:bg-gray-50'>
            <td>{product.title}</td>
            <td className='text-center'>{product.price} UAH</td>
            <td>{children}</td>
        </tr>
    )
}