import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function CatalogByIdProduct() {
    const breadShops = ['home', 'category', 'productName']

    return (
        <div className='px-4 md:px-0'>
            <SingleProduct breadShops={breadShops} />
        </div>
    )
}
