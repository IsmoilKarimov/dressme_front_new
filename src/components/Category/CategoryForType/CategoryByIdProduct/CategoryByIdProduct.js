import React from 'react'
import { SingleProduct } from '../../../Home/Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function CategoryByIdProduct() {
    const breadShops = ['home', 'section', 'productName']

    return (
        <div className='px-4 md:px-0'>
            <SingleProduct breadShops={breadShops}/>
        </div>
    )
}
