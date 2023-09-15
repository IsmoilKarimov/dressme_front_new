import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FreeStar, GoBackIcon, ReviewIcon, StarIcons } from "../../../../../../../assets/icons";


const MobileAllComments = () => {

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
    {
      id: 6,
      Name: "Ali",
      nameOfStore:"Nike Store Official",
      sendDate: "21 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 7,
      Name: "Vali",
      nameOfStore:"Nike Store Official",
      sendDate: "19 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "19 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 8,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 9,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 10,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 11,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 12,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
    {
      id: 13,
      Name: "G'ani",
      nameOfStore:"Nike Store Official",
      sendDate: "31 февраля 2023 г.",
      SendText:
        "Tovarni sifati va dizayniga gap yoʻq. Tavsiya bergan bolardim, doʻkonga moviy rangli modellardan koʻproq qoʻshganingizda bundanda zoʻr boʻlardi.",
      replyDate: "31 февраля 2023 г.",
      replyText: "Спасибо за оценку, скоро появятся в продаже",
    },
  ]);

  const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
          top: 0,
        });
      }, []);
      
    return(
        <main className="w-full flex flex-col items-center px-4">
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
          <button 
            type="button" 
            className="w-full flex items-center ml-[20px] text-SignInBgColor text-base font-AeonikProRegular mb-[2px]"
          >
              Написать отзыв
              <span className="ml-[5px]"><ReviewIcon /></span>  
            </button>
          <div className="w-full flex items-center justify-between rounded-t border border-borderColor2 px-4 py-[14px] mb-[18px]">
            <div className="flex items-center">
              <StarIcons /><StarIcons /><StarIcons /><StarIcons /><StarIcons />
              <span className="ml-[10px] font-AeonikProMedium text-base">
                4.7
              </span>
            </div>
            <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
              265 голосов
            </div>
          </div>
          <div className="w-full">
            {allComments.map(data => (
              <div key={data.id} className="w-full border border-borderColor2 p-[15px] rounded mb-4">
                <div className="flex items-center justify-between">
                  <div className="text-base font-AeonikProMedium text-[#2c2c2c]">{data.Name}</div>
                  <div className="text-[#a1a1a1] text-xs font-AeonikProRegular">{data.sendDate}</div>
                </div>
                <div className="w-full flex items-center text-[13px] font-AeonikProRegular mb-5">
                  <span>Оценка покупки</span>
                  <span className="ml-[5px]">4.7</span>
                  <span className="ml-[2px]"><FreeStar /></span>
                </div>
                <p className="text-[13px] font-AeonikProRegular mb-5">{data.SendText}</p>
                <div className="w-full bg-[#F4F6FB] px-[15px] py-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[13px] font-AeonikProMedium">{data.nameOfStore}</div>
                    <div className="text-[11px] font-AeonikProRegular text-[#B2B8C8]">{data.replyDate}</div>
                  </div>
                  <p className="text-[13px] font-AeonikProRegular text-[#505050]">{data.replyText}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
    )
}

export default MobileAllComments