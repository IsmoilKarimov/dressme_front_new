import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";

function UnderwearCheckFilter({ underWearList }) {
    const [underwearData, setUnderwearData] = useState(null);
    const [visibleButtons, setVisibleButtons] = useState(12);
    const [underwearToggle, setUnderwearToggle] = useState(false);
    const [dataActionUnderwearSizes, setDataActionUnderwearSizes] = useState();

    console.log(underWearList, "underWearList");
    useEffect(() => {
        function underwearSizes() {
            // const underwear = filter?.wear_sizes?.underwear;
            const transformedArray = Object?.entries(underWearList).map(
                ([size, details]) => ({ size, ...details })
            );
            setUnderwearData(transformedArray);
        }
        underwearSizes();
    }, [underWearList]);
    // underwearData = {
    //     '3XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    //     '1XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    //     '2XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    //     '3XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    //     '4XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    //     '3XL': { amount: 1, letter_size: "3XL", max_wear_size: "93", min_wear_size: "31" },
    // }
    return (
        <div
            className={` w-full flex flex-col items-center mb-[38px]`}
        >
            <section className="w-full h-fit mt-[12px] ">
                <article
                    className="w-full flex justify-between items-center "
                // onClick={(event) => {
                //     event.target.classList.toggle("open");
                // }}
                >
                    <figure
                        onClick={() =>
                            setUnderwearToggle(!underwearToggle)
                        }
                        className="flex items-center cursor-pointer select-none"
                    >
                        <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                            Размер нижней одежды
                        </p>
                        <p
                            className={`${underwearToggle ? "rotate-[180deg]" : ""
                                } duration-300 ml-1`}
                        >
                            <ArrowTopIcons colors={"#000"} />
                        </p>
                    </figure>
                </article>
                <article
                    className={` overflow-hidden ${underwearToggle
                        ? "duration-300 h-0"
                        : "duration-300 h-fit mt-5"
                        } duration-300`}
                >
                    <figure
                        className={`w-full flex flex-wrap justify-start gap-x-[2px] gap-y-2`}
                    >
                        {underwearData
                            ?.slice(0, visibleButtons)
                            ?.map((underwear, index) => {
                                return (
                                    <button
                                        key={index + 1}
                                        onClick={() => setDataActionUnderwearSizes(index + 1)}

                                        // setDataActionUnderwearSizes(index + 1);
                                        //     setDataActionOutwearSizes(null);
                                        //     setDataActionFootwearSizes(null);
                                        //     sendUnderwearSize(underwear);
                                        //     handleFootwearWearSize(null)
                                        //     sendClearedOutwearData()
                                        // }}
                                        className={`${underwear?.letter_size || underwear?.size
                                            ? "flex"
                                            : "hidden"
                                            } ${dataActionUnderwearSizes === index + 1
                                                ? "bg-fullBlue text-white"
                                                : ""
                                            } h-10 w-[57px] items-center justify-center not-italic font-AeonikProMedium text-xs leading-3 text-center text-black bg-bgCategory hover:bg-fullBlue hover:text-white transition ease-linear duration-200 rounded-lg`
                                        }
                                    >
                                        <div className="flex items-center">
                                            {underwear?.letter_size ? (
                                                <span>{underwear?.letter_size}</span>
                                            ) : underwear?.max_wear_size ? (
                                                <span>
                                                    {underwear?.min_wear_size}-{underwear?.max_wear_size}
                                                </span>
                                            ) : (
                                                <span>{underwear?.min_wear_size}</span>
                                            )}
                                            <span className="ml-1">({underwear?.amount})</span>
                                        </div>
                                    </button>
                                );
                            })}
                        <div className="w-full flex items-center justify-between">
                            {/* <div className="flex w-1/3 justify-start items-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setDataActionUnderwearSizes(false);
                                        sendClearedUnderwearData();
                                    }}
                                    className={`${dataActionUnderwearSizes ? "flex" : "hidden"
                                        } flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                >
                                    Сбросить
                                </button>
                            </div> */}
                            <div
                                className={`${underwearData?.length > 8 ? "flex" : "hidden"
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
                                    disabled={underwearData?.length <= visibleButtons}
                                    onClick={() => {
                                        setVisibleButtons((prev) => prev + 12);
                                    }}
                                    className={`${underwearData?.length <= visibleButtons
                                        ? "cursor-not-allowed text-textOpacity font-AeonikProMedium"
                                        : ""
                                        } w-full flex-end justify-end text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                >
                                    Больше
                                </button>
                            </div>
                        </div>
                    </figure>
                </article>
            </section>
        </div >
    );
}

export default React.memo(UnderwearCheckFilter);
