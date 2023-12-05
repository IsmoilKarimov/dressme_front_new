import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { ItailIcons } from "../../../../../assets/icons";
import {
  AutummMale,
  SpringMale,
  SummerMale,
  WinterMale,
} from "../../../../../assets";

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
    { id: 5555, man: WinterMale },
  ];

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };

  const handleWearValue = () => {
    setState({ ...state, openwear: false });
  };

  return (
    <main className="flex flex-col md:min-h-[44px] justify-center items-center m-0 py-3 box-border border-b border-searchBgColor">
      <section className="max-w-[1280px] h-full w-[100%] flex items-center justify-between m-auto">
        <nav className="w-[100%] md:w-fit flex items-center p-1">
          <ul className="h-10 w-[100%] md:w-fit flex items-center overflow-auto HorizantalScroll">
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

        <nav className="hidden md:flex"></nav>
      </section>
    </main>
  );
};
export { SingleProductTop };
