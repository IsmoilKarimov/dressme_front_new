import React from "react";
import { CommentIcons, FreeStarIcon, NoNameIcon, SendMessageIcon, StarIcons } from "../../../../../../AssetsMain/icons";
import { ArrowTopIcons } from "../../../../../../AssetsMain/icons";

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
      id: 3,
      Name: "Shohjahon",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ];
  return (
    <div className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto  border-box md:mb-[60px]">
        <div className="relative w-[100%] h-fit md:mt-6 flex justify-between ">
            {/* Desktop version of comment*/}
            <div className="w-full hidden md:block">
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
                <div className=" mt-[60px] h-fit border border-searchBgColor rounded-lg p-[18px]">
                    <form action="">
                        <textarea
                            placeholder="Izoh qoldiring..."
                            className="font-AeonikProRegular w-full h-fit text-base mb-4">
                                Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi. Sifatiga gap yoo. raxmat tez yetkazib berishdi. Razmeri ham tochni.
                        </textarea>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center ">
                                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                                <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2 flex items-center justify-center text-setTexOpacity">+2</div>
                            </div>
                            <div className="flex items-center justify-end mb-10">
                                <span className="cursor-pointer"><NoNameIcon/></span>
                                <div className="flex items-center p-2 rounded-xl bg-slate-50 ml-3">
                                    <FreeStarIcon/>
                                    <FreeStarIcon/>
                                    <FreeStarIcon/>
                                    <FreeStarIcon/>
                                    <FreeStarIcon/>
                                </div>
                                <span className="cursor-pointer ml-12"><SendMessageIcon/></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Mobile version of comment */}
            <div className="w-full block md:hidden">
                <span className="text-base font-AeonikProMedium">Отзывы</span>
                <div className="w-full border border-searchBgColor rounded-lg mb-[34px]">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                            <StarIcons />
                            <StarIcons />
                            <StarIcons />
                            <StarIcons />
                            <StarIcons />
                            <span className="ml-[10px] font-AeonikProMedium mt-1 text-[17px]">4.7</span>
                        </div>
                        <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">265 голосов</div>
                    </div>
                    <button className="w-full py-4 flex items-center justify-center border-t border-searchBgColor">
                        <span className="ml-12"><CommentIcons colors={'#000'}/></span>
                        <div className="ml-2 font-AeonikProRegular text-sm">Просмотреть комментарии</div>
                        <span className="rotate-[90deg] ml-12">
                            <ArrowTopIcons colors={"#000"} />
                        </span>
                    </button>
                </div>
                <div className="w-full border border-searchBgColor rounded-lg p-4">
                    <form action="">
                        <textarea
                            placeholder="Izoh qoldiring..."
                            className="font-AeonikProRegular w-full h-[150px] text-base">
                                Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi. Sifatiga gap yoo. raxmat tez yetkazib berishdi. Razmeri ham tochni.
                        </textarea>
                        <div className="flex items-center mb-10">
                            <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                            <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2"></div>
                            <div className="w-[46px] h-[62px] bg-searchBgColor border border-sky-500 rounded-lg mr-2 flex items-center justify-center text-setTexOpacity">+2</div>
                        </div>
                        <div className="flex items-center justify-end">
                            <span className="cursor-pointer"><NoNameIcon/></span>
                            <div className="flex items-center p-2 rounded-xl bg-slate-50 ml-3">
                                <FreeStarIcon/>
                                <FreeStarIcon/>
                                <FreeStarIcon/>
                                <FreeStarIcon/>
                                <FreeStarIcon/>
                            </div>
                            <span className="cursor-pointer ml-12"><SendMessageIcon/></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
