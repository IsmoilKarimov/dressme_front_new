import React, { useContext, useEffect, useState } from "react";
import CatalogCard from "./CatalogElement/CatalogCard";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import CatalogTopFilter from "./CatalogTop/CatalogTopFilter";
import FilterList from "./CatalogFilterGroup/FilterList/FilterList";
import { SortIcons } from "../../../../assets/icons";

export default function CatalogItems() {
  const [dressInfo] = useContext(dressMainData);

  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState();
  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });

  const [getGenderId, setGetGenderId] = useState(null);
  const [getCategory, setGetCategory] = useState(null);
  const [getRating, setGetRating] = useState(null);
  const [getRange, setGetRange] = useState(null);
  const [dataColor, setDataColor] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [getOutWearList, setGetOutWearList] = useState(null);
  const [getUnderWearList, setGetUnderWearList] = useState(null);
  const [getFootWearList, setGetFootWearList] = useState(null);
  const [filterToggle, setFilterToggle] = useState(false);

  const handleToggle = () => {
    if (filterToggle) {
      setFilterToggle(false);
    } else {
      setFilterToggle(true);
    }
  };
  const genderId = (childData) => {
    setGetGenderId(childData);
    setPageId(1);
  };
  function discountId(childData) {
    setDiscount(childData);
    setPageId(1);
  }
  const categoryId = (childData) => {
    setGetCategory(childData);
    setPageId(1);
  };
  const getBadgePrice = (childData) => {
    setGetRange(childData);
    setPageId(1);
  };
  const getRatingList = (childData) => {
    setGetRating(childData);
    setPageId(1);
  };
  const outWearList = (childData) => {
    setGetOutWearList(childData);
    setPageId(1);
  };
  const underWearList = (childData) => {
    setGetUnderWearList(childData);
    setPageId(1);
  };
  const footWearList = (childData) => {
    setGetFootWearList(childData);
    setPageId(1);
  };

  useEffect(() => {
    if (dressInfo?.openCatalogFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCatalogFilter]);

  const navigate = useNavigate();
  const paramId = useParams();

  console.log(paramId?.id, " id");

  const newId = paramId?.id?.replace(":", "");

  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (id) => {
    setState({ ...state, opensports: false });
    navigate(`/catalog/${id}`);
  };
  const contentCategories = (
    <section className="w-[230px] h-fit max-h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {filterData?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.id);
            }}
            className={`${
              Number(paramId?.id) === data?.id ? "bg-bgColor" : null
            } w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </section>
  );

  const apiUrl = `https://api.dressme.uz/api/main/category/${newId}`;

  function fetchGetAllData() {
    let params = new URLSearchParams();
    params.append("region", dressInfo?.mainRegionId);
    dressInfo?.mainSubRegionId &&
      params.append("sub_region", dressInfo?.mainSubRegionId);
    getGenderId && params.append("gender", getGenderId);
    discount && params.append("discount", discount);
    getCategory && params.append("category", getCategory);
    getRating && params.append("rating", getRating);
    getFootWearList?.wear_size &&
      params.append("footwear_size", getFootWearList?.wear_size);
    // OUTWEAR SIZES
    getOutWearList?.letter_size &&
      params.append("outwear_size[letter_size]", getOutWearList?.letter_size);
    !getOutWearList?.letter_size &&
      getOutWearList?.min_wear_size &&
      params.append(
        "outwear_size[min_wear_size]",
        getOutWearList?.min_wear_size
      );
    !getOutWearList?.letter_size &&
      getOutWearList?.max_wear_size &&
      params.append(
        "outwear_size[max_wear_size]",
        getOutWearList?.max_wear_size
      );

    // UNDERWEAR SIZES
    getUnderWearList?.letter_size &&
      params.append(
        "underwear_size[letter_size]",
        getUnderWearList?.letter_size
      );
    !getUnderWearList?.letter_size &&
      getUnderWearList?.min_wear_size &&
      params.append(
        "underwear_size[min_wear_size]",
        getUnderWearList?.min_wear_size
      );
    !getUnderWearList?.letter_size &&
      getUnderWearList?.max_wear_size &&
      params.append(
        "underwear_size[max_wear_size]",
        getUnderWearList?.max_wear_size
      );

    pageId && params.append("page", pageId);

    getRange?.min && params.append("budget[from]", getRange?.min);
    getRange?.max && params.append("budget[to]", getRange?.max);
    dataColor?.length > 0 &&
      dataColor?.forEach((e, index) => {
        params.append("colors[]", dataColor[index]);
      });

    fetch(`${apiUrl}?` + params)
      .then((res) => res.json())
      .then((res) => {
        setFilterData(res);
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  }
  useEffect(() => {
    fetchGetAllData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    newId,
    pageId,
    getGenderId,
    getCategory,
    getRating,
    getRange,
    dataColor,
    discount,
    getOutWearList,
    getUnderWearList,
    getFootWearList,
    dressInfo?.mainRegionId,
    dressInfo?.mainSubRegionId,
  ]);


  return (
    <main className="w-full h-full">
      {/* TOP DATA */}
      <section className="w-full h-full">
        <CatalogTopFilter />
      </section>
      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
        <article className="w-[100%] h-fit ">
          <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
            <article className="w-[100%]  h-fit md:mb-12">
              <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
                <div className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
                  {/*  */}
                  <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                    <div
                      style={{
                        backgroundImage: `url("${filterData?.category?.url_photo}")`,
                        backgroundPosition: "center center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[160px] overflow-hidden  left-[38px] md:left-[40px] rounded-xl border border-searchBgColor flex items-center justify-center  bg-white"
                    >
                      {/* <img
                        src={filterData?.category?.url_photo}
                        alt="url_photo"
                        className="w-full h-full rounded-xl object-contain"
                      /> */}
                    </div>
                    <div className="flex items-center ml-[112px] md:ml-[210px]">
                      <div className="text-2xl font-AeonikProMedium">
                        {filterData?.category?.name_ru}
                        <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                          ({filterData?.category_products?.total})
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full md:w-fit flex items-center justify-between md:mr-5  mt-6 md:mt-0">
                    <div className="flex items-center">
                      <NavLink className="hidden md:flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                        По категории
                      </NavLink>
                      <div className="md:flex items-center hidden">
                        <Popover
                          open={state?.opensports}
                          onOpenChange={handleOpenCategories}
                          className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                          trigger="click"
                          options={["Hide"]}
                          placement="bottom"
                          content={contentCategories}
                        >
                          <span className="text-[15px] font-AeonikProMedium">
                            {filterData?.category?.name_ru}
                          </span>
                          <span>
                            <BiChevronDown
                              size={22}
                              style={{ color: "#000" }}
                              className={`${
                                state?.opensports ? "rotate-[-180deg]" : ""
                              } duration-200`}
                            />
                          </span>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </article>
            {filterData?.section?.sub_sections ? (
              <article className="w-full border-b border-searchBgColor">
                <article className="w-full hidden md:block mb-10">
                  <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
                    {filterData?.section?.sub_sections?.map(
                      (catalog, index) => (
                        <li
                          key={index}
                          className="text-[15px] font-AeonikProMedium"
                        >
                          <button className="focus:bg-borderWinter focus:text-white hover:bg-borderWinter hover:text-white bg-white border border-[#f0f0f0] rounded-lg px-[20px] py-[14px]">
                            {catalog.name_ru}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </article>
              </article>
            ) : null}
          </section>
          <div className="w-full flex items-center ">
            <button
              onClick={handleToggle}
              type="button"
              className="w-[175px] gap-x-2 h-[44px] border border-[#F2F2F2] flex items-center justify-center  bg-white rounded-lg active:scale-95	active:opacity-70"
            >
              <span className="">
                {" "}
                <SortIcons />
              </span>
              {filterToggle ? (
                <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                  {" "}
                  Скрыть
                </p>
              ) : (
                <p className="not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                  {" "}
                  Фильтр
                </p>
              )}
            </button>
          </div>

          <section className="flex justify-between mb-10 ">
            {/* FOR MOBILE VERSION */}
            <article
              className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${
                dressInfo?.openCatalogFilter ? " ml-[1px] " : " ml-[-1000px]"
              }   bg-white z-[105] duration-500 `}
            >
              {/* <CatalogFilterGroup paramId={newId} /> */}
            </article>

            {/* FOR DESCTOP VERSION */}
            <article
              className={`${
                filterToggle ? "md:block" : "md:hidden"
              } hidden  md:w-[22%] h-full pt-10 ss:px-4 md:px-0`}
            >
              {/* <CatalogFilterGroup
                setFilterData={setFilterData}
                pageId={pageId}
                filterData={filterData}
                paramId={newId}
              /> */}
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
                setFilterToggle={setFilterToggle}
              />
            </article>
            <article
              className={`${
                filterToggle ? "md:w-[77%]" : "md:w-[100%]"
              } w-full h-full ss:px-4 md:px-0`}
            >
              <CatalogCard filterData={filterData} setPageId={setPageId} />
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
