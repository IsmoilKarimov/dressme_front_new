import React, { useContext, useEffect, useState } from "react";
import "../category.css";
import CategoryCards from "./CategoryElement/CategoryCards";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import CategoryForBrand from "./CategoryForBrand/CategoryForBrand";

function CategoryForType({filterData, setFilterData}) {
  const [dressInfo] = useContext(dressMainData);

  const [pageId, setPageId] = useState();

  console.log(filterData,'filterData');

  useEffect(() => {
    if (dressInfo?.openCategoryFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCategoryFilter]);

  return (
    <main className="w-full h-full">
      <section className="flex justify-between mb-10">
        {/* For Mobile Versions */}
        <article
          className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${
            dressInfo?.openCategoryFilter ? " ml-[1px] " : " ml-[-1000px]"
          }   bg-white z-[105] duration-500`}
        >
          <CategoryForBrand />
        </article>

        {/* For Desktop Version */}
        <article className="hidden md:block md:w-[21%] h-full mt-10 ss:px-4 md:px-0 ">
          <CategoryForBrand setFilterData={setFilterData} pageId={pageId} filterData={filterData}/>
        </article>
        <article className="w-full md:w-[78%] h-[full] ss:px-4 md:px-0 ">
          <CategoryCards
            filterData={filterData}
            setPageId={setPageId}
          />
        </article>
      </section>
    </main>
  );
}

export default React.memo(CategoryForType )
