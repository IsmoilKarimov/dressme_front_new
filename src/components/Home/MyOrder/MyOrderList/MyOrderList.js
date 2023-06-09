import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../AssetsMain/icons";

export default function MyOrderList() {
  const [state, setState] = useState({
    AllOrder: true,
    activeOrder: false,
  });
  const MyOrders = [
    { id: 1, orderId: "#000182" },
    { id: 2, orderId: "#000183" },
    { id: 3, orderId: "#000184" },
    { id: 4, orderId: "#000185" },
  ];
  return (
    <div className=" pt-10 w-full flex justify-center ss:px-4 md:px-0">
      <div className="max-w-[820px] w-[100%] h-fit   ">
        <div className="border border-OpacitySignIn bg w-[440px] flex items-center bg-bgColor  h-[52px] overflow-hidden rounded-lg ">
          <button
            onClick={() =>
              setState({ ...state, AllOrder: true, activeOrder: false })
            }
            className={`h-[52px] w-[220px] flex items-center justify-center not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-center text-black  ${
              state.AllOrder
                ? "bg-white rounded-lg border border-OpacitySignIn"
                : "bg-transparent"
            }`}
          >
            Все заказы
          </button>
          <div className="w-[1px] h-[34px] border-r border-OpacitySignIn"></div>
          <button
            onClick={() =>
              setState({ ...state, AllOrder: false, activeOrder: true })
            }
            className={`h-[52px] w-[220px] flex items-center justify-center not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-center text-black  ${
              state.activeOrder
                ? "bg-white rounded-lg border border-OpacitySignIn"
                : "bg-transparent"
            }`}
          >
            Активные
          </button>
        </div>
        <div className="flex flex-col gap-y-6 w-full h-fit rounded-lg mt-[30px] py-5 ">
          {MyOrders.map((data) => {
            return (
              <div
                key={data.id}
                className="w-full h-fit md:h-[338px] border border-searchBgColor rounded-lg flex overflow-hidden flex-col content-between"
              >
                <div className="w-full border-b border-searchBgColor h-[64px] flex items-center px-4 md:px-10">
                  <span className="not-italic mt-1 font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
                    ID заказа {data?.orderId}
                  </span>
                </div>
                <div className="w-full  h-fit md:h-[224px] px-4 md:px-10 py-5 md:py-6 gap-y-4 md:gap-y-0 flex flex-wrap content-between">
                  {/* 1 */}
                  <div className="w-full flex items-center ">
                    <div className="w-[150px] md:w-[180px] not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity ">
                      Статус:
                    </div>
                    <div className="w-fit flex items-center">
                      <span className="not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-BasketMoneyColor">
                        Оплачен:
                      </span>
                      <div className="w-[1px] h-3 border border-setTexOpacity mx-3"></div>
                      <span className="not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity">
                        Оплата при получении
                      </span>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="w-full flex items-center ">
                    <div className="w-[150px] md:w-[180px] not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity  ">
                      Дата заказа:
                    </div>
                    <div className="w-fit flex items-center">
                      <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                        Вторник, 9 мая 2023 г. в 12:52
                      </span>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="w-full flex items-center ">
                    <div className="w-[150px] md:w-[180px] not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity  ">
                      Адрес магазина:{" "}
                    </div>
                    <div className="w-fit flex flex-wrap items-center ">
                      <span className=" not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                        г. Ташкент, Чиланзарский район 17-тый квартал, дом 37{" "}
                      </span>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="w-full flex items-center ">
                    <div className="w-[150px] md:w-[180px] not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity  ">
                      Доставка:{" "}
                    </div>
                    <div className="w-fit flex items-center">
                      <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                        Доступно:
                      </span>
                      <div className="w-[1px] h-3 border border-setTexOpacity mx-3"></div>
                      <span className="not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity">
                        Бесплатный | Нет{" "}
                      </span>
                    </div>
                  </div>
                  {/* 5 */}
                  <div className="w-full flex items-center ">
                    <div className="w-[150px] md:w-[180px] not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity ">
                      Сумма заказа:{" "}
                    </div>
                    <div className="w-fit flex items-center">
                      <span className="not-italic font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                        254 000 сум{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between border-t border-searchBgColor  px-10  h-[50px]">
                  <div className="flex items-center">
                    <span className="not-italic mt-1 font-AeonikProMedium text-base leading-4 text-black tracking-[1%]">
                      1 товар
                    </span>
                    <div className="w-[1px] h-5 border border-setTexOpacity mx-4"></div>
                    <span className="not-italic mt-1 font-AeonikProMedium tracking-[1%] text-base leading-4 text-setTexOpacity">
                      2 штук
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className="rotate-[180deg]">
                      <ArrowTopIcons colors={"#000"} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
