import { SimpleTable } from '@/shared/ui'
import { Product, ProductTableRow } from '@/entities/product'

type ProductTableWithActionProps = {
    products: Product[]
    renderAction: (product: Product) => React.ReactNode
}

export const ProductTableWithAction = ({ products, renderAction }: ProductTableWithActionProps) => {
    return (
        <SimpleTable headers={[{ name: 'Товар', key: 'product' }, { name: 'Ціна', key: 'price' }, { name: '', key: 'action' }]}>
            {products.map((product) => (
                <ProductTableRow key={product.id} product={product}>
                    {renderAction(product)}
                </ProductTableRow>
            ))}
        </SimpleTable>
    )
}