import React, { useContext, useState } from "react";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { HomeMainDataContext } from "../../../ContextHook/HomeMainData";
import { MenuCloseIcons, ArrowTopIcons } from "../../../assets/icons";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { useTranslation } from "react-i18next";

function RegionListYandex({ onClick }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const { i18n, t } = useTranslation('yandexmap')

  const [state, setState] = useState({
    regionId: dressInfo?.mainRegionId,
    subRegionId: dressInfo?.mainSubRegionId,
    //--- Regions Get ---
    getRegionList: "",
    //--- Get Profile ---
    getProfileList: "",
    //--- Get getSellerList ---
    getSellerList: "",
    // -----region Modal ---
    // openModalRegions: show,
    uniqueId: null,
  });
  const [data] = useContext(HomeMainDataContext);
  // const url = "https://api.dressme.uz/api/seller";

  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  const [activeIndex, setActiveIndex] = useState();
  const RegId = (id) => {
    setState({
      ...state,
      regionId: id,
      subRegionId: null,
    });
  };
  const accordionCityList = (id) => {
    if (activeIndex === id) {
      setActiveIndex(0);
    } else {
      setActiveIndex(id);
    }
  };
  const regSubRegId = (regId, subRegId) => {
    setState({
      ...state,
      regionId: regId,
      subRegionId: subRegId,
      uniqueId: subRegId,
    });
  };
  const sendRegions = () => {
    onClick();
    setDressInfo({
      ...dressInfo,
      mainRegionId: state?.regionId,
      mainSubRegionId: state?.subRegionId,
      yandexOpenRegionList: false,
    });
  };
  const MenuClose = () => {
    setDressInfo({
      ...dressInfo,
      yandexOpenRegionList: false,
    });
    onClick();
  };

  return (
    <main className={`w-full  h-fit `}>
      <div
        className={`max-w-[600px] h-fit     px-3 md:px-6  py-2 md:py-4 bg-white rounded-b-none md:rounded-b-lg	 rounded-t-lg  `}
      >
        <div className="w-full flex items-center justify-between ">
          <span className="text-black text-xl md:text-2xl not-italic font-AeonikProRegular">
            {t("YRLselectRegion")}
          </span>
          <span
            className="select-none cursor-pointer"
            onClick={() => {
              setDressInfo({
                ...dressInfo,
                yandexOpenRegionList: false,
              });
              MenuClose();
            }}
          >
            <MenuCloseIcons colors="#000" />
          </span>
        </div>

        <div className="w-full overflow-auto  flex flex-col gap-y-4 pt-3  overflow-x-hidden mt-3 h-[50vh] md:h-[60vh] VerticelScroll pr-2 ">
          {data?.mainRegionsList?.length > 0 ? (
            data?.mainRegionsList?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className={`${data.id || data.sub_regions.id ? "" : ""
                    } w-full h-fit `}
                >
                  <div
                    className={`flex items-center ${data?.id === 2 ? "" : "opacity-50"
                      } `}
                  >
                    <div
                      onClick={
                        data?.id === 2
                          ? () => {
                            accordionCityList(data?.id);
                          }
                          : null
                      }
                      className="w-full cursor-pointer flex items-center  border-b border-[#F0F0F0] "
                    >
                      {data?.id === 2 ? (
                        <label
                          htmlFor={data?.name_uz}
                          onClick={() => {
                            setDressInfo({
                              ...dressInfo,
                              mainRegionId: data?.id,
                              mainSubRegionId: null,
                            });
                          }}
                          className="w-fit cursor-pointer flex items-center"
                        >
                          <input
                            id={data?.name_uz}
                            type="radio"
                            name="region"
                            value={data?.id || ""}
                            checked={
                              dressInfo?.mainSubRegionId
                                ? false
                                : dressInfo?.mainRegionId === data?.id
                            }
                            className="w-[18px] h-[18px] cursor-pointer mr-3"
                            onChange={(e) => {
                              setDressInfo({
                                ...dressInfo,
                                mainRegionId: data?.id,
                                mainSubRegionId: null,
                              });
                            }}
                          />
                          <span className="text-[#303030] ml-1 text-lg not-italic font-AeonikProRegular">
                            {languageDetector?.typeLang === "ru" &&
                              data?.name_ru}
                            {languageDetector?.typeLang === "uz" &&
                              data?.name_uz}
                          </span>
                        </label>
                      ) : (
                        <div className="w-fit cursor-pointer flex items-center">
                          <div className="w-[20px] h-[20px] border rounded-full cursor-pointer mr-3"></div>
                          <span className="text-[#303030] ml-1 text-lg not-italic font-AeonikProRegular">
                            {languageDetector?.typeLang === "ru" &&
                              data?.name_ru}
                            {languageDetector?.typeLang === "uz" &&
                              data?.name_uz}
                          </span>
                        </div>
                      )}
                      <span
                        className={`${activeIndex === data?.id
                          ? "rotate-[-0deg] duration-300"
                          : "rotate-[-180deg] duration-300"
                          } ml-auto`}
                      >
                        <ArrowTopIcons colors={"#a1a1a1"} />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-full grid grid-cols-2 xs:grid-cols-3 duration-[400ms]
                              ${activeIndex === data?.id
                        ? "openAccardion"
                        : "CloseAccardion"
                      } `}
                  >
                    {data?.sub_regions?.map((item) => {
                      return (
                        <div
                          key={item?.id}
                          className="flex items-center px-[2px] gap-x-[4px] cursor-pointer"
                        >
                          <label
                            htmlFor={item?.name_ru}
                            onClick={() => {
                              setDressInfo({
                                ...dressInfo,
                                mainRegionId: data?.id,
                                mainSubRegionId: item?.id,
                              });
                            }}
                            className="flex items-center gap-x-[6px]"
                          >
                            <input
                              type="radio"
                              id={item?.name_ru}
                              name="Subregion"
                              value={item?.region_id || ""}
                              checked={dressInfo?.mainSubRegionId == item?.id}
                              className="w-4 h-4 border border-borderColor  cursor-pointer  flex items-center justify-center"
                              onChange={(e) => {
                                setDressInfo({
                                  ...dressInfo,
                                  mainRegionId: data?.id,
                                  mainSubRegionId: item?.id,
                                  yandexOpenRegionList: false,
                                });
                              }}
                            />
                            <span className="text-[#303030]  cursor-pointer text-[15px] not-italic font-AeonikProRegular">
                              {languageDetector?.typeLang === "ru" &&
                                item?.name_ru}
                              {languageDetector?.typeLang === "uz" &&
                                item?.name_uz}
                            </span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <p className="w-full h-full flex flex-col items-center justify-center">
              {t("YRLuploadData")}
            </p>
          )}
        </div>
        {/* <div className="w-full flex items-center justify-end  mt-2">
                    <span
                        onClick={() => {
                            setDressInfo({
                                ...dressInfo,
                                yandexOpenRegionList: false
                            })
                            sendRegions()
                        }}
                        className="cursor-pointer text-borderWinter text-lg not-italic font-AeonikProMedium"
                    >
                        Готово
                    </span>
                </div> */}
      </div>
    </main>
  );
}
export default React.memo(RegionListYandex);
