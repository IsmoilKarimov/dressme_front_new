import React, { useContext } from "react";

import { dressMainData } from "../../../../ContextHook/ContextMenu";
import { NoImg, SeasonSquare } from "../../../../AssetsMain/icons";

export default function TypeSection() {
  const [dressInfo] = useContext(dressMainData);
  const typeSectionData = [
    {
      id: 1,
      type: "Спортивная одежда",
      buy: "Купить",
      locat: "/wears",
      group: [
        { id: 1, img: "", title: "Футболка" },
        { id: 2, img: "", title: "Кроссовки" },
        { id: 3, img: "", title: "Спорт 3" },
        { id: 4, img: "", title: "Спорт 4" },
      ],
    },
    {
      id: 2,
      type: "Бизнесмен",
      buy: "Узнать больше",
      locat: "/wears",
      group: [
        { id: 1, img: "", title: "Брюки" },
        { id: 2, img: "", title: "Обувь" },
        { id: 3, img: "", title: "Бизнес 3" },
        { id: 4, img: "", title: "Бизнес 4" },
      ],
    },
    {
      id: 3,
      type: "Классическая",
      buy: "Узнать больше",
      locat: "/wears",
      group: [
        { id: 1, img: "", title: "Костюм" },
        { id: 2, img: "", title: "Обувь" },
        { id: 3, img: "", title: "Обувь" },
        { id: 4, img: "", title: "Галстук" },
      ],
    },
  ];

  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " #008F0E ";
    genderStyle = "hover:text-borderSpring";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " #EAA700";
    genderStyle = "hover:text-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " #E17A02 ";
    genderStyle = "hover:text-borderAutumm";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " #007DCA ";
    genderStyle = "hover:text-borderWinter";
  }

  return (
    <div className="flex flex-col">
      <div className="w-[100%] h-fit flex flex-col justify-center py-8">
        <div className="w-full h-[60px]  block xs:hidden flex items-center justify-center text-center  rounded-lg cursor-pointer  bg-bgColor border border-solid border-searchBgColor">
          <span className="mr-3 not-italic font-AeonikProMedium text-base leading-4 text-center">
            Одежды, которые вам подходят
          </span>
          <span>
            <SeasonSquare colors={"#000"} />
          </span>
        </div>
      </div>
      <div className="w-[100%] h-full flex justify-between  ss:hidden sm:block ">
        <div className="w-[100%] flex flex-wrap xs:justify-between ">
          {typeSectionData?.map((data) => {
            return (
              <div
                key={data?.id}
                className="w-[414px]  lg:h-[426px] ll:h-[400px] md:h-[390px] ss:h-[350px] bg-white border border-searchBgColor	rounded-lg ss:p-3  xl:p-[20px] flex flex-wrap ss:content-between sm:content-between  "
              >
                <div className="w-full flex items-center justify-between ss:h-fit sm:h-1/10  ">
                  <p className="not-italic font-AeonikProMedium md:text-lg ss:text-base  lg:text-xl  leading-7 text-black">
                    {data?.type || "type"}
                  </p>
                  <p className="flex items-center cursor-pointer">
                    <span
                      className={`not-italic font-AeonikProMedium md:text-sm ss:text-base lg:text-base  leading-4 text-right mr-2 text-black ${genderStyle}`}
                    >
                      {data?.buy}
                    </span>
                    <SeasonSquare colors={dataStyle} />
                  </p>
                </div>
                <div className="w-full flex flex-wrap gap-y-2 justify-between mt-4">
                  {data?.group?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className="w-[177px] h-[168px] p-[10px] bg-btnBgColor border	border-searchBgColor rounded-lg   flex flex-wrap content-between"
                      >
                        <div className="w-full h-3/4 rounded-lg  border border-searchBgColor flex items-center justify-center">
                          {data?.img ? (
                            <img src={data?.img} alt="data" />
                          ) : (
                            <NoImg />
                          )}
                        </div>
                        <div className="w-full h-1/5 flex items-center not-italic font-AeonikProMedium text-base leading-4 text-black justify-start">
                          {data?.title || "title"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
