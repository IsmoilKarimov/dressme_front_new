import React from 'react'
import { SingleProduct } from '../../../Products/SignleMainProducts/SingleProduct/SingleProduct'
import { useParams } from 'react-router-dom';

export default function CatalogByIdProduct() {
    const paramId = useParams();
    console.log(paramId, 'paramId');
    const breadcrumbItems = [
        { label_uz: 'Home', label_ru: 'Главная', url: '/' },
        { label_uz: 'category', label_ru: 'категории', url: '/categories' },
        { label_uz: paramId?.id, label_ru: paramId?.id, url: `/categories/${paramId?.id}` },
        { label_uz: paramId?.product, label_ru: paramId?.product, url: `/categories/${paramId?.id}/${paramId?.product}` },
    ];

    return (
        <div className='px-4 md:px-0'>
            <SingleProduct breadShops={breadcrumbItems} />
        </div>
    )
}
