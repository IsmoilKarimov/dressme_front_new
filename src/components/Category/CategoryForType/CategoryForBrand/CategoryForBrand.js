import React, { useContext, useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import ReactSlider from "react-slider";

import {
  StarIcons,
  ArrowTopIcons,
  InputCheckedTrueIcons,
  SearchIcons,
  MenuCloseIcons,
} from "../../../../assets/icons";
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

  const HandleBrandFilter = () => {};

  const HandleCheckStatus = () => {};

  const HandleColorCheck = () => {};

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
        <article className="w-full flex flex-wrap gap-x-[4px] gap-y-[8px]">
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
        </article>
        {/* Availability */}
        <section className="w-full h-fit mt-[50px] ">
          <article
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() => setState({ ...state, catolog: !state.catolog })}
              className="flex items-center cursor-pointer select-none"
            >
              <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Категории
              </p>
              <p
                className={`${
                  state?.catolog ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>

          {/* Field */}
          <article
            className={`w-full overflow-hidden ${
              state?.catolog
                ? "duration-300 h-0"
                : "duration-300 h-[300px] mt-5 "
            } duration-300 flex flex-col gap-y-4`}
          >
            {product?.Catolog.map((data) => {
              return (
                <figure
                  key={data?.id}
                  className="w-full h-[44px] rounded-lg justify-center bg-bgCategory hover:text-white  focus:bg-fullBlue hover:bg-fullBlue focus:text-white flex items-center  cursor-pointer select-none  text-black"
                  onClick={HandleCheckStatus(data?.id)}
                >
                  <p className="not-italic font-AeonikProMedium tracking-[1%]   text-sm leading-4">
                    {data?.name}
                  </p>
                </figure>
              );
            })}
          </article>
        </section>

        {/* Prizes */}
        <section className=" mt-[50px]">
          <article
            className="w-full flex justify-between items-center "
            onClick={(event) => {
              event.target.classList.toggle("open");
            }}
          >
            <figure
              onClick={() =>
                setState({ ...state, budgetShow: !state.budgetShow })
              }
              className="flex items-center cursor-pointer select-none"
            >
              <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
                Budget
              </p>
              <p
                className={`${
                  state?.budgetShow ? "rotate-[180deg]" : ""
                } duration-300 ml-1`}
              >
                <ArrowTopIcons colors={"#000"} />
              </p>
            </figure>
          </article>
          <article
            className={`  border-1 border-green-600  overflow-hidden  ${
              state?.budgetShow ? "duration-300 h-0" : "duration-300 h-fit mt-5"
            } duration-300`}
          >
            <div className="  flex flex-col rounded-lg  w-full pb-5 pt-10">
              <div className="flex flex-wrap justify-between items-center mb-6 w-full px-2">
                <div className="flex mb-4">
                  <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
                    от
                  </span>
                  <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                    <input
                      className="w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                      value={state?.minPrice}
                      onChange={(e) =>
                        setState({ ...state, minPrice: e.target.value })
                      }
                    />{" "}
                    sum
                  </span>
                </div>
                <div className="flex ">
                  <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                    до
                  </span>
                  <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                    <input
                      className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                      value={state?.maxPrice}
                      onChange={(e) =>
                        setState({ ...state, maxPrice: e.target.value })
                      }
                    />
                    sum
                  </span>
                </div>
              </div>
              <div className="relative z-50 mb-[6px] w-full  marketFilter">
                {" "}
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb1"
                  trackClassName="example-track1"
                  defaultValue={[10, 90]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  // renderThumb={() => <div>1</div>}
                  pearling
                  minDistance={10}
                />
              </div>
              <div className="flex items-center justify-end mt-6">
                <span
                  onClick={() => setState({ ...state, openPrice: false })}
                  className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue"
                >
                  Готово
                </span>
              </div>
            </div>
          </article>
        </section>

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
