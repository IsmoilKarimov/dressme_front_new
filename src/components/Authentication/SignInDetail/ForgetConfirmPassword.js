import React, { useState, useEffect } from "react";
import { formArrowRightCircle, formPhone } from "../../../assets/imgs";
import { NavLink } from "react-router-dom";

export default function ForgetConfirmPassword() {
  const [timerDecrase, setTimerDecrase] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerDecrase >= 1) {
        setTimerDecrase((timerDecrase) => timerDecrase - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerDecrase]);
  return (
    <div className="py-8 px-4 w-full min-h-[calc(100vh-180px)] flex justify-center ss:px-4 md:px-0">
      <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
          <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
            Забыли пароль?
          </span>
          <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 text-center text-setTexOpacity tracking-[0.16px]">
            Не беспокойтесь, мы поможем вам
          </span>
        </div>

        <div className="mt-1 w-full h-fit">
          <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
            Номер телефона / Электронная почта
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
              type="text"
              // name="phone"
              placeholder="Phone number"
              required
            />
            <img src={formPhone} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
            Код проверки
          </span>
          <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black  tracking-[0.16px]">
            0:{timerDecrase}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
          <input
            maxLength={1}
            className="h-[64px] w-[53px] border border-searchBgColor bg-btnBgColor rounded-lg flex items-center justify-center not-italic font-AeonikProMedium text-3xl leading-9 text-center text-black"
            type="text"
            value={"-"}
            required
          />
        </div>
        <div className="mt-8">
          <span className="not-italic font-AeonikProRegular text-sm leading-4 text-setTexOpacity">
            Не получили код?
          </span>
          <span className="ml-2 cursor-pointer not-italic font-AeonikProMedium text-sm leading-4 text-setTexOpacity">
            Отправить снова
          </span>
        </div>

        <NavLink
          to="/set_new_password"
          className="mt-6  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Подтвердить
          </span>
          <img className="" src={formArrowRightCircle} alt="female" />
        </NavLink>
      </div>
    </div>
  );
}
