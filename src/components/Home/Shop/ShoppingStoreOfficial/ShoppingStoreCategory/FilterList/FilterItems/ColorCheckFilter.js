import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";
import { FaCheck } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

function ColorCheckFilter({ colorList, onColorGetValue }) {
    const [selectedColorId, setSelectedColorId] = useState([]);
    const [colorToggle, setColorToggle] = useState(false);

    function onHandleColorList(hexCode) {
        if (selectedColorId?.length === 0) {
            setSelectedColorId(selectedColorId => [...selectedColorId, hexCode])
        }
        if (selectedColorId?.length > 0 && !selectedColorId?.includes(hexCode)) {
            setSelectedColorId(selectedColorId => [...selectedColorId, hexCode])
        }
        if (selectedColorId?.length > 0 && selectedColorId?.includes(hexCode)) {
            setSelectedColorId(selectedColorId?.filter((e) => e !== hexCode)
            );
        }
    }

    useEffect(() => {
        onColorGetValue(selectedColorId)
    }, [selectedColorId])

    function ClearList() {
        setSelectedColorId([])
        onColorGetValue([])
    }

    return (
        <div className={`w-full flex items-center flex-col md:mb-[38px]`}>
            <section className="w-full h-fit ">
                {/* Controls */}
                <article
                    className="openBrands w-full flex justify-between items-center md:pt-[12px]"
                >
                    <figure
                        onClick={() => setColorToggle(!colorToggle)}
                        className="flex items-center cursor-pointer select-none"
                    >
                        <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                            Цвет
                        </p>
                        <p
                            className={`${colorToggle ? "rotate-[180deg]" : ""
                                } duration-300 ml-1`}
                        >
                            <ArrowTopIcons colors={"#000"} />
                        </p>
                    </figure>
                </article>
                {/* Colors */}

                <article
                    className={`overflow-hidden ${colorToggle ? "duration-300 h-0" : `h-fit duration-300 pt-5 pb-1`
                        }  `}
                >
                    <div className="flex items-center justify-start flex-wrap mx-1 gap-x-2 gap-y-2">
                        {colorList?.map((data, index) => {
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    style={{ background: data }}
                                    onClick={() => onHandleColorList(data)}
                                    className={`
                                       } rounded-full flex items-center justify-center hover:scale-110 duration-300 w-6 h-6 cursor-pointer border border-solid border-borderColorCard`}
                                >
                                    <p className="w-[18px] flex items-center justify-center">
                                        {selectedColorId.includes(data) && (
                                            <BiCheck
                                                size={30}
                                                color={
                                                    data === "#ffffff" || data === "#f5f5dc"
                                                        ? "#000"
                                                        : "#fff"
                                                }
                                                className="flex items-center justify-center"
                                            />
                                        )}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                    {selectedColorId?.length > 0 &&
                        <button
                            type="button"
                            onClick={() => ClearList()}
                            className={`w-fit mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
                        >
                            Сбросить
                        </button>}
                </article>
            </section>
        </div>
    );
}

export default React.memo(ColorCheckFilter);
