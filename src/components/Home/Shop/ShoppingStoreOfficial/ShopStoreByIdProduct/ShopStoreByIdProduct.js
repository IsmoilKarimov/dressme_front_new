import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../../ContextHook/ContextMenu';

export default function ShopStoreByIdProduct() {
  const [dressInfo] = useContext(dressMainData);
  const [getproductName, setGetproductName] = useState(null);
  const params = useParams();
  useLayoutEffect(() => {
    if (dressInfo?.filterDataProductList?.products) {
      dressInfo?.filterDataProductList?.products?.data?.map(item => {
        if (params?.product == item?.id) {
          setGetproductName(item?.name_ru)
        }
      })
    }
  }, []);
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'shops', label_ru: 'Магазины', url: '/shops' },
    { label_uz: params?.id, label_ru: params?.id, url: `/shops/${params?.id}` },
    { label_uz: getproductName, label_ru: getproductName, url: `/shops/${params?.id}/${params?.product}` },
  ];
  function oncallProductName(child) {
    if (!getproductName) {
      setGetproductName(child)
    }
  }
  return (
    <div className='px-4 md:px-0'>
      <SingleProduct breadShops={breadcrumbItems} oncallProductName={oncallProductName} />
    </div>
  )
}
