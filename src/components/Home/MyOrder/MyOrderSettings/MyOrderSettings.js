import React, { useState } from "react";
import {
  ArrowTopIcons,
  CalendarIcons,
  EmailIcons,
  LogOutIcons,
  PersonIcons,
  SircleNext,
} from "../../../../AssetsMain/icons";
import InputMask from "react-input-mask";
import { UzbekFlag } from "../../../../AssetsMain";
import { useLocation, useNavigate } from "react-router-dom";

const MyOrderSettings = () => {
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
    Male: true,
    Female: false,
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

  const navigate = useNavigate();
  const location = useLocation();
  const LogOut = () => {
    localStorage.removeItem("dressMeLogin");
    if (location?.pathname?.includes("my-order/settings")) {
      navigate("/");
    } else if (location?.pathname?.includes("my-order")) {
      navigate("/");
    } else {
      navigate(location.pathname);
    }
  };
  return (
    <div className="pt-3 md:pt-8 w-full flex justify-center ss:px-4 md:px-0">
      <div className="md:max-w-[820px] max-w-[440px] w-[100%] h-fit p-4 md:px-0  border border-searchBgColor rounded-lg mb-[100px] md:mb-0">
        <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
          <div className="">
            <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
              Мои данные
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="w-full md:w-[48%] h-fit">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Имя{" "}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  placeholder="Имя"
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Фамилия{" "}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  placeholder="Фамилия"
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
          <div className="flex  flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Номер телефона{" "}
              </div>
              <div className="flex mt-[6px] items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                <div className="ss:w-[35%] md:w-[30%]   h-12 flex bg-btnBgColor items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                  <img src={UzbekFlag} alt="form-arrow-bottom" />
                  <input
                    className="w-[40px] bg-btnBgColor h-full select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black"
                    type="text"
                    value={state.phoneCode}
                    readOnly
                  />
                  <span className="rotate-[180deg]">
                    <ArrowTopIcons colors={"#000"} />
                  </span>
                </div>
                <div className="ss:w-[65%] bg-btnBgColor md:w-[70%] h-12 overflow-hidden">
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
              </div>
            </div>
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="flex justify-between mt-[6px]  w-full items-center not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                <span>Электронная почта</span>
                <span>*необязательная</span>
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="email"
                  placeholder="Адрес электронной почты"
                  required
                />
                <span>
                  <EmailIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-[40px] md:py-[30px] ">
          <div className="flex  flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Пол
              </div>
              <div className="w-full mt-[6px]  flex items-center justify-center bg-btnBgColor overflow-hidden border border-searchBgColor rounded-lg">
                <button
                  className={`w-1/2 h-12 flex items-center justify-center border-r border-searchBgColor not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-center ${
                    state.Male ? "text-fullBlue" : "text-black"
                  }`}
                  onClick={() =>
                    setState({ ...state, Female: false, Male: true })
                  }
                >
                  Мужской
                </button>
                <button
                  className={`w-1/2 h-12 flex items-center justify-center not-italic font-AeonikProMedium tracking-[1%] text-base leading-4 text-center ${
                    state.Female ? "text-fullBlue" : "text-black"
                  }`}
                  onClick={() =>
                    setState({ ...state, Female: true, Male: false })
                  }
                >
                  Женский
                </button>
              </div>
            </div>
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                Дата рождения
              </div>
              <div className="w-full mt-[6px]  h-12 flex items-center  bg-btnBgColor overflow-hidden border border-searchBgColor rounded-lg">
                <button
                  className={`w-[48px] h-full  flex items-center justify-center border-r border-searchBgColor`}
                >
                  <CalendarIcons colors={"#000"} />
                </button>
                <button
                  className={`w-[66px] h-full  flex items-center justify-center border-r border-searchBgColor`}
                >
                  <span className="not-italic font-AeonikProRegular text-base leading-4 tracking-[1%] text-closeColorBtn">
                    День
                  </span>
                </button>
                <button
                  className={`w-[calc(100%-200px)] h-full  flex items-center justify-between px-2 border-r border-searchBgColor`}
                >
                  <span className="not-italic font-AeonikProRegular text-base leading-4 tracking-[1%] text-closeColorBtn">
                    Месяц
                  </span>{" "}
                  <span className="ml-2 rotate-[90deg]">
                    <ArrowTopIcons colors={"#B8B8B8"} />
                  </span>{" "}
                </button>
                <button
                  className={`w-[86px] h-full  flex items-center justify-center `}
                >
                  <span className="not-italic font-AeonikProRegular  text-base leading-4 tracking-[1%] text-closeColorBtn">
                    1996
                  </span>{" "}
                  <span className="ml-2 rotate-[90deg]">
                    <ArrowTopIcons colors={"#B8B8B8"} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[48%] mx-auto flex items-center justify-between  md:px-[40px] md:py-[30px] mt-6 md:mt-0">
          <div>
            <button
              onClick={LogOut}
              className="flex items-center active:scale-95  active:opacity-70 "
            >
              <span>
                <LogOutIcons colors={"#D50000"} />
              </span>
              <span className="not-italic hidden md:block ml-2  font-AeonikProMedium text-base leading-4 tracking-[1%] text-RedColor text-center">
                Выйти из системы
              </span>
            </button>
          </div>
          <div className="w-[80%] xs:w-[60%] md:w-auto ">
            <button className="w-[100%] md:w-[244px] h-[52px] bg-fullBlue text-white active:scale-95  active:opacity-70 rounded-lg flex items-center justify-center">
              <span className="not-italic  font-AeonikProMedium text-base leading-4 text-center tracking-[1%]">
                Сохранить данные
              </span>
              <span className="ml-2">
                <SircleNext colors={"#fff"} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { MyOrderSettings };
