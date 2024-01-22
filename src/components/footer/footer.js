import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../../assets/backTop/backTop.svg";
import { BrandBlack, EnglishFlag, RussianFlag, UzbekFlag } from "../../assets";
import {
  ArrowTopIcons,
  FooterOriginalIcons,
  HouseStatisticIcons,
  MapIcons,
  MarketIcons,
  UploadIcons,
} from "../../assets/icons";

const Footer = () => {
  const [dressInfo] = useContext(dressMainData);

  // ----------------------Price State Management----------------------
  const [openPriceFooter, setOpenOriceFooter] = useState(false);

  const [selectPriceFooter, setselectPriceFooter] = useState("Under 100$");
  const handlePriceValueFooter = (value) => {
    setselectPriceFooter(value);
    setOpenOriceFooter(false);
  };

  // ----------------------Region State Management----------------------
  const [openRegionFooter, setOpenRegionFooter] = useState(false);

  const handleOpenChangeRegionFooter = (newOpen) => {
    setOpenRegionFooter(newOpen);
  };
  const [selectRegionFooter, setselectRegionFooter] = useState("Tashkent");
  const handleRegionValueFooter = (value) => {
    setselectRegionFooter(value);
    setOpenRegionFooter(false);
  };
  const RegionListFooter = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];
  const contentRegion = (
    <section className="w-[150px] h-fit m-0 p-0">
      {RegionListFooter.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleRegionValueFooter(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer tracking-[1%] font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.ColorSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // ----------------------Region State Management Mobile----------------------
  const [openRegionMobile, setOpenRegionMobile] = useState(false);

  const handleOpenChangeRegionMobile = (newOpen) => {
    setOpenRegionMobile(newOpen);
  };
  const [selectRegionMobile, setselectRegionMobile] = useState("Tashkent");
  const handleRegionValueMobile = (value) => {
    setselectRegionMobile(value);
    setOpenRegionMobile(false);
  };
  const RegionListMobile = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];
  const contentMobile = (
    <section className="w-[150px] h-fit m-0 p-0">
      {RegionListMobile.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleRegionValueMobile(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center  not-italic cursor-pointer tracking-[1%] font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.ColorSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // ----------------------Language State Management----------------------
  const [openLanguageFooter, setOpenLanguageFooter] = useState(false);

  const handleOpenChangeLanguageFooter = (newOpen) => {
    setOpenLanguageFooter(newOpen);
  };
  const [selectLanguageFooter, setselectLanguageFooter] = useState(1);

  const handleLanguageValueFooter = (value) => {
    setselectLanguageFooter(value);
    setOpenLanguageFooter(false);
  };
  const LanguageFooter = [
    { id: 1, type: "Uzbekcha", icons: UzbekFlag },
    { id: 2, type: "Russian", icons: RussianFlag },
    { id: 3, type: "English", icons: EnglishFlag },
  ];
  const contentLanguage = (
    <div className="w-[150px] h-fit m-0 p-0">
      {LanguageFooter.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm hover:bg-bgColor cursor-pointer flex items-center justify-start  ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLanguageValueFooter(data?.id);
            }}
          >
            <span className="mr-1">
              <img src={data?.icons} alt="" />
            </span>
            <span className="not-italic ml-2 font-AeonikProMedium text-sm leading-4 tracking-[1%]">
              {data?.type}
            </span>
          </div>
        );
      })}
    </div>
  );

  // ----------------------Language State Management Mobile----------------------
  const [openLanguageMobile, setOpenLanguageMobile] = useState(false);

  const handleOpenChangeLanguageMobile = (newOpen) => {
    setOpenLanguageMobile(newOpen);
  };
  const [selectLanguageMobile, setselectLanguageMobile] = useState(1);

  const handleLanguageValueMobile = (value) => {
    setselectLanguageMobile(value);
    setOpenLanguageMobile(false);
  };
  const LanguageMobile = [
    { id: 1, type: "Uzbekcha", icons: UzbekFlag },
    { id: 2, type: "Russian", icons: RussianFlag },
    { id: 3, type: "English", icons: EnglishFlag },
  ];
  const contentLanguageMobile = (
    <div className="w-[150px] h-fit m-0 p-0">
      {LanguageMobile.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm hover:bg-bgColor cursor-pointer flex items-center justify-start ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLanguageValueMobile(data?.id);
            }}
          >
            <span className="mr-1">
              <img src={data?.icons} alt="" />
            </span>
            <span
              className={`not-italic font-AeonikProRegular text-sm leading-4 text-black ${dressInfo?.ColorSeason}`}
            >
              {data?.type}
            </span>
          </div>
        );
      })}
    </div>
  );
  // mt-1

  const dateObj = new Date();

  return (
    <footer>
      <section className="flex flex-col h-fit justify-center items-center m-0 p-0 ss:px-4 md:px-0 box-border border-t border-searchBgColor  md:mt-[60px] mb-[40px] md:mb-[60px] bg-btnBgColor md:bg-white md:border-t-0">
        <article className="">
          <ScrollToTop
            smooth
            top="600"
            color="#000"
            component={<MySVG />}
            style={{
              borderRadius: "50%",
              bottom: 70,
              right: 25,
              width: "48px",
              height: "48px",
              border: "1px solid #c1c1c1",
              backgroundColor: "#fafafa",
            }}
            className="bg-bgColor rounded-full mt-[-100px] !z-[11] flex items-center opacity-70 justify-center ss:bottom-[75px] ss:right-[15px] md:bottom-10 md:right-10"
          />
        </article>

        <article className="max-w-[1280px] w-[100%]  flex justify-center items-center m-auto">
          <div className="w-[100%] h-fit ss:p-0 md:p-[30px]  md:border md:border-searchBgColor border-solid rounded-lg">
            <section>
              {/* Footer LOGO and Fedback form */}
              <article className="flex items-center justify-start md:px-0 mt-3 md:mt-0">
                <figure className="w-1/3 h-full flex flex-col justify-start">
                  <Link to="/" className="md:mb-[14px]">
                    <img src={BrandBlack} alt="logo" className="w-fit" />
                  </Link>
                  <figcaption className="text-textColor mb-[18px] text-sm hidden md:flex">
                    Торговая площадка одежды
                  </figcaption>
                </figure>

                {/* Menu */}
                <section className="md:w-1/3 ">
                  <h4 className="font-AeonikProMedium w-fit cursor-pointer text-base ss:mb-2 md:mb-[10px]">
                    Меню
                  </h4>
                  <ul className="flex flex-row text-sm">
                    <article className="flex flex-row basis-1/3">
                      <li className="ss:mb-1 md:mr-5">
                        <Link to="#" className="flex items-center">
                          <MarketIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Магазины
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mr-5">
                        <Link to="#" className="flex items-center">
                          <MapIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Карта
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mr-5">
                        <Link to="#" className="flex items-center">
                          <HouseStatisticIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Бизнес
                          </span>
                        </Link>
                      </li>
                    </article>
                  </ul>
                </section>

                <Link
                  to="#"
                  className="hidden items-center bg-bgColor px-4 py-[15px] border border-searchBgColor rounded-lg ml-auto md:flex"
                >
                  <UploadIcons />
                  <p className="text-base font-AeonikProMedium leading-4 ml-[12.5px] mr-[32.37px]">
                    Есть вопросы?
                  </p>
                  <span className="rotate-90 ">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </Link>

                <Link
                  to="#"
                  className="w-1/3 flex items-center justify-center ml-auto md:hidden"
                >
                  <HouseStatisticIcons colors={"#000"} />
                  <span className="ml-2 font-AeonikProMedium text-sm">
                    Дашборд
                  </span>
                </Link>
              </article>

              {/* Feedback for mobile */}
              <Link
                to="#"
                className="flex justify-center items-center bg-bgColor pl-3 py-[15px] border border-searchBgColor rounded-lg ss:my-[35px] md:my-0 ls:pl-6 md:pl-16 md:mb-0 md:hidden"
              >
                <span>
                  <UploadIcons />
                </span>
                <p className="text-base font-AeonikProMedium leading-4 ml-[12.5px] mr-2 ls:mr-6 md:mr-[32.37px]">
                  Форма для обратной связи
                </p>
                <span className="mr-2 ls:mr-3 md:mr-5 rotate-[90deg]">
                  <ArrowTopIcons colors={"#000"} />
                </span>
              </Link>
            </section>

            <div className="w-full border-b md:hidden ss:block border-gray-200"></div>

            <section className=" ss:mt-[40px] md:mt-[62px]">
              {/* footer bottom section */}
              <section className="w-full flex items-center justify-start">
                <article className="w-full">
                  <section className="w-full flex items-center justify-between text-sm font-AeonikProMedium">
                    <article className="w-1/2 flex items-center justify-start text-[13px] font-AeonikProMedium">
                      Created by Dishkan (September 25th, 2022 8:16 PM)
                    </article>
                    <article className="w-1/2 flex items-center justify-end">
                      <article className="flex items-center ">
                        <span className="mr-2 mt-[-4px]">
                          <FooterOriginalIcons />
                        </span>
                        <span className="text-[13px]">
                          2022 — {dateObj.getFullYear()}.
                        </span>
                      </article>
                      <span className="md:ml-2">Все права защищены.</span>
                    </article>
                  </section>

                  <section className="font-AeonikProMedium text-center mt-3 text-sm block md:hidden">
                    <p>Designed by</p>
                    <Link
                      to="#"
                      className={`${dressInfo?.TextColorSeason} border-b ml-2`}
                    >
                      Prince.UI
                    </Link>
                  </section>
                </article>
              </section>
            </section>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Footer;
