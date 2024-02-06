import { NavLink } from "react-router-dom";
import { ItailIcons } from "../../../../assets/icons";

const FavoutireBreadCrumbs = () => {
  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3 ">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto px-4 md:px-0">
        <div className="w-full flex justify-between flex-col md:flex-row ">
          <section className="flex items-center mb-5 md:mb-0">
            <article className="not-italic font-AeonikProRegular flex items-center text-black tracking-[1%] mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center cursor-pointer  pt-[4px] pr-[10px] not-italic font-AeonikProRegular md:font-AeonikProMedium text-sm text-black tracking-[1%]"
              >
                Главная
              </NavLink>
              <span>
                <ItailIcons colors={"#000"} />
              </span>
            </article>
            <article className="not-italic font-AeonikProRegular flex items-center text-black tracking-[1%] mr-[10px]">
              <div
                className="flex items-center not-italic pt-[4px] font-AeonikProRegular md:font-AeonikProMedium text-sm text-setTexOpacity tracking-[1%]"
              >
                Избранное
              </div>
            </article>
            <article className="block md:hidden ml-auto">
              <span className="text-sm font-AeonikProMedium">82 товара</span>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FavoutireBreadCrumbs;
