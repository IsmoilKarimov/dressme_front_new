import React, { useContext, useState } from "react";
import { HomeMainDataContext } from "../../../../../ContextHook/HomeMainData";
import { CollectionCardItem } from "../../../Main/WearCollectionCard/CollectionCardItem";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WearType from "../../../Main/WearCollectionCard/WearType";

export default function CatalogCard({ filterData, setPageId, paramsId }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);
  const [openWearType, setOpenWearType] = useState(false);
  const toggle = React.useCallback(() => setOpenWearType(false), []);

  const { t } = useTranslation("catalog");

  const setPaginationFunc = (id) => {
    setPageId(+id);
  };

  const navigate = useNavigate();
  function onHandleCardId(child, name) {
    navigate(`/categories/${paramsId}/${child} `);
  }
  return (
    <main className="flex flex-col box-border mt-2 mb-12 md:mb-0">
      <div
        onClick={() => setOpenWearType(false)}
        className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
          openWearType ? "" : "hidden"
        }`}
      ></div>
      <section
        className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
          openWearType ? "bottom-0" : "bottom-[-800px] z-0"
        }`}
      >
        <WearType onClick={toggle} />
      </section>

      <section className="flex flex-wrap justify-between gap-y-2  lg:gap-y-3 mt-1 md:mt-8">
        {filterData?.category_products?.data?.length ? (
          filterData?.category_products?.data?.map((data) => {
            return (
              <CollectionCardItem
                data={data}
                key={data?.id}
                wishList={wishList}
                setWishlist={setWishlist}
                onHandleCardId={onHandleCardId}
                setOpenWearType={setOpenWearType}
              />
            );
          })
        ) : (
          <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[200px] ">
            {t("CI_nothing_found")}
          </div>
        )}
      </section>

      <section className="w-full  h-fit flex items-center justify-center mt-[75px] gap-x-6">
        <article className="flex w-full mx-auto items-center md:justify-center overflow-x-auto">
          <ul className="flex w-fit mx-auto items-center md:justify-center pb-[8px] md:pb-0">
            {filterData?.category_products?.links?.map((item, index) => {
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
    </main>
  );
}
