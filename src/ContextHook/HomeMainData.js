import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    getMainProductCard: [],
    products: [],
    loader: false,
    btnLoader: false,
    mainRegionsList: JSON.parse(localStorage.getItem("regions")),
    selectedLoc: "changed",
  });
  const [page, setPage] = useState(1);

  let WishlistDataFromCookies = Cookies.get("WishList");
  let oldWishlistDataFromCookies = Cookies.get("oldWishList");

  let list = [];
  let oldList = [];

  if (WishlistDataFromCookies) {
    list = JSON.parse(WishlistDataFromCookies);
  }
  if (oldWishlistDataFromCookies) {
    oldList = JSON.parse(oldWishlistDataFromCookies);
  }

  const [wishList, setWishlist] = useState(list);
  const [oldWishList, setOldWishlist] = useState(oldList);

  if (localStorage?.getItem("userAccess")) {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
    Cookies.set("oldWishList", JSON.stringify(oldWishList), { expires: 99999 });
  } else {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
    Cookies.set("oldWishList", JSON.stringify(oldWishList), { expires: 2 });
  }

  useEffect(() => {
    const included = [];

    if (data?.products?.length) {
      data?.products?.forEach((item) => {
        if (list?.includes(item?.id)) {
          included.push(item?.id);
        } else if (oldList?.includes(item?.id)) {
          included.push(item?.id);
        }
      });

      setWishlist(included);
    }
  }, [data?.products]);

  useEffect(() => {
    let unique = new Set([...oldWishList, ...wishList]);

    setOldWishlist([...unique]);
  }, [wishList]);

  return (
    <HomeMainDataContext.Provider
      value={[
        data,
        setData,
        wishList,
        setWishlist,
        page,
        setPage,
        oldWishList,
        setOldWishlist,
      ]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
