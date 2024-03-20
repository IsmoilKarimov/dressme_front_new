import React, { useCallback, useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import YandexTop from "./YandexTop";
import YandexMedium from "./YandexMedium";
import YandexFilter from "./YandexFilter";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import RegionListYandex from "./RegionListYandex";
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";
import { MenuCloseIcons } from "../../../assets/icons";
import { LanguageDetectorDress } from "../../../language/LanguageItems";

function YandexMapsIndex({ getMapsInfo, getFilterSearchByBrand }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  const [data] = useContext(HomeMainDataContext);
  function getYandexSearchName(childData) {
    getFilterSearchByBrand(childData);
  }
  const [regionsShow, setRegionsShow] = useState(false);
  const toggleRegionsShow = useCallback(() => setRegionsShow(true), []);
  const toggleRegionsHide = useCallback(() => setRegionsShow(false), []);
  const navigate = useNavigate();


  const goCatalogId = (id, nameru, nameuz) => {
    if (languageDetector?.typeLang === 'ru') {
      if (id !== 5) {
        navigate(`/categories/${nameru?.split(' ')?.join('-')?.toLowerCase()}`);
      }
      if (id === 5) {
        navigate(`/categories/${nameru?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
      }
    }
    if (languageDetector?.typeLang === 'uz') {
      if (id !== 5) {
        navigate(`/categories/${nameuz?.split(' ')?.join('-')?.toLowerCase()}`);
      }
      if (id === 5) {
        navigate(`/categories/${nameuz?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
      }
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border ">
      {dressInfo?.openCatologId && (
        <div
          onClick={() => setDressInfo({ ...dressInfo, openCatologId: false })}
          className="fixed inset-0 z-[250] w-[100%] h-[100vh] scroll-m-0"
        ></div>
      )}
      <article
        className={`fixed top-[235px] z-[251] left-[52.9%] right-1/2 overflow-hidden translate-x-[-50%] translate-y-[-50%] inset-0 w-fit h-fit shadow-modalCategoryShadow transform tras ${dressInfo?.openCatologId ? "" : "hidden"
          }`}
      >
        <div className="flex justify-center items-center z-[99999]">
          <div className="w-[675px] flex flex-col shadow-modalCategoryShadow bg-white rounded-lg p-2">
            <button
              className="text-xl place-self-end pr-1 pt-1 mb-2"
              onClick={() =>
                setDressInfo({ ...dressInfo, openCatologId: false })
              }
            >
              <MenuCloseIcons />
            </button>
            <div className="ss:w-fit md:w-[650px] h-[210px] m-0 p-2 pb-4 pt-4">
              <div className="w-full flex items-start flex-wrap gap-y-6">
                {data?.getMainProductCard?.categories?.map((data, i) => {
                  return (
                    <article
                      key={data?.id}
                      onClick={() =>
                        setDressInfo({ ...dressInfo, openCatologId: false })
                      }
                      className="w-1/5 flex items-center justify-center "
                    >
                      <figure
                        onClick={() => goCatalogId(data?.id, languageDetector?.typeLang === 'ru' && data?.name_ru, languageDetector?.typeLang === 'uz' && data?.name_uz)}
                        className="group cursor-pointer"
                      >
                        <div className="group-hover:border-black transition duration-300 w-[120px] h-[120px] border border-categoryModalBorderColor bg-categoryModalBgColor flex items-center justify-center rounded-xl">
                          <img src={data?.url_photo} alt="url_photo" />
                        </div>
                        <figcaption className="group-hover:text-black transition duration-300 text-center mt-2 text-setTexOpacity text-sm">
                          {languageDetector?.typeLang === "ru" && data?.name_ru}
                          {languageDetector?.typeLang === "uz" && data?.name_uz}
                        </figcaption>
                      </figure>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
      <div
        onClick={() => setRegionsShow(false)}
        className={`fixed inset-0 z-[215] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${regionsShow ? "" : "hidden"}`}
      ></div>
      {regionsShow && (
        <div
          className={`max-w-[600px]  w-full fixed duration-500 z-[231]  left-1/2 right-1/2 top-[50%] translate-x-[-50%] translate-y-[-50%]  h-fit flex items-center  justify-center mx-auto
        ${regionsShow
              ? " bottom-0 md:flex flex-col"
              : "bottom-[-1500px] z-[-10]"
            }
        `}
        >
          <RegionListYandex onClick={toggleRegionsHide} />
        </div>
      )}
      <div className="max-w-[1320px] w-[100%] ss:block md:flex  md:py-0 justify-center items-center m-auto">
        <div className="">
          <div
            className={`ss:px-3 mt-[1px] md:mt-0 md:px-[40px] md:rounded-b-[16px] ${!dressInfo?.yandexOpenMarket
                ? "bg-yandexNavbar backdrop-blur-md"
                : "bg-white"
              }	border border-searchBgColor border-t-0`}
          >
            <div className="hidden md:block">
              {" "}
              <YandexTop onClick={toggleRegionsShow} />
            </div>
            {!dressInfo?.yandexFullScreen && (
              <div className="overflow-hidden">
                <YandexMedium getYandexSearchName={getYandexSearchName} />
              </div>
            )}
          </div>
          {!dressInfo?.yandexOpenMarket && (
            <div
              className={`flex flex-col justify-center  fixed left-0 right-0 z-55 ss:top-auto ${!dressInfo?.yandexFullScreen
                  ? "ss:bottom-[63px] "
                  : "ss:bottom-[0]"
                }

               md:bottom-auto
              duration-500

            `}
            >
              <YandexFilter getMapsInfo={getMapsInfo} />
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default React.memo(YandexMapsIndex);
