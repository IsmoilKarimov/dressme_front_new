import React from 'react'
import { SingleProduct } from '../../../Home/Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';

export default function CategoryByIdProduct() {
    const paramsId = useParams();
    const breadcrumbItems = [
        { label_uz: 'Home', label_ru: 'Главная', url: '/' },
        { label_uz: 'section', label_ru: 'раздел', url: '/section' },
        { label_uz: paramsId?.id, label_ru: paramsId?.id, url: `/section/${paramsId?.id}` },
        { label_uz: paramsId?.product, label_ru: paramsId?.product, url: `/section/:${paramsId?.id}/${paramsId?.product}` },
    ];
    return (
        <div className='px-4 md:px-0'>
            <SingleProduct breadShops={breadcrumbItems} />
        </div>
    )
}
