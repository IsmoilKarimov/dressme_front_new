/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

function OutwearCheckFilter({ OutWearList, onOutWearGetValue }) {
    const [outwearData, setOutwearData] = useState(null);
    const [visibleButtons, setVisibleButtons] = useState(12);
    const [outwearToggle, setOutwearToggle] = useState(false);
    const [dataActionUnderwearSizes, setDataActionUnderwearSizes] = useState();

    useEffect(() => {
        const transformedArray = Object?.entries(OutWearList).map(
            ([size, details]) => ({ size, ...details })
        );
        setOutwearData(transformedArray);
    }, [OutWearList]);
    const onHandleUnderWearList = (select) => {
        setDataActionUnderwearSizes(select)
        onOutWearGetValue(select)
    }
    const ClearList = () => {
        setDataActionUnderwearSizes()
        onOutWearGetValue()
    }
    return (
        <div
            className={`w-full flex-col items-center mb-[38px]`}
        >
            <section className="w-full h-fit mt-[12px] ">
                <article
                    className="w-full flex justify-between items-center "
                >
                    <figure
                        onClick={() =>
                            setOutwearToggle(!outwearToggle)}
                        className="flex items-center cursor-pointer select-none"
                    >
                        <figcaption className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                            Размер верхней одежды
                        </figcaption>
                        <p
                            className={`${outwearToggle ? "rotate-[180deg]" : ""
                                } duration-300 ml-1`}
                        >
                            <ArrowTopIcons colors={"#000"} />
                        </p>
                    </figure>
                </article>
                <article
                    className={`overflow-hidden ${outwearToggle ? "duration-300 h-0" : "duration-300 h-fit mt-5"
                        } duration-300`}
                >
                    <figure
                        className={`w-full flex flex-wrap justify-start gap-x-[2px] gap-y-2`}
                    >
                        {outwearData?.slice(0, visibleButtons)?.map((outwear, index) => {
                            return (
                                <button
                                    key={index + 1}
                                    onClick={() => onHandleUnderWearList(outwear)}

                                    className={`${outwear?.letter_size || outwear?.size ? "flex" : "hidden"
                                        } ${dataActionUnderwearSizes === outwear
                                            ? "bg-fullBlue text-white"
                                            : ""
                                        } h-10 w-[57px]  items-center justify-center not-italic font-AeonikProMedium text-xs leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white transition ease-linear duration-200 rounded-lg`}
                                >
                                    <div className="flex items-center">
                                        {outwear?.letter_size ? (
                                            <span>{outwear?.letter_size}</span>
                                        ) : (
                                            <span>{outwear?.size}</span>
                                        )}
                                        <span className="ml-1">({outwear?.amount})</span>
                                    </div>
                                </button>
                            );
                        })}

                        <div className="w-full flex items-center justify-between">
                            {dataActionUnderwearSizes &&
                                <div className="flex w-1/3 justify-start items-center">
                                    <button
                                        type="button"
                                        onClick={() => ClearList()}
                                        className={` flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                    >
                                        Сбросить
                                    </button>
                                </div>}
                            <div
                                className={`${outwearData?.length > 12 ? "flex" : "hidden"
                                    } w-2/3 items-center justify-end`}
                            >
                                <button
                                    type="button"
                                    disabled={visibleButtons === 12}
                                    onClick={() => {
                                        setVisibleButtons((prev) => prev - 12);
                                    }}
                                    className={`${visibleButtons === 12
                                        ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                                        : ""
                                        } w-full flex justify-end text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                >
                                    Меньше
                                </button>

                                <button
                                    type="button"
                                    disabled={outwearData?.length <= visibleButtons}
                                    onClick={() => {
                                        setVisibleButtons((prev) => prev + 12);
                                    }}
                                    className={`${outwearData?.length <= visibleButtons
                                        ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                                        : ""
                                        } w-full flex justify-center text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                >
                                    Больше
                                </button>
                            </div>
                        </div>
                    </figure>
                </article>
            </section>
        </div>
    );
}

export default React.memo(OutwearCheckFilter);
