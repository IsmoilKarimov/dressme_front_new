import { NavLink } from "react-router-dom";

import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { useContext, useState } from "react";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { ItailIcons } from "../../../../../assets/icons";
import {
  AutummMale,
  SpringMale,
  SummerMale,
  WinterMale,
} from "../../../../../assets";

const ShoppingStoreBreadCrumb = () => {
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

  const handleWearValue = (value) => {
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
    <section className="w-[170px] h-fit m-0 p-0">
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
    </section>
  );

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-start m-auto">
        <article className="flex items-center">
          <article className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
            >
              Главная
            </NavLink>
            <span>
              <ItailIcons colors={"#000"} />
            </span>
          </article>
          <article className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]"
            >
              Магазины
            </NavLink>
          </article>
        </article>

      </section>
    </main>
  );
};

export default ShoppingStoreBreadCrumb;
