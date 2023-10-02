import { useContext, useState } from "react";

import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  CotegoryMenuIcons,
  ManGenIcons,
  SearchChangeColorIcon,
  SearchIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";

const ShoppingTop = () => {
  const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = "text-borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "text-borderWinter";
  }

  const [typesCategory, setTypeCategory] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <CotegoryMenuIcons colors={"#007DCA"} />,
    },
    { id: 2, action: false, name: "Верхняя", icon: "" },
    { id: 3, action: false, name: "Нижняя", icon: "" },
    { id: 4, action: false, name: "Обувь", icon: "" },
    { id: 5, action: false, name: "Аксессуары", icon: "" },
  ]);

  const handleTypeCheck = (value) => {
    setTypeCategory((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  const [genderCategory, setGenderCategory] = useState([
    {
      id: 1,
      action: true,
      name: "Все",
      icon: <CotegoryMenuIcons colors={"#007DCA"} />,
    },
    {
      id: 2,
      action: false,
      name: "",
      icon: <ManGenIcons />,
    },
    {
      id: 3,
      action: false,
      name: "",
      icon: <WomanGenIcons />,
    },
  ]);

  const handleGenderCheck = (value) => {
    setGenderCategory((data) => {
      return data.map((e) => {
        if (e.id == value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <main className="hidden md:flex flex-col min-h-[44px]  justify-center items-center my-5">
      <section className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        {/* <article className="flex items-center"> */}
          <section className="flex items-center border rounded-lg bg-slate-50">
            {genderCategory.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex justify-between h-10 rounded-lg"
                >
                  <button
                    key={data.id}
                    onClick={() => handleGenderCheck(data.id)}
                    className={`flex items-center justify-center h-10 text-[15px] text-black text-center ${
                      !data.name ? "px-5" : "px-7"
                    } font-AeonikProRegular ${
                      data.action
                        ? `{ bg-white border w-full h-[98%] my-auto mx-auto  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                        : ""
                    } `}
                  >
                    <span className="">{data.icon}</span>
                    {data.name ? <p className="ml-2">{data.name}</p> : ""}
                  </button>
                  <span
                    className={`${
                      data.id === 3
                        ? "text-searchBgColor hidden"
                        : "text-searchBgColor flex items-center"
                    }`}
                  >
                    |
                  </span>
                </div>
              );
            })}
          </section>
        {/* </article> */}
        <article className="w-fit flex items-center ">
          <article className="w-[400px] h-11 flex items-center justify-between p-3 rounded-xl border border-searchBgColor font-AeonikProRegular text-base">
            <input type="text" className="w-[90%]" placeholder="Поиск" />
            <SearchIcons colors={"#a1a1a1"} className="cursor-pointer"/>
          </article>
        </article>
      </section>
    </main>
  );
};
export default ShoppingTop;
