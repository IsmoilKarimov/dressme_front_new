import React from 'react'
import { SingleProduct } from '../../../Home/Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function CategoryByIdProduct() {
    const breadShops = ['home', 'section', 'productName']

    return (
        <div>
            <SingleProduct breadShops={breadShops}/>
        </div>
    )
}
