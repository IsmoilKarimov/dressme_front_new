import React, { useEffect, useState } from "react";
import { formArrowRightCircle, formPhone } from "../../../assets/imgs";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SetNewPassword() {
  const [state, setState] = useState({
    eyesShow: true,
    validateShow: true,
    password: "",
    phoneNumber: "",
  });
  return (
    <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex justify-center ss:px-4 md:px-0">
      <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
          <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
            Установите новый пароль{" "}
          </span>
          <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 text-center text-setTexOpacity tracking-[0.16px]">
            Ваш новый пароль должен отличаться от предыдущего пароля{" "}
          </span>
        </div>

        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Новый пароль
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
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Подтвердите пароль
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.validateShow ? "password" : "text"}
              placeholder="Enter your password"
              required
            />
            <span className="cursor-pointer">
              {state?.validateShow ? (
                <AiOutlineEyeInvisible
                  onClick={() => setState({ ...state, validateShow: false })}
                  size={20}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setState({ ...state, validateShow: true })}
                  size={20}
                />
              )}
            </span>
          </div>
        </div>

        <NavLink
          to="/"
          // onClick={HandleGetConfirmPassword}
          className="mt-8  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Сбросит пароль{" "}
          </span>
          <img className="" src={formArrowRightCircle} alt="female" />
        </NavLink>
      </div>
    </div>
  );
}
