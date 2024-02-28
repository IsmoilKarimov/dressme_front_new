import { useEffect, useState } from "react";
import { SearchIcons } from "../../../../../assets/icons";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";
import { MdClose } from "react-icons/md";
const ShoppingTop = ({
  getAllShops,
  setGetAllShops,
  setGetGenderId,
  setgetSearchInput,
}) => {
  const [keywords, setKeywords] = useState();
  const [, setSearchInputData] = useState();
  const [changeInputIcon, setChangeInputIcon] = useState(true);

  function handleGetId(childData) {
    // setGenderId(childData?.genderFilterId);
    setGetGenderId(childData?.genderFilterId);
  }

  const sendSearchInputData = () => {
    setSearchInputData(keywords);
    setgetSearchInput(keywords);
  };

  useEffect(() => {
    setChangeInputIcon(false);
  }, [keywords]);

  const removeSearchInputData = () => {
    setgetSearchInput("");
    setSearchInputData("");
    setKeywords("");
  };

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center mb-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle
          handleGetId={handleGetId}
          getAllShops={getAllShops}
          setGetAllShops={setGetAllShops}
        />

        <article className="w-full  flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-12 flex items-center justify-between bg-btnBgColor md:bg-white rounded-xl overflow-hidden border border-searchBgColor font-AeonikProRegular text-base">
            <div className="w-[90%] h-full flex items-center justify-between">
              <input
                type="text"
                name="keywords"
                value={keywords}
                onChange={(e) => {
                  setKeywords(e.target.value);
                }}
                className="w-full h-full px-3 text-sm md:text-base  bg-white"
                placeholder="Искать магазины"
              />
              {keywords && (
                <button
                  onClick={removeSearchInputData}
                  className=" mr-1"
                  type="button"
                >
                  <MdClose size={20} color={"#a1a1a1"} />
                </button>
              )}
            </div>
            <button
              onClick={() => {
                setChangeInputIcon(true);
                sendSearchInputData();
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
