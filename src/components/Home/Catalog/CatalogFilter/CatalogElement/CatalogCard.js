import React, { useContext } from "react";
import { HomeMainDataContext } from "../../../../../ContextHook/HomeMainData";
import { CollectionCardItem } from "../../../Main/WearCollectionCard/CollectionCardItem";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CatalogCard({ filterData, setPageId, paramsId }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

  const { t } = useTranslation("catalog");

  const handleLeaveMouse = (eId) => {
    const elementsIndex = dressInfo.ProductList.findIndex(
      (element) => element.id == eId
    );
    let newArray = [...dressInfo.ProductList];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      colourCard: false,
    };
    setDressInfo((current) => {
      return { ...current, ProductList: newArray };
    });
  };
  console.log(paramsId, 'paramsId');
  const setPaginationFunc = (id) => {
    setPageId(+id);
  };
  const navigate = useNavigate()
  function onHandleCardId(child, name) {
    navigate(`/categories/${paramsId}/${child} `);
  }
  return (
    <main className="flex flex-col box-border mt-2 mb-12 md:mb-0">
      <section className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-3 lg:gap-y-3 mt-1 md:mt-8">
        {filterData?.category_products?.data?.length ? (
          filterData?.category_products?.data?.map((data) => {
            return (
              <CollectionCardItem
                data={data}
                key={data?.id}
                handleLeaveMouse={handleLeaveMouse}
                wishList={wishList}
                setWishlist={setWishlist}
                onHandleCardId={onHandleCardId}
              />
            );
          })
        ) : (
          <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[200px] ">
            {t("CI_nothing_found")}
          </div>
        )}
      </section>

      <section className="w-full hidden h-fit md:flex items-center justify-center mt-[75px] gap-x-6">
        <article className="flex items-center ">
          <ul className="flex items-center ">
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
                  className={`not-italic font-AeonikProRegular text-sm leading-4 text-center px-2 min-w-[45px] border h-[45px] rounded-lg  ${
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
