import { useContext, useState } from "react";

import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  CotegoryMenuIcons,
  ManGenIcons,
  WomanGenIcons,
} from "../../../../../AssetsMain/icons";

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
    <div className="hidden md:flex flex-col min-h-[44px]  justify-center items-center my-5">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <div className="flex items-center">
          <div className="w-[98%] flex items-center border rounded-lg bg-slate-50 mr-6">
            {typesCategory.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex justify-between h-10 rounded-lg"
                >
                  <button
                    key={data.id}
                    onClick={() => handleTypeCheck(data.id)}
                    className={`flex items-center justify-center h-10 text-[15px] text-black text-center px-5 font-AeonikProRegular ${
                      data.action
                        ? `{ bg-white border w-full h-[98%] my-auto mx-auto  border-searchBgColor rounded-lg ${dataStyle}`
                        : ""
                    } `}
                  >
                    <span className="mr-2">{data.icon}</span>

                    <span>{data.name}</span>
                  </button>
                  <span
                    className={`${
                      data.id === 5
                        ? "text-searchBgColor hidden"
                        : "text-searchBgColor flex items-center"
                    }`}
                  >
                    |
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-[40%] flex items-center border rounded-lg bg-slate-50">
            {genderCategory.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex justify-between h-10 rounded-lg "
                >
                  <button
                    key={data.id}
                    onClick={() => handleGenderCheck(data.id)}
                    className={`flex items-center justify-center h-10 text-[15px] text-black text-center ${
                      !data.name ? "px-5" : "px-7"
                    } font-AeonikProRegular ${
                      data.action
                        ? `{ bg-white border w-full h-[98%] my-auto mx-auto  border-searchBgColor rounded-lg ${dataStyle}`
                        : ""
                    } `}
                  >
                    <span className="">{data.icon}</span>
                    {data.name ? (
                      <span className=" ml-2">{data.name}</span>
                    ) : (
                      ""
                    )}
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
          </div>
        </div>

        <div className="w-[fit] flex items-center ">
          <div className="flex items-center w-fit mr-4">
            <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
              Сортировка:
            </span>
          </div>
          <div>
            <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
              <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]">
                Последние добавленные{" "}
              </span>
              <span>
                <span className={`rotate-[0deg]`}>
                  <ArrowTopIcons colors={"#000"} />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingTop;
