import Cookies from "js-cookie";
import { createContext,  useState } from "react";

export const HomeMainDataContext = createContext();

export const HomeMainDataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    getMainProductCard: [],
    products: [],
    loader: true,
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

  const [wishList, setWishlist] = useState(list);

  if (Cookies.get("DressmeUserToken")) {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 99999 });
  } else {
    Cookies.set("WishList", JSON.stringify(wishList), { expires: 2 });
  }

  return (
    <HomeMainDataContext.Provider
      value={[data, setData, wishList, setWishlist, page, setPage]}
    >
      {children}
    </HomeMainDataContext.Provider>
  );
};
