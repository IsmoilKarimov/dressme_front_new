import React, { useContext, useEffect, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { SearchIcons } from "../../../../assets/icons";
import "../../../../index.css";
import { ClothingParametr } from "./ClothingParametr";
import WearType from "./WearType";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import { CollectionCardItem } from "./CollectionCardItem";
import { ClipLoader } from "react-spinners";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CollectionCards() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openWearType, setOpenWearType] = useState(false);
  // const [pagination, setPagination] = useState(30);
  const [data, setData, wishList, setWishlist, page, setPage] =
    useContext(HomeMainDataContext);
  const [searchMarketName, setSearchMarketName] = useState(
    dressInfo?.mainSearchName
  );
  const { t } = useTranslation(["homePage"]);

  // -------------------------------------
  const toggle = React.useCallback(() => setOpenWearType(false), []);
  // -------------------------------------

  useEffect(() => {
    if (openWearType) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openWearType]);

  const handleChange = (event) => {
    setSearchMarketName(event.target.value);
  };

  const _handleKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      setDressInfo({ ...dressInfo, mainSearchName: searchMarketName });
    }
  };

  const handleClear = () => {
    setSearchMarketName("");
    setDressInfo({ ...dressInfo, mainSearchName: "" });
  };

  function getSearchClick() {
    setDressInfo({ ...dressInfo, mainSearchName: searchMarketName });
  }

  const navigate = useNavigate();
  function onHandleCardId(child, name) {
    navigate(`/product/${child}`);
    setDressInfo({
      ...dressInfo,
      linkedFrom: "mainPageProductList",
    });
  }

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <div
        onClick={() => setOpenWearType(false)}
        className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${openWearType ? "" : "hidden"
          }`}
      ></div>
      <section
        className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${openWearType ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
      >
        <WearType onClick={toggle} />
      </section>

      <section className="max-w-[1280px] w-[100%] px-[10px] md:px-0 flex flex-col justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        {/* Searching section */}
        <section className="w-full h-12 flex md:hidden items-center justify-between rounded-xl font-AeonikProRegular border border-searchBgColor bg-white mt-4">
          <div className="w-full relative flex items-center h-full border-r border-searchBgColor">
            <input
              type="text"
              name="name"
              value={searchMarketName || ""}
              onChange={handleChange}
              onKeyDown={_handleKeyDownSearch}
              placeholder={t("CPsearchProd")}
              autoComplete="name"
              className="bg-transparent w-[90%] h-full text-[14px] border border-transparent px-3"
            />
            {searchMarketName && (
              <button
                onClick={handleClear}
                className="absolute right-2 cursor-pointer"
                type="button"
              >
                <MdClose size={20} color={"#a1a1a1"} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => getSearchClick()}
            className="w-[15%] active:scale-95 rounded-r-xl flex h-full bg-[#fafafa] items-center justify-center cursor-pointer"
          >
            <SearchIcons />
          </button>
        </section>

        <section className="w-full mt-4">
          <ClothingParametr />
        </section>

        {data?.products?.length ? (
          <section className="w-full  hidden md:flex justify-start items-center mb-[24px] md:mb-0 md:px-0">
            <div className="not-italic font-AeonikProMedium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-8 text-black">
              <p>{t("CCclothesText")}</p>
            </div>
          </section>
        ) : null}

        <section className="w-full  md:hidden flex justify-start items-center my-5">
          <div className="not-italic font-AeonikProMedium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-6 text-black">
            <p>{t("CCclothesText")}</p>
          </div>
        </section>

        <div className="w-full flex flex-col box-border  ">
          <article
            className={`flex flex-wrap justify-between md:justify-start pb-[80px] md:pb-0 md:mb-[30px] md:mt-[40px] md:mx-0  gap-y-[6px] gap-x-[6px] lg:gap-x-5 lg:gap-y-5 `}
          >
            {data?.products?.length ? (
              data?.products?.map((data) => {
                return (
                  <CollectionCardItem
                    key={data?.id}
                    data={data}
                    setOpenWearType={setOpenWearType}
                    wishList={wishList}
                    setWishlist={setWishlist}
                    mainSelectedId={dressInfo?.mainColorId}
                    onHandleCardId={onHandleCardId}
                  />
                );
              })
            ) : (
              <div className="w-full flex items-center justify-center md:mb-[80px] font-AeonikProMedium text-2xl h-[200px] ">
                {t("CCnotFound")}
              </div>
            )}
          </article>

          {data?.getMainProductCard?.products?.next_page_url ? (
            <div className="w-full h-fit flex items-center justify-center mb-5 md:mb-0 md:mt-14">
              {data?.btnLoader ? (
                <div className="w-full flex justify-center">
                  <button
                    type="button"
                    className="hidden md:flex w-[60%] md:w-[760px] h-[45px] md:h-[60px] cursor-pointer not-italic font-AeonikProMedium text-[14px] md:text-base leading-4 text-center text-borderWinter items-center justify-center rounded-xl border border-borderWinter bg-btnBgColor"
                  >
                    <ClipLoader
                      className="h-full py-[2px]"
                      color={"#007DCA"}
                      size={30}
                      loading={true}
                    />
                  </button>
                  <button
                    type="button"
                    className="md:hidden w-[60%] md:w-[760px] h-[45px] md:h-[60px] cursor-pointer not-italic font-AeonikProMedium text-[14px] md:text-base leading-4 text-center text-borderWinter flex items-center justify-center rounded-xl border border-borderWinter bg-btnBgColor"
                  >
                    <ClipLoader
                      className="h-full py-[2px]"
                      color={"#007DCA"}
                      size={20}
                      loading={true}
                    />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setPage((prev) => prev + 1);
                  }}
                  className="w-[60%] md:w-[760px] h-[45px] md:h-[60px] active:opacity-80 md:active:scale-95 cursor-pointer not-italic font-AeonikProMedium text-[14px] md:text-base leading-4 text-center text-borderWinter flex items-center justify-center rounded-xl border border-borderWinter bg-btnBgColor"
                >
                  {t("CCmore")}{" "}
                </button>
              )}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
