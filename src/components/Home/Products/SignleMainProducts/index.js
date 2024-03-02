import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct/SingleProduct";
import { useParams } from "react-router-dom";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";

export default function SingleMainProducts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const [data] = useContext(HomeMainDataContext);
  const [getproductName, setGetproductName] = useState(null);
  const paramId = useParams();
  useLayoutEffect(() => {
    if (data?.getMainProductCard?.products) {
      data?.getMainProductCard?.products?.data?.map(item => {
        if (paramId?.product == item?.id) {
          setGetproductName(item?.name_ru)
        }
      })
    }
  }, []);

  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'product', label_ru: 'продукт', url: '/product' },
    { label_uz: getproductName, label_ru: getproductName, url: `/product/${paramId?.product}` },
  ];

  return (
    <main className="w-full px-4">
      <SingleProduct breadShops={breadcrumbItems} />
    </main>
  );
}
