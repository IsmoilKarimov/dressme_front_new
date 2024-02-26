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
      <article>
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
      <section className="hidden md:flex flex-col h-fit justify-center items-center m-0 p-0 ss:px-4 md:px-0 box-border border-t border-searchBgColor md:mt-[60px] my-[40px] md:mb-[60px] bg-btnBgColor md:bg-white md:border-t-0">
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
              </article>
            </section>

            <section className="mt-[10px]">
              {/* footer bottom section */}
              <article className="w-full font-AeonikProMedium">
                <section className="w-full flex-col md:flex-row flex items-end justify-between text-[13px]">
                  <div className="w-full md:w-fit text-center md:text-start my-3 md:mb-0">
                    Created by Dishkan (September 25, 2022, 8:16 PM)
                  </div>
                  {/* --------------------- Menu ------------------- */}
                  <div className="w-full md:w-fit hidden md:flex items-center flex-col">
                    <h4 className="font-AeonikProMedium w-full text-center cursor-pointer text-base ss:mb-2 md:mb-[10px]">
                      Меню
                    </h4>
                    <ul className="flex flex-row text-sm">
                      <article className="flex flex-row basis-1/3 gap-x-4 md:gap-x-0">
                        <li className="ss:mb-1 md:mb-0 md:mr-5">
                          <Link to="/shops" className="flex items-center">
                            <MarketIcons colors={"#000"} />
                            <span className="font-AeonikProRegular ml-2">
                              Магазины
                            </span>
                          </Link>
                        </li>
                        <li className="ss:mb-1 md:mb-0 md:mr-5">
                          <Link to="/locations" className="flex items-center">
                            <MapIcons colors={"#000"} />
                            <span className="font-AeonikProRegular ml-2">
                              Карта
                            </span>
                          </Link>
                        </li>
                        <li className="ss:mb-1 md:mb-0">
                          <Link
                            to="https://dressme-dashboard-new.vercel.app/login-seller"
                            className="flex items-center"
                          >
                            <HouseStatisticIcons colors={"#000"} />
                            <span className="font-AeonikProRegular ml-2">
                              Бизнес
                            </span>
                          </Link>
                        </li>
                      </article>
                    </ul>
                  </div>
                  <article className="w-full md:w-fit flex items-center justify-center md:justify-end">
                    {dateObj.getFullYear()}
                    <span className="ml-1">
                      <FooterOriginalIcons />
                    </span>
                    <span className="md:ml-3">Все права защищены.</span>
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
