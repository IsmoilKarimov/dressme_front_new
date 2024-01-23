import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../../assets/backTop/backTop.svg";
import { BrandBlack } from "../../assets";
import {
  ArrowTopIcons,
  FooterOriginalIcons,
  HouseStatisticIcons,
  MapIcons,
  MarketIcons,
  UploadIcons,
} from "../../assets/icons";

const Footer = () => {
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
          <div className="w-[100%] h-fit ss:p-0 md:p-[30px] md:border md:border-searchBgColor border-solid rounded-lg">
            <section>
              {/* Footer LOGO and Feedback form */}
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
                        <Link to="/stores" className="flex items-center">
                          <MarketIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Магазины
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mr-5">
                        <Link to="/delivery-points" className="flex items-center">
                          <MapIcons colors={"#000"} />
                          <span className="font-AeonikProRegular ml-2">
                            Карта
                          </span>
                        </Link>
                      </li>
                      <li className="ss:mb-1 md:mr-5">
                        <Link to="https://dressme-dashboard-new.vercel.app/login-seller" className="flex items-center">
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
                  to="https://t.me/Dishkan_Kh"
                  target="_blank"
                  className="hidden items-center active:scale-95 bg-bgColor px-4 py-[15px] border border-searchBgColor rounded-lg ml-auto md:flex"
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
            </section>

            <div className="w-full border-b md:hidden ss:block border-gray-200"></div>

            <section className="mt-[30px]">
              {/* footer bottom section */}
              <article className="w-full font-AeonikProMedium">
                <section className="w-full flex items-center justify-between text-[13px]">
                  <article className="w-1/2">
                    Created by Dishkan (September 25th, 2022, 8:16 PM)
                  </article>
                  <article className="w-1/2 flex items-center justify-end">
                    <div className="mr-2 mt-[-4px]">
                      <FooterOriginalIcons />
                    </div>
                    <div>
                      {" "}
                      2022 — {dateObj.getFullYear()}{" "}
                      <span className="md:ml-2">Все права защищены.</span>
                    </div>
                  </article>
                </section>
              </article>
            </section>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Footer;
