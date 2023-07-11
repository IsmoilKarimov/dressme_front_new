import React, { useContext, useState } from "react";
import {
  CommentIcons,
  FreeStarIcon,
  NoNameIcon,
  SendMessageIcon,
  StarIcons,
} from "../../../../../../AssetsMain/icons";
import { ArrowTopIcons } from "../../../../../../AssetsMain/icons";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";

export default function ProductComment() {
  const [dressInfo] = useContext(dressMainData);
  const [openBox, setOpenBox] = useState(false);
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
      id: 3,
      Name: "Shohjahon",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 4,
      Name: "Shohjahon",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 5,
      Name: "Shohjahon",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ];
  let dataStyle = "";
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = " #008F0E ";
    genderStyle = "text-borderSpring bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = " #EAA700";
    genderStyle = "text-borderSummer bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = " #E17A02 ";
    genderStyle = "text-borderAutumm bg-btnBgColor border-searchBgColor";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = " #007DCA ";
    genderStyle = "text-borderWinter bg-btnBgColor border-searchBgColor";
  }
  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto  border-box md:mb-[60px]">
      <section className="relative w-[100%] h-fit md:mt-6 flex justify-between ">
        {/* Desktop version of comment*/}
        <article className="w-full hidden md:block">
          <section className="border-b border-borderColor2 pb-10">
            <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black track%]">
              Отзывы о товаре
            </p>
          </section>
          <section
            className={`flex ${
              openBox ? "h-fit" : "h-[590px]"
            }  justify-between flex-wrap   w-full h-fit overflow-hidden`}
          >
            {comment.map((data) => {
              return (
                <article className="w-[45%] h-fit border-b border-borderColor2 pr-5 pb-10 mt-10 ">
                  <p className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
                    {data?.Name}
                  </p>
                  <article className="flex items-center mt-3">
                    <p className="flex items-center">
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                    </p>
                    <button className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                      {data?.sendDate}
                    </button>
                  </article>
                  <article className="mt-4">
                    <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
                      {data?.SendText}
                    </p>
                  </article>
                  <article className="mt-6 ml-8">
                    <article>
                      <p className="not-italic font-AeonikProMedium text-lg leading-5 text-black">
                        Nike Store Official Dealer
                      </p>
                      <p className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
                        {data?.replyDate}
                      </p>
                    </article>
                    <article className="mt-4">
                      <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
                        {data?.replyText}
                      </p>
                    </article>
                  </article>
                </article>
              );
            })}
          </section>
          <section className="w-full py-6 flex justify-center items-center">
            <button
              onClick={() => setOpenBox(!openBox)}
              className="flex cursor-pointer active:scale-95  active:opacity-70 items-center gap-x-3 "
            >
              <p
                className={`${genderStyle} not-italic font-AeonikProMedium text-2xl leading-7 text-black track%]`}
              >
                {" "}
                все комментарии
              </p>{" "}
              <p
                className={`${openBox ? "rotate-[0deg]" : "rotate-[180deg]"} `}
              >
                <ArrowTopIcons colors={dataStyle} />
              </p>
            </button>
          </section>

          {/* Add comment */}
          <section className=" mt-[60px] h-fit border border-searchBgColor rounded-lg p-[18px]">
            <form action="">
              <textarea
                placeholder="Izoh qoldiring..."
                className="font-AeonikProRegular w-full h-fit text-base mb-4"
              >
                Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim,
                doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda
                bundanda zoʻr boʻlardi. Sifatiga gap yoo. raxmat tez yetkazib
                berishdi. Razmeri ham tochni.
              </textarea>
              <section className="flex items-center justify-between">
                <div className="flex items-center ">
                  <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                  <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                  <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2 flex items-center justify-center text-setTexOpacity">
                    +2
                  </div>
                </div>
                <div className="flex items-center justify-end mb-10">
                  <span className="cursor-pointer">
                    <NoNameIcon />
                  </span>
                  <div className="flex items-center p-2 rounded-xl bg-slate-50 ml-3">
                    <FreeStarIcon />
                    <FreeStarIcon />
                    <FreeStarIcon />
                    <FreeStarIcon />
                    <FreeStarIcon />
                  </div>
                  <button className="cursor-pointer ml-12">
                    <SendMessageIcon />
                  </button>
                </div>
              </section>
            </form>
          </section>
        </article>

        {/* Mobile version of comment */}
        <article className="w-full block md:hidden">
          <span className="text-base font-AeonikProMedium">Отзывы</span>
          <div className="w-full border border-searchBgColor rounded-lg mb-[34px]">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <span className="ml-[10px] font-AeonikProMedium text-[17px]">
                  4.7
                </span>
              </div>
              <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
                265 голосов
              </div>
            </div>
            <button className="w-full py-4 flex items-center justify-center border-t border-searchBgColor">
              <span className="ml-12">
                <CommentIcons colors={"#000"} />
              </span>
              <div className="ml-2 font-AeonikProRegular text-sm">
                Просмотреть комментарии
              </div>
              <span className="rotate-[90deg] ml-12">
                <ArrowTopIcons colors={"#000"} />
              </span>
            </button>
          </div>
          <div className="w-full border border-searchBgColor rounded-lg p-4">
            <form action="">
              <textarea
                placeholder="Izoh qoldiring..."
                className="font-AeonikProRegular w-full h-[150px] text-base"
              >
                Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim,
                doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda
                bundanda zoʻr boʻlardi. Sifatiga gap yoo. raxmat tez yetkazib
                berishdi. Razmeri ham tochni.
              </textarea>
              <div className="flex items-center mb-10">
                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2 flex items-center justify-center text-setTexOpacity">
                  +2
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="cursor-pointer">
                  <NoNameIcon />
                </span>
                <div className="flex items-center p-2 rounded-xl bg-slate-50 ml-3">
                  <FreeStarIcon />
                  <FreeStarIcon />
                  <FreeStarIcon />
                  <FreeStarIcon />
                  <FreeStarIcon />
                </div>
                <span className="cursor-pointer ml-12">
                  <SendMessageIcon />
                </span>
              </div>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
}
