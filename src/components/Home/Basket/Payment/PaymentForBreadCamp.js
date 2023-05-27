import React, { useContext, useState } from "react";
import {
  AutummFemale,
  AutummMale,
  BreadcrumbPayme,
  SpringFemale,
  SpringMale,
  SummerFemale,
  SummerMale,
  WinterFemale,
  WinterMale,
  backIcon,
  bucket,
  clothing,
  homeBreadcrumb,
  iIcons,
  passwordCheck,
  plusIcon,
  shopBreadcrumb,
} from "../../../../assets/imgs";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";

const PaymentForBreadCamp = () => {
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
  return (
    <div className="flex flex-col min-h-[44px]  justify-center items-center m-0 py-3 box-border border-b border-searchBgColor">
      <div className="max-w-[1280px] w-[100%] flex justify-between items-center m-auto">
        <div className="flex items-center ">
          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <div className="h-5 w-5 flex justify-center items-center">
              {" "}
              <img src={homeBreadcrumb} alt="" />
            </div>

            <NavLink className="flex items-center cursor-pointer pt-[4px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
              Главная
            </NavLink>
            <span>
              <img className="" src={iIcons} alt="" />
            </span>
          </div>
          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <div className="h-5 w-5 flex justify-center items-center">
              <img src={shopBreadcrumb} alt="" />
            </div>{" "}
            <NavLink
              to="/basket-check-out"
              className="flex items-center cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
            >
              Корзинка{" "}
            </NavLink>
            <span>
              <img className="" src={iIcons} alt="" />
            </span>
          </div>
          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <div className="h-5 w-5 flex justify-center items-center">
              {" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99996 18.3327C14.5833 18.3327 18.3333 14.5827 18.3333 9.99935C18.3333 5.41602 14.5833 1.66602 9.99996 1.66602C5.41663 1.66602 1.66663 5.41602 1.66663 9.99935C1.66663 14.5827 5.41663 18.3327 9.99996 18.3327Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#000"
                  // fill="#000"
                />
                <path
                  d="M6.45837 10.0009L8.81671 12.3592L13.5417 7.64258"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#000"
                  // fill="#000"
                />
              </svg>{" "}
            </div>{" "}
            <NavLink
              to="/basket-check-out"
              className="flex items-center cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
            >
              Оформление заказа{" "}
            </NavLink>
            <span>
              <img className="" src={iIcons} alt="" />
            </span>
          </div>

          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <div className="h-5 w-5 flex justify-center items-center">
              {" "}
              <img src={BreadcrumbPayme} alt="" />
            </div>{" "}
            <NavLink className="flex items-center cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]">
              Оплата
            </NavLink>
          </div>
        </div>
        <div>
          <Popover
            open={state?.openwear}
            onOpenChange={handleOpenChangeWear}
            className="w-[168px] px-[17px] h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
            trigger="click"
            options={["Hide"]}
            placement="bottom"
            content={contentWear}
          >
            <span>
              {personItems
                ?.filter((value) => value.id === dressInfo?.type)
                .map((data) => {
                  return (
                    <img
                      key={data.id}
                      className="mr-3"
                      src={data?.man}
                      alt="female"
                    />
                  );
                })}
            </span>
            <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
              Абдулазиз{" "}
            </span>
            <span>
              <BiChevronDown
                size={22}
                style={{ color: "#000" }}
                className={`${
                  state?.openwear ? "rotate-[-180deg]" : ""
                } duration-200`}
              />{" "}
            </span>
          </Popover>
        </div>
      </div>
    </div>
  );
};
export { PaymentForBreadCamp };
