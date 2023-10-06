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
} from "../../../../assets";
import {
  ArrowTopIcons,
  ItailIcons,
  SortIcons,
} from "../../../../assets/icons";
const FavoutireBreadCrumbs = () => {
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
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3 ">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto px-4 md:px-0">
        <div className="w-full flex justify-between flex-col md:flex-row ">
          <section className="flex items-center mb-5 md:mb-0">
            <article className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center cursor-pointer pr-[10px] not-italic font-AeonikProRegular md:font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
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
                className="flex items-center cursor-pointer not-italic font-AeonikProRegular md:font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]"
              >
                Избранное
              </NavLink>
            </article>
            <article className="block md:hidden ml-auto">
              <span className="text-sm font-AeonikProMedium">82 товара</span>
            </article>
          </section>

          <section className="flex items-center">
            <article className="w-[fit] flex items-center">
              <article className="hidden items-center w-fit mr-4 md:flex">
                <p className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
                  Сортировка:
                </p>
              </article>
              <article className="hidden md:flex">
                <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
                  <p className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                    Последние добавленные{" "}
                  </p>
                  <span className="rotate-[180deg]">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </button>
              </article>
            </article>
            <article className="w-full block md:hidden">
              <p className="font-normal text-sm leading-4tractking-[1%]">
                Сортировка:
              </p>
              <button className="w-full h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group mt-[10px] ">
                <span className="flex items-center font-AeonikProMedium text-sm text-black">
                  <SortIcons />
                  <p className="ml-3">Последние добавленные</p>
                </span>
                <span className="rotate-[180deg]">
                  <ArrowTopIcons colors={"#000"} />
                </span>
              </button>
            </article>

            <article className="border border-searchBgColor w-[1px] h-[20px] mx-3 hidden md:block"></article>
            <article className="hidden md:flex">
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
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FavoutireBreadCrumbs;
