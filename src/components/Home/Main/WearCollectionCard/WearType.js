import React from "react";
import { MenuCloseIcons } from "../../../../AssetsMain/icons";

const WearType = () => {
  return (
    <div className="max-w-[440px] w-[100%] mx-auto bg-white overflow-hidden h-fit rounded-t-[12px]">
      <section className="h-[52px] w-full bg-searchBgColor flex items-center justify-between">
        <p></p>Футболка женская однотонная
        <button>
          <MenuCloseIcons />
        </button>
      </section>
      <section className="h-[142px] w-full"></section>
    </div>
  );
};

export { WearType };
