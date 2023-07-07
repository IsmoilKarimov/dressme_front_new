import React, { useContext, useState, useEffect } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import InputMask from "react-input-mask";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  PersonIcons,
  PhoneIcons,
  SircleNext,
} from "../../../AssetsMain/icons";
import { UzbekFlag } from "../../../AssetsMain";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+998",
    email: "",
    password: "",
    eyesShow: true,
    validateConfirm: true,
    requestPerson: true,
  });

  let data = phone.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let arr3 = state.phoneCode.split("+");
  let data3 = arr3.join("");
  const sendMessagePhoneNumber = data3 + data2;

  const [dressInfo] = useContext(dressMainData);
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    genderStyle = "text-borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    genderStyle = "text-borderSummer ";
  }
  if (dressInfo?.type === 3333) {
    genderStyle = "text-borderAutumm ";
  }
  if (dressInfo?.type === 4444) {
    genderStyle = "text-borderWinter ";
  }
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
    <div>
      {state?.validateConfirm ? (
        <div className=" py-8 w-full  min-h-[calc(100vh-180px)] mb-10 flex justify-center ss:px-4 md:px-0">
          <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
            <div className=" w-full  mb-7 not-italic font-AeonikProMedium text-xl  leading-5 ss:text-start md:text-center  tracking-[0,16px] text-black">
              Добро пожаловать в{" "}
              <span className={`${genderStyle}`}>Dressme</span>!
            </div>

            <div className="mt-2 w-full h-fit">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Имя{" "}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  placeholder="Имя"
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
            <div className="mt-4 w-full h-fit">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Фамилия{" "}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  placeholder="Фамилия"
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>{" "}
              </div>
            </div>

            <div className="mt-4 w-full h-fit">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Номер телефона{" "}
              </div>
              <div className="flex items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                <div className="ss:w-[35%] md:w-[30%] h-12 flex items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                  <img src={UzbekFlag} alt="form-arrow-bottom" />
                  <input
                    className="w-[40px]  h-full select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black"
                    type="text"
                    value={state.phoneCode}
                    readOnly
                  />
                  <span className="rotate-[180deg]">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </div>
                <div className="ss:w-[65%] md:w-[70%] h-12 overflow-hidden">
                  <InputMask
                    mask="(99)999-99-99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4  h-full not-italic ${
                      phone ? "font-AeonikProMedium" : null
                    } text-base leading-4 text-black`}
                    placeholder={"(77) 777-77-77"}
                  ></InputMask>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full h-fit">
              <div className=" flex items-center justify-between w-full">
                <NavLink
                  to={"/forget_password"}
                  className="not-italic font-AeonikProRegular text-sm leading-4 cursor-pointer text-black  tracking-[0,16px]"
                >
                  Электронная почта{" "}
                </NavLink>
                <NavLink
                  to={"/forget_password"}
                  className="not-italic 	 font-AeonikProRegular text-sm leading-4 cursor-pointer text-black  tracking-[0,16px]"
                >
                  *необязательная{" "}
                </NavLink>
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="email"
                  placeholder="Адрес электронной почты"
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>{" "}
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
              <div className="not-italic mt-2 font-AeonikProRegular selec-none text-xs leading-3 text-black tracking-[0,16px] ">
                Пароль должен быть не менее 8 символов
              </div>
            </div>

            <NavLink
              onClick={() => setState({ ...state, validateConfirm: false })}
              className="mt-8 border  cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70	"
            >
              <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                Войти в систему
              </span>
              <span>
                <SircleNext colors={"#fff"} />
              </span>{" "}
            </NavLink>
          </div>
        </div>
      ) : (
        <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex justify-center ss:px-4 md:px-0">
          <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
            <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
              <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
                Подтвердите номер телефона{" "}
              </span>
              <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 text-center text-setTexOpacity tracking-[0.16px]">
                для зарегистрироваться{" "}
              </span>
            </div>

            <div className="mt-1 w-full h-fit">
              <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
                Номер телефона
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                  type="text"
                  placeholder="Phone number"
                  required
                />
                <span>
                  <PhoneIcons />
                </span>{" "}
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
              <span className="ml-2 not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-black tracking-[0,16px]">
                Отправить снова
              </span>
            </div>

            <div
              onClick={() => setState({ ...state, requestPerson: false })}
              className="mt-6  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
            >
              <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                Подтвердить
              </span>
              <span>
                <SircleNext colors={"#fff"} />
              </span>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
