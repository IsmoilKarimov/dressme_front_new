import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { PaymentForBreadCamp } from "./PaymentForBreadCamp";
import InputMask from "react-input-mask";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  ArrowTopIcons,
  CalendarIcons,
  CircleSuccessIcons,
  EmailIcons,
  LocationIcons,
  PaymeSystemIcons,
  PersonIcons,
  PhoneIcons,
  SircleNext,
} from "../../../../AssetsMain/icons";
import { PaymentClick, Paymentpayme, UzbekFlag } from "../../../../AssetsMain";

export default function PaymentForClothes() {
  const [phone, setPhone] = useState("");
  const [codes, setCodes] = useState({
    phoneCode: "+998",
  });

  const [paymentData, setPaymentData] = useState(true);
  const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";

  if (dressInfo?.type === 1111) {
    dataStyle = "text-borderSpring ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "text-borderWinter";
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="flex flex-col  m-0 p-0 box-border">
      <div>
        <PaymentForBreadCamp />
      </div>
      <div className="w-full md:h-[84px] md:border-b border-searchBgColor mb-5 md:mb-0">
        <div className="max-w-[1280px] w-[100%] h-full flex items-center md:border-x border-searchBgColor justify-between m-auto">
          <div className="w-full md:w-[65.1%] h-full px-4 md:px-8 md:border-r border-searchBgColor flex items-center justify-between">
            <div className="w-fit flex items-center justify-between md:justify-normal">
              <p className="flex not-italic font-AeonikProMedium text-xl leading-7 text-black tracking-[1%]">
                Данные
              </p>
            </div>
            <div className="w-fit h-full flex  items-center">
              <span className="not-italic font-AeonikProMedium text-sm leading-4 text-right text-setTexOpacity">
                У тебя есть аккаунт?
              </span>
              <NavLink
                className={
                  "not-italic ml-2 font-AeonikProMedium text-sm leading-4 text-right text-fullBlue tracking-[1%]"
                }
              >
                Авторизуйся
              </NavLink>
            </div>
          </div>
          <div className="w-[34.9%] h-full hidden md:flex items-center justify-between px-8">
            <p className="not-italic mt-1 font-AeonikProMedium text-xl leading-7 text-black tracking-[1%]">
              Оплата
            </p>
            <p className="not-italic mt-1 font-AeonikProMedium text-xl leading-7 text-black tracking-[1%]">
              527 000 сум{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Payment section */}

      <div className="max-w-[1280px] w-[100%] h-fit flex justify-between m-auto px-4 md:px-0">
        <form className="block md:flex w-full mb-8 md:mb-0">
          
          <div className="md:w-[65%] md:border-t-0 md:border border-searchBgColor  flex flex-col rounded-lg md:rounded-none">
            
            <div className="border border-searchBgColor md:border-none rounded-xl mb-5 md:mb-0">
              <div className="w-full h-fit flex flex-col md:flex-row gap-x-5 px-4 md:px-8 py-4">
                <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-AeonikProRegular mb-[6px]"
                  >
                    Имя
                  </label>
                  <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular px-4 h-12 ">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Имя"
                      className="bg-transparent w-full pr-3"
                    />
                    <span>
                      <PersonIcons colors={"#A1A1A1"} />
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-AeonikProRegular mb-[6px]"
                  >
                    Фамилия
                  </label>
                  <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular px-4 h-12 ">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Фамилия"
                      className="bg-transparent w-full pr-3"
                    />
                    <span>
                      <PersonIcons colors={"#A1A1A1"} />
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="w-full h-fit flex flex-col md:flex-row gap-x-5 px-4 md:px-8 py-4">
                <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-AeonikProRegular mb-[6px]"
                  >
                    Номер телефона
                  </label>
                  <div className="flex items-center justify-center overflow-hidden border border-searchBgColor rounded-lg px-4 bg-btnBgColor h-12">
                    <div className="w-[35%] ls:w-[40%] md:w-[35%] h-12 flex items-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                      <img src={UzbekFlag} alt="form-arrow-bottom" />
                      <input
                        className="w-[45px] h-full select-none mx-2 md:mx-3 not-italic font-AeonikProMedium text-base leading-4 text-black bg-transparent"
                        type="text"
                        value={codes.phoneCode}
                        readOnly
                      />
                      <span className="rotate-[180deg]">
                        <ArrowTopIcons colors={"#A1A1A1"} />
                      </span>
                    </div>
                    <div className="w-[60%] h-12 overflow-hidden">
                      <InputMask
                        mask="(99)999-99-99"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4  h-full not-italic bg-btnBgColor ${
                          phone ? "font-AeonikProMedium" : null
                        } text-base leading-4 text-black`}
                        placeholder={"(77) 777-77-77"}
                      ></InputMask>
                    </div>
                    <span>
                      <PhoneIcons />
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:mb-0">
                  <div className="flex items-center justify-between mb-[6px]">
                    <label
                      htmlFor="lastname"
                      className="text-sm font-AeonikProRegular"
                    >
                      Электронная почта
                    </label>
                    <p className="text-sm font-AeonikProRegular">
                      <span className="text-blue-700">*</span>необязательная
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular px-4 h-12 ">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Адрес электронной почты"
                      className="bg-transparent w-full pr-3"
                    />
                    <span>
                      <EmailIcons colors={"#D2D2D2"} />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-fit px-4 md:px-8 pt-6 pb-4 md:pb-8 border border-searchBgColor md:border-none rounded-xl mb-5 md:mb-0">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="lastname"
                  className="font-AeonikProMedium text-xl"
                >
                  Адрес
                </label>
                <p className="hidden md:block text-base font-AeonikProRegular text-zinc-400">
                  Цены на доставку могут быть изменены
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-x-5 py-5">
                <div className="w-full md:w-1/2 flex flex-col flex-wrap">
                  <div className="w-full h-12 flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 mb-6 md:mb-0">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      placeholder="Выберите город или область"
                      className="bg-transparent w-full pr-3"
                    />
                    <span className="rotate-[180deg]">
                      <ArrowTopIcons colors={"#A1A1A1"} />
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="w-full h-12 flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-4 ">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Выберите район"
                      className="bg-transparent w-full pr-3"
                    />
                    <span className="rotate-[180deg]">
                      <ArrowTopIcons colors={"#A1A1A1"} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full h-12 flex items-center justify-between bg-btnBgColor border border-searchBgColor rounded-lg text-base font-AeonikProRegular p-[2px]">
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Введите свой полный адрес"
                  className="bg-transparent w-[88%] px-4"
                />
                <button className="flex items-center text-sm font-AeonikProMedium border border-searchBgColor bg-white rounded-lg px-4 py-[10px]">
                  <span className="mr-[10px] -pt-1">
                    <LocationIcons />
                  </span>
                  Карта
                </button>
              </div>
            </div>
            
            <div className="md:hidden flex flex-col p-4 border border-searchBgColor rounded-lg">
              <div className="w-full flex flex-col items-center mb-6">
                <div className="w-full h-full flex md:hidden items-center justify-between mb-8">
                  <p className="not-italic mt-1 font-AeonikProMedium text-xl leading-7 text-black tracking-[1%]">
                    Оплата
                  </p>
                  <p className="not-italic mt-1 font-AeonikProMedium text-xl leading-7 text-black tracking-[1%]">
                    527 000 сум{" "}
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden h-[52px] w-full md:mx-0 flex justify-between bg-slate-50 border border-solid mx-auto">
                  <button
                    onClick={() => setPaymentData(true)}
                    className={`w-1/2 md:h-[50px]  h-full text-base text-black text-center font-AeonikProRegular not-italic ${
                      paymentData
                        ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle}`
                        : ""
                    } `}
                  >
                    {" "}
                    Наличными
                  </button>
                  <button
                    onClick={() => setPaymentData(false)}
                    className={`w-1/2 md:h-[50px]  h-full text-base text-black text-center font-AeonikProRegular not-italic ${
                      !paymentData
                        ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle} `
                        : ""
                    } `}
                  >
                    Кредитная карта
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-between rounded-lg h-12 border border-searchBgColor bg-btnBgColor mb-6">
                <input
                  type="number"
                  name="paymentcard"
                  id="paymentcard"
                  placeholder="8600 1234 5678 9012"
                  className="bg-transparent px-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="mr-4">
                    <PaymeSystemIcons colors={"#000"} />
                </span>
              </div>
              <div className="w-full flex justify-between border-b gap-x-4">
                <div className="w-[36%] h-12 rounded-lg flex items-center border border-searchBgColor bg-btnBgColor mb-8">
                  <input
                    type="number"
                    name="paymentcard"
                    id="paymentcard"
                    placeholder="12/26"
                    className="w-16 bg-transparent pl-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button className="flex items-center text-sm px-4 rounded-[6px] h-11 ml-[1px]">
                    <span>
                      <CalendarIcons colors={"#000"} />
                    </span>
                  </button>
                </div>
                <button className="w-[32%] justify-center px-4 h-12 flex items-center font-AeonikProMedium border border-searchBgColor rounded-lg bg-btnBgColor">
                  <span className="flex items-center mr-[2px]">
                    <img src={PaymentClick} alt="" />
                  </span>
                  click
                </button>
                <button className="w-[32%] h-12 border border-searchBgColor rounded-lg px-4 bg-btnBgColor">
                  <span className="h-[70%]">
                    <img src={Paymentpayme} alt="" />
                  </span>{" "}
                </button>
              </div>
              <div className="w-full flex items-center mt-5 mb-11">
                <span className="w-6 h-6 text-sm font-AeonikProRegular rounded-lg mr-2 border border-searchBgColor cursor-pointer"></span>
                <span className="w-[90%]">Я согласен на обработку персональных данных.</span>
              </div>

              <div className="w-full flex flex-col items-center">
                <button className="h-[56px] w-full flex items-center justify-center rounded-lg bg-fullBlue text-white active:scale-95	active:opacity-70">
                  <span className="mr-[10px]">
                    <CircleSuccessIcons colors={"#fff"} />
                  </span>
                  Подтвердить заказ
                </button>
              </div>
            </div>

          </div>
          
          <div className="md:w-[35%] hidden md:flex flex-col px-6 pb-8  border-t-0 border-l-0 border border-searchBgColor rounded-br-lg">
            <div className="w-full flex  items-center mb-[34px] mt-5">
              <div className="rounded-lg overflow-hidden h-[52px] w-full md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
                <button
                  onClick={() => setPaymentData(true)}
                  className={`w-1/2 md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
                    paymentData
                      ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle}`
                      : ""
                  } `}
                >
                  {" "}
                  Наличными
                </button>
                <button
                  onClick={() => setPaymentData(false)}
                  className={`w-1/2 md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
                    !paymentData
                      ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle} `
                      : ""
                  } `}
                >
                  Кредитная карта
                </button>
              </div>
            </div>
            <div className="w-full rounded-lg h-12 flex items-center border border-searchBgColor bg-btnBgColor mb-4">
              <button className="flex items-center flex-nowrap text-sm px-4 rounded-[6px] bg-searchBgColor h-11 ml-[1px]">
                <span className="mr-2">
                  <PaymeSystemIcons colors={"#000"} />
                </span>
                Номер карты
              </button>
              <input
                type="number"
                name="paymentcard"
                id="paymentcard"
                placeholder="8600 1234 5678 9012"
                className="w-[58%]  bg-transparent px-4 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="w-full flex justify-between border-b">
              <div className="w-[50%] h-12 rounded-lg flex items-center border border-searchBgColor bg-btnBgColor mb-8">
                <button className="w-[66%] flex items-center flex-nowrap text-sm px-4 rounded-[6px] bg-searchBgColor h-11 ml-[1px]">
                  <span className="mr-2">
                    <CalendarIcons colors={"#000"} />
                  </span>
                  Срок дейс.
                </button>
                <input
                  type="number"
                  name="paymentcard"
                  id="paymentcard"
                  placeholder="12/26"
                  className="w-[34%] bg-transparent pl-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <button className=" w-[96px] justify-center px-4 h-12 flex items-center font-AeonikProMedium border border-searchBgColor rounded-lg">
                <span className="h-[70%] flex items-center mr-2">
                  <img src={PaymentClick} alt="" />
                </span>
                click
              </button>
              <button className="h-12 border border-searchBgColor rounded-lg px-4">
                <span className="h-[70%]">
                  <img src={Paymentpayme} alt="" />
                </span>{" "}
              </button>
            </div>
            <div className="w-full flex items-center mt-5 mb-11">
              <p className="w-6 h-6 text-sm font-AeonikProRegular  rounded-lg mr-2 border border-searchBgColor cursor-pointer"></p>
              Я согласен на обработку персональных данных.
            </div>

            <div className="w-full px-8 flex flex-col items-center">
              <button className="h-[56px] w-full flex items-center justify-center rounded-lg bg-fullBlue text-white active:scale-95	active:opacity-70">
                <span className="mr-[10px]">
                  <CircleSuccessIcons colors={"#fff"} />
                </span>
                Подтвердить заказ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
