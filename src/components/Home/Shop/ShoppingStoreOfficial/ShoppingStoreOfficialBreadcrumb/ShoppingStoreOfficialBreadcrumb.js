import { NavLink } from "react-router-dom";
import { ItailIcons } from "../../../../../assets/icons";

const ShoppingStoreOfficialBreadCrumb = ({ name }) => {

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center md:my-3">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <div className="w-[100%] md:w-fit flex items-center py-1 px-4 md:px-0 ">
          <div className="h-10 w-[100%] md:w-fit flex items-center overflow-x-auto  ">
            <div className="not-italic font-AeonikProRegular  flex items-center flex-nowrap text-sm leading-4 text-black mr-[10px]">
              <NavLink
                to="/"
                className="flex items-center whitespace-nowrap cursor-pointer pt-[4px] pr-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black"
              >
                Главная
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </div>
            <div className="not-italic font-AeonikProRegular flex items-center text-sm">
              <NavLink to='/shops' className="flex	whitespace-nowrap  items-center cursor-pointer pt-[4px] px-[10px] not-italic font-AeonikProMedium text-sm leading-4 text-black">
                Магазины{" "}
              </NavLink>
              <span>
                <ItailIcons colors={"#A1A1A1"} />
              </span>
            </div>
            <div className="not-italic font-AeonikProRegular  flex items-center text-black">
              <span className="not-italic font-AeonikProRegular flex items-center ">
                <div className="flex items-center whitespace-nowrap px-[10px] pt-[4px] not-italic font-AeonikProMedium text-sm text-setTexOpacity">
                  {name}{" "}
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ShoppingStoreOfficialBreadCrumb;
