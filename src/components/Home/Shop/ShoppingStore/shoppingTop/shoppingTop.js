import { useEffect, useState } from "react";
import { MenuCloseIcons, SearchIcons } from "../../../../../assets/icons";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";
// import axios from "axios";
import Cookies from "js-cookie";

const ShoppingTop = ({handleData,getAllShops,setGetAllShops,setLoading}) => {
  const [genderId, setGenderId] = useState();
  const [keywords, setKeywords] = useState();
  
  const [searchInputData, setSearchInputData] = useState();
  const [changeInputIcon, setChangeInputIcon] = useState(true);

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
        handleData(res);
        setLoading(false)
      }).then(res => setLoading(false))
      .catch((err) => console.log(err, "ERRORLIST"));
  };

  useEffect(() => {
    fetchGetAllData({
      gender: genderId,
      keywords: searchInputData,
    });
  }, [genderId, searchInputData]);

  const sendSearchInputData = () => {
    setSearchInputData(keywords);
  };

  useEffect(()=>{
    setChangeInputIcon(false)
  },[keywords])

  const removeSearchInputData = () => {
    setSearchInputData('');
    setKeywords('')
    console.log(keywords,"keywords");
  };

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center mb-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle handleGetId={handleGetId} getAllShops={getAllShops} setGetAllShops={setGetAllShops}/>

        <article className="w-full flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-11 flex flex-row-reverse md:flex-row items-center justify-between bg-btnBgColor md:bg-white rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
            <input
              type="text"
              name="keywords"
              value={keywords}
              onChange={(e) => {
                setKeywords(e.target.value);
              }}
              className="w-[90%] px-3 text-sm md:text-base bg-btnBgColor md:bg-white"
              placeholder="Искать магазины"
            />
            <span className="hidden md:block h-full w-[1px] bg-searchBgColor"></span>
            {changeInputIcon ? (
              <button
                onClick={() => {
                  setChangeInputIcon(false);
                  removeSearchInputData();
                }}
                type="button"
                className="w-[10%] h-full flex items-center justify-center cursor-pointer"
              >
                <MenuCloseIcons width={24} height={24} colors={"#000"} />
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
                 <SearchIcons colors={"#a1a1a1"} />
              </button>
            )}
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
