import React, { useContext, useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import ReactSlider from "react-slider";

import {
  StarIcons,
  ArrowTopIcons,
  InputCheckedTrueIcons,
  MenuCloseIcons,
} from "../../../../assets/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import CategoryTopButtons from "../CategoryTop/CategoryTopButtons/CategoryTopButtons";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import CategoriesFilter from "./FiilterForApi/CategoriesFilter";
import BudgetFilter from "./FiilterForApi/BudgetFilter";

const CategoryForBrand = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [genderId, setGenderId] = useState();
  const [discountId, setDiscountId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [budgetFrom, setBudgetFrom] = useState();
  const [budgetTo, setBudgetTo] = useState();
  const [dataAction, setDataAction] = useState(false);
  const [dataActionDiscount, setDataActionDiscount] = useState(false);
  const [data, setData] = useState([]);
  const minPrice = 10000;
  const maxPrice = 300000;
  const [values, setValues] = useState([minPrice, maxPrice]);
  console.log(values);

  const [state, setState] = useState({
    brandShow: screenSize.width <= 768 ? true : false,
    budgetShow: screenSize.width <= 768 ? true : false,
    ColorsShow: screenSize.width <= 768 ? true : false,
    ClothingShow: screenSize.width <= 768 ? true : false,

    TrouserShow: screenSize.width <= 768 ? true : false,
    ShoesShow: screenSize.width <= 768 ? true : false,
    customerRreviews: screenSize.width <= 768 ? true : false,
    availability: screenSize.width <= 768 ? true : false,
    category: screenSize.width <= 768 ? true : false,
    //--------------
    checkBrand: false,
    checkedPrize: true,
  });

  console.log(data, "DATA");

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const params = useParams();
  const apiUrl = `https://api.dressme.uz/api/main/shops/${params?.id}`;

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });
    fetch(`${apiUrl}?` + new URLSearchParams(params), {
      headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  };

  useEffect(() => {
    fetchGetAllData({
      gender: genderId,
      discountId: discountId,
      categoryId: categoryId,
      budgetFrom: budgetFrom,
      budgetTo: budgetTo,
    });
  }, [genderId, discountId, categoryId]);

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [product] = useState({
    changeColor: [
      { id: 1, value: 1, action: false, colors: "bg-black" },
      { id: 2, value: 2, action: false, colors: "bg-white" },
      { id: 3, value: 3, action: false, colors: "bg-purple-700" },
      { id: 4, value: 4, action: false, colors: "bg-gray-500" },
      { id: 5, value: 5, action: false, colors: "bg-red-700" },
      { id: 6, value: 6, action: false, colors: "bg-yellow-500" },
      { id: 7, value: 7, action: false, colors: "bg-green-600" },
      { id: 8, value: 8, action: false, colors: "bg-sky-500" },
      { id: 9, value: 9, action: false, colors: "bg-yellow-700" },
      { id: 10, value: 10, action: false, colors: "bg-rose-900" },
      { id: 11, value: 11, action: false, colors: "bg-pink-600" },
      { id: 12, value: 12, action: false, colors: "bg-cyan-900" },
    ],
    clothingSize: [
      { id: 1, action: false, size: "XS" },
      { id: 2, action: false, size: "S" },
      { id: 3, action: false, size: "M" },
      { id: 4, action: false, size: "L" },
      { id: 5, action: false, size: "XL" },
      { id: 6, action: false, size: "2XL" },
      { id: 7, action: false, size: "3XL" },
      { id: 8, action: false, size: "4XL" },
    ],
    pantsSize: [
      { id: 1, action: false, size: "XS" },
      { id: 2, action: false, size: "S" },
      { id: 3, action: false, size: "M" },
      { id: 4, action: false, size: "L" },
      { id: 5, action: false, size: "XL" },
      { id: 6, action: false, size: "2XL" },
      { id: 7, action: false, size: "3XL" },
      { id: 8, action: false, size: "4XL" },
    ],
    shoeSize: [
      { id: 1, action: false, size: "37" },
      { id: 2, action: false, size: "38" },
      { id: 3, action: false, size: "39" },
      { id: 4, action: false, size: "40" },
      { id: 5, action: false, size: "41" },
      { id: 6, action: false, size: "42" },
      { id: 7, action: false, size: "43" },
      { id: 8, action: false, size: "44" },
    ],
    ArrayRating: [
      { id: 1, check: false, value: 4, text: "& Больше" },
      { id: 2, check: false, value: 4, text: "" },
      { id: 3, check: false, value: 2, text: "" },
    ],
  });

  const HandleColorCheck = () => {};

  function handleGetId(childData) {
    setGenderId(childData?.genderFilterId);
  }

  function handleGetDiscountId(childData) {
    setDiscountId(childData?.discountId);
  }

  function handleGetCategoryId(childData) {
    setCategoryId(childData?.categoryId);
  }

  function handleGetBudgetPrize(childData) {
    setBudgetFrom(childData?.categoryId);
  }

  function handleGetBudgetPrizeTwo(childData) {
    setBudgetTo(childData?.categoryId);
  }

  return (
    <main
      className={`w-full h-fit ${
        dressInfo?.openShopIdFilter
          ? " border-0 "
          : " border border-searchBgColor"
      } py-5 rounded-lg overflow-hidden`}
    >
      <section className="w-full px-3 ">
        {dressInfo?.openCategoryFilter && (
          <article className="flex items-center justify-end mb-4">
            <button
              onClick={() =>
                setDressInfo({
                  ...dressInfo,
                  openCategoryFilter: false,
                })
              }
              className="w-10 h-10 rounded-lg border border-searchBgColor flex items-center justify-center active:scale-95  active:opacity-70"
            >
              <MenuCloseIcons />
            </button>
          </article>
        )}

        {/* Gender Buttons */}
        <CategoryTopButtons
          dataAction={dataAction}
          setDataAction={setDataAction}
          dataActionDiscount={dataActionDiscount}
          setDataActionDiscount={setDataActionDiscount}
          handleGetId={handleGetId}
          handleGetDiscountId={handleGetDiscountId}
        />

        {/* Categories */}
        <CategoriesFilter
          state={state}
          setState={setState}
          handleGetCategoryId={handleGetCategoryId}
        />

        {/* Prizes */}
        <BudgetFilter
          state={state}
          setState={setState}
          handleGetBudgetPrize={handleGetBudgetPrize}
          handleGetBudgetPrizeTwo={handleGetBudgetPrizeTwo}
          values={values}
          setValues={setValues}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        {/* Colors */}
        <section className="w-full h-fit mt-[50px] ">
          {/* Controls */}
          <article
            className="openBrands w-full flex justify-between items-center"
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() =>
                setState({ ...state, ColorsShow: !state.ColorsShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Цвет
              </p>
              <p
                className={`${
                  state?.ColorsShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>
          {/* Colors */}
          <article
            className={`w-full px-[2px] flex justify-between flex-wrap items-center   bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-300 gap-x-[10px] gap-y-[10px] border-0  overflow-hidden  ${
              state?.ColorsShow
                ? "duration-300 h-0"
                : "duration-300 h-[80px] mt-5"
            } duration-300 `}
          >
            {product?.changeColor.map((item) => {
              return (
                <figure
                  key={item?.id}
                  onClick={() => HandleColorCheck(item?.id)}
                  className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 ${item?.colors} cursor-pointer  border border-solid border-borderColorCard`}
                  htmlFor="Color1"
                >
                  {item?.action ? (
                    <p className="w-[14px]">
                      <InputCheckedTrueIcons colors={"#fff"} />
                    </p>
                  ) : null}
                </figure>
              );
            })}
          </article>
        </section>

        {/* Customer reviews */}
        <section className="w-full h-fit mt-[50px] ">
          <article
            className="w-full flex justify-between items-center"
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() =>
                setState({
                  ...state,
                  customerRreviews: !state.customerRreviews,
                })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Отзывы клиентов
              </p>
              <p
                className={`${
                  state?.customerRreviews ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>
          <article
            className={`flex flex-col   gap-y-3 overflow-hidden ${
              state?.customerRreviews
                ? "duration-300 h-0"
                : "duration-300 h-[160px] mt-5"
            } duration-300`}
          >
            {/* Field */}

            <div className="flex items-center cursor-pointer select-none  ">
              <div
                className={`w-[22px] h-[22px] p-1 flex items-center  mr-[10px] rounded border border-borderColorCard`}
              >
                {state?.checkBrand && (
                  <span className="text-white">
                    <BsCheckLg size={12} />
                  </span>
                )}
              </div>
              <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
              </div>
            </div>
            <div className="flex items-center cursor-pointer select-none  ">
              <div
                className={`w-[22px] h-[22px] p-1 flex items-center  mr-[10px] rounded border border-borderColorCard`}
              >
                {state?.checkBrand && (
                  <span className="text-white">
                    <BsCheckLg size={12} />
                  </span>
                )}
              </div>
              <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
              </div>
            </div>
            <div className="flex items-center cursor-pointer select-none  ">
              <div
                className={`w-[22px] h-[22px] p-1 flex items-center  mr-[10px] rounded border border-borderColorCard`}
              >
                {state?.checkBrand && (
                  <span className="text-white">
                    <BsCheckLg size={12} />
                  </span>
                )}
              </div>
              <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                <StarIcons />
                <StarIcons />
                <StarIcons />
              </div>
            </div>
            <div className="flex items-center cursor-pointer select-none  ">
              <div
                className={`w-[22px] h-[22px] p-1 flex items-center  mr-[10px] rounded border border-borderColorCard`}
              >
                {state?.checkBrand && (
                  <span className="text-white">
                    <BsCheckLg size={12} />
                  </span>
                )}
              </div>
              <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                <StarIcons />
                <StarIcons />
              </div>
            </div>
            <div className="flex items-center cursor-pointer select-none ">
              <div
                className={`w-[22px] h-[22px] p-1 flex items-center  mr-[10px] rounded border border-borderColorCard`}
              >
                {state?.checkBrand && (
                  <span className="text-white">
                    <BsCheckLg size={12} />
                  </span>
                )}
              </div>
              <div className="flex items-center not-italic mr-2 font-AeonikProRegular  text-lg leading-4 text-black">
                <StarIcons />
              </div>
            </div>
          </article>
        </section>

        {/* Размер одежды */}
        <section className="w-full h-fit mt-[50px] ">
          <article
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() =>
                setState({ ...state, ClothingShow: !state.ClothingShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <figcaption className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Размер одежды
              </figcaption>
              <p
                className={`${
                  state?.ClothingShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>
          <article
            className={` overflow-hidden ${
              state?.ClothingShow
                ? "duration-300 h-0"
                : "duration-300 h-[90px] mt-5"
            } duration-300`}
          >
            <figure className="w-full flex flex-wrap justify-between  gap-y-2">
              {product.clothingSize.map((item) => (
                <button
                  key={item.id}
                  className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                  {item.size}
                </button>
              ))}
            </figure>
          </article>
        </section>

        {/* Размер обуви */}
        <section className="w-full h-fit mt-[50px] ">
          <article
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() =>
                setState({ ...state, ShoesShow: !state.ShoesShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Размер обуви
              </p>
              <p
                className={`${
                  state?.ShoesShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>
          <article
            className={` overflow-hidden ${
              state?.ShoesShow
                ? "duration-300 h-0"
                : "duration-300 h-[90px] mt-5"
            } duration-300`}
          >
            <figure className="w-full flex flex-wrap justify-between gap-y-2">
              {product.shoeSize.map((item) => (
                <button
                  key={item.id}
                  className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                  {item.size}
                </button>
              ))}
            </figure>
          </article>
        </section>
      </section>
      <section className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70">
          Сбросить фильтр
        </button>
      </section>
    </main>
  );
};
export { CategoryForBrand };
