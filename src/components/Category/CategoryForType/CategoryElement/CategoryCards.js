import React, { useContext } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { ArrowTopIcons } from "../../../../assets/icons";
import { CollectionCardItem } from "../../../Home/Main/WearCollectionCard/CollectionCardItem";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";

export default function CategoryCards({ filterData }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

  console.log(filterData, "sdffsdf564sdfs");

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

  return (
    <main className="flex flex-col box-border mt-2">
      <section className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-3 lg:gap-y-3 mt-1 md:mt-8">
        {filterData?.section_products?.data.map((data) => {
          return (
            <CollectionCardItem
              data={data}
              // setOpenWearType={setOpenWearType}
              handleLeaveMouse={handleLeaveMouse}
              wishList={wishList}
              setWishlist={setWishlist}
            />
          );
        })}
      </section>
      <section className="w-full h-fit md:hidden flex items-center justify-center mt-14">
        <p className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
          Показать ещё 30 наборов
        </p>
      </section>
      <section className="w-full hidden h-fit md:flex items-center justify-center mt-[75px] gap-x-6">
        {/* <article className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="rotate-[-90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>{" "}
          <p className="not-italic ml-1   font-AeonikProRegular text-lg leading-4 text-fullBlue">
            Previous
          </p>
        </article> */}
        <article className="flex items-center">
          <ul className="flex items-center gap-x-6">
            {filterData?.section_products?.links?.map((item) => {
              return (
                <li
                  className={`not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] border h-[44px] rounded-lg hover:bg-searchBgColor ${
                    item?.active ? "bg-fullBlue text-white" : null
                  } mx-[10px] flex items-center justify-center cursor-pointer`}
                >
                  {item?.label}
                </li>
              );
            })}

            {/* <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              . . .
            </li> */}
          </ul>
        </article>
        {/* <figure className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="not-italic  font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
            Next
          </p>
          <p className="rotate-[90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>
        </figure> */}
      </section>
      {filterData?.section_products?.next_page_url ? "" : null}
    </main>
  );
}
