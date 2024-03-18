import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeMainDataContext } from "../../../../ContextHook/HomeMainData";
import NewBreadCrump from "../../../Breadcrumbs/NewBreadCrump";
import { LanguageDetectorDress } from "../../../../language/LanguageItems";

const CatalogMobile = () => {
  const [data] = useContext(HomeMainDataContext);

  const [languageDetector,  ] = useContext(LanguageDetectorDress)

  const navigate = useNavigate();

  const goCatalogId = (id, nameru, nameuz) => {
    if (languageDetector?.typeLang === 'ru') {
      if (id !== 5) {
        navigate(`/categories/${nameru?.split(' ')?.join('-')?.toLowerCase()}`);
      }
      if (id === 5) {
        navigate(`/categories/${nameru?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
      }
    }
    if (languageDetector?.typeLang === 'uz') {
      if (id !== 5) {
        navigate(`/categories/${nameuz?.split(' ')?.join('-')?.toLowerCase()}`);
      }
      if (id === 5) {
        navigate(`/categories/${nameuz?.split('/')?.map(item => item.trim())?.join('-')?.toLowerCase()}`);
      }
    }
  };
  const breadcrumbItems = [
    { label_uz: "Asosiy", label_ru: "Главная", url: "/" },
    { label_uz: "Kategoriya", label_ru: "категории", url: "/categories" },
  ];

  return (
    <main className="flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="w-full">
        <div className="py-3 md:pt-8 md:pb-5 md:border-b border-searchBgColor flex flex-col md:min-h-[44px] w-full justify-center items-center m-0">
          <section className="max-w-[1280px] w-[100%] flex flex-col items-center">
            <nav className="w-[100%]  flex items-center p-1 md:p-0 px-4 md:px-0">
              <NewBreadCrump items={breadcrumbItems} />
            </nav>
          </section>
        </div>
      </section>
      <section className="max-w-[1280px] w-[100%] md:h-[40vh] ss:px-4 md:px-0 flex justify-center items-center m-auto border-t md:border-0 border-searchBgColor">
        <article className="w-full h-full pt-6 pb-20 md:pb-0 flex flex-wrap ll:gap-x-2 gap-y-4 justify-between xs:justify-start xs:gap-x-4">
          {data?.getMainProductCard?.categories?.map((item) => {
            return (
              <figure
                key={item?.id}
                className="w-[140px] ls:w-[150px] ll:w-[175px] h-fit flex flex-wrap gap-y-2 "
              >
                <div
                  onClick={() => goCatalogId(item?.id, languageDetector?.typeLang === 'ru' && item?.name_ru, languageDetector?.typeLang === 'uz' && item?.name_uz)}
                  className="w-full h-[145px] ls:h-[155px] ll:h-[180px] flex items-center overflow-hidden justify-center border border-skeltonColor bg-categoryModalBgColor rounded-[12px] cursor-pointer"
                >
                  <img src={item?.url_photo} alt="" className=" h-full	" />
                </div>
                <button
                  onClick={() => goCatalogId(item?.id, languageDetector?.typeLang === 'ru' && item?.name_ru, languageDetector?.typeLang === 'uz' && item?.name_uz)}
                  className="w-full h-8 text-catalogText leading-normal text-[12px] ll:text-[13px] not-italic font-AeonikProRegular flex items-center justify-center active:scale-95  active:opacity-70 border border-skeltonColor  rounded-[12px]"
                >
                  {languageDetector?.typeLang === 'ru' && item?.name_ru}
                  {languageDetector?.typeLang === 'uz' && item?.name_uz}
                </button>
              </figure>
            );
          })}
        </article>
      </section>

    </main>
  );
};
export { CatalogMobile };
