import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../../ContextHook/ContextMenu';
import { LanguageDetectorDress } from '../../../../../language/LanguageItems';

export default function CatalogByIdProduct() {
    const [dressInfo,] = useContext(dressMainData);
    const [getproductName, setGetproductName] = useState(null);
    const paramId = useParams();
    const [languageDetector,] = useContext(LanguageDetectorDress)

    useLayoutEffect(() => {
        if (dressInfo?.filterDataProductList?.category_products) {
            dressInfo?.filterDataProductList?.category_products?.data?.map(item => {
                if (Number(paramId?.product) === Number(item?.id)) {
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
        { label_uz: 'Kategoriya', label_ru: 'категории', url: '/categories' },
        { label_uz: paramId?.id, label_ru: paramId?.id, url: `/categories/${paramId?.id}` },
        { label_uz: getproductName, label_ru: getproductName, url: `/categories/${paramId?.id}/${paramId?.product}` },
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
