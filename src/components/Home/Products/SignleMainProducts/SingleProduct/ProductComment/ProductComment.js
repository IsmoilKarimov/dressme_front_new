import React, { useContext, useEffect, useState } from "react";
import {
  CommentIcons,
  FreeStarIcon,
  GoBackIcon,
  NoNameIcon,
  ReviewIcon,
  SendMessageIcon,
  StarIcons,
} from "../../../../../../assets/icons";
import { ArrowTopIcons } from "../../../../../../assets/icons";
import { Modal, Rate } from "antd";
import { useNavigate } from "react-router-dom";

export default function ProductComment() {

  const [openComment, setOpenComment] = useState(false);
  
  const [visibleComments, setVisibleCommnets] = useState(4)
  const [allComments] = useState([
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
    {
      id: 6,
      Name: "Ali",
      sendDate: "21 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 7,
      Name: "Vali",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 8,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 9,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 10,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 11,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 12,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 13,
      Name: "G'ani",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ]);

  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/allcomments`);
  };

  const showNextComments = allComments.slice(0, visibleComments).map((allComments, item) => {
    return (
      <article key={item} className="w-[45%] h-fit border-b border-borderColor2 pr-5 pb-10 mt-10 ">
        <p className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
          {allComments?.Name}
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
            {allComments?.sendDate}
          </button>
        </article>
        <article className="mt-4">
          <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
            {allComments?.SendText}
          </p>
        </article>
        <article className="mt-6 ml-8">
          <article className="flex">
            <p className="not-italic font-AeonikProMedium text-lg leading-5 text-black">
              Nike Store Official Dealer
            </p>
            <p className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
              {allComments?.replyDate}
            </p>
          </article>
          <article className="mt-4">
            <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
              {allComments?.replyText}
            </p>
          </article>
        </article>
      </article>
    )
  })

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto  border-box md:mb-[60px]">
      <section className="relative w-[100%] h-fit md:mt-6 flex justify-between">
        {/* Desktop version of comment*/}
        <article className="w-full hidden md:block">
          <section className="flex items-center border-b border-borderColor2 pb-10">
              {showNextComments.length > 4 && (
                <button
                  onClick={() => {setVisibleCommnets(4)} }
                  className={`flex items-center cursor-pointer justify-center border border-borderColor2 rounded-lg mr-5`}
                >
                  <GoBackIcon />
                </button>
              )}              
            <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black track%]">
              Отзывы о товаре
            </p>
            <button 
              onClick={() => setOpenComment(true)}
              type="button" className="flex items-center ml-[20px] text-SignInBgColor text-lg font-AeonikProRegular">
              Написать отзыв
              <span className="ml-[5px]"><ReviewIcon /></span>  
            </button>
            <Modal
              centered
              open={openComment}
              onOk={() => setOpenComment(false)}
              onCancel={() => setOpenComment(false)}
              footer={null}
              className="w-full p-6"
            >
              <div className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="relative w-full h-[200px] p-3 border border-[#f0f0f0] rounded-lg mb-6 bg-[#fdfdfd]">
                  <textarea name="comment" id="comment" placeholder="Написать отзыв"  className="w-full h-[148px] resize-none bg-[#fdfdfd]">
                  </textarea>
                  {/* Star Rating */}
                  <button type="button" className="absolute right-1 w-fit flex items-center bg-[#F8F8F8] ml-auto p-[5px] rounded-md ">
                    <Rate defaultValue={3} />
                  </button>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button className="px-5 py-3 rounded-lg bg-borderWinter text-white text-base font-AeonikProMedium active:scale-95">Отправить</button>
                  </div>
              </div>
            </Modal>
          </section>

          <section id="comment" className="flex justify-between flex-wrap w-full h-fit overflow-hidden" >
            {showNextComments}
          </section>

          <section className="w-full py-6 flex justify-center items-center">
            {allComments.length !== showNextComments.length  
            ? (
              <button
                type="button"
                onClick={() => {setVisibleCommnets((prev) => prev + 4)}}
                className={`flex active:scale-95 active:opacity-70 rounded-xl px-[30px] py-[10px] border border-searchBgColor bg-bgColor items-center gap-x-3 `}
              >                
                <p className={`text-borderWinter bg-transparent font-AeonikProRegular text-base`}>
                  Показать еще...
                </p>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {setVisibleCommnets(4)} }
                className={`flex rounded-xl px-[30px] py-[10px] border border-searchBgColor bg-bgColor items-center gap-x-3 `}
              >
                  <a href="#comment" className={`text-borderWinter bg-transparent font-AeonikProRegular text-base`}>
                    Свернуть...
                  </a>
              </button>
                
            )}
          </section>
        </article>

        {/* Mobile version of comment */}
        <article className="w-full block md:hidden mt-5">
          <span className="text-base font-AeonikProMedium">Отзывы</span>
          <div className="w-full border border-searchBgColor rounded-lg mb-[34px]">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <span className="ml-[10px] font-AeonikProMedium text-base">
                  4.7
                </span>
              </div>
              <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
                265 голосов
              </div>
            </div>
            <button 
              // onClick={goDetail(allComments)}
              className="w-full py-4 flex items-center justify-center border-t border-searchBgColor">
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
        </article>
      </section>
    </main>
  );
}
