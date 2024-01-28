import React, { useEffect, useState } from "react";
import { ArrowTopIcons } from "../../../../../../../assets/icons";
import Slider from "react-slider";

const BudgetCheckFilter = ({ budgetList, onBudgetGetValue }) => {
    const [budgetToggle, setBudgetToggle] = useState(false);

    const [minPrice, setMinPrice] = useState(Number(budgetList?.min_price));
    const [maxPrice, setMaxPrice] = useState(Number(budgetList?.max_price));
    const [values, setValues] = useState([]);
    const [clearPrice, setClearPrice] = useState(false);
    useEffect(() => {
        setMinPrice(Number(budgetList?.min_price));
        setMaxPrice(Number(budgetList?.max_price));
        if (budgetList?.min_price && budgetList?.max_price) {
            if (!values[0] && !values[1]) {
                setValues([
                    Number(budgetList?.min_price),
                    Number(budgetList?.max_price),
                ]);
            }
        } else {
            setValues([0, 0]);
        }
    }, [budgetList]);

    useEffect(() => {
        if (values[0] && values[1] && minPrice && maxPrice) {
            if (minPrice !== values[0] || maxPrice !== values[1]) {
                setClearPrice(true)
            }
        }
    }, [values]);

    const sendPriceList = () => {
        onBudgetGetValue({ min: values[0], max: values[1] })
    };

    const clearFunction = () => {
        setClearPrice(false)
        setValues([
            Number(budgetList?.min_price),
            Number(budgetList?.max_price),
        ]);
        onBudgetGetValue([])
    };

    return (
        <section className={`  w-full h-fit md:mb-[10px]`} >
            <article
                className="w-full flex justify-between items-center md:pt-[12px]"
            >
                <figure
                    onClick={() => setBudgetToggle(!budgetToggle)}
                    className="flex items-center cursor-pointer select-none"
                >
                    <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                        Бюджет
                    </p>
                    <p
                        className={`${budgetToggle ? "rotate-[180deg]" : ""
                            } duration-300 ml-1`}
                    >
                        <ArrowTopIcons colors={"#000"} />
                    </p>
                </figure>
            </article>
            <article
                className={`border-1 overflow-hidden  ${budgetToggle
                    ? "duration-300 h-0"
                    : `h-[120px] duration-300 mt-5`
                    } duration-300 `}
            >
                <div className="flex flex-col rounded-lg  w-full">
                    <div className="flex flex-wrap justify-between items-center mb-3 w-full px-2">
                        <div className="flex">
                            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#000] ">
                                от
                            </span>
                            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                                <input
                                    name="min_price"
                                    className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                                    value={Number(values[0]).toLocaleString()}

                                />{" "}
                            </span>
                        </div>
                        <div className="flex ">
                            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                                до
                            </span>
                            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                                <input
                                    name="max_price"
                                    className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px]"
                                    value={Number(values[1]).toLocaleString()}
                                />
                            </span>
                        </div>
                    </div>
                    <Slider
                        className={`slider w-full flex items-center h-[4px] bg-fullBlue border rounded-[1px] my-5`}
                        onChange={setValues}
                        value={values}
                        minDistance={10}
                        min={Number(minPrice)}
                        max={Number(maxPrice)}
                    />
                </div>
                {clearPrice && <div className={`flex w-full items-center justify-between mt-1`}>
                    <button
                        type="button"
                        onClick={() => clearFunction()}
                        className={`flex items-center active:scale-95  active:opacity-70 text-sm text-borderWinter font-AeonikProRegular`}
                    >
                        Сбросить
                    </button>
                    <button
                        type="button"
                        onClick={() => sendPriceList()}
                        className="flex items-center active:scale-95  active:opacity-70 font-AeonikProRegular cursor-pointer text-sm justify-center  text-fullBlue"
                    >
                        Готово
                    </button>
                </div>}
            </article>
        </section >
    );
};
export default React.memo(BudgetCheckFilter);
