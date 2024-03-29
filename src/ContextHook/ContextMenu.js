import { createContext, useState, useEffect } from "react";
import { NoImg } from "../assets/icons";
export const dressMainData = createContext();

export const DressMenu = ({ children }) => {
  const [dressInfo, setDressInfo] = useState({
    type: 5555,
    ClothesBorder: 1,
    PageSetModal: false,
    yandexOpenMenu: false,
    yandexOpenMarket: false,
    openMainMenu: true,
    yandexFullScreen: false,
    yandexOpenMarketLocation: false,
    yandexGetMarketId: null,
    yandexCategoryWear: null,
    yandexCategoryBrand: null,
    yandexRangePrice: [],
    yandexGenderId: 0,

    // for post refetch

    state: 0,

    // Cordinate
    yandexPositionX: null,
    yandexPositionY: null,
    yandexOpenRegionList: false,

    // Category
    openCategoryFilter: false,
    mainSearchNameCategory: null,
    // Catalog
    openCatalogFilter: false,
    mainSearchNameCatalog: null,
    // Shop/:Id
    openShopIdFilter: false,
    locationIdParams: null,
    mainSearchNameshop: null,
    mainSearchNameshopLocation: null,
    mainSearchNameshopMarket: null,

    // Catolog/:Id
    openCatologId: false,

    // colorFull
    BtnSeason: "",
    BtnOpacitySeason: "",
    BtnFocusSeason: "",
    ColorSeason: "",
    TextHoverSeason: "",
    TextColorSeason: "",
    LinkActiveSeason: "",
    BtnActiveSeason: "",
    AuthenActiveSeason: "",
    // BottomComponentProducts
    mainCardProducts: [],
    mainSearchName: null,
    mainRegionId: 2,
    mainSubRegionId: null,
    mainColorId: null,
    mainColorHex: null,
    mainCategoryId: null,
    mainGenderId: 0,
    mainRangePrice: [],
    // mainRegionsList: [],
    // -------for Shops
    shopsData: null,
    filterDataProductList: null,
    // --- for Product showPage
    linkedFrom: "mainPageProductList",
    productShowSelectedLocation: {},
    ProductList: [],
    searchProduct: "",
  });
  return (
    <dressMainData.Provider value={[dressInfo, setDressInfo]}>
      {children}
    </dressMainData.Provider>
  );
};
