import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../../ContextHook/ContextMenu';
import { LanguageDetectorDress } from '../../../../../language/LanguageItems';

export default function ShopStoreByLocationProduct() {
    const [dressInfo] = useContext(dressMainData);
    const [getproductName, setGetproductName] = useState(null);
    const params = useParams();
    const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)

    useLayoutEffect(() => {
        if (dressInfo?.filterDataProductList?.products?.data) {
            dressInfo?.filterDataProductList?.products?.data?.map(item => {
                if (params?.product == item?.id) {
                    if (languageDetector?.typeLang === 'ru') {
                        setGetproductName(item?.name_ru)
                    }
                    if (languageDetector?.typeLang === 'uz') {
                        setGetproductName(item?.name_uz)
                    }                  }
            })
        }
    }, []);

    const breadcrumbItems = [
        { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
        { label_uz: 'Xarita', label_ru: 'Карта', url: '/locations' },
        { label_uz: params?.id, label_ru: params?.id, url: `/shops_location/${params?.id}` },
        { label_uz: getproductName, label_ru: getproductName, url: `/shops_location/${params?.id}/${params?.product}` },
    ];
    function oncallProductName(child) {
        if (!getproductName) {
            setGetproductName(child)
        }
    }
    return (
        <div>
            <SingleProduct breadShops={breadcrumbItems} oncallProductName={oncallProductName} />
        </div>
    )
}
