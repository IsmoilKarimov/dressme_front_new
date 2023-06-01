import React from "react";
import { StarIcons } from "../../../../../../AssetsMain/icons";

export default function ProductComment() {
  const comment = [
    {
      id: 1,
      Name: "Umar",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Качество среднее но стоит своих денег точно мне понравилась классный оверсайз",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за заказ! Будем ждать вас снова)",
    },
    {
      id: 2,
      Name: "Firdavsbek",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "sifatiga gap yoo. raxmat tez yetkazib berishdi . razmeri ham tochni",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо вам за оценку!",
    },
    {
      id: 2,
      Name: "Shohjahon",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ];
  return (
    <div className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto  border-box mb-[60px]">
      <div className="relative w-[100%] h-fit mt-6 flex justify-between ">
        <div className="w-full ">
          <div className="border-b border-borderColor2 pb-10">
            <span className="not-italic font-AeonikProMedium text-2xl leading-7 text-black track%]">
              Отзывы о товаре
            </span>
          </div>
          <div className="flex justify-between flex-wrap   w-full h-fit ">
            {comment.map((data) => {
              return (
                <div className="w-[45%] h-fit border-b border-borderColor2 pr-5 pb-10 mt-10">
                  <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
                    {data?.Name}
                  </span>
                  <div className="flex items-center mt-3">
                    <span className="flex items-center">
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                    </span>
                    <span className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                      {data?.sendDate}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="not-italic font-AeonikProRegular text-base leading-4 text-black">
                      {data?.SendText}
                    </span>
                  </div>
                  <div className="mt-6 ml-8">
                    <div>
                      <span className="not-italic font-AeonikProMedium text-lg leading-5 text-black">
                        Nike Store Official Dealer
                      </span>
                      <span className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                        {data?.replyDate}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="not-italic font-AeonikProRegular text-base leading-4 text-black">
                        {data?.replyText}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Add comment */}
          <div className=" mt-[60px] h-fit p-1">
            <span className="not-italic font-AeonikProRegular text-base leading-4 text-black">
              описане
            </span>
            <textarea
              className="w-full h-[200px] mt-2 p-2 border border-searchBgColor rounded-lg bg-skeltonColor"
              placeholder="Izoh qoldiring..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
