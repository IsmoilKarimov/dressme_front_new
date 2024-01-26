import React, { useContext, useEffect, useState } from "react";
import ShopOfficialCard from "./ShopOfficialCards/ShopOfficialCard";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import ShopOfficialBrand from "./ShopOfficialBrand/ShopOfficialBrand";

const ShoppingStoreCategory = ({ filteredData }) => {
  const [dressInfo] = useContext(dressMainData);
  const [pageId, setPageId] = useState();




  useEffect(() => {
    if (dressInfo?.openShopIdFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openShopIdFilter]);

  function dataUz(childData) {
    console.log(childData, "childDataCategory");
  }

  return (
    <main className="max-w-[1280px] w-[100%]  flex justify-center items-center m-auto">
      <section className="w-[100%] h-fit">
        <section className="w-full flex flex-gap-6 justify-between md:my-10 my-3">
          <action className="hidden md:block md:w-[22%] h-full ss:px-4 md:px-0 border border-red-500">
            <ShopOfficialBrand
              // setFilteredData={setFilteredData}
              // pageId={pageId}
              filteredData={filteredData}
              dataUz={dataUz}
            />
          </action>
          <action
            className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${dressInfo?.openShopIdFilter ? " ml-[1px] " : " ml-[-1000px]"
              }   bg-white z-[105] duration-500`}
          >
            <ShopOfficialBrand />
          </action>
          <action className="md:w-[77%] w-full h-full ss:px-4 md:px-0 border border-red-500">
            {filteredData ?
              <ShopOfficialCard
                filteredData={filteredData}
                setPageId={setPageId}
              /> : <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[100vh] ">
                Ничего не найдено
              </div>}
          </action>
        </section>
      </section>
    </main>
  );
};

export default React.memo(ShoppingStoreCategory);
