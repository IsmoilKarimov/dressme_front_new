import React, { useContext, useEffect, useState } from "react";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  InputCheckedTrueIcons,
  NoImg,
  StarIcons,
} from "../../../../assets/icons";
import { HeartImg } from "../../../../assets";
import ClothesFilterGroup from "../ClothesFilterGroup/ClothesFIlterGroup";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import { CollectionCardItem } from "../../../Home/Main/WearCollectionCard/CollectionCardItem";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import { useQuery } from "@tanstack/react-query";

export default function CategoryCards() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  const [mainData, , wishList, setWishlist] = useContext(HomeMainDataContext);

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

  // ----------------------------------------

  const wearGroup = [
    { id: 1, name: "Футболки" },
    { id: 2, name: "Рубашки" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Джинсы" },
    { id: 5, name: "Свитер" },
    { id: 6, name: "Куртки" },
    { id: 7, name: "Толстовки" },
    { id: 8, name: "Обуви" },
    { id: 9, name: "Куртки" },
    { id: 10, name: "Сапоги" },
    { id: 11, name: "Платья" },
    { id: 12, name: "Юбки" },
    { id: 13, name: "Ремень" },
  ];
  const onColorChecked = () => {};

  const [prevSliderBtn, setPrevSliderBtn] = useState(false);
  const data = (onClick) => {
    onClick();
    setPrevSliderBtn(true);
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-50	right-[4px]  rounded-full bg-white    duration-200 border  border-borderColor2
        		`}
        onClick={() => data(onClick)}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={` ${
          prevSliderBtn ? "block" : "hidden"
        } absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-10	left-[2px]  rounded-full bg-white   duration-200 border  border-borderColor2
        `}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    arrows: true,
    speed: 500,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/product/:${id}`);
  };

  // ---------------------------------

  const [showData, setShowData] = useState({});

  const url = "https://api.dressme.uz";

  const params = useParams();

  // ------------GET METHOD Main data -----------------
  useQuery(
    ["get_section_show_data"],
    () => {
      return fetch(`${url}/api/main/section/${params?.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          //   "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setShowData(res);
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    fetch(`${url}/api/main/section/${params?.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        //   "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => setShowData(res));
  }, [params]);

  return (
    <main className="flex flex-col box-border mt-2">
      {/* <section className="hidden">
        <ClothesFilterGroup _class="items gap-x-2 ">
          {wearGroup?.map((data) => {
            return (
              <article
                key={data.id}
                className={`flex items-center justify-center px-4 py-3 border border-searchBgColor rounded-[20px]   bg-btnBgColor`}
              >
                <p className=" cursor-pointer  not-italic font-AeonikProMedium text-sm text-black tracking-[1%] ">
                  {data?.name || "0"}
                </p>
              </article>
            );
          })}
        </ClothesFilterGroup>
      </section> */}

      <section className="flex flex-wrap justify-between md:justify-start gap-y-2 lg:gap-x-3 lg:gap-y-3 mt-1 md:mt-8">
        {showData?.section_products?.data?.map((data) => {
          return (
            <CollectionCardItem
              data={data}
              setOpenWearType={setOpenWearType}
              handleLeaveMouse={handleLeaveMouse}
              wishList={wishList}
              setWishlist={setWishlist}
            />
          );
        })}
      </section>
      <section className="w-full h-fit md:hidden flex items-center justify-center mt-14">
        <p className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
          Показать ещё 30 наборов
        </p>
      </section>

      <section className="w-full hidden h-fit md:flex items-center justify-center mt-[75px] gap-x-6">
        <article className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="rotate-[-90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>{" "}
          <p className="not-italic ml-1   font-AeonikProRegular text-lg leading-4 text-fullBlue">
            Previous
          </p>
        </article>
        <article className="flex items-center">
          <ul className="flex items-center gap-x-3">
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg bg-fullBlue text-white flex items-center justify-center cursor-pointer ">
              1
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              2
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              3
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              4
            </li>
            <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-[44px] h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
              . . .
            </li>
          </ul>
        </article>
        <figure className="flex items-center cursor-pointer bg-searchBgColor px-5 py-3 rounded-lg">
          <p className="not-italic  font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
            Next
          </p>
          <p className="rotate-[90deg]">
            <ArrowTopIcons colors={"#007DCA"} />
          </p>
        </figure>
      </section>
      {showData?.section_products?.next_page_url ? "" : null}
    </main>
  );
}
