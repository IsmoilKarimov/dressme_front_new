import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  DeliveryStoreIcon,
  ManGenIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import LoadingNetwork from "../../../../Loading/LoadingNetwork";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../../../ContextHook/SeasonContext";
import { LocationIdDetector } from "../../../../../ContextHook/LocationId";

const ShoppingBrands = ({ loading, setLoading }) => {
  const navigate = useNavigate();
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );
  const [locationIdDetector, setLocationIdDetector] =
    useContext(LocationIdDetector);

  const { t } = useTranslation("shops");
  const goDetail = (id, name) => {
    console.log("RUN-------shops");
    // console.log(name?.split(' ')?.join('-'), "name");

    dressInfo?.shopsData?.shops?.data
      ?.filter((e) => e?.id == id)
      ?.map((item) => {
        if (dressInfo?.mainSubRegionId) {
          let foundElement = item?.approved_shop_locations.find(function (
            element
          ) {
            return Number(element.sub_region_id) === dressInfo?.mainSubRegionId;
          });
          setLocationIdDetector({
            ...locationIdDetector,
            locationIdForTest: foundElement?.id,
          });

          setDressInfo({ ...dressInfo, locationIdParams: foundElement?.id });
          navigate(`/shops/${name?.split(" ")?.join("-")?.toLowerCase()}`);
        }
        if (!dressInfo?.mainSubRegionId) {
          setDressInfo({
            ...dressInfo,
            locationIdParams: item?.approved_shop_locations[0]?.id,
          });
          setLocationIdDetector({
            ...locationIdDetector,
            locationIdForTest: item?.approved_shop_locations[0]?.id,
          });
          navigate(`/shops/${name?.split(" ")?.join("-")?.toLowerCase()}`);
        }
      });
  };
  // ------------------
  const setPaginationFunc = (url) => {
    setLoading(true);
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setDressInfo({ ...dressInfo, shopsData: res });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <main className="relative">
      <div className="flex flex-col min-h-[44px]  justify-center items-center my-3">
        <section className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto md:mt-[50px] mb-20 md:mb-[90px]">
          <section className="w-full">
            {dressInfo?.shopsData?.shops?.data?.length > 0 ? (
              dressInfo?.shopsData?.shops?.data?.map((data) => {
                return (
                  <div
                    key={data?.id}
                    className="w-full h-fit md:h-[100px] flex flex-col md:flex-row items-center border border-searchBgColor rounded-lg mb-[30px] p-[10px] md:pr-10"
                  >
                    <div className="w-full flex items-center pb-[15px] md:pb-0 border-b border-searchBgColor md:border-none">
                      <figure
                        style={{
                          backgroundImage: `url(${data?.url_logo_photo})`,
                          backgroundPosition: "center center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="min-w-[80px] min-h-[80px] overflow-hidden md:min-w-[120px] md:min-h-[120px] md:ml-10 rounded-full border border-searchBgColor flex items-center justify-center bg-white"
                      ></figure>
                      <div className="flex flex-col ml-4 md:ml-10">
                        <p className="block md:hidden break-all text-base ll:text-lg md:text-xl font-AeonikProMedium mb-[5px] md:mb-3">
                          {data?.name || null}
                        </p>
                        <p className="relative md:block hidden max-h-[56px] mb-[5px] overflow-hidden w-full break-all md:pr-4 text-[13px] md:w-[250px] ls:text-[14px] xs:text-xl font-AeonikProMedium">
                          {data?.name || null}
                          <span className="absolute right-[16px] top-[28px] w-full block linearGr h-[28px]"></span>
                        </p>
                        <div className="flex items-center md:justify-between">
                          <div
                            className={`${
                              data?.overall_rating ? "block" : "hidden"
                            } not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 flex flex-wrap items-center text-sm`}
                          >
                            <div className="flex items-center">
                              <div className="flex items-center -mt-1 mr-[6px] md:mr-2">
                                <StarIcons />
                              </div>
                              <p className="font-AeonikProMedium text-black mr-1">
                                {data?.overall_rating || 0}
                              </p>
                            </div>
                            <div className="flex whitespace-nowrap">
                              {data?.rated_users_count && (
                                <p className="flex items-center text-setTexOpacity font-AeonikProRegular whitespace-nowrap">
                                  ({" "}
                                  <span className="flex gap-x-1">
                                    <span className="md:flex hidden">
                                      {t("votes")}:
                                    </span>
                                    {data?.rated_users_count}{" "}
                                  </span>{" "}
                                  ){" "}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-row-reverse md:flex-row items-center md:ml-auto justify-between md:justify-start mt-3 md:mt-0">
                      <div className="w-fit md:w-[250px] h-9 md:h-12 flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white px-5 rounded-lg md:ml-10">
                        <DeliveryStoreIcon />
                        <p className="text-[13px] md:text-base font-AeonikProMedium text-[#2c2c2c] ml-3">
                          {languageDetector?.typeLang === "ru" &&
                            data?.delivery?.name_ru}
                          {languageDetector?.typeLang === "uz" &&
                            data?.delivery?.name_uz}
                        </p>
                      </div>
                      <div className="flex items-center md:ml-[88px] md:mt-0">
                        <div
                          className={`${
                            data.gender_id === "2"
                              ? "hidden"
                              : "flex w-9 h-9 md:w-12 md:h-12 items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white rounded-lg mr-1"
                          } `}
                        >
                          <ManGenIcons />
                        </div>
                        <div
                          className={`${
                            data.gender_id === "1"
                              ? "hidden"
                              : "flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white w-9 h-9 md:w-12 md:h-12 rounded-lg"
                          } `}
                        >
                          <WomanGenIcons />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        goDetail(data?.id, data?.name);
                      }}
                      className={
                        "w-full md:w-[400px] flex truncate items-center justify-center font-AeonikProMedium text-base text-SignInBgColor border border-searchBgColor md:border-SignInBgColor bg-[#E8F5FD] md:bg-white mt-6 md:mt-0 md:ml-[117px] py-2 md:py-1 md:px-3 md:hover:bg-SignInBgColor duration-300 ease-out md:hover:text-white rounded-lg"
                      }
                    >
                      {t("more_details")}
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col">
                {loading ? (
                  <LoadingNetwork />
                ) : (
                  <span className="w-full flex items-center justify-center font-AeonikProMedium text-2xl md:mt-[100px]">
                    {t("nothing_found")}
                  </span>
                )}
              </div>
            )}
          </section>

          <section className="w-full  h-fit flex items-center justify-center mt-[75px] gap-x-6">
            <article className="flex w-full mx-auto items-center md:justify-center overflow-x-auto">
              <ul className="flex w-fit mx-auto items-center md:justify-center pb-[8px] md:pb-0">
                {dressInfo?.shopsData?.shops?.links?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        if (item?.url) {
                          const newPageId = String(
                            item?.url
                              ?.substr(-3)
                              ?.split("")
                              ?.reverse()
                              ?.join("")
                          )
                            ?.split("")
                            ?.filter((item) => !isNaN(item))
                            ?.reverse()
                            ?.join("");
                          setPaginationFunc(newPageId);
                        }
                      }}
                      className={`not-italic font-AeonikProRegular text-sm leading-4 text-center px-4 w-fit md:min-w-[45px] border h-[35px] md:h-[45px] rounded-lg  ${
                        item?.active
                          ? "bg-fullBlue text-white"
                          : "hover:bg-searchBgColor"
                      } mx - [5px] flex items-center justify-center  ${
                        item?.url
                          ? "cursor-pointer"
                          : "opacity-70 cursor-not-allowed"
                      } `}
                    >
                      {item?.label}
                    </li>
                  );
                })}
              </ul>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ShoppingBrands;
