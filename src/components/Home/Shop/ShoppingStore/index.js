import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { UserRefreshTokenContext } from "../../../../ContextHook/UserRefreshToken";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../Breadcrumbs/Breadcrumbs";

export default function ShoppingStore() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );

  const [loading, setLoading] = useState(false);
  const [getAllShops, setGetAllShops] = useState(true);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const [getGenderID, setGetGenderId] = useState(null);
  const [getSearchInput, setgetSearchInput] = useState(null);

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
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);

    axios
      .get(apiUrl, {
        headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
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
    fetchGetAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getGenderID,
    dressInfo?.mainSearchNameshopMarket,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Electronics', url: '/products/electronics' },
    { label: 'Smartphones', url: '/products/electronics/smartphones' }
  ];
  return (
    <main className="w-full flex flex-col items-center px-4 md:px-0">
      <section className="w-full md:border-b md:border-searchBgColor">
        <Breadcrumbs />
      </section>
      <section className="w-full md:border-b md:border-searchBgColor">
        <ShoppingTop
          // setLoading={setLoading}
          // handleData={handleData}
          // getData={getData}
          setGetAllShops={setGetAllShops}
          getAllShops={getAllShops}
          setError={setError}
          setGetGenderId={setGetGenderId}
          setgetSearchInput={setgetSearchInput}
        />
      </section>
      <section className="w-full">
        <ShoppingBrands
          loading={loading}
          setLoading={setLoading}
        // setGetData={setGetData}
        />
      </section>
    </main>
  );
}
