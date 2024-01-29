/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

export default function CategoryCheckFilter({ categoryList, onCategoryGetValue, AllClearList }) {
    const [categoryToggle, setCategoryToggle] = useState(false);
    const [categoryNewList, setCategoryNewList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [categories, setCategories] = useState([
        { id: 1, name: "Головной убор" },
        { id: 2, name: "Верхняя одежда" },
        { id: 3, name: "Нижняя одежда" },
        { id: 4, name: "Обувь" },
        { id: 5, name: "Аксессуары" },
    ]);
    useEffect(() => {
        categories?.map(item => {
            categoryList?.map(data => {
                if (item?.id == data) {
                    if (!categoryNewList) {
                        setCategoryNewList(categoryNewList => [...categoryNewList, item])
                    }
                    if (categoryNewList && !categoryNewList?.includes(item)) {
                        setCategoryNewList(categoryNewList => [...categoryNewList, item])
                    }
                }
            })
        })
    }, [categoryList])

    const handleCategoryCheck = (value) => {
        setSelectedCategory(value)
        onCategoryGetValue(value)
    };
    function ClearSelected() {
        setSelectedCategory(null)
        onCategoryGetValue(null)
    }
    useEffect(() => {
        if (AllClearList === 'null') {
            setSelectedCategory(null)
            onCategoryGetValue(null)
        }
    }, [AllClearList])

    return (
        <div
            className={` w-full flex-col items-center md:mb-[38px]`}
        >
            <section
                className={` w-full h-fit mt-[12px] `}
            >
                <article
                    className="w-full flex justify-between items-center "
                >
                    <figure
                        onClick={() => setCategoryToggle(!categoryToggle)}
                        className={`flex items-center cursor-pointer select-none`}
                    >
                        <p className={`not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black`} >
                            Категории
                        </p>
                        <p className={`${categoryToggle ? "rotate-[180deg]" : ""} duration-300 ml-1`} >
                            <ArrowTopIcons colors={"#000"} />
                        </p>
                    </figure>
                </article>

                {/* Field */}
                <article
                    className={`w-full overflow-hidden ${categoryToggle ? "duration-300 h-0" : "duration-300 h-fit mt-5 "
                        } duration-300 flex flex-col gap-y-4`}
                >
                    {categories?.map((data) => {
                        return (
                            <button
                                key={data?.id}
                                className={`${selectedCategory === data?.id ? 'bg-fullBlue text-white' : 'bg-bgCategory text-black'} hover:bg-fullBlue hover:text-white  w-full h-[44px] rounded-lg justify-center  flex items-center select-none  `}
                                type="button"
                                onClick={() => handleCategoryCheck(data?.id)}
                            >
                                <p className="not-italic font-AeonikProMedium tracking-[1%]   text-sm leading-4">
                                    {data?.name}
                                </p>
                            </button>
                        );
                    })}
                </article>
                {selectedCategory && <div className="w-full items-center justify-start">
                    <button
                        type="button"
                        onClick={() => ClearSelected()}
                        className={`w-fit active:scale-95  active:opacity-7  mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
                    >
                        Сбросить
                    </button>
                </div>}
            </section>
        </div >
    );
}
