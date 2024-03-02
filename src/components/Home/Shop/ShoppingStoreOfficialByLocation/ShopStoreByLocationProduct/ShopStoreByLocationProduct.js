import React, { useContext, useLayoutEffect, useState } from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';
import { HomeMainDataContext } from '../../../../../ContextHook/HomeMainData';

export default function ShopStoreByLocationProduct() {
    const [data] = useContext(HomeMainDataContext);
    const [getproductName, setGetproductName] = useState(null);
    const params = useParams();
    useLayoutEffect(() => {
        if (data?.getMainProductCard?.products) {
            data?.getMainProductCard?.products?.data?.map(item => {
                if (params?.product == item?.id) {
                    setGetproductName(item?.name_ru)
                }
            })
        }
    }, []);
    const breadcrumbItems = [
        { label_uz: 'Home', label_ru: 'Главная', url: '/' },
        { label_uz: 'Location', label_ru: 'Карта', url: '/locations' },
        { label_uz: params?.id, label_ru: params?.id, url: `/shops_location/${params?.id}` },
        { label_uz: getproductName, label_ru: getproductName, url: `/shops_location/${params?.id}/${params?.product}` },
    ];
    return (
        <div>
            <SingleProduct breadShops={breadcrumbItems} />
        </div>
    )
}
