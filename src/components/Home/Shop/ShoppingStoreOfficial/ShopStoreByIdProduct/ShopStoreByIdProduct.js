import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'

export default function ShopStoreByIdProduct() {
    const breadShops=['home','magazin','marketname','productName']
  return (
    <div>
      <SingleProduct breadShops={breadShops}/>
    </div>
  )
}
