import { useState } from "react";
import { SearchIcons } from "../../../../../assets/icons";
import { useHttp } from "../../../../../hook/useHttp";
import GenderButtonsStyle from "../GenderButtonsStyle/GenderButtonsStyle";
import { useQuery } from "@tanstack/react-query";

const ShoppingTop = () => {
  const { request } = useHttp();
  const [searchData, setSearchData] = useState();
  const [state, setState] = useState({
    // searchData: null,
    genderId: null,
    baby: null,
  });

  const [genderFilter, setGenderFilter] = useState(null);
  function handleGetId(childData) {
    setGenderFilter(childData?.genderFilterId);
    // useQuery(
    //   ["magazin"],
    //   () => {
    //     return request({ url: `/main/shops/${genderFilter}`, token: true });
    //   },
    //   {
    //     onSuccess: (res) => {
    //       console.log(res);
    //       // setState({
    //       //   ...state,
    //       //   searchData: res?.shop?.name,
    //       // });
    //     },
    //     onError: (err) => {
    //       console.log(err, "err getDelivery-method");
    //     },
    //     keepPreviousData: true,
    //     refetchOnWindowFocus: false,
    //   }
    // );
  }
  
  console.log(genderFilter, "genderFilter");

  // ------------GET Has Shops ?-----------------
  useQuery(
    ["magazin"],
    () => {
      return request({ url: `/main/shops?gender=${genderFilter}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res,"RESPONSE GENDER");
        setState({
          ...state,
          searchData: res?.shop?.name,
        });
      },
      onError: (err) => {
        console.log(err, "err getDelivery-method");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  

  return (
    <main className="flex flex-col min-h-[44px] justify-center items-center mb-5 md:my-4">
      <section className="md:max-w-[1280px] w-[100%] flex flex-col md:flex-row items-center justify-between m-auto">
        <GenderButtonsStyle handleGetId={handleGetId} />

        <article className="w-full flex items-center mt-3 md:mt-0 md:justify-end">
          <article className="w-[400px] h-11 flex flex-row-reverse md:flex-row items-center justify-between bg-btnBgColor md:bg-white rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
            <input
              type="text"
              onChange={(e) => setSearchData(e.target.value)}
              className="w-[90%] px-3 text-sm md:text-base bg-btnBgColor md:bg-white"
              placeholder="Искать магазины"
            />
            <span className="hidden md:block h-full w-[1px] bg-searchBgColor"></span>
            <div className=" w-[10%] h-full flex items-center justify-center cursor-pointer">
              <SearchIcons colors={"#a1a1a1"} />
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
