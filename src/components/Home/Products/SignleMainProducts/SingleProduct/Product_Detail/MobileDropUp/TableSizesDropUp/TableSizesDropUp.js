import React from "react";
import { MenuCloseIcons } from "../../../../../../../../assets/icons";
import { useTranslation } from "react-i18next";

function TableSizesDropUp({ onClick, data, selectedLocation }) {

  const { t } = useTranslation("products")

  return (
    <main>
      <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="w-full flex items-center  justify-between px-4 my-5">
          <p className="text-xl font-AeonikProMedium">{t("size_table")}</p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section className="w-full h-[230px] pl-4 flex flex-col flex-nowrap">
          {data?.product?.category_id === "2" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("size_in_numbers")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("letter_size")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("bust")}, {t("in_cm")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("waist_circumference")}, {t("in_cm")}
                </li>
                <div className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("hip_girth")}, {t("in_cm")}
                </div>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-start px-[4px]">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className={`${
                            !data?.min_wear_size &&
                            !data?.max_wear_size &&
                            !data?.letter_size &&
                            !data?.min_chest_girth &&
                            !data?.max_chest_girth &&
                            !data?.min_waist_girth &&
                            !data?.max_waist_girth &&
                            !data?.min_hip_girth &&
                            !data?.max_hip_girth
                              ? "hidden"
                              : "flex"
                          } w-full items-center justify-start flex-col text-[13px] font-AeonikProRegular `}
                        >
                          {/* Sizes */}
                          <li className="w-full h-10 flex items-center justify-start">
                            <div className="w-[50px] text-center">
                              {!data?.min_wear_size && !data?.max_wear_size ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_wear_size}{" "}
                                  {data?.max_wear_size
                                    ? " - " + data?.max_wear_size
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                          {/* Letter Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-start">
                            <div className="w-[50px] text-center">
                              {data?.letter_size ? data?.letter_size : "-"}
                            </div>
                          </li>
                          {/* Chest Sizes */}
                          <li className="w-full h-10 flex items-center justify-start">
                            <div className="w-[50px] text-center">
                              {!data?.min_chest_girth &&
                              !data?.max_chest_girth ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_chest_girth}{" "}
                                  {data?.max_chest_girth
                                    ? " - " + data?.max_chest_girth
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                          {/* Waist Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-start">
                            <div className="w-[50px] text-center">
                              {!data?.min_waist_girth &&
                              !data?.max_waist_girth ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_waist_girth}{" "}
                                  {data?.max_waist_girth
                                    ? " - " + data?.max_waist_girth
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                          {/* Hip Sizes */}
                          <li className="w-full h-10 flex items-center justify-start">
                            <div className="w-[50px] text-center">
                              {!data?.min_hip_girth && !data?.max_hip_girth ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_hip_girth}{" "}
                                  {data?.max_hip_girth
                                    ? " - " + data?.max_hip_girth
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "3" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("size_in_numbers")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("letter_size")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("height")}, {t("in_cm")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("waist_circumference")}, {t("in_cm")}
                </li>
                <div className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("hip_girth")}, {t("in_cm")}
                </div>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-start">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className={`${
                            !data?.min_wear_size &&
                            !data?.max_wear_size &&
                            !data?.letter_size &&
                            !data?.min_height &&
                            !data?.max_height &&
                            !data?.min_waist_girth &&
                            !data?.max_waist_girth &&
                            !data?.min_hip_girth &&
                            !data?.max_hip_girth
                              ? "hidden"
                              : "flex"
                          } w-full items-center justify-start flex-col text-[13px] font-AeonikProRegular`}
                        >
                          {/* Sizes */}
                          <li className="w-full h-10 flex items-center justify-start px-3">
                            <div className="w-[50px] text-center">
                              {!data?.min_wear_size && !data?.max_wear_size ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_wear_size}{" "}
                                  {data?.max_wear_size
                                    ? " - " + data?.max_wear_size
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                          {/* Letter Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {data?.letter_size ? data?.letter_size : "-"}
                            </span>
                          </li>
                          {/* Chest Sizes */}
                          <li className="w-full h-10 flex items-center justify-start px-3">
                            <div className="w-[50px] text-center">
                              {!data?.min_height && !data?.max_height ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_height}
                                  {data?.max_height
                                    ? " - " + data?.max_height
                                    : null}
                                </span>
                              )}
                            </div>
                          </li>
                          {/* Waist Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {!data?.min_waist_girth &&
                              !data?.max_waist_girth ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_waist_girth}{" "}
                                  {data?.max_waist_girth
                                    ? " - " + data?.max_waist_girth
                                    : null}
                                </span>
                              )}
                            </span>
                          </li>
                          {/* Hip Sizes */}
                          <li className="w-full h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {!data?.min_hip_girth & !data?.max_hip_girth ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_hip_girth}{" "}
                                  {data?.max_hip_girth
                                    ? " - " + data?.max_hip_girth
                                    : null}
                                </span>
                              )}
                            </span>
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "4" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("size_in_numbers")}, {t("in_cm")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("foot_length")}, {t("in_cm")}
                </li>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-[100%] overflow-x-scroll flex items-center justify-start">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className={` ${
                            !data?.wear_size &&
                            !data?.min_foot_length &&
                            !data?.max_foot_length
                              ? "hidden"
                              : "flex"
                          } w-full items-center flex-col text-[13px] font-AeonikProRegular `}
                        >
                          <li
                            className={`w-full h-10 flex items-center justify-start px-3`}
                          >
                            <span className="w-[50px] text-center">
                              {data?.wear_size ? data?.wear_size : "-"}
                            </span>
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {!data?.min_foot_length &&
                              !data?.max_foot_length ? (
                                "-"
                              ) : (
                                <span>
                                  {data?.min_foot_length}
                                  {data?.max_foot_length
                                    ? " - " + data?.max_foot_length
                                    : null}
                                </span>
                              )}
                            </span>
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "5" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("size_in_numbers")}, {t("in_cm")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("letter_size")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("length")}, {t("in_cm")}
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  {t("width")}, {t("in_cm")}
                </li>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-start">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className={`${
                            !data?.wear_size &&
                            !data?.letter_size &&
                            !data?.length &&
                            !data?.width
                              ? "hidden"
                              : "flex"
                          } w-full items-center flex-col text-[13px] font-AeonikProRegular `}
                        >
                          <li className="w-full h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {data?.wear_size ? data?.wear_size : "-"}
                            </span>
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {data?.letter_size ? data?.letter_size : "-"}
                            </span>
                          </li>
                          <li className="w-full h-10 flex items-center justify-center px-3">
                            <span className="w-[50px] text-center">
                              {data?.length ? data?.length : "-"}
                            </span>
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-start px-3">
                            <span className="w-[50px] text-center">
                              {data?.width ? data?.width : "-"}
                            </span>
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
export default React.memo(TableSizesDropUp);
