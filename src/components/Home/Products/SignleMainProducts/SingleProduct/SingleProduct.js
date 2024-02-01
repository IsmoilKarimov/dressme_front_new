import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCarousel } from "./Product_Carousel/ProductCarousel";
import { ProductDetails } from "./Product_Detail/ProductDetails";
import { SingleProductTop } from "../SingleProductTop/SingleProductTop";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";

import ProductComment from "./ProductComment/ProductComment";
import { useQuery } from "@tanstack/react-query";
import { HomeMainDataContext } from "../../../../../ContextHook/HomeMainData";
import { CollectionCardItem } from "../../../Main/WearCollectionCard/CollectionCardItem";

const SingleProduct = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);
  const [openWearType, setOpenWearType] = useState(false);

  let LikeProduct = [];
  let LastSeenProduct = [];
  dressInfo.ProductList.forEach((data) => {
    if (data.id > 0 && data.id <= 5) {
      LikeProduct.push(data);
    }
    if (data.id > 5 && data.id <= 10) {
      LastSeenProduct.push(data);
    }
  });

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

  const { id } = useParams();
  const newId = id?.replace(":", "")

  const [singleData, setSingleData] = useState();

  const { refetch } = useQuery(
    ["get_main_detail_data"],
    () => {
      return fetch(`${url}/api/main/products/${newId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setSingleData(res);
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  // ---------------------------

  useEffect(() => {
    if (openWearType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openWearType]);

  const handleLeaveMouse = (eId) => {
    const elementsIndex = dressInfo.ProductList.findIndex(
      (element) => element.id == eId
    );
    let newArray = [...dressInfo.ProductList];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      colourCard: false,
    };
    setDressInfo((current) => {
      return { ...current, ProductList: newArray };
    });
  };

  const sameTypeData = mainData?.products?.data
    ?.filter(
      (item) =>
        item?.type_id === singleData?.product?.type_id &&
        item?.id !== singleData?.product?.id
    )
    ?.slice(0, 6);

  return (
    <main className="flex flex-col m-0 p-0 box-border">
      <section>
        <SingleProductTop />
      </section>
      <section className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto border-box mb-20 md:mb-[0px]">
        <section className="w-[100%] h-fit mt-6 flex justify-between flex-col md:flex-row">
          <section className={`md:w-1/2`}>
            <ProductCarousel show={show} data={singleData} />
          </section>
          <section className="w-full md:w-1/2 h-full ">
            <ProductDetails data={singleData} />
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
                  Похожие продукты
                </p>
              </div>
              <article className="flex flex-wrap justify-between md:justify-start md:mx-0  gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
                {sameTypeData?.map((data) => {
                  return (
                    <CollectionCardItem
                      key={data?.id}
                      data={data}
                      setOpenWearType={setOpenWearType}
                      handleLeaveMouse={handleLeaveMouse}
                      wishList={wishList}
                      setWishlist={setWishlist}
                    />
                  );
                })}
              </article>
            </article>
          </section>
        ) : null}
      </section>
    </main>
  );
};
export { SingleProduct };
