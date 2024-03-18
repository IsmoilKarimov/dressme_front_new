import React, { useContext } from "react";
import { MenuCloseIcons } from "../../../../../../../../assets/icons";
import { Radio } from "antd";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../../../../../language/LanguageItems";

function LocationDropUp({
  onClick,
  data,
  selectedLocation,
  checkedData,
  setSelectedLocation,
  setSelectedSize,
  existRegions,
  existRegionsObj,
}) {
  const [languageDetector] = useContext(
    LanguageDetectorDress
  );


  const { t } = useTranslation("products");

  return (
    <main>
      <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-1 ">
          <p className="text-xl font-AeonikProMedium">{t("location")}</p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section className="w-full h-[380px] px-4 flex flex-col items-center">
          <div className="w-full h-fit flex items-center justify-center overflow-auto VerticelScroll flex-wrap gap-x-7 mb-[28px]">
            <Radio.Group
              style={{
                width: "100%",
              }}
              defaultValue={selectedLocation?.id}
              value={selectedLocation?.id}
            >
              {existRegions.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="font-AeonikProRegular text-lg border-b border-[#f0f0f0] mb-[15px]">
                      {existRegionsObj[item]}
                    </div>

                    <div className="w-full">
                      {data?.product?.locations.map((data, i) => {
                        if (data?.sub_region?.region_id === item) {
                          return (
                            <div
                              onClick={() => {
                                checkedData = data;
                                setSelectedLocation(data);
                                setSelectedSize(null);
                              }}
                              key={i}
                              className="mb-[8px]"
                            >
                              <Radio
                                value={data?.id}
                                name="location"
                                checked={selectedLocation?.id === item?.id}
                                className="text-lg font-AeonikProRegular"
                              >
                                {languageDetector?.typeLang === "ru" &&
                                  data?.sub_region?.name_ru}
                                {languageDetector?.typeLang === "uz" &&
                                  data?.sub_region?.name_uz}
                                ({data?.address})
                              </Radio>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              })}
            </Radio.Group>
          </div>
        </section>
      </div>
    </main>
  );
}
export default React.memo(LocationDropUp);
