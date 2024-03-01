import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function ShopStoreByIdProduct() {
  const breadShops = ['home', 'magazin', 'marketname', 'productName']
  return (
    <div className='px-4 md:px-0'>
      <SingleProduct breadShops={breadShops} />
    </div>
  )
}
