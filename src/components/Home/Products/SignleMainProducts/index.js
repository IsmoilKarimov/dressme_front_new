import React, { useEffect } from "react";
import { SingleProduct } from "./SingleProduct/SingleProduct";
import { useParams } from "react-router-dom";

export default function SingleMainProducts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const paramId = useParams();
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'product', label_ru: 'продукт', url: '/product' },
    { label_uz: paramId?.product, label_ru: paramId?.product, url: `/product/${paramId?.product}` },
  ];

  return (
    <main className="w-full px-4">
      <SingleProduct breadShops={breadcrumbItems} />
    </main>
  );
}
