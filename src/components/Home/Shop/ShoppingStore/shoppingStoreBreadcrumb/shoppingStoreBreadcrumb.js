import { NavLink } from "react-router-dom";
import { ItailIcons } from "../../../../../assets/icons";

const ShoppingStoreBreadCrumb = () => {

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-start m-auto">
        <article className="flex items-center">
          <article className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]"
            >
              Главная
            </NavLink>
            <span>
              <ItailIcons colors={"#000"} />
            </span>
          </article>
          <article className="not-italic font-AeonikProRegular flex items-center  text-sm leading-4 text-black tracking-[1%] mr-[10px]">
            <NavLink
              to="/"
              className="flex items-center cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity tracking-[1%]"
            >
              Магазины
            </NavLink>
          </article>
        </article>

      </section>
    </main>
  );
};

export default ShoppingStoreBreadCrumb;
