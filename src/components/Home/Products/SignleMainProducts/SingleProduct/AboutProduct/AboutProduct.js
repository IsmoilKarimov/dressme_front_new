import React, { useContext, useState } from 'react'
import { dressMainData } from '../../../../../../ContextHook/ContextMenu';

export default function AboutProduct() {

    const [dressInfo, setDressInfo] = useContext(dressMainData);

    let dataStyle = "";
    let genderStyle = "";
    if (dressInfo?.type == 1111) {
        dataStyle = " text-borderSpring ";
        genderStyle = "text-borderSpring bg-bgSpring border-borderSpring";
    }
    if (dressInfo?.type == 2222) {
        dataStyle = " text-borderSummer";
        genderStyle = "text-borderSummer bg-bgSummer border-borderSummer";
    }
    if (dressInfo?.type == 3333) {
        dataStyle = " text-borderAutumm ";
        genderStyle = "text-borderAutumm bg-bgAutumm border-borderAutumm";
    }
    if (dressInfo?.type == 4444) {
        dataStyle = " text-borderWinter ";
        genderStyle = "text-borderWinter bg-bgWinter border-borderWinter";
    }

    const [productDescription, setProductDescription] = useState(true);

    return (
        <div>
            <div className="w-full block md:hidden">
                <span className="w-full font-AeonikProMedium text-base mb-6">О продукте:</span>
                <div className="rounded-lg overflow-hidden  h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
                    <button
                        onClick={() => setProductDescription(true)}
                        className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
                            productDescription
                            ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                            : ""
                        }
                        `}
                    >
                    Описания товара 
                    </button>
                    <span className="h-full text-searchBgColor flex items-center">|</span>
                    <button
                        onClick={() => setProductDescription(false)}
                        className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
                            !productDescription
                            ? ` bg-white border  border-searchBgColor rounded-lg ${dataStyle}`
                            : ""
                        }
                        `}
                    >
                        Характеристики 
                    </button>
                </div>
                {productDescription ? (
                    <div className='mt-6'>
                        Информация о товаре 
                    </div>
                ) : (
                    <div className='mt-6'>
                        Character
                    </div>
                )}
            </div>
        </div>
    )
}
