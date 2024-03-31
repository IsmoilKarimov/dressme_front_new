import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Home/Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../ContextHook/ContextMenu';
import { LanguageDetectorDress } from '../../../../language/LanguageItems';

export default function CategoryByIdProduct() {
    const [dressInfo, setDressInfo] = useContext(dressMainData);
    const [getproductName, setGetproductName] = useState(null);
    const paramsId = useParams();
    const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
    useLayoutEffect(() => {
        if (dressInfo?.filterDataProductList?.section_products?.data) {
            dressInfo?.filterDataProductList?.section_products?.data?.map(item => {
                if (paramsId?.product == item?.id) {
                    if (languageDetector?.typeLang === 'ru') {
                        setGetproductName(item?.name_ru)
                    }
                    if (languageDetector?.typeLang === 'uz') {
                        setGetproductName(item?.name_uz)
                    }                }
            })
        }
    }, [languageDetector?.typeLang]);
    
    const breadcrumbItems = [
        { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
        { label_uz: "Bo'limlar", label_ru: 'Разделы', url: '/section' },
        { label_uz: paramsId?.id, label_ru: paramsId?.id, url: `/section/${paramsId?.id}` },
        { label_uz: getproductName, label_ru: getproductName, url: `/section/:${paramsId?.id}/${paramsId?.product}` },
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
