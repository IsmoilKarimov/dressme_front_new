import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';

export default function ShopStoreByIdProduct() {
  const params = useParams();
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'shops', label_ru: 'Магазины', url: '/shops' },
    { label_uz: params?.id, label_ru: params?.id, url: `/shops/${params?.id}` },
    { label_uz: params?.product, label_ru: params?.product, url: `/shops/${params?.id}/${params?.product}` },
  ];
  return (
    <div className='px-4 md:px-0'>
      <SingleProduct breadShops={breadcrumbItems} />
    </div>
  )
}
