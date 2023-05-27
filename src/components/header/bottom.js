import React, { useContext, useState, useMemo } from "react";
import {
  AutummFemale,
  AutummMale,
  clothing,
  dollarLogo,
  DotIcon,
  InputCheck,
  inputCheckBlack,
  plus,
  SpringFemale,
  SpringMale,
  SummerFemale,
  SummerMale,
  WinterFemale,
  WinterMale,
} from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { BiChevronDown } from "react-icons/bi";
import { Popover } from "antd";

import style from "./bottom.module.css";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    textToColor: false,
  });

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " hover:text-borderSpring ";
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " hover:text-borderSummer";
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " hover:text-borderAutumm ";
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " hover:text-borderWinter ";
    genderStyle =
      "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter";
  }

  const personItems = [
    { id: 1111, man: SpringMale, woman: SpringFemale },
    { id: 2222, man: SummerMale, woman: SummerFemale },
    { id: 3333, man: AutummMale, woman: AutummFemale },
    { id: 4444, man: WinterMale, woman: WinterFemale },
  ];

  // ----------------Wear state management----------------------------

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };
  const [selectWear, setselectWear] = useState("Clothing type");

  const handleWearValue = (value) => {
    setselectWear(value);
    setState({ ...state, openwear: false });
  };

  const wearList = [
    { id: 1, type: "All Clothing types" },
    { id: 2, type: "Headwear" },
    { id: 3, type: "Outwear" },
    { id: 4, type: "Underwear" },
    { id: 5, type: "Legwear" },
    { id: 6, type: "Accessory" },
  ];
  const contentWear = (
    <div className="w-[170px] h-fit m-0 p-0">
      {wearList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleWearValue(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  // ----------------------Price State Management----------------------

  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };
  const [selectPrice, setselectPrice] = useState("Under 100$");
  const handlePriceValue = (value) => {
    setselectPrice(value);
    setState({ ...state, openPrice: false });
  };
  const priceList = [
    { id: 1, type: "At all prices" },
    { id: 2, type: "More than 500 $" },
    { id: 3, type: "Under 500$" },
    { id: 4, type: "Under 200$" },
    { id: 5, type: "Under 100$" },
    { id: 6, type: "Under 50$" },
  ];
  const contentPrice = (
    <div className="w-[170px] h-fit m-0 p-0">
      {priceList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handlePriceValue(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dataStyle}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );
  const changeColor = [
    { id: 1, data: 1, icons: InputCheck, action: false, colors: "bg-black" },
    { id: 2, data: 2, icons: InputCheck, action: false, colors: "bg-white" },
    { id: 3, data: 3, icons: InputCheck, action: false, colors: "bg-zinc-500" },
    {
      id: 4,
      data: 4,
      icons: InputCheck,
      action: false,
      colors: "bg-purple-500",
    },
    { id: 5, data: 5, icons: InputCheck, action: false, colors: "bg-sky-600" },
    {
      id: 6,
      data: 6,
      icons: InputCheck,
      action: false,
      colors: "bg-amber-400 ",
    },
    {
      id: 7,
      data: 7,
      icons: InputCheck,
      action: false,
      colors: "bg-green-700 ",
    },
    {
      id: 8,
      data: 8,
      icons: InputCheck,
      action: false,
      colors: "bg-amber-600 ",
    },
    {
      id: 9,
      data: 9,
      icons: InputCheck,
      action: false,
      colors: "bg-red-700  ",
    },
    {
      id: 10,
      data: 10,
      icons: InputCheck,
      action: false,
      colors: "bg-purple-800 ",
    },
    {
      id: 11,
      data: 11,
      icons: InputCheck,
      action: false,
      colors: "bg-blue-900  ",
    },
    {
      id: 12,
      data: 12,
      icons: InputCheck,
      action: false,
      colors: "bg-yellow-900 ",
    },
  ];
  const [getRadio, setGetRadio] = useState("");
  const colorIdPushContext = (id) => {
    setDressInfo({ ...dressInfo, ClothesBorder: id });
  };

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
      <div className="max-w-[1280px] w-[100%] flex justify-center   items-center m-auto   ">
        <Popover
          open={state?.openwear}
          onOpenChange={handleOpenChangeWear}
          className="w-[190px] px-[17px] h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentWear}
        >
          <span>
            <img src={clothing} alt="clothing" className="" />{" "}
          </span>
          <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
            {selectWear}
          </span>
          <span>
            <BiChevronDown
              size={20}
              style={{ color: "#c2c2c2" }}
              className={`${
                state?.openwear ? "rotate-[-180deg]" : ""
              } duration-200`}
            />{" "}
          </span>
        </Popover>
        <Popover
          open={state?.openPrice}
          onOpenChange={handleOpenChangePrice}
          className="w-[190px]  h-[44px]  rounded-lg bg-btnBgColor  border-searchBgColor border  flex items-center justify-between  cursor-pointer select-none group ml-2"
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentPrice}
        >
          <p className="w-[48px] h-full flex items-center justify-center border-r border-searchBgColor">
            <img src={dollarLogo} alt="dollar full" />{" "}
          </p>
          <p className=" w-[142px] h-full flex justify-between items-center px-3">
            <span className="not-italic font-AeonikProMedium text-center text-sm mt-1 leading-4 text-black ">
              {selectPrice}
            </span>
            <span className="">
              <BiChevronDown
                size={20}
                style={{ color: "#c2c2c2" }}
                className={`${
                  state?.openPrice ? "rotate-[-180deg]" : ""
                } duration-200`}
              />{" "}
            </span>
          </p>
        </Popover>

        <div className="flex items-center w-[536px] justify-start bg-btnBgColor overflow-hidden rounded-lg border-searchBgColor border h-[44px] ml-2">
          <div
            onClick={() =>
              setState({ ...state, textToColor: !state.textToColor })
            }
            className="w-[48px] cursor-pointer border-r border-searchBgColor h-full flex items-center justify-center"
          >
            <div className=" w-fit h-fit flex items-center justify-center relative  select-none ">
              {/* <div className={`w-[8px] h-[20px] flex items-end justify-center  py-[2px] border border-black  rounded-[3px] z-[25] bg-white rounded-b-[5px]`}> */}
              <div className={style.mainOne}>
                <img src={DotIcon} alt="DotIcon" />
              </div>
              {/* <div className={`w-[8px] h-[20px] border left-[-3px] top-[2px] z-[24] bg-white relative border-black rounded-[3px] duration-200  rounded-b-[5px] ${!textToColor ? "rotate-[45deg] " : "left-[-8px] top-[0px] rotate-[0deg]"}`}> */}
              <div className={style.mainTwo}></div>
              {/* <div className={`w-[8px] h-[20px] border relative left-[-10px] top-[6px] z-[23] bg-white border-black rounded-[3px] duration-200  rounded-b-[5px] ${!textToColor ? "rotate-[90deg]" : "left-[-16px] top-[0px] rotate-[0deg]"}`}> */}
              <div
                className={
                  state?.textToColor ? style.MainHtree : style.mainThreerotate
                }
              ></div>
            </div>
          </div>
          <div className="w-[480px] h-full overflow-hidden flex items-center justify-between">
            <div
              className={`${
                state?.textToColor ? "ml-[-500px] " : "ml-[0px] "
              } px-3 w-full duration-500  h-full flex items-center justify-between  `}
            >
              {changeColor?.map((data) => {
                return (
                  <div key={data?.id}>
                    <label
                      key={data?.id}
                      htmlFor={data?.id}
                      onClick={() => colorIdPushContext(data?.id)}
                      // onClick={() => handleGetChecked(data?.id)}
                      className={`rounded-full w-6 h-6 ${
                        data?.colors
                      } cursor-pointer flex items-center justify-center hover:scale-110 duration-300 ${
                        !state?.textToColor && "border"
                      }  border-borderColorCard	`}
                    >
                      {data?.id == getRadio && data?.id == 2 ? (
                        <img
                          className="w-[14px]"
                          src={inputCheckBlack}
                          alt=""
                        />
                      ) : null}

                      {data?.id == getRadio && data?.id !== 2 ? (
                        <img className="w-[14px]" src={InputCheck} alt="" />
                      ) : null}
                    </label>
                    <input
                      type="radio"
                      id={data?.id}
                      name="checkStatus"
                      value={data?.id}
                      onChange={(e) => setGetRadio(e.target.value)}
                      className={"hidden  w-full h-full"}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className={`${
                state?.textToColor ? " mr-0" : " mr-[-500px]"
              } w-full duration-500 px-3 overflow-hidden h-full  flex items-center not-italic font-AeonikProMedium text-sm leading-4 text-center text-black  tracking-[1%] `}
            >
              Не давай своей гардеробной шкафной жизни стать скучной.
            </div>
          </div>
        </div>
        <div className="line h-6 border-r-[1px] text-textColor mx-3"></div>
        {personItems
          ?.filter((value) => value.id === dressInfo?.type)
          .map((data) => {
            return (
              <div key={data?.id} className="w-fit flex items-center ">
                <button
                  className={`mr-1 ${genderStyle}  w-[136px] h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}
                >
                  <img className="mr-3" src={data?.woman} alt="female" />
                  <span className="mt-1 font-AeonikProMedium">Женщинам</span>
                </button>
                <button
                  className={`  ${genderStyle} w-[136px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border border-searchBgColor mr-2 rounded-lg`}
                >
                  <img className="mr-3" src={data?.man} alt="male" />{" "}
                  <span className="mt-1 font-AeonikProMedium">Мужчинам</span>
                </button>
              </div>
            );
          })}
        <Link
          to="/sign_in"
          className="bg-btnBgColor font-AeonikProMedium w-[44px] h-[44px] flex items-center justify-center border border-searchBgColor rounded-lg "
        >
          <img src={plus} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default BottomHeader;
