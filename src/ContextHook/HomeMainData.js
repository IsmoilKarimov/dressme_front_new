import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    getMainProductCard: [],
    products: [],
    loader: false,
    btnLoader: false,
    mainRegionsList: [],
    selectedLoc: "changed",
  });
  const [page, setPage] = useState(1);

  let WishlistDataFromCookies = Cookies.get("WishList");

  let list = [];

  if (WishlistDataFromCookies) {
    list = JSON.parse(WishlistDataFromCookies);
  }

  console.log(list);

  const [wishList, setWishlist] = useState(list);

  if (localStorage?.getItem("userAccess")) {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
  } else {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
  }

  useEffect(() => {
    const included = [];

    if (data?.products?.length) {
      data?.products?.forEach((item) => {
        console.log(item?.id);
        if (list?.includes(item?.id)) {
          included.push(item?.id);
        }
      });

      setWishlist(included);
    }
  }, [data?.products]);

  return (
    <HomeMainDataContext.Provider
      value={[data, setData, wishList, setWishlist, page, setPage]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
