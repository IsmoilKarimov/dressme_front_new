import React, { useContext, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../ContextHook/ContextMenu';
import { SingleProduct } from '../../Products/SignleMainProducts/SingleProduct/SingleProduct';
import { HomeMainDataContext } from '../../../../ContextHook/HomeMainData';
import { LanguageDetectorDress } from '../../../../language/LanguageItems';

export default function FavouritByIdProduct() {
    const [dressInfo, setDressInfo] = useContext(dressMainData);
    const [getproductName, setGetproductName] = useState(null);
    const paramId = useParams();
    const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);
    const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
        ;
    useLayoutEffect(() => {
        if (wishList) {
            mainData?.products?.filter(e => wishList?.includes(e?.id))?.map(item => {
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
    }, []);
    console.log(paramId, 'paramId');
    const breadcrumbItems = [
        { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
        { label_uz: 'Sevimli', label_ru: 'Избранное', url: '/favourites' },
        { label_uz: getproductName, label_ru: getproductName, url: `/favourites/${paramId?.id}` },
        // { label_uz: getproductName, label_ru: getproductName, url: `/categories/${paramId?.id}/${paramId?.product}` },
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
