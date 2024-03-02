import {
  ClothesIcons,
  FilterIcons,
  ItailIcons,
} from "../../../../../assets/icons";
import { useContext, useState } from "react";
import { Popover } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { NavLink } from "react-router-dom";
import NewBreadCrump from "../../../../Breadcrumbs/NewBreadCrump";

const CatalogTopFilter = ({ paramId }) => {
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
  const breadcrumbItems = [
    { label_uz: 'Home', label_ru: 'Главная', url: '/' },
    { label_uz: 'category', label_ru: 'категории', url: '/categories' },
    { label_uz: paramId?.id, label_ru: paramId?.id, url: '/categories/:id' },
  ];
  return (
    <main className="w-full">
 
      <section className="w-full h-full  border border-red-500 ">
        <div className="md:my-6 flex flex-col  w-full justify-center items-center ">
          <section className="max-w-[1280px] w-[100%] h-full flex items-center justify-between m-auto">
            <nav className="w-[100%] md:w-fit flex items-center py-1 md:p-0">
              <NewBreadCrump items={breadcrumbItems} />
            </nav>
          </section>
        </div>
      </section>
    </main>
  );
};
export default CatalogTopFilter;
