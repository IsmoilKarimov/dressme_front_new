import { useEffect, useState } from "react";
import { GoBackIcon, MenuCloseIcons, SearchIcons } from "../../../../../assets/icons";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";
// import axios from "axios";
import SearchComponent from "./SearchComponent";
import Cookies from "js-cookie";

const ShoppingTop = () => {
  const [genderId, setGenderId] = useState();
  const [keywords, setKeywords] = useState();
  const [searchInputData, setSearchInputData] = useState();
  const [changeInputIcon, setChangeInputIcon] = useState(true);
  const [getData, setgetData] = useState([]);
  console.log(keywords);

  const apiUrl = "https://api.dressme.uz/api/main/shops";

  function handleGetId(childData) {
    setGenderId(childData?.genderFilterId);
  }

  const fetchGetAllData = (params) => {
    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });
    fetch(`${apiUrl}?` + new URLSearchParams(params), {
      headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setgetData(res);
      })
      .catch((err) => console.log(err, "ERROrLIST"));
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  // this variable should put in onchange event into input
  const onChangeGenderData = debounce(setKeywords, 500);

  useEffect(() => {
    fetchGetAllData({
      gender: genderId,
      keywords: searchInputData,
    });
  }, [genderId, searchInputData]);

  const sendSearchInputData = () => {
    setSearchInputData(keywords);
  };

  console.log(genderId, "genderId");

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center mb-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle handleGetId={handleGetId} />

        <article className="w-full flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-11 flex flex-row-reverse md:flex-row items-center justify-between bg-btnBgColor md:bg-white rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
            <input
              type="text"
              name="keywords"
              onChange={(e) => {
                setKeywords(e.target.value);
              }}
              className="w-[90%] px-3 text-sm md:text-base bg-btnBgColor md:bg-white"
              placeholder="Искать магазины"
            />
            <span className="hidden md:block h-full w-[1px] bg-searchBgColor"></span>
            {changeInputIcon && !searchInputData ? (
              <button
                onClick={() => {
                  setChangeInputIcon(false);
                  sendSearchInputData();
                }}
                type="button"
                className="w-[10%] h-full flex items-center justify-center cursor-pointer"
              >
                <SearchIcons colors={"#a1a1a1"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setChangeInputIcon(true);
                  sendSearchInputData();
                }}
                type="button"
                className="w-[10%] h-full flex items-center justify-center cursor-pointer"
              >
                <MenuCloseIcons width={24} height={24} colors={"#000"} />
              </button>
            )}
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
