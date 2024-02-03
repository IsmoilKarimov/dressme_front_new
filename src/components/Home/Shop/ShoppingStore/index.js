import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { dressMainData } from "../../../../ContextHook/ContextMenu";

export default function ShoppingStore() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getAllShops, setGetAllShops] = useState(true);
  const [error, setError] = useState();

  const [getGenderID, setGetGenderId] = useState();
  const [getSearchInput, setgetSearchInput] = useState();

  const apiUrl = `https://api.dressme.uz/api/main/shops`;

  const fetchGetAllData = (params) => {
    setLoading(true);
    Object.entries(params).forEach((i) => {
      if (!i[1]) delete params[i[0]];
    });
    axios
      .get(apiUrl, {
        headers: { Authorization: `Token ${Cookies.get("DressmeUserToken")}` },
        params: params,
      })
      .then((res) => {
        setDressInfo({ ...dressInfo, shopsData: res?.data });
        setLoading(false);
      })
      .catch((res) => {
        setError(
          res.response?.data?.message || "An unexpected error occurred."
        );
        setLoading(false);
      });
  };
  // console.log(getData, "getData");
  useEffect(() => {
    if (!dressInfo?.shopsData) {
      fetchGetAllData({
        gender: getGenderID,
        keywords: getSearchInput,
        region: dressInfo?.mainRegionId,
        sub_region: dressInfo?.mainSubRegionId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchGetAllData({
      gender: getGenderID,
      keywords: getSearchInput,
      region: dressInfo?.mainRegionId,
      sub_region: dressInfo?.mainSubRegionId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getGenderID,
    getSearchInput,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
  ]);

  // console.log(getGenderID,
  //   getSearchInput);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <main className="w-full flex flex-col items-center px-4 md:px-0">
      <section className="w-full md:border-b md:border-searchBgColor">
        <ShoppingStoreBreadCrumb />
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
