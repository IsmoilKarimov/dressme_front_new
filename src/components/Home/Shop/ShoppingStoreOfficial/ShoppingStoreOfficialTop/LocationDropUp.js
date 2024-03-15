import React, { useContext } from "react";
import { Radio, Space } from "antd";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../../../language/LanguageItems";
import { MenuCloseIcons } from "../../../../../assets/icons";

function LocationDropUp({
  setCheckedData,
  locationIdDetector,
  onChangeSelectLocation,
  onClick,
  locationList,
}) {
  const [languageDetector] = useContext( LanguageDetectorDress )
  const { t } = useTranslation("products");

  return (
    <main className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
      <div className="w-full px-4 md:px-[25px] pb-[15px] md:pb-[30px] pt-[10px] md:pt-[20px]">
        <div className="w-full flex items-center justify-between">
          <p className="text-[16px] md:text-2xl font-AeonikProRegular mb-[15px] md:mb-[30px]">
            {t("select_location")}
          </p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </div>
        <div className="font-AeonikProRegular text-[14px] md:text-lg border-b border-[#f0f0f0] mb-[15px]">
          {languageDetector?.typeLang === "ru" &&
            locationList[0]?.region?.name_ru}
          {languageDetector?.typeLang === "uz" &&
            locationList[0]?.region?.name_uz}
        </div>
        <div className="h-[200px] md:h-[250px] overflow-y-auto mb-[20px] VerticelScroll pr-2">
          <Radio.Group
            onChange={onChangeSelectLocation}
            value={locationIdDetector?.locationIdForTest}
            defaultValue={locationIdDetector?.locationIdForTest}
          >
            {locationList?.map((item, index) => {
              return (
                <div className="mb-[8px] gap-x-3 flex items-center cursor-pointer">
                  <Space direction="vertical">
                    <Radio
                      className="text-lg font-AeonikProRegular"
                      value={item?.id}
                      checked={
                        locationIdDetector?.locationIdForTest === item?.id
                      }
                      onClick={() => {
                        setCheckedData(item);
                      }}
                    >
                      {" "}
                      <span className="text-[14px] md:text-lg font-AeonikProRegular">
                        {languageDetector?.typeLang === "ru" &&
                          item?.sub_region?.name_ru}
                        {languageDetector?.typeLang === "uz" &&
                          item?.sub_region?.name_uz}
                      </span>
                      <span className="text-[14px] md:text-lg font-AeonikProRegular">
                        ({item?.address} )
                      </span>
                    </Radio>
                  </Space>
                </div>
              );
            })}
          </Radio.Group>
        </div>
      </div>
    </main>
  );
}
export default React.memo(LocationDropUp);
