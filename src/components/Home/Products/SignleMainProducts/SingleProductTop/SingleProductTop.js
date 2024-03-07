import React from "react";

import NewBreadCrump from "../../../../Breadcrumbs/NewBreadCrump";

const SingleProductTop = ({ breadShops }) => {
  return (
    <main className="flex flex-col md:min-h-[44px] justify-center items-center m-0 mt-3 box-border border-b border-searchBgColor">
      <section className="max-w-[1280px] h-full w-[100%] flex pb-3 md:py-5 items-center justify-between m-auto  ">
        <NewBreadCrump items={breadShops} />
        <nav className="hidden md:flex"></nav>
      </section>
    </main>
  );
};
export { SingleProductTop };
