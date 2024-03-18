import { useContext, useEffect, useState } from "react";
import { SearchIcons } from "../../../../../assets/icons";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";
import { MdClose } from "react-icons/md";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ShoppingTop = ({
  getAllShops,
  setGetAllShops,
  setGetGenderId,
  setgetSearchInput,
}) => {

  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [searchMarketName, setSearchMarketName] = useState(dressInfo?.mainSearchNameshopMarket);
  const [searchForLocation, setSearchForLocation] = useState([]);
  let location = useLocation();

  const { t } = useTranslation("shops")

  function handleGetId(childData) {
    setGetGenderId(childData?.genderFilterId);
  }

  function getSearchClick() {
    if (searchForLocation?.includes("shops")) {
      setDressInfo({
        ...dressInfo,
        mainSearchNameshopMarket: searchMarketName,
      });
    }
  }

  useEffect(() => {
    setSearchForLocation(location?.pathname?.split("/"));
  }, [location.pathname]);

  const _handleKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      setDressInfo({
        ...dressInfo,
        mainSearchNameshopMarket: searchMarketName,
      });
    }
  };

  const handleChange = (event) => {
    setSearchMarketName(event.target.value);

  };

  const handleClear = () => {
    // setgetSearchInput("");
    setSearchMarketName("");
    setDressInfo({
      ...dressInfo,
      mainSearchNameshopMarket: "",
      // mainSearchName: null,
      // mainSearchNameCategory: null,
      // mainSearchNameCatalog: null,
      // mainSearchNameshop: null,
      // mainSearchNameshopLocation: null,
    });
  };

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center my-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle
          handleGetId={handleGetId}
          getAllShops={getAllShops}
          setGetAllShops={setGetAllShops}
        />

        <article className="w-full md:hidden flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-[38px] md:h-12 flex items-center justify-between bg-btnBgColor md:bg-white rounded-xl overflow-hidden border border-searchBgColor font-AeonikProRegular text-base">
            <div className="w-[90%] h-full flex items-center justify-between">
              <input
                type="text"
                name="keywords"
                value={searchMarketName || ""}
                onChange={handleChange}
                onKeyDown={_handleKeyDownSearch}
                className="w-full h-full px-3 text-[12px] xs:text-sm md:text-base  bg-white"
                placeholder={t("search_lang")}
              />
              {searchMarketName && (
                <button onClick={handleClear} className=" px-1" type="button">
                  <MdClose size={20} color={"#a1a1a1"} />
                </button>
              )}
            </div>
            <button
              onClick={() => {
                getSearchClick();
              }}
              type="button"
              className="w-[15%] md:w-[12%] bg-btnBgColor h-full flex items-center justify-center active:scale-95 cursor-pointer border-l border-searchBgColor"
            >
              <SearchIcons colors={"#a1a1a1"} />
            </button>
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
