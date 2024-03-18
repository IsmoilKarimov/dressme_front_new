import React, { useContext, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SingleProduct } from '../../Products/SignleMainProducts/SingleProduct/SingleProduct';
import { HomeMainDataContext } from '../../../../ContextHook/HomeMainData';
import { LanguageDetectorDress } from '../../../../language/LanguageItems';

export default function FavouritByIdProduct() {
    const [getproductName, setGetproductName] = useState(null);
    const paramId = useParams();
    const [mainData, wishList,] = useContext(HomeMainDataContext);
    const [languageDetector,] = useContext(LanguageDetectorDress)
        
    useLayoutEffect(() => {
        if (wishList) {
            mainData?.products?.filter(e => wishList?.includes(e?.id))?.map(item => {
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
        { label_uz: 'Sevimli', label_ru: 'Избранные', url: '/favourites' },
        { label_uz: getproductName, label_ru: getproductName, url: `/favourites/${paramId?.id}` },
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
