import React, { useState } from "react";
import {
  DownCate,
  InputCheck,
  StarWithColor,
  StarWithoutColor,
  search,
} from "../../../../assets/imgs";
import { BsCheckLg } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ReactSlider from "react-slider";

export default function CategoryForBrand() {
  const [product, setProduct] = useState({
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
  const [values, setValues] = useState([Min, Max]);

  const [state, setState] = useState({
    brandShow: false,
    budgetShow: false,
    ColorsShow: false,
    ClothingShow: false,
    TrouserShow: false,
    ShoesShow: false,
    customerRreviews: false,
    availability: false,
    //--------------
    checkBrand: false,
    checkedPrize: true,
  });

  const [value, SetValue] = useState({ min: 20, max: 150 });

  const HandleBrandFilter = (e) => {
    console.log(e, "e");
    // setProduct((current) => {
    //   return current?.brandWear?.map((value) => {
    //     if (value?.id == e) {
    //       return { ...value, action: !value.action };
    //     } else return value;
    //   });
    // });
  };

  const HandleCheckStatus = (e) => {
    // console.log(e, "id");
    // setProduct((current) => {
    //   return current.brandWear.map((data) => {
    //     if (data?.id == e) {
    //       return { ...data, action: !data.action };
    //     } else return data;
    //   });
    // });
  };

  const HandleColorCheck = (itemId) => {
    // setProduct((current) => {
    //   return current?.map((data) => {
    //     if (data?.id == itemId) {
    //       let newDataColor = data.changeColor.map((e) => {
    //         if (e.id == colorId) {
    //           return { ...e, action: !e.action };
    //         } else return e;
    //       });
    //       return { ...data, changeColor: [...newDataColor] };
    //     } else return data;
    //   });
    // });
  };

  return (
    <div className="w-full h-hull border border-searchBgColor py-5 rounded-lg overflow-hidden ">
      <div className="w-full px-3 ">
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
          <button className="h-[44px] w-[49%] flex items-center justify-center not-italic font-AeonikProMedium text-sm leading-3 text-center text-black bg-bgCategory focus:bg-fullBlue hover:bg-fullBlue focus:text-white hover:text-white rounded-lg text-red-600">
            Скидки
          </button>
        </div>
        {/* Brands filter */}
        <div className="w-full h-fit mt-[40px]  ">
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
              <img
                src={DownCate}
                className={`${
                  state?.brandShow ? "rotate-[180deg]" : ""
                } duration-300 mt-[-2px]`}
                alt=""
              />
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
              <img src={search} className="" />
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
                    <div className="flex items-center not-italic mt-1  font-AeonikProRegular text-sm leading-4 text-black">
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
        <div className=" mt-5">
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
              <img
                src={DownCate}
                className={`${
                  state?.budgetShow ? "rotate-[180deg]" : ""
                } duration-300 mt-[-2px]`}
                alt=""
              />
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
                  // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  // renderThumb={() => <div>1</div>}
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
              <img
                src={DownCate}
                className={`${
                  state?.ColorsShow ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
                    <img className="w-[14px]" src={InputCheck} alt="" />
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
              <img
                src={DownCate}
                className={`${
                  state?.availability ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
              <img
                src={DownCate}
                className={`${
                  state?.customerRreviews ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
                <div className="flex items-center cursor-pointer select-none  overflow-auto">
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
                    <img src={StarWithColor} alt="" />
                    <img src={StarWithColor} alt="" />
                    <img src={StarWithColor} alt="" />
                    <img src={StarWithoutColor} alt="" />
                    <img src={StarWithoutColor} alt="" />
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
              <img
                src={DownCate}
                className={`${
                  state?.ClothingShow ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
              <img
                src={DownCate}
                className={`${
                  state?.TrouserShow ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
              <img
                src={DownCate}
                className={`${
                  state?.ShoesShow ? "rotate-[180deg]" : ""
                } duration-300`}
                alt=""
              />
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
}
