import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Home/Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { dressMainData } from '../../../../ContextHook/ContextMenu';

export default function CategoryByIdProduct() {
    const [dressInfo, setDressInfo] = useContext(dressMainData);
    const [getproductName, setGetproductName] = useState(null);
    const paramsId = useParams();
    console.log(dressInfo?.filterDataProductList?.section_products?.data, 'dressInfo?.filterDataProductList?.section_products?.data');
    useLayoutEffect(() => {
        if (dressInfo?.filterDataProductList?.section_products?.data) {
            dressInfo?.filterDataProductList?.section_products?.data?.map(item => {
                if (paramsId?.product == item?.id) {
                    setGetproductName(item?.name_ru)
                }
            })
        }
    }, []);
    const breadcrumbItems = [
        { label_uz: 'Home', label_ru: 'Главная', url: '/' },
        { label_uz: 'section', label_ru: 'Разделы', url: '/section' },
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
