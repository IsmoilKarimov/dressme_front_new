import React, { useContext, useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import ReactSlider from "react-slider";

import {
  StarIcons,
  ArrowTopIcons,
  InputCheckedTrueIcons,
  SearchIcons,
  MenuCloseIcons,
} from "../../../../AssetsMain/icons";
import { dressMainData } from "../../../../ContextHook/ContextMenu";

const CategoryForBrand = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

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

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [product] = useState({
    Catolog: [
      { id: 1, action: false, name: "Головной убор" },
      { id: 2, action: false, name: "Верхняя одежда" },
      { id: 3, action: false, name: "Нижняя одежда" },
      { id: 4, action: false, name: "Обувь" },
      { id: 5, action: false, name: "Аксессуары" },
    ],
    brandWear: [
      { id: 1, action: true, name: "Adidas", count: 125 },
      { id: 2, action: false, name: "Reebok", count: 125 },
      { id: 3, action: false, name: "Nike", count: 125 },
      { id: 4, action: false, name: "Puma", count: 125 },
      { id: 5, action: false, name: "ECCO", count: 125 },
      { id: 6, action: false, name: "New Balance", count: 125 },
      { id: 7, action: false, name: " Asics", count: 125 },
      { id: 8, action: false, name: "Columbian", count: 125 },
      { id: 9, action: false, name: "Under Armour", count: 125 },
    ],
    prizes: [
      { id: 1, action: false, prize: "До 100 000" },
      { id: 2, action: false, prize: "До 500 000" },
      { id: 3, action: false, prize: "До 1 000 000" },
      { id: 4, action: false, prize: "Выше" },
    ],
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
    availability: [
      { id: 1, action: false, title: "На складе доступен", count: 892 },
      { id: 2, action: false, title: "Доставка доступна", count: 641 },
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
  const Min = "100";
  const Max = "12 000";
  const [values] = useState([Min, Max]);

  const [state, setState] = useState({
    brandShow: screenSize.width <= 768 ? true : false,
    budgetShow: screenSize.width <= 768 ? true : false,
    ColorsShow: screenSize.width <= 768 ? true : false,
    ClothingShow: screenSize.width <= 768 ? true : false,
    TrouserShow: screenSize.width <= 768 ? true : false,
    ShoesShow: screenSize.width <= 768 ? true : false,
    customerRreviews: screenSize.width <= 768 ? true : false,
    availability: screenSize.width <= 768 ? true : false,
    catolog: screenSize.width <= 768 ? true : false,
    //--------------
    checkBrand: false,
    checkedPrize: true,
  });

  const HandleBrandFilter = () => {
    
  };

  const HandleCheckStatus = () => {

  };

  const HandleColorCheck = () => {
  
  };

  return (
    <div
      className={`w-full h-fit ${
        dressInfo?.openShopIdFilter
          ? " border-0 "
          : " border border-searchBgColor"
      } py-5 rounded-lg overflow-hidden`}
    >
      <div className="w-full px-3 ">
        {dressInfo?.openCategoryFilter && (
          <div className="flex items-center justify-end mb-4">
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
          </div>
        )}
        <div className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
          <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
            Женщинам
          </button>
          <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
            Мужчинам
          </button>
          <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg">
            Детям
          </button>
          <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center  bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg text-red-600">
            Скидки
          </button>
        </div>
        {/* Availability */}
        <div className="w-full h-fit mt-[50px] ">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() => setState({ ...state, catolog: !state.catolog })}
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Каталоги
              </span>
              <span
                className={`${
                  state?.catolog ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
          </div>

          {/* Field */}
          <div
            className={`w-full overflow-hidden ${
              state?.catolog
                ? "duration-300 h-0"
                : "duration-300 h-[300px] mt-5 "
            } duration-300 flex flex-col gap-y-4`}
          >
            {product?.Catolog.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-full h-[44px] rounded-lg justify-center bg-bgCategory hover:text-white  focus:bg-fullBlue hover:bg-fullBlue focus:text-white flex items-center  cursor-pointer select-none  text-black"
                  onClick={HandleCheckStatus(data?.id)}
                >
                  <span className="not-italic font-AeonikProMedium tracking-[1%]   text-sm leading-4">
                    {data?.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Brands filter */}
        <div className="w-full h-fit mt-[50px]  ">
          {/* Controls */}
          <div
            className="openBrands w-full flex justify-between items-center"
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, brandShow: !state.brandShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Бренды
              </span>
              <span
                className={`${
                  state?.brandShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-fullBlue cursor-pointer">
              Очистить все
            </span>
          </div>
          <div
            className={` openedBrands border-0  overflow-hidden  ${
              state?.brandShow
                ? "duration-300 h-0"
                : "duration-300 h-[375px] mt-5"
            } duration-300`}
          >
            {/* Search */}
            <div className="h-[44px] w-full flex items-center justify-between px-4 border border-searchBgColor rounded-lg ">
              <input
                className="w-[85%] h-full text-sm font-AeonikProRegular"
                type="text"
                name="search"
                placeholder="Поиск бренда"
                autoComplete="off"
              />
              <span>
                <SearchIcons />
              </span>
            </div>

            {/* Field */}
            <div
              className={`h-[300px] w-full mt-7 overflow-auto  categoryScroll `}
            >
              {product?.brandWear.map((data) => {
                return (
                  <div
                    key={data?.id}
                    onClick={() => HandleBrandFilter(data?.id)}
                    className="flex items-center cursor-pointer select-none mb-4 "
                  >
                    <div
                      className={`w-[22px] h-[22px] p-1 flex items-center ${
                        data?.action ? "bg-fullBlue " : "bg-white"
                      }  mr-[10px] rounded border border-borderColorCard`}
                    >
                      <span className="text-white">
                        <BsCheckLg size={12} />
                      </span>
                    </div>
                    <div className="flex items-center not-italic   font-AeonikProRegular text-sm leading-4 text-black">
                      {data?.name}
                      <span className=" not-italic ml-2 font-AeonikProRegular text-sm leading-4 text-setTexOpacity">
                        ({data?.count})
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prizes */}
        <div className=" mt-[50px]">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, budgetShow: !state.budgetShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Budget
              </span>
              <span
                className={`${
                  state?.budgetShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
          </div>
          <div
            className={`  border-1 border-green-600  overflow-hidden  ${
              state?.budgetShow
                ? "duration-300 h-0"
                : "duration-300 h-[170px] mt-5"
            } duration-300`}
          >
            <div className="w-full flex flex-wrap gap-x-1 gap-y-2">
              {product.prizes.map((item) => (
                <button
                  key={item.id}
                  className="h-11 w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory transition ease-linear duration-200 rounded-lg focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white"
                >
                  {item.prize}
                </button>
              ))}
            </div>
            <div className="w-full h-12 bg-bgCategory  mt-4 pb-1 px-[2px]">
              <div className=" w-full flex justify-center items-center gap-x-1">
                <div className=" h-fit  not-italic font-AeonikProMedium text-base leading-4 text-center text-fullBlue tracking-[1%]">
                  {values[0]}
                </div>{" "}
                <div className=" h-fit pb-2">-</div>
                <div className=" h-fit not-italic font-AeonikProMedium text-base leading-4 text-center text-fullBlue tracking-[1%]">
                  {values[1]}
                </div>
              </div>{" "}
              <div className="relative z-10">
                {" "}
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  pearling
                  minDistance={10}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="w-full h-fit mt-[50px] ">
          {/* Controls */}
          <div
            className="openBrands w-full flex justify-between items-center"
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, ColorsShow: !state.ColorsShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Цвет
              </span>
              <span
                className={`${
                  state?.ColorsShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
            <span className="not-italic font-AeonikProMedium text-sm leading-4 text-fullBlue cursor-pointer">
              Очистить все
            </span>
          </div>
          {/* Colors */}
          <div
            className={`w-full px-[2px] flex justify-between flex-wrap items-center   bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-300 gap-x-[10px] gap-y-[10px] border-0  overflow-hidden  ${
              state?.ColorsShow
                ? "duration-300 h-0"
                : "duration-300 h-[80px] mt-5"
            } duration-300 `}
          >
            {product?.changeColor.map((item) => {
              return (
                <div
                  key={item?.id}
                  onClick={() => HandleColorCheck(item?.id)}
                  className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 w-8 h-8 ${item?.colors} cursor-pointer  border border-solid border-borderColorCard`}
                  htmlFor="Color1"
                >
                  {item?.action ? (
                    <span className="w-[14px]">
                      <InputCheckedTrueIcons colors={"#fff"} />
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Availability */}
        <div className="w-full h-fit mt-[50px] ">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, availability: !state.availability })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Доступность
              </span>
              <span
                className={`${
                  state?.availability ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
          </div>

          {/* Field */}
          <div
            className={`w-full overflow-hidden ${
              state?.availability
                ? "duration-300 h-0"
                : "duration-300 h-[70px] mt-5"
            } duration-300 flex flex-col gap-y-4`}
          >
            {product?.availability.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="flex items-center  cursor-pointer select-none "
                  onClick={HandleCheckStatus(data?.id)}
                >
                  <div
                    className={`w-[22px] h-[22px] p-1 flex items-center ${
                      state?.checkBrand ? "bg-fullBlue " : "bg-white"
                    }  mr-[10px] rounded border border-borderColorCard`}
                  >
                    {state?.checkBrand && (
                      <span className="text-white">
                        <BsCheckLg size={12} />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center not-italic mr-2 font-AeonikProRegular text-sm leading-4 text-black">
                    {data?.title}
                  </div>
                  <div className="flex items-center not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity">
                    ({data?.count})
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer reviews */}
        <div className="w-full h-fit mt-[50px] ">
          <div
            className="w-full flex justify-between items-center"
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({
                  ...state,
                  customerRreviews: !state.customerRreviews,
                })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Отзывы клиентов
              </span>
              <span
                className={`${
                  state?.customerRreviews ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
          </div>
          <div
            className={`flex flex-col   gap-y-3 overflow-hidden ${
              state?.customerRreviews
                ? "duration-300 h-0"
                : "duration-300 h-[110px] mt-5"
            } duration-300`}
          >
            {/* Field */}
            {product?.ArrayRating.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="flex items-center cursor-pointer select-none  overflow-auto"
                >
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
                  <div className="flex items-endnot-italic font-AeonikProMedium text-base leading-4 text-black mt-[4px]">
                    {data?.text || null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Размер одежды */}
        <div className="w-full h-fit mt-[50px] ">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, ClothingShow: !state.ClothingShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Размер одежды
              </span>
              <span
                className={`${
                  state?.ClothingShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
              3XL
            </span>
          </div>
          <div
            className={` overflow-hidden ${
              state?.ClothingShow
                ? "duration-300 h-0"
                : "duration-300 h-[90px] mt-5"
            } duration-300`}
          >
            <div className="w-full flex flex-wrap justify-between  gap-y-2">
              {product.clothingSize.map((item) => (
                <button
                  key={item.id}
                  className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Размер брюк */}
        <div className="w-full h-fit  mt-[50px] ">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, TrouserShow: !state.TrouserShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Размер брюк
              </span>
              <span
                className={`${
                  state?.TrouserShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
              2XL
            </span>
          </div>
          <div
            className={` overflow-hidden ${
              state?.TrouserShow
                ? "duration-300 h-0"
                : "duration-300 h-[90px] mt-5"
            } duration-300`}
          >
            <div className="w-full flex flex-wrap justify-between gap-y-2">
              {product.pantsSize.map((item) => (
                <button
                  key={item.id}
                  className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Размер обуви */}
        <div className="w-full h-fit mt-[50px] ">
          <div
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <div
              onClick={() =>
                setState({ ...state, ShoesShow: !state.ShoesShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <span className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Размер обуви
              </span>
              <span
                className={`${
                  state?.ShoesShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </span>
            </div>
            <span className="not-italic font-AeonikProMedium text-base leading-4 text-fullBlue cursor-pointer">
              44
            </span>
          </div>
          <div
            className={` overflow-hidden ${
              state?.ShoesShow
                ? "duration-300 h-0"
                : "duration-300 h-[90px] mt-5"
            } duration-300`}
          >
            <div className="w-full flex flex-wrap justify-between gap-y-2">
              {product.shoeSize.map((item) => (
                <button
                  key={item.id}
                  className="h-10 w-[57px] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white transition ease-linear duration-200 rounded-lg"
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 border-t border-searchBgColor py-5 px-3">
        <button className="h-[44px] border w-full flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-white rounded-lg active:scale-95	active:opacity-70">
          Сбросить фильтр
        </button>
      </div>
    </div>
  );
};
export { CategoryForBrand };
