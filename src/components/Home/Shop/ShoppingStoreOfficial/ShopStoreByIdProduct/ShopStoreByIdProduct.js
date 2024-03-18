import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../../ContextHook/ContextMenu';
import { LanguageDetectorDress } from '../../../../../language/LanguageItems';

export default function ShopStoreByIdProduct() {
  const [dressInfo] = useContext(dressMainData);
  const [getproductName, setGetproductName] = useState(null);
  const params = useParams();
  const [languageDetector] = useContext(LanguageDetectorDress)

  useLayoutEffect(() => {
    if (dressInfo?.filterDataProductList?.products) {
      dressInfo?.filterDataProductList?.products?.data?.map(item => {
        if (Number(params?.product) === Number(item?.id)) {
          if (languageDetector?.typeLang === 'ru') {
            setGetproductName(item?.name_ru)
          }
          if (languageDetector?.typeLang === 'uz') {
            setGetproductName(item?.name_uz)
          }
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const breadcrumbItems = [
    { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
    { label_uz: "Do'konlar", label_ru: 'Магазины', url: '/shops' },
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
