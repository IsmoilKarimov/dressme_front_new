import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeMainDataContext } from "../../../../../../ContextHook/HomeMainData";
import { useTranslation } from "react-i18next";
import { MobileSelectedDataContext } from "../../../../../../ContextHook/mobileSelectedData";
import WearType from "../../../../Main/WearCollectionCard/WearType";
import { CollectionCardItem } from "../../../../Main/WearCollectionCard/CollectionCardItem";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";

export default function ShopOfficialCard({
  filterToggle,
  filteredData,
  setPageId,
  paramsId,
}) {
  const [openWearType, setOpenWearType] = useState(false);

  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [, setSelectedData] = useContext(MobileSelectedDataContext);
  const toggle = React.useCallback(() => setOpenWearType(false), []);

  const { t } = useTranslation("shops");

  // Main data context -----------------
  const [, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const navigate = useNavigate();

  function onHandleCardId(child, name) {
    navigate(`/shops_location/${paramsId}/${child} `);
   
  }

  const setPaginationFunc = (id) => {
    setPageId(+id);
  };
  return (
    <div className="flex flex-col box-border">
      <div
        onClick={() => setOpenWearType(false)}
        className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${openWearType ? "" : "hidden"
          }`}
      ></div>
      <section
        className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openWearType ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
      >
        <WearType onClick={toggle} />
      </section>

      {filteredData?.products?.data?.length > 0 ? (
        <div
          className={`flex flex-wrap justify-between md:grid
          ${filteredData?.products?.length > 2
              ? "mb-[20px] md:mb-[30px]"
              : "mb-[80px]"
            }
          ${filterToggle
              ? "md:grid-cols-4 md:gap-x-2"
              : "md:grid-cols-5 md:gap-x-5"
            } gap-y-[9px] lg:gap-y-3 mt-1 md:mt-10`}
        >
          {filteredData?.products?.data?.map((data) => {
            return (
              <CollectionCardItem
                key={data?.id}
                data={data}
                setOpenWearType={setOpenWearType}
                wishList={wishList}
                setWishlist={setWishlist}
                mainSelectedId={dressInfo?.mainColorId}
                onHandleCardId={onHandleCardId}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-[25vh] flex items-center justify-center">
          <span className=" flex items-center justify-center font-AeonikProMedium text-2xl ">
            {t("nothing_found")}
          </span>
        </div>
      )}

      {filteredData?.products?.data?.length < 1 ? null : (
        <section className="w-full  h-fit flex items-center justify-center md:mt-[75px] gap-x-6 pb-[80px] md:pb-0">
          <article className="flex w-full mx-auto items-center md:justify-center overflow-x-auto">
            <ul className="flex mx-auto w-fit items-center md:justify-center  pb-[8px] md:pb-0">
              {filteredData?.products?.links?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      if (item?.url) {
                        const newPageId = String(
                          item?.url?.substr(-3)?.split("")?.reverse()?.join("")
                        )
                          ?.split("")
                          ?.filter((item) => !isNaN(item))
                          ?.reverse()
                          ?.join("");
                        setPaginationFunc(newPageId);
                      }
                    }}
                    className={`not-italic font-AeonikProRegular text-sm leading-4 text-center px-4 w-fit md:min-w-[45px] border h-[35px] md:h-[45px] rounded-lg  ${item?.active
                        ? "bg-fullBlue text-white"
                        : "hover:bg-searchBgColor"
                      } mx - [5px] flex items-center justify-center  ${item?.url
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
      )}
    </div>
  );
}
