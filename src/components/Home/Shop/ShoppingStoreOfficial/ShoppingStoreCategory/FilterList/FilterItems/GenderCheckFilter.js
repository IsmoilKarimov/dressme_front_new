import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

function GenderCheckFilter() {
    const [openGenderField, setOpenGenderField] = useState(false);
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


    const handleGenderCheck = (value) => {
        setGenderCategory((data) => {
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
            <article
                className="w-full flex justify-between items-center"
            // onClick={(event) => {
            //     event.target.classList.toggle("open");
            // }}
            >
                <figure
                    onClick={() => setOpenGenderField(!openGenderField)}
                    className="flex items-center cursor-pointer select-none"
                >
                    <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                        Пол
                    </p>
                    <p
                        className={`
                      ${openGenderField ? "rotate-[180deg]" : ""} duration-300 ml-1`}
                    >
                        <ArrowTopIcons colors={"#000"} />
                    </p>
                </figure>
            </article>
            {/* Field */}
            <article
                className={`w-full overflow-hidden ${openGenderField ? "duration-300 h-0" : "duration-300 h-fit mt-5 "
                    } duration-300 flex flex-col gap-y-4`}
            >
                <div className={`w-full flex flex-col items-center`}>
                    <div className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
                        {genderCategory?.map((data) => {
                            return (
                                <button
                                    key={data?.id}
                                    onClick={() => handleGenderCheck(data?.id)}
                                    className={` hover:bg-fullBlue hover:text-white h-[44px] w-[49%] flex items-center justify-center bg-bgCategory font-AeonikProMedium text-sm leading-3 text-center text-black rounded-lg duration-300`
                                    }
                                >
                                    {data?.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </article >
        </div >
    );
}
export default React.memo(GenderCheckFilter);
