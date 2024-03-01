import React from "react";
import { NavLink } from "react-router-dom";
import { ItailIcons } from "../../../../../assets/icons";
import Breadcrumbs from "../../../../Breadcrumbs/Breadcrumbs";

const SingleProductTop = ({data}) => {
  return (
    <main className="flex flex-col md:min-h-[44px] justify-center items-center m-0 md:py-3 box-border border-b border-searchBgColor">
      <section className="max-w-[1280px] h-full w-[100%] flex items-center justify-between m-auto">
      <Breadcrumbs />
        {/* <nav className="w-[100%] md:w-fit flex items-center p-1">
          <ul className="h-10 w-[100%] md:w-fit flex items-center overflow-auto HorizantalScroll">
            <li className="not-italic font-AeonikProRegular flex items-center flex-nowrap text-black tracking-[1%] mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center whitespace-nowrap cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm text-black tracking-[1%]"
              >
                Главная
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </li>
            <li className="not-italic font-AeonikProRegular flex items-center text-black tracking-[1%]">
              <NavLink className="flex items-center whitespace-nowrap pt-[4px] px-[10px] not-italic font-AeonikProMedium text-sm text-setTexOpacity tracking-[1%]">
                {data?.product?.name_ru}
              </NavLink>
            </li>
          </ul>
        </nav> */}

        <nav className="hidden md:flex"></nav>
      </section>
    </main>
  );
};
export { SingleProductTop };
