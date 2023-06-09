import { useContext, useState } from "react";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import {
  AutummMale,
  SpringMale,
  SummerMale,
  WinterMale,
} from "../../../../../AssetsMain";
import { ItailIcons } from "../../../../../AssetsMain/icons";

const ShoppingStoreOfficialBreadCrumb = ({ name }) => {
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
    <main className="flex flex-col min-h-[44px]  justify-center items-center md:my-3">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <action className="w-[100%] md:w-fit flex items-center py-1 px-4 md:px-0 ">
          <div className="h-10 w-[100%] md:w-fit flex items-center overflow-x-auto  ">
            <action className="not-italic font-AeonikProRegular  flex items-center flex-nowrap text-sm leading-4 text-black tracking-[1%] mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center whitespace-nowrap cursor-pointer  pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
              >
                Главная
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </action>
            <action className="not-italic font-AeonikProRegular  flex  	 items-center  text-sm leading-4 text-black tracking-[1%]">
              <NavLink className="flex	whitespace-nowrap  items-center cursor-pointer  px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Магазины{" "}
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </action>
            <action className="not-italic font-AeonikProRegular  flex items-center text-sm leading-4 text-black tracking-[1%]">
              <span className="not-italic font-AeonikProRegular flex items-center text-sm leading-4 text-black tracking-[1%]">
                <NavLink className="flex items-center whitespace-nowrap  cursor-pointer px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]">
                  {name}{" "}
                </NavLink>
              </span>
            </action>
          </div>
        </action>
        <action className="hidden md:block">
          <Popover
            open={state?.openwear}
            onOpenChange={handleOpenChangeWear}
            className="w-[168px] px-[17px] h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
            trigger="click"
            options={["Hide"]}
            placement="bottom"
            content={contentWear}
          >
            <figure>
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
            </figure>
            <p className="not-italic font-AeonikProMedium text-center  text-sm leading-4 text-black">
              Абдулазиз{" "}
            </p>
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
        </action>
      </section>
    </main>
  );
};
export default ShoppingStoreOfficialBreadCrumb;
