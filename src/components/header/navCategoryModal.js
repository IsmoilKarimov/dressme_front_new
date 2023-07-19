import React from "react";
import { img1, img2, img3, img4, img5, img6, img7, img8, } from "../../AssetsMain";
import { MenuCloseIcons } from "../../AssetsMain/icons";

const NavCategoryModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const categoryModalArray = [
    { id: 1111, img: img1, type: "Мужчинам" },
    { id: 2222, img: img2, type: "Женщинам" },
    { id: 3333, img: img3, type: "Детям" },
    { id: 4444, img: img4, type: "Головные уборы" },
    { id: 5555, img: img5, type: "Верхняя одежда" },
    { id: 6666, img: img6, type: "Нижняя одежда" },
    { id: 7777, img: img7, type: "Обувь" },
    { id: 8888, img: img8, type: "Аксессуары" },
  ];
  // const navigate = useNavigate();
  const goCatalogId = (id) => {
    // navigate(`/catalog/:${id}`);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[675px] flex flex-col shadow-modalCategoryShadow bg-white rounded-lg p-2">
        <button
          className="text-xl place-self-end pr-1 pt-1 mb-2"
          onClick={() => { onClose() }}
        >
          <MenuCloseIcons />
        </button>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="ss:w-fit md:w-[650px] h-fit m-0 p-2 pb-4 pt-0"
        >
          <div className=" w-full flex items-center flex-wrap gap-y-6">
            {categoryModalArray.map((data) => {
              return (
                <article
                  key={data?.id}
                  className="w-1/4 flex items-center justify-center"
                >
                  <figure
                    onClick={() => goCatalogId(data?.id)}
                    className="group cursor-pointer"
                  >
                    <div className="group-hover:border-black transition duration-300 w-[120px] h-[120px] border border-categoryModalBorderColor bg-categoryModalBgColor flex items-center justify-center rounded-xl">
                      <img src={data.img} alt="" />
                    </div>
                    <figcaption className="group-hover:text-black transition duration-300 text-center mt-2 text-setTexOpacity text-sm">
                      {data?.type}
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

export default NavCategoryModal;
