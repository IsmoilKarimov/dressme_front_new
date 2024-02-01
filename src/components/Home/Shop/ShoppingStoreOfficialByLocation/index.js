import React, { useContext, useEffect, useState } from "react";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import LocationOfYandex from "../../Products/SignleMainProducts/SingleProduct/Product_Detail/LocationOfYandex/LocationOfYandex";
import ShowPageComment from "./ShowPageComment/ShowPageComment";
import { GoBackIcon } from "../../../../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import ShopOfficialCard from "./ShoppingStoreCategory/ShopOfficialCards/ShopOfficialCard";
import FilterList from "./ShoppingStoreCategory/FilterList/FilterList";
import axios from "axios";
import LoadingNetwork from "../../../Loading/LoadingNetwork";

const ShoppingStoreOfficialByLocation = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, setData] = useContext(HomeMainDataContext);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getLocationId, setGetLocationId] = useState(false);
  const [openTabComment, setOpenTabComment] = useState(false);
  const [openTabLocation, setOpenTabLocation] = useState(false);
  const [filteredData, setFilteredData] = useState()
  const [pageId, setPageId] = useState(1)

  const [getGenderId, setGetGenderId] = useState(null)
  const [getCategory, setGetCategory] = useState(null)
  const [getRating, setGetRating] = useState(null)
  const [getRange, setGetRange] = useState(null)
  const [dataColor, setDataColor] = useState([])
  const [discount, setDiscount] = useState(false)
  const [getOutWearList, setGetOutWearList] = useState(null)
  const [getUnderWearList, setGetUnderWearList] = useState(null)
  const [getFootWearList, setGetFootWearList] = useState(null)
  const [filterToggle, setFilterToggle] = useState(false)

  const toggleFilterOpen = React.useCallback(() => setFilterToggle(true), []);
  const toggleFilterClose = React.useCallback(() => setFilterToggle(false), []);

  useEffect(() => {
    if (dressInfo?.openShopIdFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openShopIdFilter]);

  const genderId = (childData) => {
    setGetGenderId(childData)
    setPageId(1)
  }
  function discountId(childData) {
    setDiscount(childData)
    setPageId(1)
  }
  const categoryId = (childData) => {
    setGetCategory(childData)
    setPageId(1)
  }
  const getBadgePrice = (childData) => {
    setGetRange(childData)
    setPageId(1)
  }
  const getRatingList = (childData) => {
    setGetRating(childData)
    setPageId(1)
  }
  const outWearList = (childData) => {
    setGetOutWearList(childData)
    setPageId(1)
  }
  const underWearList = (childData) => {
    setGetUnderWearList(childData)
    setPageId(1)
  }
  const footWearList = (childData) => {
    setGetFootWearList(childData)
    setPageId(1)
  }

  // console.log(pageId, "pageId,");
  const clickButtons = {
    openTabComment,
    setOpenTabComment,
    openTabLocation,
    setOpenTabLocation,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const navigate = useNavigate()
  const { id } = useParams();
  const newId = id.replace(":", "");


  const url = `https://api.dressme.uz/api`;

  const fetchGetAllData = () => {
    setLoading(true)
    let params = new URLSearchParams();
    params.append("location_id", dressInfo?.locationIdParams);
    getGenderId && params.append("gender", getGenderId);
    discount && params.append("discount", discount);
    getCategory && params.append("category", getCategory);
    getRating && params.append("rating", getRating);
    getFootWearList?.wear_size && params.append("footwear_size", getFootWearList?.wear_size);
    // OUTWEAR SIZES
    getOutWearList?.letter_size &&
      params.append("outwear_size[letter_size]", getOutWearList?.letter_size);
    !getOutWearList?.letter_size && getOutWearList?.min_wear_size &&
      params.append("outwear_size[min_wear_size]", getOutWearList?.min_wear_size);
    !getOutWearList?.letter_size && getOutWearList?.max_wear_size &&
      params.append("outwear_size[max_wear_size]", getOutWearList?.max_wear_size);
    // UNDERWEAR SIZES
    getUnderWearList?.letter_size &&
      params.append("underwear_size[letter_size]", getUnderWearList?.letter_size);
    !getUnderWearList?.letter_size && getUnderWearList?.min_wear_size &&
      params.append("underwear_size[min_wear_size]", getUnderWearList?.min_wear_size);
    !getUnderWearList?.letter_size && getUnderWearList?.max_wear_size &&
      params.append("underwear_size[max_wear_size]", getUnderWearList?.max_wear_size);
    pageId && params.append("page", pageId);
    getRange?.min &&
      params.append("budget[from]", getRange?.min);
    getRange?.max &&
      params.append("budget[to]", getRange?.max);
    dataColor?.length > 0 &&
      dataColor?.forEach((e, index) => {
        params.append("colors[]", dataColor[index]);
      });

    axios.get(`${url}/main/shops/${newId}?`, {
      params: params,
    })
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          setLoading(false)
          setFilteredData(res?.data)
        }
      })
      .catch((res) => {
        if (res?.response?.status === 422) {
          navigate('/')
          setLoading(false)

        }
        setError(res.response?.data?.message || 'An unexpected error occurred.');
      })


  };
  useEffect(() => {
    fetchGetAllData()
  }, [
    pageId,
    discount,
    dataColor,
    getGenderId,
    discount,
    getCategory,
    getUnderWearList,
    getOutWearList,
    getFootWearList,
    getRating, getRange, dressInfo?.locationIdParams])
  // console.log(filteredData, "filteredData");

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
      {loading ? <LoadingNetwork />
        : <div className="w-full">
          <section className="w-full border-b border-searchBgColor ">
            <ShoppingStoreOfficialBreadCrumb name={filteredData?.shop?.name} paramsId={newId} />
          </section>
          <section className="w-full border-searchBgColor ">
            <ShoppingStoreOfficialTop
              clickButtons={clickButtons}
              filteredData={filteredData}
              toggleFilterLeftOpen={toggleFilterOpen}
              toggleFilterLeftClose={toggleFilterClose}
              filterLeftAction={filterToggle}
            />
          </section>
          <section className="w-full flex items-center justify-center ">
            <div className="w-full flex flex-col items-center justify-center">
              {/* Products Section */}
              <article
                className={`${openTabComment || openTabLocation ? "hidden" : "block"
                  } w-full `}
              >
                {/* <ShoppingStoreCategory filteredData={filteredData} /> */}
                <section className="w-[100%] h-fit">
                  <section className="w-full flex flex-gap-6 justify-between md:my-10 my-3">
                    <div className={`${filterToggle ? "md:block" : "md:hidden"} hidden  md:w-[22%] h-full ss:px-4 md:px-0 `}>
                      <FilterList
                        paramsId={newId}
                        genderId={genderId}
                        discountId={discountId}
                        categoryId={categoryId}
                        getBadgePrice={getBadgePrice}
                        setDataColor={setDataColor}
                        dataColor={dataColor}
                        getRatingList={getRatingList}
                        outWearList={outWearList}
                        underWearList={underWearList}
                        footWearList={footWearList}
                        filterToggle={filterToggle}
                        setPageId={setPageId}
                      />
                    </div>
                    {/* <div
                  className={`w-full h-[100vh] overflow-hidden overflow-y-auto md:hidden   fixed top-0 bottom-0 left-0 right-0
                   ${dressInfo?.openShopIdFilter ? " ml-[1px] " : " ml-[-1000px]"}
                   ${filterToggle ? "" : "hidden"} 
                    bg-white z-[105] duration-500`}
                >
                  <FilterList paramsId={newId} />
                </div> */}
                    <div className={` ${filterToggle ? 'md:w-[77%]' : "md:w-[100%]"} w-full h-full ss:px-4 md:px-0`}>
                      {filteredData ?
                        <ShopOfficialCard
                          filteredData={filteredData}
                          setPageId={setPageId}
                        /> : <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[100vh] ">
                          Ничего не найдено
                        </div>}
                    </div>
                  </section>
                </section>
              </article>

              {/* Comment Section For Shopping Page */}
              <div className={`${openTabComment ? "block" : "hidden"} w-full `}>
                <ShowPageComment
                  filteredData={filteredData}
                  setOpenTabComment={setOpenTabComment}
                />
              </div>

              {/* Map Section */}
              <div
                className={`${openTabLocation ? "block" : "hidden"
                  } w-full text-3xl px-4 pb-10`}
              >
                <button
                  onClick={() => {
                    setOpenTabLocation(false);
                  }}
                  className={`flex items-center cursor-pointer justify-start md:justify-center md:border border-borderColor2 rounded-lg mr-20 md:mt-4 md:mr-5`}
                >
                  <GoBackIcon />
                </button>
                <LocationOfYandex />
              </div>
            </div>
          </section>
        </div>}
    </main>
  );
};

export default React.memo(ShoppingStoreOfficialByLocation);