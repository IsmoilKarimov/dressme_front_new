import React, { useContext, useState, useEffect } from "react";
import { useHttp } from "../../../../../../hook/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";

import SkeletonFilter from "../../SkeletonFilter/SkeletonFilter";
import axios from "axios";
import Cookies from "js-cookie";
import { ArrowTopIcons, MenuCloseIcons, StarIcons } from "../../../../../../assets/icons";
import { BiCheck } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

import Slider from "react-slider";

function FilterList({
    paramsId,
    genderId,
    discountId,
    categoryId,
    getBadgePrice,
    setDataColor,
    dataColor,
    outWearList,
    underWearList,
    footWearList,
    getRatingList,
    filterToggle,
    setPageId,
    setFilterToggle,
    openMobileFilter,
    setOpenMobileFilter

}) {
    const { request } = useHttp()
    const [dressInfo, setDressInfo] = useContext(dressMainData);
    const [getFilter, setGetFilter] = useState()

    // ------------------------
    const [genderToggle, setGenderToggle] = useState(false);
    const [genderNewList, setGenderNewList] = useState([]);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedDiscount, setSelectedDiscount] = useState(null);
    // ---Category
    const [categorySelect, setCategorySelect] = useState();
    const [colorToggle, setColorToggle] = useState(false);

    const [categoryToggle, setCategoryToggle] = useState(false);
    const [categoryNewList, setCategoryNewList] = useState([]);
    // -------------------Budget---------------
    const [budgetToggle, setBudgetToggle] = useState(false);

    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [values, setValues] = useState([]);
    const [clearPrice, setClearPrice] = useState(false);
    // ----Ratinf
    const [ratingToggle, setRatingToggle] = useState(false);
    const [selectedRating, setSelectedRating] = useState(null);
    // ------OutWear
    const [outwearData, setOutwearData] = useState(null);
    const [visibleButtons, setVisibleButtons] = useState(12);
    const [outwearToggle, setOutwearToggle] = useState(false);
    const [dataActionOutwearSizes, setDataActionOutwearSizes] = useState();
    // ----UnderWear
    const [underwearData, setUnderwearData] = useState(null);
    // const [visibleButtons, setVisibleButtons] = useState(12);
    const [underwearToggle, setUnderwearToggle] = useState(false);
    const [dataActionUnderwearSizes, setDataActionUnderwearSizes] = useState();
    // -----FootWear
    const [footwearData, setFootwearData] = useState(null);
    // const [visibleButtons, setVisibleButtons] = useState(12);
    const [footWearToggle, setFootWearToggle] = useState(false);
    const [dataActionFootwearSizes, setDataActionFootwearSizes] = useState();
    const url = `https://api.dressme.uz/api/main`;

    function fetchGetAllData() {
        fetch(`${url}/shops/filter/${paramsId}?location_id=${dressInfo?.locationIdParams}`)
            .then((res) => res.json())
            .then((res) => {
                setGetFilter(res?.filter)
            })
            .catch((err) => console.log(err, "ERRORLIST"));
    }
    useEffect(() => {
        if ((filterToggle || openMobileFilter) && (!getFilter)) {
            fetchGetAllData()
        }
    }, [filterToggle, openMobileFilter])

    useEffect(() => {
        if (getFilter) {
            setFilterToggle(false)
            setGetFilter()
        }
    }, [dressInfo?.locationIdParams])


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
            getFilter?.gender_ids?.map((data) => {
                if (item?.id === Number(data)) {
                    if (!genderNewList) {
                        setGenderNewList(genderNewList => [...genderNewList, item])
                    }
                    if (genderNewList && !genderNewList?.includes(item)) {
                        setGenderNewList(genderNewList => [...genderNewList, item])
                    }
                }
            })
        })

    }, [getFilter?.gender_ids])

    const handleGenderCheck = (value) => {
        genderId(value)
        setSelectedGender(value)
    };
    function handleDiscountCheck() {
        discountId(1)
        setSelectedDiscount(1)
    };
    function ClearListGender() {
        discountId(false)
        genderId(null)
        setSelectedDiscount(null)
        setSelectedGender(0)
    }


    function onHandleColorList(hexCode) {
        setPageId(1)
        if (dataColor?.length === 0) {
            setDataColor(dataColor => [...dataColor, hexCode])
        }
        if (dataColor?.length > 0 && !dataColor?.includes(hexCode)) {
            setDataColor(dataColor => [...dataColor, hexCode])
        }
        if (dataColor?.length > 0 && dataColor?.includes(hexCode)) {
            setDataColor(dataColor?.filter((e) => e !== hexCode)
            );
        }
    }
    const ClearListColor = () => {
        setDataColor([])
    }


    const [categories, setCategories] = useState([
        { id: 1, name: "Головной убор" },
        { id: 2, name: "Верхняя одежда" },
        { id: 3, name: "Нижняя одежда" },
        { id: 4, name: "Обувь" },
        { id: 5, name: "Аксессуары" },
    ]);
    useEffect(() => {
        categories?.map(item => {
            getFilter?.category_ids?.map(data => {
                if (item?.id === Number(data)) {
                    if (categoryNewList?.length === 0) {
                        setCategoryNewList(categoryNewList => [...categoryNewList, item])
                    }
                    if (categoryNewList?.length > 0 && !categoryNewList?.includes(item)) {
                        setCategoryNewList(categoryNewList => [...categoryNewList, item])
                    }
                }
            })
        })
    }, [getFilter?.category_ids])

    const handleCategoryCheck = (value) => {
        setCategorySelect(value)
        categoryId(value)
    };
    function ClearListCategory() {
        setCategorySelect(null)
        categoryId(null)
    }
    // -------------------Budget---------------

    useEffect(() => {
        setMinPrice(Number(getFilter?.budget?.min_price));
        setMaxPrice(Number(getFilter?.budget?.max_price));
        if (getFilter?.budget?.min_price && getFilter?.budget?.max_price) {
            if (!values[0] && !values[1]) {
                setValues([
                    Number(getFilter?.budget?.min_price),
                    Number(getFilter?.budget?.max_price),
                ]);
            }
        } else {
            setValues([0, 0]);
        }
    }, [getFilter?.budget]);

    useEffect(() => {
        if (values[0] && values[1] && minPrice && maxPrice) {
            if (minPrice !== values[0] || maxPrice !== values[1]) {
                setClearPrice(true)
            }
        }
    }, [values]);

    const sendPriceList = () => {
        getBadgePrice({ min: values[0], max: values[1] })
    };

    const ClearListBadget = () => {
        setClearPrice(false)
        setValues([
            Number(getFilter?.budget?.min_price),
            Number(getFilter?.budget?.max_price),
        ]);
        getBadgePrice([])
    };

    // ------------Ratinbglist
    const [transformedArray, setTransformedArray] = useState([])
    useEffect(() => {

        const originalObject = getFilter?.ratings;
        if (originalObject) {
            const transformed = Object.entries(originalObject).map(([key, value]) => ({
                key: parseInt(key, 10),
                value: value + 0,
            }));
            setTransformedArray(transformed)
        }
    }, [getFilter?.ratings])

    const onHandleRating = (id) => {
        setSelectedRating(id)
        getRatingList(id)
    }
    const ClearList = () => {
        setSelectedRating(null)
        getRatingList(null)
    }
    // --------OutWear
    useEffect(() => {
        if (getFilter?.wear_sizes?.outwear) {
            const transformedArray = Object?.entries(getFilter?.wear_sizes?.outwear).map(
                ([size, details]) => ({ size, ...details })
            );
            setOutwearData(transformedArray);
        }
    }, [getFilter?.wear_sizes?.outwear]);

    const onHandleOutWearList = (select) => {
        setDataActionOutwearSizes(select)
        outWearList(select)
        // ---UnderWear
        setDataActionUnderwearSizes()
        underWearList()
        // --FootWear
        setDataActionFootwearSizes()
        footWearList()
    }
    const ClearListOutWear = () => {
        setDataActionOutwearSizes()
        outWearList()
    }
    // -------UnderWear

    useEffect(() => {
        if (getFilter?.wear_sizes?.underwear) {
            const transformedArray = Object?.entries(getFilter?.wear_sizes?.underwear).map(
                ([size, details]) => ({ size, ...details })
            );
            setUnderwearData(transformedArray);
        }
    }, [getFilter?.wear_sizes?.underwear]);

    const onHandleUnderWearList = (select) => {
        setDataActionUnderwearSizes(select)
        underWearList(select)
        // --OutWear
        setDataActionOutwearSizes()
        outWearList()
        // --FootWear
        setDataActionFootwearSizes()
        footWearList()

    }
    const ClearListUnderWear = () => {
        setDataActionUnderwearSizes()
        underWearList()
    }

    // --------FootWear-------

    useEffect(() => {
        if (getFilter?.wear_sizes?.footwear) {

            const transformedArray = Object?.entries(getFilter?.wear_sizes?.footwear).map(
                ([size, details]) => ({ size, ...details })
            );
            setFootwearData(transformedArray);
        }
    }, [getFilter?.wear_sizes?.footwear]);

    const onHandleFootWearList = (select) => {
        setDataActionFootwearSizes(select)
        footWearList(select)
        //---underWear
        setDataActionUnderwearSizes()
        underWearList()
        // outWear
        setDataActionOutwearSizes()
        outWearList()
    }
    const ClearListFootWear = () => {
        setDataActionFootwearSizes()
        footWearList()
    }

    const ClearAll = () => {
        discountId(false)
        genderId(null)
        setSelectedDiscount(null)
        setSelectedGender(0)
        //---Color
        setDataColor([])
        // ---Category
        categoryId(null)
        setCategorySelect()
        //---Budget
        getBadgePrice([])
        setValues([
            Number(getFilter?.budget?.min_price),
            Number(getFilter?.budget?.max_price),
        ]);
        setClearPrice(false)
        // ---ratingList
        setSelectedRating(null)
        getRatingList(null)
        // ---Sizes
        underWearList(null)
        outWearList(null)
        footWearList(null)
        // ---outWear
        setDataActionOutwearSizes()
        outWearList()
        // ---underWear
        setDataActionUnderwearSizes()
        underWearList()
        // ---OutWear
        setDataActionFootwearSizes()
        footWearList()
    }
    return (
        <div
            className={`w-full h-hull  py-5 px-3 rounded-lg border border-searchBgColor rounded-lg overflow-hidden `}
        >
            {getFilter ?
                <div
                    className={` w-full flex-col items-center md:mb-[38px]`}
                >
                    <section className="h-fit  md:hidden w-full bg-btnBgColor flex items-center  justify-between md:mb-0 mb-4 ">
                        <p className="text-lg font-AeonikProMedium">Фильтры</p>
                        <button
                            type="button"
                            onClick={() => setOpenMobileFilter(false)}
                        >
                            <MenuCloseIcons colors={"#b5b5b5"} />
                        </button>
                    </section>
                    {/* ------Пол---- */}
                    {getFilter?.gender_ids &&
                        <div className=" mb-[20px] md:mb-[38px]">
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
                                        {getFilter?.discount &&
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
                                                onClick={() => ClearListGender()}
                                                className={`w-full flex flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                            >
                                                Сбросить
                                            </button>
                                        </div> : null}
                                </div>
                            </article >
                        </div>}
                    {/* -----Категории---- */}
                    {categoryNewList?.length > 0 &&
                        <div
                            className={` w-full flex-col items-center mb-[20px] md:mb-[38px]`}
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
                                    {categoryNewList?.map((data) => {
                                        return (
                                            <button
                                                key={data?.id}
                                                className={`${categorySelect === data?.id ? 'bg-fullBlue text-white' : 'bg-bgCategory text-black'} hover:bg-fullBlue hover:text-white  w-full h-[44px] rounded-lg justify-center  flex items-center select-none  `}
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
                                {categorySelect && <div className="w-full items-center justify-start">
                                    <button
                                        type="button"
                                        onClick={() => ClearListCategory()}
                                        className={`w-fit active:scale-95  active:opacity-7  mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
                                    >
                                        Сбросить
                                    </button>
                                </div>}
                            </section>
                        </div >}
                    {/* -----Budget---- */}
                    {getFilter?.budget?.min_price && getFilter?.budget?.min_price &&
                        <div className={`  w-full h-fit mb-[20px] md:mb-[10px]`} >
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
                                        onClick={() => ClearListBadget()}
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
                        </div >}
                    {/* -----Color_------ */}
                    {getFilter?.colors &&
                        <div className={`w-full flex items-center flex-col mb-[20px] md:mb-[38px]`}>
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
                                        {getFilter?.colors?.map((data, index) => {
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
                                                        {dataColor?.includes(data) && (
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
                                    {dataColor?.length > 0 &&
                                        <button
                                            type="button"
                                            onClick={() => ClearListColor()}
                                            className={`w-fit mt-2 flex-start text-sm text-borderWinter font-AeonikProRegular`}
                                        >
                                            Сбросить
                                        </button>}
                                </article>
                            </section>
                        </div>}
                    {/* ------rating------ */}
                    {getFilter?.ratings &&
                        <div className={` w-full flex-col items-center mb-[20px] md:mb-[38px]`}>
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
                        </div >}
                    {/* ----OutWearList---- */}
                    {getFilter?.wear_sizes?.outwear &&
                        <div
                            className={`w-full flex-col items-center mb-[20px] md:mb-[38px]`}
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
                                                    onClick={() => onHandleOutWearList(outwear)}

                                                    className={`${outwear?.letter_size || outwear?.size ? "flex" : "hidden"
                                                        } ${dataActionOutwearSizes === outwear
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

                                        <div className={`w-full flex items-center  ${dataActionOutwearSizes ? "justify-between" : "justify-end"}`}>
                                            {dataActionOutwearSizes &&
                                                <div className="flex w-1/3 justify-start items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => ClearListOutWear()}
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
                        </div>}
                    {/* ---underWearList--- */}
                    {getFilter?.wear_sizes?.underwear &&
                        <div
                            className={` w-full flex flex-col items-center mb-[20px] md:mb-[38px]`}
                        >
                            <section className="w-full h-fit mt-[12px] ">
                                <article
                                    className="w-full flex justify-between items-center "
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
                                                        onClick={() => onHandleUnderWearList(underwear)}
                                                        className={`${underwear?.letter_size || underwear?.size
                                                            ? "flex"
                                                            : "hidden"
                                                            } ${dataActionUnderwearSizes === underwear ? "bg-fullBlue text-white"
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
                                        <div className={`w-full flex items-center ${dataActionUnderwearSizes ? "justify-between" : "justify-end"}`}>
                                            {dataActionUnderwearSizes &&
                                                <div className="flex w-1/3 justify-start items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => ClearListUnderWear()}
                                                        className={`flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                                    >
                                                        Сбросить
                                                    </button>
                                                </div>}
                                            <div
                                                className={`${underwearData?.length > 12 ? "flex" : "hidden"
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
                        </div >}
                    {/* ----footWear--- */}
                    {getFilter?.wear_sizes?.footwear &&
                        <div
                            className={`w-full flex flex-col items-center mb-[20px] md:mb-[38px]`}
                        >
                            <section className="w-full h-fit mt-[12px] ">
                                <article
                                    className="w-full flex justify-between items-center "
                                >
                                    <figure
                                        onClick={() => setFootWearToggle(!footWearToggle)}
                                        className="flex items-center cursor-pointer select-none"
                                    >
                                        <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                                            Размер обуви
                                        </p>
                                        <p
                                            className={`${footWearToggle ? "rotate-[180deg]" : ""
                                                } duration-300 ml-1`}
                                        >
                                            <ArrowTopIcons colors={"#000"} />
                                        </p>
                                    </figure>
                                </article>
                                <article
                                    className={` overflow-hidden ${footWearToggle ? "duration-300 h-0" : "duration-300 h-fit mt-5"
                                        } duration-300`}
                                >
                                    <figure className="w-full flex flex-wrap justify-start gap-x-[2px] gap-y-2">
                                        {footwearData?.slice(0, visibleButtons)?.map((footwear, index) => {
                                            return (
                                                <button
                                                    key={index + 1}
                                                    onClick={() => onHandleFootWearList(footwear)}
                                                    className={`${dataActionFootwearSizes === footwear
                                                        ? "bg-fullBlue text-white"
                                                        : ""
                                                        } h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-xs leading-3 text-center text-black bg-bgCategory  hover:bg-fullBlue  hover:text-white transition ease-linear duration-200 rounded-lg`}
                                                >
                                                    <div className="flex items-center">
                                                        <span>{footwear?.size}</span>
                                                        <span className="ml-1">({footwear?.amount})</span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                        <div className={`w-full flex items-center  ${dataActionFootwearSizes ? "justify-between" : "justify-end"}`}>
                                            {dataActionFootwearSizes && <div className="flex w-1/3 justify-start items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => ClearListFootWear()}
                                                    className={` flex-start text-sm text-borderWinter font-AeonikProRegular mt-2`}
                                                >
                                                    Сбросить
                                                </button>
                                            </div>}
                                            <div
                                                className={`${footwearData?.length > 12 ? "flex" : "hidden"
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
                                                    disabled={footwearData?.length <= visibleButtons}
                                                    onClick={() => {
                                                        setVisibleButtons((prev) => prev + 12);
                                                    }}
                                                    className={`${footwearData?.length <= visibleButtons
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
                        </div>}

                    <div className="w-full border-t border-searchBgColor py-5 px-3">
                        <button
                            type="button"
                            onClick={() => ClearAll()}
                            className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70"
                        >
                            Сбросить фильтр
                        </button>
                    </div>


                </div> :
                <div className="w-full h-fit">
                    <SkeletonFilter />
                </div>}
        </div>
    );
};
export default React.memo(FilterList);
