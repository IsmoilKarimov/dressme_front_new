import React, { useEffect, useState } from "react";
import { formArrowRightCircle, formPhone } from "../../../assets/imgs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    phoneNumber: "",
  });

  return (
    <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex justify-center ss:px-4 md:px-0">
      <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full mt-1 mb-7 not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
          Авторизоваться
        </div>

        <div className="mt-2 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Номер телефона / Электронная почта
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black focus:bg-white placeholder-bg-white"
              type="text"
              // name="phone"
              placeholder="Phone number"
              required
            />
            <img src={formPhone} alt="" />
          </div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Пароль
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              placeholder="Enter your password"
              required
            />
            <span className="cursor-pointer">
              {state?.eyesShow ? (
                <AiOutlineEyeInvisible
                  onClick={() => setState({ ...state, eyesShow: false })}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setState({ ...state, eyesShow: true })}
                  size={20}
                />
              )}
            </span>
          </div>
        </div>

        <div className="my-5 flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className=" text-black bg-white placeholder-bg-white mr-2"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label
              htmlFor="vehicle1"
              className="not-italic select-none cursor-pointer font-AeonikProRegular text-sm leading-4 text-black tracking-[0,16px]"
            >
              {" "}
              Оставаться в системе
            </label>
          </div>
          <NavLink
            to={"/forget_password"}
            className="not-italic underline	 font-AeonikProRegular text-sm leading-4 cursor-pointer text-black hover:text-SignInBgColor tracking-[0,16px]"
          >
            Забыли пароль?
          </NavLink>
        </div>
        <div className="mt-2 border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 ">
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Войти в систему
          </span>
          <img className="" src={formArrowRightCircle} alt="female" />
        </div>
        <div className="md:hidden block mt-6 text-center">
          {" "}
          Если у вас еще нету аккаунта
        </div>
        <NavLink
          to={"/sign_up"}
          className="mt-3 border md:hidden block cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-OpacitySignIn select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-black tracking-[0,16px]">
            Создайте Аккаунт
          </span>
        </NavLink>
      </div>
    </div>
  );
}
