import React, { useContext } from "react";
import { MenuCloseIcons } from "../../../../assets/icons";
import { useNavigate } from "react-router-dom";
import { MobileSelectedDataContext } from "../../../../ContextHook/mobileSelectedData";
import { SliderPhotosColorContext } from "../../../../ContextHook/SliderPhotosColor";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";

const WearType = ({ onClick, title }) => {
  const [selectedData, setSelectedData] = useContext(MobileSelectedDataContext);
  const [colorId, setcolorId] = useContext(SliderPhotosColorContext);
  const [languageDetector, setLanguageDetector] = useContext(
    LanguageDetectorDress
  );

  let idMap = new Map();
  let uniqueArray = [];

  selectedData?.photos?.forEach((obj) => {
    if (!idMap.has(obj.product_color_id)) {
      idMap.set(obj.product_color_id, obj);
      uniqueArray.push(obj);
    }
  });

  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
      <section className="py-4 w-full bg-btnBgColor border-b border-searchBgColor flex items-center justify-between px-4">
        <p className="break-all leading-5 pr-2">
          {languageDetector?.typeLang === "ru" && selectedData?.name_ru}
          {languageDetector?.typeLang === "uz" && selectedData?.name_uz}
        </p>
        <button onClick={onClick}>
        <MenuCloseIcons colors={"#000"} />
        </button>
      </section>
      <section className="h-[142px] w-full px-4 flex items-center">
        <figure className="w-full h-[110px] gap-x-2 flex items-center">
          {uniqueArray?.map((data) => {
            return (
              <div
                key={data?.id}
                className="h-full w-[81px] rounded-[12px]  border border-searchBgColor overflow-hidden"
              >
                <img
                  onClick={() => {
                    setcolorId(data?.product_color_id);
                    goDetail(selectedData?.id);
                  }}
                  className="w-full h-full object-cover"
                  key={data?.id}
                  src={data?.url_photo}
                  alt=""
                />
              </div>
            );
          })}
        </figure>
      </section>
    </div>
  );
};

export default React.memo(WearType);
