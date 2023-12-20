import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCarousel } from "./Product_Carousel/ProductCarousel";
import { ProductDetails } from "./Product_Detail/ProductDetails";
import { SingleProductTop } from "../SingleProductTop/SingleProductTop";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";

import {
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../../assets/icons";
import { CalourCard, HeartImg } from "../../../../../assets";
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

  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

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

  const params = useParams();

  const [singleData, setSingleData] = useState();

  const { refetch } = useQuery(
    ["get_main_detail_data"],
    () => {
      return fetch(`${url}/api/main/products/${params?.id}`, {
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

  return (
    <main className="flex flex-col m-0 p-0 box-border">
      <section>
        <SingleProductTop />
      </section>
      <section className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto border-box mb-20 md:mb-[60px]">
        <section className="w-[100%] h-fit mt-6 flex justify-between flex-col md:flex-row">
          <section className={`md:w-1/2`}>
            <ProductCarousel show={show} data={singleData} />
          </section>
          <section className="w-full md:w-1/2 h-full ">
            <ProductDetails data={singleData} />
          </section>
        </section>
        {/* Products Comment */}
        <section className="md:mt-20 w-full">
          <ProductComment data={singleData} refetch={refetch} />
        </section>
        <section className="w-full h-fit">
          <article className="w-full mt-[34px] md:mt-0">
            <div className="md:mb-4">
              <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black mb-3 md:mb-0">
                Похожие продукты
              </p>
            </div>
            <article className="flex flex-wrap justify-between md:justify-start md:mx-0  gap-y-2 lg:gap-x-5 lg:gap-y-5 ">
              {mainData?.products?.data?.map((data) => {
                if (singleData?.product?.id === data?.id) {
                  return false;
                } else if (singleData?.product?.type_id === data?.type_id) {
                  return (
                    <CollectionCardItem
                      data={data}
                      setOpenWearType={setOpenWearType}
                      handleLeaveMouse={handleLeaveMouse}
                      wishList={wishList}
                      setWishlist={setWishlist}
                    />
                  );
                }
              })}
            </article>
          </article>
        </section>
      </section>
    </main>
  );
};
export { SingleProduct };
