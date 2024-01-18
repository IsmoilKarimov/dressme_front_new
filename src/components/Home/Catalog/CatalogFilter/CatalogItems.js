import React, { useContext, useEffect, useState } from "react";
import CatalogCard from "./CatalogElement/CatalogCard";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Popover } from "antd";
import { useQuery } from "@tanstack/react-query";
import { BiChevronDown } from "react-icons/bi";
import CatalogFilterGroup from "./CatalogFilterGroup/CatalogFilterGroup";

export default function CatalogItems() {
  const [dressInfo] = useContext(dressMainData);

  const [filterData, setFilterData] = useState([]);
  const [pageId, setPageId] = useState();

  console.log(filterData,'filter-Data-Category');

  const [data, setData] = useState({});
  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });
  const [selectedSection, setSelectedSection] = useState({
    value: null,
    id: null,
  });

  useEffect(() => {
    if (dressInfo?.openCatalogFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [dressInfo?.openCatalogFilter]);

  const navigate = useNavigate();
  const params = useParams();

  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (value, id) => {
    setState({ ...state, opensports: false });
    setSelectedSection({ value, id });
    navigate(`/catalog/${id}`);
  };

  const url = "https://api.dressme.uz";

  useQuery(
    ["get_catalog_show_data"],
    () => {
      return fetch(`${url}/api/main/category/${params?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          //   "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res);
        setSelectedSection({ ...selectedSection, id: res?.section?.id });
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  const contentCategories = (
    <section className="w-[230px] h-fit max-h-[350px] overflow-y-auto m-0 p-0 VerticelScroll">
      {data?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.name_ru, data?.id);
            }}
            className={`${
              params?.id == data?.id ? "bg-bgColor" : null
            } w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </section>
  );

  // ----- Category change -----

  useEffect(() => {
    if (selectedSection?.id) {
      fetch(`${url}/api/main/category/${selectedSection?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          //   "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((res) => console.log(res));
    } else {
    }
  }, [selectedSection]);

  useEffect(() => {
    fetch(`${url}/api/main/category/${params?.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        //   "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((res) => console.log(res));
  }, [params]);

  return (
    <main className="w-full h-full">
      {/* TOP DATA */}
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <article className="w-[100%] h-fit md:mb-12">
          <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
            <div className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/*  */}
              <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                <div className="absolute w-[80px] md:w-[150px] h-[80px] md:h-[150px] left-[38px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center  bg-white">
                  <img
                    // src={data?.section?.url_photo}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center ml-[112px] md:ml-[210px]">
                  <div className="text-2xl font-AeonikProMedium">
                    {data?.category?.name_ru}
                    <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                      ({data?.category_products?.total})
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
                      // open={state?.opensports}
                      onOpenChange={handleOpenCategories}
                      className="w-[260px] px-4 h-[52px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
                      trigger="click"
                      options={["Hide"]}
                      placement="bottom"
                      content={contentCategories}
                    >
                      <span className="text-[15px] font-AeonikProMedium">
                        {data?.category?.name_ru}
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
        {data?.section?.sub_sections ? (
          <article className="w-full border-b border-searchBgColor">
            <article className="w-full hidden md:block mb-10">
              <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
                {data?.section?.sub_sections?.map((catalog, index) => (
                  <li key={index} className="text-[15px] font-AeonikProMedium">
                    <button className="focus:bg-borderWinter focus:text-white hover:bg-borderWinter hover:text-white bg-white border border-[#f0f0f0] rounded-lg px-[20px] py-[14px]">
                      {catalog.name_ru}
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          </article>
        ) : null}
      </section>

      <section className="flex justify-between mb-10">
        {/* FOR MOBILE VERSION */}
        <article
          className={`w-full h-[100vh] overflow-hidden overflow-y-auto  md:hidden fixed top-0 bottom-0 left-0 right-0 ${
            dressInfo?.openCatalogFilter ? " ml-[1px] " : " ml-[-1000px]"
          }   bg-white z-[105] duration-500`}
        >
          <CatalogFilterGroup />
        </article>

        {/* FOR DESCTOP VERSION */}
        <article className="hidden md:block md:w-[21%] h-full mt-10 ss:px-4 md:px-0 ">
          <CatalogFilterGroup
            setFilterData={setFilterData}
            pageId={pageId}
            filterData={filterData}
          />
        </article>
        <article className="w-full md:w-[78%] h-[full] ss:px-4 md:px-0 ">
          <CatalogCard 
            filterData={filterData} 
            setPageId={setPageId} />
        </article>
      </section>
    </main>
  );
}
