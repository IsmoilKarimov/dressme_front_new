import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FreeStar, GoBackIcon, ReviewIcon, StarIcons } from "../../../../../../../assets/icons";
import CommentDropUp from "./CommentDropUp";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const MobileAllComments = () => {

  const [addComment, setAddComment] = useState(false)
  const toggleAddComment = useCallback(()=> setAddComment(false), [])

  
    const url = "https://api.dressme.uz";

    const { id } = useParams();
    const newId = id?.replace(":", "");

    const [data, setData] = useState();

    const { refetch } = useQuery(
      ["get_main_detail_data_comment"],
      () => {
        return fetch(`${url}/api/main/products/${newId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }).then((res) => res.json());
      },
      {
        onSuccess: (res) => {
          console.log(res);
          setData(res);
        },
        onError: (err) => {
          console.log(err, "err");
        },
        keepPreviousData: true,
        refetchOnWindowFocus: true,
      }
    );

   // For DropUp
  useEffect(() => {
      if ( addComment ) {
      document.body.style.overflow = "hidden";
      } else {
      document.body.style.overflow = "auto";
      }
  }, [ addComment ]);

  const [allComments] = useState([
    {
      id: 1,
      Name: "Umar",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Качество среднее но стоит своих денег точно мне понравилась классный оверсайз",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за заказ! Будем ждать вас снова)",
    },
    {
      id: 2,
      Name: "Firdavsbek",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "sifatiga gap yoo. raxmat tez yetkazib berishdi . razmeri ham tochni",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо вам за оценку!",
    },
    {
      id: 3,
      Name: "Shohjahon",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 4,
      Name: "Shohjahon",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 5,
      Name: "Shohjahon",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ]);

  const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
          top: 0,
        });
      }, []);
      
    return (
      <main className="w-full flex flex-col items-center px-4">
        <div className="comments">
          <section
            onClick={() => setAddComment(false)}
            className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
              addComment ? "" : "hidden"
            }`}
          ></section>
          <section
            className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
              addComment ? "bottom-0" : "bottom-[-800px] z-0"
            }`}
          >
            <CommentDropUp onClick={toggleAddComment} />
          </section>
        </div>

        <div className="w-full my-6 flex items-center justify-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="absolute left-2 flex items-center cursor-pointer justify-center "
          >
            <GoBackIcon />
          </button>
          <div className="w-full flex items-center justify-center">
            <span className="text-base leading-4 font-AeonikProMedium">
              Отзывы о товаре
            </span>
          </div>
        </div>
        {Cookies.get("DressmeUserToken") ? (
          <button
            onClick={() => setAddComment(true)}
            type="button"
            className="w-full flex items-center ml-[20px] text-SignInBgColor text-base font-AeonikProRegular mb-[2px]"
          >
            Написать отзыв
            <span className="ml-[5px]">
              <ReviewIcon />
            </span>
          </button>
        ) : null}

        <div className="w-full flex items-center justify-between rounded-t border border-borderColor2 px-4 py-[14px] mb-[18px]">
          <div className="flex items-center">
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <StarIcons />
            <span className="ml-[10px] font-AeonikProMedium text-base">
              {data?.product?.overall_rating}
            </span>
          </div>
          <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
            {data?.product?.rated_users_count} голосов
          </div>
        </div>
        <div className="w-full">
          {allComments.map((data) => (
            <div
              key={data.id}
              className="w-full border border-borderColor2 p-[15px] rounded mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-AeonikProMedium text-[#2c2c2c]">
                  {data.Name}
                </div>
                <div className="text-[#a1a1a1] text-xs font-AeonikProRegular">
                  {data.sendDate}
                </div>
              </div>
              <div className="w-full flex items-center text-[13px] font-AeonikProRegular mb-5">
                <span>Оценка покупки</span>
                <span className="ml-[5px]">4.7</span>
                <span className="ml-[2px]">
                  <FreeStar width={13} height={13} colors={"#F4A622"} />
                </span>
              </div>
              <p className="text-[13px] font-AeonikProRegular mb-5">
                {data.SendText}
              </p>
              <div className="w-full bg-[#F4F6FB] px-[15px] py-3">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[13px] font-AeonikProMedium">
                    {data.nameOfStore}
                  </div>
                  <div className="text-[11px] font-AeonikProRegular text-[#B2B8C8]">
                    {data.replyDate}
                  </div>
                </div>
                <p className="text-[13px] font-AeonikProRegular text-[#505050]">
                  {data.replyText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
}

export default MobileAllComments