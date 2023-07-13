import { NavLink } from "react-router-dom";

import { MuslimImg } from "../../../../../AssetsMain";
import { ClothesIcons, FilterIcons } from "../../../../../AssetsMain/icons";
import { useContext, useState } from "react";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";

const CatalogTopFilter = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const handleFilter = () => {
    setDressInfo({
      ...dressInfo,
      openCatalogFilter: !dressInfo.openCatalogFilter,
    });
  };

  const [state, setState] = useState({
    opensports: false,
    openTypesofClothes: false,
  });

  // CATEGORIES
  const handleOpenCategories = (newOpen) => {
    setState({ ...state, opensports: newOpen });
  };
  const handleCategories = (value) => {
    setState({ ...state, opensports: false });
  };
  const categories = [
    { id: 1, type: "Все категории" },
    { id: 2, type: "Студент" },
    { id: 3, type: "Бизнесмен" },
    { id: 4, type: "Муслим" },
    { id: 5, type: "Туризм" },
    { id: 6, type: "Спортивные" },
    { id: 7, type: "Классическая" },
  ];
  const contentCategories = (
    <section className="w-[230px] h-fit m-0 p-0">
      {categories.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleCategories(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </section>
  );

  // Types of Clothes
  const handleOpenTypesofClothes = (openTypesofClothes) => {
    setState({ ...state, openTypesofClothes: openTypesofClothes });
  };

  const handleTypesofClothes = () => {
    setState({ ...state, openTypesofClothes: false });
  };
  const typesofClothes = [
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
  const contentTypesofClothes = (
    <section className="w-[150px] h-[200px] overflow-auto m-0 p-0">
      {typesofClothes.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleTypesofClothes(data?.type);
            }}
            className={`w-full py-3 flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name}
          </p>
        );
      })}
    </section>
  );

  return (
    <main className="flex flex-col justify-center md:hidden border-b border-searchBgColor items-center md:py-[60px]">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <section className="w-[100%] h-fit">
          <article className="w-full flex flex-col">
            <figure className="relative w-full  md:h-[90px]  mt-2 md:mt-0  h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              <div className="w-full md:w-fit flex items-center justify-between md:mr-5  mt-6 md:mt-0">
                <div className="flex items-center">
                  <NavLink className="flex items-center text-[15px] font-AeonikProMedium mr-[22px]">
                    По категории
                  </NavLink>
                  <div className="md:flex items-center hidden ">
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
                        Спортивный
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
            </figure>
          </article>

          <article className="w-full md:hidden flex items-center justify-between mt-6 mb-3  px-4">
            <button
              onClick={() => handleFilter()}
              className="h-[44px] w-[48%] select-none active:scale-95  active:opacity-70 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center"
            >
              <p>
                <FilterIcons colors={"#000"} />
              </p>
              <p className="ml-2 not-italic  font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Фильтры
              </p>
            </button>

            <Popover
              className="h-[44px] w-[48%] active:scale-95  select-none  active:opacity-70 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center"
              open={state?.openTypesofClothes}
              onOpenChange={handleOpenTypesofClothes}
              trigger="click"
              options={["Hide"]}
              placement="bottom"
              content={contentTypesofClothes}
            >
              <p>
                <ClothesIcons />
              </p>
              <p className="ml-2  not-italic font-AeonikProMedium   text-sm leading-4 text-black tracking-[1%] cursor-pointer">
                Тип одеждый
              </p>
            </Popover>
          </article>
        </section>
      </section>
    </main>
  );
};
export default CatalogTopFilter;
