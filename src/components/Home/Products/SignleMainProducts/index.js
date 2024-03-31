import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct/SingleProduct";
import { useParams } from "react-router-dom";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";

export default function SingleMainProducts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const [data] = useContext(HomeMainDataContext);
  const [getproductName, setGetproductName] = useState(null);
  const paramId = useParams();
  const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)

  useLayoutEffect(() => {
    if (data?.getMainProductCard?.products) {
      data?.getMainProductCard?.products?.data?.map(item => {
        if (paramId?.product == item?.id) {
          if (languageDetector?.typeLang === 'ru') {
            setGetproductName(item?.name_ru)
          }
          if (languageDetector?.typeLang === 'uz') {
            setGetproductName(item?.name_uz)
          }
        }
      })
    }
  }, [languageDetector?.typeLang]);
  console.log(getproductName, "getproductName");
  console.log(data?.getMainProductCard?.products?.data, "data?.getMainProductCard?.products?.data");
  const breadcrumbItems = [
    { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
    { label_uz: 'Mahsulotlar', label_ru: 'Продукты', url: '/product' },
    { label_uz: getproductName, label_ru: getproductName, url: `/product/${paramId?.product}` },
  ];
  function oncallProductName(child) {
    if (!getproductName) {
      setGetproductName(child)
    }
  }
  return (
    <main className="w-full px-4 md:px-0">
      <SingleProduct breadShops={breadcrumbItems} oncallProductName={oncallProductName} />
    </main>
  );
}
