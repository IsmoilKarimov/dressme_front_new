import React, { useEffect, useState } from "react";
import { ArrowTopIcons, StarIcons } from "../../../../../../../assets/icons";
import { BsCheckLg } from "react-icons/bs";

function RatingCheckFilter({ ratingList, onRatingGetValue }) {
    const [ratingToggle, setRatingToggle] = useState(false);
    const [selectedRating, setSelectedRating] = useState(null);

    const originalObject = ratingList;
    const transformedArray = Object.entries(originalObject).map(([key, value]) => ({
        key: parseInt(key, 10),
        value: value + 1,
    }));

    const onHandleRating = (id) => {
        setSelectedRating(id)
        onRatingGetValue(id)
    }
    const ClearList = () => {
        setSelectedRating(null)
        onRatingGetValue(null)
    }

    return (
        <div className={` w-full flex-col items-center mb-[38px]`}>
            <section className="w-full h-fit mt-[12px]">
                <article
                    className="w-full flex justify-between items-center"
                >
                    <figure
                        onClick={() =>
                            setRatingToggle(!ratingToggle)
                        }
                        className="flex items-center cursor-pointer select-none"
                    >
                        <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                            Отзывы клиентов
                        </p>
                        <p
                            className={`${ratingToggle ? "rotate-[180deg]" : ""
                                } duration-300 ml-1`}
                        >
                            <ArrowTopIcons colors={"#000"} />
                        </p>
                    </figure>
                </article>
                <article
                    className={`flex flex-col   gap-y-3 overflow-hidden ${ratingToggle
                        ? "duration-300 h-0"
                        : `duration-300  mt-5`
                        } duration-300`}
                >
                    {/* Field */}

                    {transformedArray?.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="flex  items-center cursor-pointer select-none"
                                onClick={() => onHandleRating(data?.key)}
                            >
                                <div
                                    className={`w-[22px] h-[22px] flex items-center  mr-[10px] rounded border border-borderColorCard`}
                                >
                                    {selectedRating === data?.key && (
                                        <span className="bg-blue-600 h-full w-full text-white flex items-center justify-center">
                                            <BsCheckLg size={12} />
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                                    {data?.key >= 1 && <StarIcons />}
                                    {data?.key >= 2 && <StarIcons />}
                                    {data?.key >= 3 && <StarIcons />}
                                    {data?.key >= 4 && <StarIcons />}
                                    {data?.key === 5 && <StarIcons />}
                                </div>
                                <span className="text-base leading-4 font-AeonikProRegular">
                                    ({data?.value})
                                </span>
                            </div>
                        );
                    })}

                    {selectedRating && <button
                        type="button"
                        onClick={() => ClearList()}
                        className={`w-fit flex-start text-sm text-borderWinter font-AeonikProRegular`}
                    >
                        Сбросить
                    </button>}
                </article>
            </section>
        </div >
    );
}

export default React.memo(RatingCheckFilter);