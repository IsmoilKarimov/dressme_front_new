import React, { useContext, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import InputMask from "react-input-mask";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import {
  EmailIcons,
  MenuCloseIcons,
  PersonIcons,
  PhoneIcons,
  SircleNext,
  Star6Icon,
  SuccessIconsForMail,
} from "../../../assets/icons";
import { UzbekFlag } from "../../../assets";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import LoadingFor from "../../Loading/LoadingFor";

export default function SignUp() {
  // const [phone, setPhone] = useState("");
  const url = "https://api.dressme.uz/api/user/register";
  const [dressInfo] = useContext(dressMainData);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+998",
    phoneNumber: "",
    email: "",
    password: "",
    password_confirmation: "",
    errorsGroup: "",
    eyesShow: true,
    eyesShowConfirmation: true,
    validateConfirm: true,
    requestPerson: true,
    openModalEmailMessage: false,
  });

  let data = state?.phoneNumber.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let data3 = data2.split(" ");
  let data4 = data3.join("");
  let arr3 = state.phoneCode.split("+");
  let data5 = arr3.join("");
  const sendPhoneNumber = state.phoneNumber ? data5 + data4 : "";

  // =========== POST USER REGISTER DATA ==========
  const { mutate } = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: state?.firstName,
        surname: state?.lastName,
        phone: sendPhoneNumber,
        email: state?.email,
        password: state?.password,
        password_confirmation: state?.password_confirmation,
      }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.message && res?.errors) {
            setLoading(false);
            setState({ ...state, errorsGroup: res });
          } else if (res?.message && !res?.errors) {
            setLoading(false);
            setState({
              ...state,
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              password: "",
              password_confirmation: "",
              errorsGroup: "",
              openModalEmailMessage: true,
            });
            toast.success(`${res?.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        },
        onError: (err) => {
          setLoading(false);
          toast.error("Serverda xatolik", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
      }
    );
  };

  const [timerDecrase, setTimerDecrase] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerDecrase >= 1) {
        setTimerDecrase((timerDecrase) => timerDecrase - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerDecrase]);

  const handleClick = () => {
    return onSubmit();
    // setLoading(true)
  };

  return (
    <div className="mt-[80px]">
      {loading ? (
        <div>
          <LoadingFor />
        </div>
      ) : (
        <div className="w-full h-full">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={4}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {state?.validateConfirm ? (
            <div className=" py-8 w-full  min-h-[calc(100vh-180px)] mb-10 flex justify-center">
              <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
                <div className=" w-full  mb-7 not-italic font-AeonikProMedium text-xl  leading-5 ss:text-start md:text-center  tracking-[0,16px] text-black">
                  Добро пожаловать в{" "}
                  <span className={`${dressInfo?.TextColorSeason}`}>
                    Dressme
                  </span>
                  !
                </div>
                {/* Name Registration Section */}
                <div className="mt-2 w-full h-fit">
                  <div className="flex items-center font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                    Имя{" "}
                    <span className="text-red-600 ml-[2px]">
                      <Star6Icon />
                    </span>{" "}
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      placeholder="Имя"
                      value={state?.firstName}
                      onChange={(e) =>
                        setState({ ...state, firstName: e.target.value })
                      }
                      required
                    />
                    <span>
                      <PersonIcons colors={"#D2D2D2"} />
                    </span>
                  </div>
                  {state?.errorsGroup?.errors?.name && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.name}
                    </p>
                  )}
                </div>
                {/* Surname Registration Section */}
                <div className="mt-4 w-full h-fit">
                  <div className="flex items-center font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                    Фамилия{" "}
                    <span className="text-red-600 ml-[2px]">
                      <Star6Icon />
                    </span>{" "}
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      placeholder="Фамилия"
                      value={state?.lastName}
                      onChange={(e) =>
                        setState({ ...state, lastName: e.target.value })
                      }
                      required
                    />
                    <span>
                      <PersonIcons colors={"#D2D2D2"} />
                    </span>{" "}
                  </div>
                  {state?.errorsGroup?.errors?.surname && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.surname}
                    </p>
                  )}
                </div>
                {/* Number Registration Section */}
                <div className="mt-4 w-full h-fit">
                  <div className="flex items-center font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                    Номер телефона{" "}
                    <span className="text-red-600 ml-[2px]">
                      <Star6Icon />
                    </span>{" "}
                  </div>
                  <div className="flex items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                    <div className="ss:w-[35%] md:w-[30%] h-12 flex items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                      <img src={UzbekFlag} alt="form-arrow-bottom" />
                      <div className="w-[40px] h-fit flex items-start justify-center select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black">
                        {state?.phoneCode}
                      </div>
                    </div>
                    <div className="ss:w-[65%] md:w-[70%] h-12 flex items-center justify-center overflow-hidden">
                      <InputMask
                        mask="(99) 999-99-99"
                        value={state?.phoneNumber}
                        onChange={(e) =>
                          setState({ ...state, phoneNumber: e.target.value })
                        }
                        className={`w-full px-4 h-full  flex items-center justify-center ${
                          state?.phoneNumber ? "font-AeonikProMedium" : null
                        } text-base leading-4 text-black`}
                        placeholder={"(97) 123-45-67"}
                      ></InputMask>
                    </div>
                  </div>
                  {state?.errorsGroup?.errors?.phone && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.phone}
                    </p>
                  )}
                </div>
                {/* Email Registration Section */}
                <div className="mt-4 w-full h-fit">
                  <div className=" flex items-center justify-between w-full">
                    <div className="flex items-center font-AeonikProRegular text-sm leading-4 cursor-pointer text-black  tracking-[0,16px]">
                      Электронная почта
                      <span className="text-red-600 ml-[2px]">
                        <Star6Icon />
                      </span>{" "}
                    </div>
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className="  w-full h-12 placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="email"
                      placeholder="Адрес электронной почты"
                      value={state?.email}
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                      required
                    />
                    <span>
                      <EmailIcons colors={"#D2D2D2"} />
                    </span>{" "}
                  </div>
                  {state?.errorsGroup?.errors?.email && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.email}
                    </p>
                  )}
                </div>
                {/* Password Registration Section */}
                <div className="mt-4 w-full h-fit">
                  <div className="flex items-center font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                    Пароль
                    <span className="text-red-600 ml-[2px]">
                      <Star6Icon />
                    </span>{" "}
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className="w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type={state?.eyesShow ? "password" : "text"}
                      placeholder="Введите пароль"
                      value={state?.password}
                      onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                      }
                      required
                    />
                    <span className="cursor-pointer">
                      {state?.eyesShow ? (
                        <AiOutlineEyeInvisible
                          onClick={() =>
                            setState({ ...state, eyesShow: false })
                          }
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
                  <div className="not-italic mt-2 font-AeonikProRegular selec-none text-xs leading-3 text-[#9CA3AF] tracking-[0,16px]">
                    Пароль должен быть не менее 8 символов
                  </div>
                  {state?.errorsGroup?.errors?.password && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.password}
                    </p>
                  )}
                </div>
                {/* Confirmation Password Registration Section */}
                <div className="mt-4 w-full h-fit">
                  <div className="flex items-center font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                    Повторите пароль
                    <span className="text-red-600 ml-[2px]">
                      <Star6Icon />
                    </span>{" "}
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className="w-full h-12 placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type={state?.eyesShowConfirmation ? "password" : "text"}
                      placeholder="Введите пароль"
                      value={state?.password_confirmation}
                      onChange={(e) =>
                        setState({
                          ...state,
                          password_confirmation: e.target.value,
                        })
                      }
                      required
                    />
                    <span className="cursor-pointer">
                      {state?.eyesShowConfirmation ? (
                        <AiOutlineEyeInvisible
                          onClick={() =>
                            setState({ ...state, eyesShowConfirmation: false })
                          }
                          size={20}
                        />
                      ) : (
                        <AiOutlineEye
                          onClick={() =>
                            setState({ ...state, eyesShowConfirmation: true })
                          }
                          size={20}
                        />
                      )}
                    </span>
                  </div>
                  {state?.errorsGroup?.errors?.password && (
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorsGroup?.errors?.password}
                    </p>
                  )}
                </div>

                {/* ----------- Email Verify Modal Start ----------- */}
                <div className="w-full md:w-1/2 h-fit ">
                  <div
                    onClick={() => {
                      setState({ ...state, openModalEmailMessage: false });
                    }}
                    className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
                      state?.openModalEmailMessage ? "" : "hidden"
                    }`}
                  ></div>
                  {state?.openModalEmailMessage && (
                    <div className="fixed max-w-[490px] h-[275px]  p-3 bg-white rounded-lg  mx-auto w-full  z-[113] top-[50%] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                      <div className="flex items-center justify-end">
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setState({
                              ...state,
                              openModalEmailMessage: false,
                            });
                          }}
                        >
                          <MenuCloseIcons colors="#303030" />
                        </span>
                      </div>
                      <div className="w-full flex items-center justify-center flex-col">
                        <button className="flex p-4 items-center justify-center rounded-full mt-4 bg-[#D8EDFF]">
                          <SuccessIconsForMail />
                        </button>
                        <p className="text-[#1F1F1F] text-3xl not-italic font-AeonikProMedium mt-5">
                          Мы отправили вам ссылку
                        </p>
                        <p className="text-[#8B8B8B] text-xl not-italic font-AeonikProRegular mt-[30px]">
                          Проверьте свой E-mail
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {/* ------------- Email Verify Modal End ----------- */}

                <button
                  type="button"
                  onClick={handleClick}
                  className="mt-8 border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95 active:opacity-70"
                >
                  <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                    Зарегистрироваться
                  </span>
                  <span>
                    <SircleNext colors={"#fff"} />
                  </span>{" "}
                </button>
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
                      <PhoneIcons colors={"#000"} />
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
      )}
    </div>
  );
}
