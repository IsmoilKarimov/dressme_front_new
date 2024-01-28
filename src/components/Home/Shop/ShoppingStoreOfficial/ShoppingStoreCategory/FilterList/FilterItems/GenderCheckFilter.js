import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

function GenderCheckFilter({ genderList, discount, onGenderGetValue, onDiscountGetValue }) {
    const [genderToggle, setGenderToggle] = useState(false);
    const [genderNewList, setGenderNewList] = useState([]);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedDiscount, setSelectedDiscount] = useState(null);

    const [genderCategory, setGenderCategory] = useState([
        {
            id: 1,
            action: false,
            name: "Мужчинам",
        },
        {
            id: 2,
            action: false,
            name: "Женщинам",
        },
        {
            id: 3,
            action: false,
            name: "Детям",
        },
        {
            id: 4,
            action: false,
            name: "Унисекс",
        },
    ]);

    useEffect(() => {
        genderCategory?.map(item => {
            genderList?.map(data => {
                if (item?.id == data) {
                    if (!genderNewList) {
                        setGenderNewList(genderNewList => [...genderNewList, item])
                    }
                    if (genderNewList && !genderNewList?.includes(item)) {
                        setGenderNewList(genderNewList => [...genderNewList, item])
                    }
                }
            })
        })

    }, [genderList])

    const handleGenderCheck = (value) => {
        setSelectedGender(value)
        onGenderGetValue(value)
    };
    const handleDiscountCheck = () => {
        onDiscountGetValue(1)
        setSelectedDiscount(1)
    };
    function ClearList() {
        setSelectedDiscount(null)
        setSelectedGender(null)
        onDiscountGetValue()
        onGenderGetValue()
    }

    return (
        <div
            className={` w-full flex-col items-center md:mb-[38px]`}
        >
            <article
                className="w-full flex justify-between items-center"
            >
                <figure
                    onClick={() => setGenderToggle(!genderToggle)}
                    className="flex items-center cursor-pointer select-none"
                >
                    <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                        Пол
                    </p>
                    <p
                        className={`
                      ${genderToggle ? "rotate-[180deg]" : ""} duration-300 ml-1`}
                    >
                        <ArrowTopIcons colors={"#000"} />
                    </p>
                </figure>
            </article>
            {/* Field */}
            <article
                className={`w-full overflow-hidden ${genderToggle ? "duration-300 h-0" : "duration-300 h-fit mt-5 "
                    } duration-300 flex flex-col gap-y-4`}
            >
                <div className={`w-full flex flex-col items-center`}>
                    <div className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px] ">
                        {genderNewList?.map((data) => {
                            return (
                                <button
                                    key={data?.id}
                                    onClick={() => handleGenderCheck(data?.id)}
                                    className={`${selectedGender === data?.id ? 'bg-fullBlue text-white' : 'bg-bgCategory text-black'} 
                                    active:scale-95	active:opacity-70 h-[44px] w-[49%] flex items-center justify-center hover:bg-fullBlue hover:text-white font-AeonikProMedium text-sm leading-3 text-center  rounded-lg duration-300`
                                    }
                                >
                                    {data?.name}
                                </button>
                            );
                        })}
                        {discount &&
                            <button
                                onClick={() => handleDiscountCheck()}
                                className={`${selectedDiscount
                                    ? "border border-fullBlue bg-bgCategory text-red-500 "
                                    : "bg-bgCategory text-red-600 border border-transparent"
                                    } ${genderNewList?.length === 2 || genderNewList?.length === 4 ? 'w-full' : 'w-[49%]'} h-[44px]  flex items-center justify-center font-AeonikProMedium text-sm leading-3 text-center active:scale-95 hover:text-red-500 hover:border hover:border-fullBlue rounded-lg duration-300`}
                            >
                                Скидки
                            </button>}
                    </div>
                    {selectedDiscount || selectedGender ?
                        <div className="w-full items-center">
                            <button
                                type="button"
                                onClick={() => ClearList()}
                                className={`w-full flex flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                            >
                                Сбросить
                            </button>
                        </div> : null}
                </div>
            </article >
        </div >
    );

}
export default React.memo(GenderCheckFilter);
