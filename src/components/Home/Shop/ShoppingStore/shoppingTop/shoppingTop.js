import { SearchIcons } from "../../../../../assets/icons";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";

const ShoppingTop = () => {

  

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center mb-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle />
        <article className="w-full flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-11 flex flex-row-reverse md:flex-row items-center justify-between bg-btnBgColor md:bg-white rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
            <input
              type="text"
              className="w-[90%] px-3 text-sm md:text-base bg-btnBgColor md:bg-white"
              placeholder="Искать магазины"
            />
            <span className="hidden md:block h-full w-[1px] bg-searchBgColor"></span>
            <div className=" w-[10%] h-full flex items-center justify-center cursor-pointer">
              <SearchIcons colors={"#a1a1a1"} className="" />
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
