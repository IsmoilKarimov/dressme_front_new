import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function CatalogByIdProduct() {
    const breadShops = ['home', 'category', 'productName']

    return (
        <div>
            <SingleProduct breadShops={breadShops} />
        </div>
    )
}
