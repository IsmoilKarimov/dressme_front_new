import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { ItailIcons } from "../../../../../AssetsMain/icons";
import {
  AutummMale,
  SpringMale,
  SummerMale,
  WinterMale,
} from "../../../../../AssetsMain";

const SingleProductTop = () => {
  const [dressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    openwear: false,
  });

  const personItems = [
    { id: 1111, man: SpringMale },
    { id: 2222, man: SummerMale },
    { id: 3333, man: AutummMale },
    { id: 4444, man: WinterMale },
  ];

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };

  const handleWearValue = () => {
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
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  return (
    <main className="flex flex-col md:min-h-[44px] justify-center items-center m-0 py-3 box-border border-b border-searchBgColor">
      <section className="max-w-[1280px] h-full w-[100%] flex items-center justify-between m-auto">
        <nav className="w-[100%] md:w-fit flex items-center p-1">
          <ul className="h-10 w-[100%] md:w-fit flex items-center overflow-x-auto">
            <li className="not-italic font-AeonikProRegular flex items-center flex-nowrap text-sm leading-4 text-black tracking-[1%] mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center whitespace-nowrap cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
              >
                Главная
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex  	 items-center  text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex 	whitespace-nowrap  items-center cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Мужская одежда
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex flex-row whitespace-nowrap items-center cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Все категории
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center   text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex items-center whitespace-nowrap cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Спортивное
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center   text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex items-center whitespace-nowrap  cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 tracking-[1%]">
                Кроссовки
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center   text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex items-center whitespace-nowrap cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Nike
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center   text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex items-center whitespace-nowrap  cursor-pointer mt-[6px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]">
                Nike RUN Sneakers (Sport Wears)
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="hidden md:flex">
          <Popover
            open={state?.openwear}
            onOpenChange={handleOpenChangeWear}
            className="w-[168px] px-[17px] h-[44px] rounded-lg bg-btnBgColor border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
            trigger="click"
            options={["Hide"]}
            placement="bottom"
            content={contentWear}
          >
            <span>
              {personItems
                ?.filter((value) => value.id == dressInfo?.type)
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
            <span className="not-italic font-AeonikProMedium text-center text-sm leading-4 text-black">
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
        </nav>
      </section>
    </main>
  );
};
export { SingleProductTop };
