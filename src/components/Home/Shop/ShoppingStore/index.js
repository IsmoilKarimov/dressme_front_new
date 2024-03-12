import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { UserRefreshTokenContext } from "../../../../ContextHook/UserRefreshToken";
import { useNavigate } from "react-router-dom";
import NewBreadCrump from "../../../Breadcrumbs/NewBreadCrump";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../../ContextHook/SeasonContext";

export default function ShoppingStore() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
  const [seasonDetector, setSeasonDetector] = useContext(SaesonDetectorDress)

  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );

  const [loading, setLoading] = useState(false);
  const [getAllShops, setGetAllShops] = useState(true);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const [getGenderID, setGetGenderId] = useState(null);
  const [getSearchInput, setgetSearchInput] = useState(null);

  const typeFilter = String(seasonDetector?.typeId)?.split("");
  const seasonId = Number(typeFilter?.shift());

  const apiUrl = `https://api.dressme.uz/api/main/shops`;

  const fetchGetAllData = () => {
    setLoading(true);
    let params = new URLSearchParams();
    getGenderID &&
      params.append("gender", getGenderID);
    dressInfo?.mainSearchNameshopMarket &&
      params.append("keywords", dressInfo?.mainSearchNameshopMarket);
    dressInfo?.mainRegionId && !dressInfo?.mainSubRegionId &&
      params.append("region", dressInfo?.mainRegionId);
    seasonId !== 5 && params.append("season", seasonId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);

    axios
      .get(apiUrl, {
        headers: {
          'Accept-Language': languageDetector?.typeLang,
          Authorization: `Token ${Cookies.get("DressmeUserToken")}`
        },
        params: params,
      })
      .then((res) => {
        setDressInfo({ ...dressInfo, shopsData: res?.data });
        setLoading(false);
      })
      .catch((err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          reFreshTokenFunc();
          fetchGetAllData();
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
        }
        setError(
          err.response?.data?.message || "An unexpected error occurred."
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchGetAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getGenderID,
    dressInfo?.mainSearchNameshopMarket,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
    languageDetector?.typeLang,
    seasonId,
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const breadcrumbItems = [
    { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
    { label_uz: "Do'konlar", label_ru: 'Магазины', url: '/shops' },
  ];

  return (
    <main className="w-full flex flex-col items-center px-4 md:px-0">
      <div className="w-full border-b border-searchBgColor justify-center md:mt-3 px-4 md:px-0">
        <section className="w-full max-w-[1280px] flex items-center py-3 md:py-5 mx-auto ">
          <NewBreadCrump items={breadcrumbItems} />
        </section>
      </div>
      <section className="w-full md:border-b md:border-searchBgColor">
        <ShoppingTop
          setGetAllShops={setGetAllShops}
          getAllShops={getAllShops}
          setGetGenderId={setGetGenderId}
          setgetSearchInput={setgetSearchInput}
        />
      </section>
      <section className="w-full">
        <ShoppingBrands
          loading={loading}
          setLoading={setLoading}
        />
      </section>
    </main>
  );
}
