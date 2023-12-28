import React from "react";
import {
  MenuCloseIcons,
} from "../../../../../assets/icons";

export default function EmailSend({ onClick, sendData }) {
  const handleClick = () => {
    return(
      sendData(), 
      onClick()
    )
  };

  return (
    <div className="w-full md:w-[455px] h-fit bg-white rounded-t-lg md:rounded-lg px-4 py-5 md:py-[35px] md:px-[50px]">
      <div className="flex justify-end items-center md:mr-[-30px] md:mt-[-15px]">
        {" "}
        <button
          onClick={onClick}
          className=" border border-[#e2e2e2] rounded-lg p-[3px]"
        >
          <MenuCloseIcons width={24} height={24} colors={"#000"} />
        </button>
      </div>
      <div className="w-full text-xl text-center font-AeonikProMedium mb-3">
        Вы уверены?
      </div>
      <div className="leading-6 text-base font-AeonikProRegular text-textColor">
        Если вы обновите почту, то ваш аккаунт станет недоступным, пока вы не
        проверите новую почту
      </div>

      <div className="w-full flex items-center justify-between gap-x-4 mt-[30px]">
        <button
          type="button"
          onClick={onClick}
          className="h-12 w-1/2 active:scale-95  active:opacity-70 rounded-lg text-borderWinter border border-borderWinter flex bg-white items-center justify-center text-center text-base not-italic font-AeonikProMedium"
        >
          Отмена
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="h-12 w-1/2 active:scale-95  active:opacity-70 text-white rounded-lg  flex bg-borderWinter items-center justify-center text-center text-base not-italic font-AeonikProMedium"
        >
          Обновить
        </button>
      </div>
    </div>
  );
}
