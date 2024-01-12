import React, { useContext } from "react";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../../assets";
import { MenuCloseIcons } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { HomeMainDataContext } from "../../ContextHook/HomeMainData";

const NavCategoryModal = () => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [mainData, setData, wishList, setWishlist] =
    useContext(HomeMainDataContext);

  // console.log(mainData?.categories, "mainData");

  const categoryModalArray = [
    { id: 4, img: img4, type: "Головные уборы" },
    { id: 5, img: img5, type: "Верхняя одежда" },
    { id: 6, img: img6, type: "Нижняя одежда" },
    { id: 7, img: img7, type: "Обувь" },
    { id: 8, img: img8, type: "Аксессуары" },
  ];

  const navigate = useNavigate();
  const goCatalogId = (id) => {
    // const uId = id.toLowerCase();
    navigate(`/catalog/${id}`);
  };

  return (
    <div className="flex justify-center items-center z-[120]">
      <div className="w-[675px] flex flex-col shadow-modalCategoryShadow bg-white rounded-lg p-2">
        <button
          className="text-xl place-self-end pr-1 pt-1 mb-2"
          onClick={() => setDressInfo({ ...dressInfo, openCatologId: false })}
        >
          <MenuCloseIcons />
        </button>
        <div
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
          className="ss:w-fit md:w-[650px] h-[210px] m-0 p-2 pb-4 pt-4"
        >
          <div className="w-full flex items-start flex-wrap gap-y-6">
            {mainData?.categories?.map((data) => {
              return (
                <article
                  key={data?.id}
                  onClick={() =>
                    setDressInfo({ ...dressInfo, openCatologId: false })
                  }
                  className="w-1/5 flex items-center justify-center "
                >
                  <figure
                    onClick={() => goCatalogId(data?.id)}
                    className="group cursor-pointer"
                  >
                    <div className="group-hover:border-black transition duration-300 w-[120px] h-[120px] border border-categoryModalBorderColor bg-categoryModalBgColor flex items-center justify-center rounded-xl">
                      <img src={data?.url_photo} alt="" />
                    </div>
                    <figcaption className="group-hover:text-black transition duration-300 text-center mt-2 text-setTexOpacity text-sm">
                      {data?.name_ru}
                    </figcaption>
                  </figure>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavCategoryModal);
