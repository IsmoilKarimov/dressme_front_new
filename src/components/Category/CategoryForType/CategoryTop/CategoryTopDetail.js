import { NavLink } from "react-router-dom";

import { MuslimImg } from "../../../../assets";
import { ClothesIcons, FilterIcons } from "../../../../assets/icons";
import { useContext, useState } from "react";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";

const CategoryTopDetail = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const handleFilter = () => {
    setDressInfo({
      ...dressInfo,
      openCategoryFilter: !dressInfo.openCategoryFilter,
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
  const catalogTypes = [
    { id: 1, name: "Тренировка" },
    { id: 2, name: "Плавание" },
    { id: 3, name: "Футбол" },
    { id: 4, name: "Волейбол" },
    { id: 5, name: "Баскетбол" },
    { id: 6, name: "Бокс/MMA" },
    { id: 7, name: "Каратэ" },
    { id: 8, name: "Борьба" },
    { id: 9, name: "Дзюдо" },
    { id: 10, name: "Кунг-фу" },
    { id: 11, name: "Теннис" },
    { id: 12, name: "Настольный Теннис" },
  ];

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
    <main className="flex flex-col justify-center border-t border-searchBgColor items-center md:pt-[60px]">
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <section className="w-[100%] h-fit md:mb-14">
          <article className="w-full flex flex-col border-b md:border-none border-searchBgColor">
            <figure className="relative w-full md:h-[90px] mt-6 md:mt-0 h-fit flex flex-col md:flex-row items-center justify-between border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/*  */}
              <div className="w-full md:w-fit flex h-[66px] md:h-fit items-center border md:border-none border-searchBgColor rounded-b-lg">
                <div className="absolute w-[80px] md:w-[150px] h-[80px] md:h-[150px] left-[38px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center  bg-white">
                  <img src={MuslimImg} alt="" className="rounded-full" />
                </div>
                <div className="flex items-center ml-[112px] md:ml-[210px]">
                  <div className="text-2xl font-AeonikProMedium">
                    Спортивный
                    <span className="text-lg text-setTexOpacity font-AeonikProRegular ml-2">
                      (291)
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
          <article className="w-full md:hidden flex items-center justify-between mt-6 mb-3 px-4">
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
        <section className="w-full border-b border-searchBgColor">
          <article className="w-full hidden md:block mb-10">      
            <ul className=" flex flex-row items-center flex-wrap gap-x-[14px] gap-y-[14px]">
              {catalogTypes.map((catalog, index) => (
                <li
                  key={index}
                  className="text-[15px] font-AeonikProMedium"
                >
                  <button className="focus:bg-borderWinter focus:text-white hover:bg-borderWinter hover:text-white bg-white border border-[#f0f0f0] rounded-lg px-[20px] py-[14px]">
                    {catalog.name}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
};
export default CategoryTopDetail;
