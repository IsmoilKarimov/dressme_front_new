import { NavLink } from "react-router-dom";

import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  AutummMale,
  SpringMale,
  SummerMale,
  WinterMale,
} from "../../../../AssetsMain";
import {
  ArrowTopIcons,
  HeartIcons,
  HomeIcons,
  ItailIcons,
} from "../../../../AssetsMain/icons";
const FavoutireBreadCrumbs = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    textToColor: false,
  });

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = "hover:text-borderSpring ";
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = "hover:text-borderSummer";
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = "hover:text-borderAutumm ";
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = "hover:text-borderWinter ";
    genderStyle =
      "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter";
  }

  const personItems = [
    { id: 1111, man: SpringMale },
    { id: 2222, man: SummerMale },
    { id: 3333, man: AutummMale },
    { id: 4444, man: WinterMale },
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
    <div className="flex flex-col min-h-[44px]  justify-center items-center my-3 ">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <div className="flex items-center ">
          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            {/* <div className="h-5 w-5 flex justify-center items-center">
              <span>
                <HomeIcons colors={"#000"} />
              </span>
            </div> */}

            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
            >
              Главная
            </NavLink>
            <span>
              <ItailIcons colors={"#000"} />
            </span>
          </div>
          <div className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            {/* <div className="h-5 w-5 flex justify-center items-center">
              <span>
                <HeartIcons colors={"#000"} />
              </span>
            </div> */}

            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px]  not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]"
            >
              Избранное
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[fit] flex items-center ">
            <div className="flex items-center w-fit mr-4">
              <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
                Сортировка:
              </span>
            </div>
            <div>
              <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
                <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                  Последние добавленные{" "}
                </span>
                <span className="rotate-[180deg]">
                  <ArrowTopIcons colors={"#000"} />
                </span>
              </button>
            </div>
          </div>
          <div className="border border-searchBgColor w-[1px] h-[20px] mx-3"></div>
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
    </div>
  );
};

export default FavoutireBreadCrumbs;
