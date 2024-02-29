import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function ShopStoreByLocationProduct() {
    const breadShops = ['home', 'shopbyLocation', 'productName']

    return (
        <div>
            <SingleProduct breadShops={breadShops}/>
        </div>
    )
}
