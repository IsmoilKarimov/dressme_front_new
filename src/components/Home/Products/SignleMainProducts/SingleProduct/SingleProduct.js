import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCarousel } from "./Product_Carousel/ProductCarousel";
import { ProductDetails } from "./Product_Detail/ProductDetails";
import { SingleProductTop } from "../SingleProductTop/SingleProductTop";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";

import ProductComment from "./ProductComment/ProductComment";
import { HomeMainDataContext } from "../../../../../ContextHook/HomeMainData";
import { CollectionCardItem } from "../../../Main/WearCollectionCard/CollectionCardItem";
import LoadingNetwork from "../../../../Loading/LoadingNetwork";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SingleProduct = ({ breadShops, oncallProductName }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [data, mainData, , wishList, setWishlist] =
    useContext(HomeMainDataContext);
  const [openWearType, setOpenWearType] = useState(false);

  const { t } = useTranslation("products");

  const [show, setShow] = useState(true);
  const [scrollPost, setscrollPost] = useState(0);

  // ----------------NavMenu----------------
  const [ShowNavMenu, setShowNavMenu] = useState(true);
  const [ScrollPostNavMenu, setScrollPostNavMenu] = useState(0);

  // ----------------NavBar----------------
  const handleScroll = () => {
    setscrollPost(document.body.getBoundingClientRect().top);
    if (parseInt(Math.abs(scrollPost)) > 300) {
      setShow(document.body.getBoundingClientRect().top > scrollPost);
    }
  };

  // ----------------NavMenu----------------
  const handleScrollNavMenu = () => {
    setScrollPostNavMenu(document.body.getBoundingClientRect().top);
    setShowNavMenu(
      document.body.getBoundingClientRect().top < ScrollPostNavMenu
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollNavMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollNavMenu);
    };
  }, [show, scrollPost, ShowNavMenu, ScrollPostNavMenu]);

  // ------------GET METHOD Main data ------------------------------------------------

  const url = "https://api.dressme.uz";

  const paramsId = useParams();
  const [singleDataForCopy, setSingleDataForCopy] = useState();
  const [singleData, setSingleData] = useState();
  useEffect(() => {
    oncallProductName(singleData?.product?.name_ru);
  }, [singleData?.product]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (paramsId?.product) {
      axios(`${url}/api/main/products/${paramsId?.product}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => {
          setSingleData(res.data);
          setSingleDataForCopy(res.data);

          setLoading(false);
          // console.log(res, 'singlepage res');
        })
        .catch((error) => {
          setLoading(false);
          // console.log(error, 'singlepage error');
          throw new Error(error || "something wrong");

        });
    }
  }, [paramsId?.product]);

  const refetch = () => {
    setLoading(true);
    axios(`${url}/api/main/products/${paramsId?.product}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setSingleData(res.data);
        setSingleDataForCopy(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
        throw new Error(error || "something wrong");

      });
  };

  // ---------------------------

  useEffect(() => {
    if (openWearType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openWearType]);

  const sameTypeData = mainData?.products?.data
    ?.filter(
      (item) =>
        item?.type_id === singleData?.product?.type_id &&
        item?.id !== singleData?.product?.id
    )
    ?.slice(0, 6);
  // region_id sub_region_id
  useEffect(() => {
    singleDataForCopy?.product?.locations?.map((item) => {
      if (item?.region_id == dressInfo?.mainRegionId) {
        if (
          dressInfo?.mainSubRegionId &&
          Number(item?.sub_region_id) !== dressInfo?.mainSubRegionId
        ) {
          setSingleData(null);
        }
        if (
          dressInfo?.mainSubRegionId &&
          Number(item?.sub_region_id) === dressInfo?.mainSubRegionId
        ) {
          setSingleData(singleDataForCopy);
        }
        if (!dressInfo?.mainSubRegionId) {
          setSingleData(singleDataForCopy);
        }
      }
    });
  }, [dressInfo?.mainSubRegionId, dressInfo?.mainRegionId]);

  return (
    <main className="flex flex-col m-0 p-0 box-border">
      {loading ? (
        <LoadingNetwork />
      ) : (
        <div className="w-full">
          <section>
            <SingleProductTop data={singleData} breadShops={breadShops} />
          </section>
          <section className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto border-box mb-10 md:mb-[0px] ">
            {singleData ? (
              <div className="w-full">
                <section className="w-[100%] h-fit mt-4 md:mt-6 flex justify-between flex-col md:flex-row  md:px-0 ">
                  <section className={`md:w-1/2`}>
                    <ProductCarousel show={show} data={singleData} />
                  </section>
                  <section className="w-full md:w-1/2 h-full ">
                    <ProductDetails shopsData={data} data={singleData} />
                  </section>
                </section>
                {/* Products Comment */}
                {singleData?.product?.ratings?.length ? (
                  <section className="md:mt-20 w-full">
                    <ProductComment data={singleData} refetch={refetch} />
                  </section>
                ) : null}
                {sameTypeData?.length ? (
                  <section className="w-full h-fit">
                    <article className="w-full mt-[34px] md:mt-[60px] md:mb-[60px]">
                      <div className="md:mb-4">
                        <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black mb-3 md:mb-0">
                          {t("similar_products")}
                        </p>
                      </div>
                      <article className="flex flex-wrap justify-between md:justify-start md:mx-0  gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
                        {sameTypeData?.map((data) => {
                          return (
                            <CollectionCardItem
                              key={data?.id}
                              data={data}
                              setOpenWearType={setOpenWearType}
                              wishList={wishList}
                              setWishlist={setWishlist}
                            />
                          );
                        })}
                      </article>
                    </article>
                  </section>
                ) : null}
              </div>
            ) : (
              <div className="w-full flex items-center justify-center font-AeonikProMedium text-2xl h-[50vh] ">
                {t("nothing_found")}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
};
export { SingleProduct };
