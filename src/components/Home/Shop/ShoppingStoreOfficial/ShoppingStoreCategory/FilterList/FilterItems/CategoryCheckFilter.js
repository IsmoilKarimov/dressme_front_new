/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

export default function CategoryCheckFilter() {
    const [categoryToggle, setCategoryToggle] = useState(false);

    const [categories, setCategories] = useState([
        { id: "1", action: false, name: "Головной убор" },
        { id: "2", action: false, name: "Верхняя одежда" },
        { id: "3", action: false, name: "Нижняя одежда" },
        { id: "4", action: false, name: "Обувь" },
        { id: "5", action: false, name: "Аксессуары" },
    ]);

    const handleCategoryCheck = (value) => {
        setCategories((data) => {
            return data.map((e) => {
                if (e.id === value) {
                    return { ...e, action: true };
                } else return { ...e, action: false };
            });
        });
    };

    return (
        <div
            className={` w-full flex-col items-center md:mb-[38px]`}
        >
            <section
                className={` w-full h-fit mt-[12px] `}
            >
                <article
                    className="w-full flex justify-between items-center "
                // onClick={(event) => {
                //     event.target.classList.toggle("open");
                // }}
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
                                className={`hover:bg-fullBlue hover:text-white  w-full h-[44px] rounded-lg justify-center bg-bgCategory flex items-center select-none  text-black`}
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
            </section>
        </div >
    );
}
