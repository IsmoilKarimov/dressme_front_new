import React, { useState } from "react";
import { CreditCardNumber, DashboardList, DashboardUser, StarIcon, UserMailIcon } from "../../../../assets/icons";
import { Select } from "antd";
import { Box, TextField } from "@material-ui/core";
import "./style.css";
import InputMask from "react-input-mask";
import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const SignUpSeller = () => {
  const navigate = useNavigate()
  const [naturalPerson, setNaturalPerson] = useState(true);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+998",
    cardNumber: "",
    seller_type_id: 1,
    phone: "",
    password: "12233223",
    confirmPassword: "",
    region: "",
    sub_region: "",
    error: "",

  });
  // ----------Card Number-----------
  const card1 = state?.cardNumber?.split("-")
  const BankCard = card1.join("")

  // ----------phone Number----------
  let data = state?.phone.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let data3 = data2.split(" ")
  let data4 = data3.join("")
  let arr3 = state.phoneCode.split("+");
  let data5 = arr3.join("");
  const sendMessagePhoneNumber = data5 + data4;

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const VilData = [
    { id: 1, name: "Toshkent" },
    { id: 2, name: "Jizzax" },
    { id: 3, name: "Sirdaryo" },
    { id: 4, name: "Andijon" },
    { id: 5, name: "Namnagan" },
    { id: 6, name: "Samarqand" },
    { id: 7, name: "Navoiy" },
    { id: 8, name: "Buxaro" },
  ]
  const TumData = [
    { id: 1, name: "Toshkent" },
    { id: 2, name: "Jizzax" },
    { id: 3, name: "Sirdaryo" },
    { id: 4, name: "Andijon" },
    { id: 5, name: "Namnagan" },
    { id: 6, name: "Samarqand" },
    { id: 7, name: "Navoiy" },
    { id: 8, name: "Buxaro" },
  ]

  const { mutate } = useMutation(() => {
    return fetch(`https://api.dressme.uz/api/seller/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: state?.firstName,
        surname: state?.lastName,
        email: state?.email,
        password: state?.password,
        phone: sendMessagePhoneNumber,
        card_number: BankCard,
        seller_type_id: state?.seller_type_id,
        region_id: state?.region,
        sub_region_id: state?.sub_region
      })
    }).then((res) => res.json())
  })
  const onSubmit = () => {
    console.log("clicUp");
    console.log(state?.firstName, "firstName");
    console.log(state?.lastName, "lastName");
    console.log(state?.email, "email");
    console.log(BankCard, "cardNumber");
    console.log(state?.password, "password");
    console.log(state?.region, "region");
    console.log(state?.sub_region, "sub_Region");
    console.log(state?.seller_type_id, "seller_type_id");
    console.log(sendMessagePhoneNumber, "sendMessagePhoneNumber");
    if (
      state?.firstName.length &&
      state?.lastName?.length &&
      state?.email?.length &&
      BankCard?.length &&
      state?.region &&
      state?.sub_region &&
      state?.password &&
      state?.seller_type_id &&
      sendMessagePhoneNumber
    ) {
      console.log("malumotlarni junatildi");

      mutate({}, {
        onSuccess: (res) => {
          if (res?.emailToken) {
            localStorage.setItem("emailToken", res?.emailToken);
            navigate("/login-seller")

          } else {
            setState({ ...state, error: "Email yoki parolda xatolik" });
          }
        },
        onError: (err) => {
          console.log(err, "err");

        },
        onSettled: (onSett) => {
          console.log(onSett, "onSett");
        }

      })
    } else {
      setState({ ...state, error: "Bush maydon junatish mumkin emas" });
    }
  }


  return (
    <div className="max-w-[1280px] w-full flex justify-center items-center m-auto">
      <div className="w-full h-fit px-4 md:px-0">
        <div className="text-xl md:text-3xl font-medium mt-[20px] mb-[30px] text-center">
          Регистрация продавца
        </div>
        {/* change user */}
        <div className="w-full md:w-[484px] flex justify-between items-center bg-dashboardBtnBg rounded-lg mx-auto mb-[30px]">
          <button
            onClick={() => setNaturalPerson(true)}
            className={`group w-1/2 flex items-center justify-center font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-2 py-[10px] md:px-[25px] md:py-3
                 ${naturalPerson
                ? "border border-fullBlue text-fullBlue rounded-lg"
                : ""
              }`}
          >
            {/* <img src={dashboardUser} alt="" /> */}
            <DashboardUser
              className={`${naturalPerson ? "text-fullBlue" : ""}`}
            />
            <span className="ml-[4px] md:ml-2">ФИЗИЧЕСКОЕ ЛИЦО</span>
          </button>
          <button
            onClick={() => setNaturalPerson(false)}
            className={`w-1/2 flex items-center justify-center font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-2 py-[10px] md:px-[25px] md:py-3
                  ${!naturalPerson
                ? "border border-fullBlue text-fullBlue rounded-lg"
                : ""
              }`}
          >
            {/* <img src={dashboardList} alt="" /> */}
            <DashboardList
              className={`${naturalPerson ? "text-fullBlue" : ""}`}
            />
            <span className="ml-[4px] md:ml-2">ЮРИДИЧЕСКОЕ ЛИЦО</span>
          </button>
        </div>

        <div>
          {/* yuridik user va jismony user */}
          {naturalPerson ? (
            <div className="w-full flex items-center">
              <div className="mx-auto">
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="workOne"
                      name="type_work"
                      value="1"
                      className="w-[18px] h-[18px] cursor-pointer"
                    />
                    <label
                      for="workOne"
                      className="ml-[10px] font-medium text-[13px] md:text-base cursor-pointer"
                    >
                      Индивидуальный предприниматель
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-dashboardLightTextColor font-normal ml-7">
                    поставьте галочку, если вы являетесь индивидуальным
                    предпринимателем{" "}
                  </p>
                </div>
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="workTwo"
                      name="type_work"
                      value="2"
                      className="w-[18px] h-[18px] cursor-pointer"
                    />
                    <label
                      for="workTwo"
                      className="ml-[10px] font-medium text-[13px] md:text-base cursor-pointer"
                    >
                      Самозаняты
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-dashboardLightTextColor font-normal ml-7">
                    поставьте галочк, если вы cамозаняты{" "}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-[484px] rounded-lg mx-auto">
              <Select
                className="w-full text-base"
                showSearch
                placeholder="Тип предприятия"
                optionFilterProp="children"
                size="large"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "Индивидуальный предприниматель",
                    label: "Индивидуальный предприниматель",
                  },
                  {
                    value: "Самозанятый",
                    label: "Самозанятый",
                  },
                  {
                    value: "Общество с ограниченной ответственностью (ООО)",
                    label: "Общество с ограниченной ответственностью (ООО)",
                  },
                  {
                    value: "Частное предприятие (ЧП)",
                    label: "Частное предприятие (ЧП)",
                  },
                  {
                    value: "Совместное предприятие (СП)",
                    label: "Совместное предприятие (СП)",
                  },
                  {
                    value: "Семейное предприятие (СП)",
                    label: "Семейное предприятие (СП)",
                  },
                  {
                    value: "Совместное предприятие ООО (СП ООО)",
                    label: "Совместное предприятие ООО (СП ООО)",
                  },
                  {
                    value: "Акционерное общество (АО)",
                    label: "Акционерное общество (АО)",
                  },
                ]}
              />

              <div className="w-full md:w-[484px] mt-5">
                <p className="flex items-center text-base font-AeonikProRegular text-[#303030]">
                  Наименование организации
                  <span className="ml-[5px]"><StarIcon /></span>
                </p>
                <input type="text" placeholder="Name..." className="w-full font-AeonikProRegular text-base border border-[#e5e5e5] mt-[8px] rounded-lg px-[15px] h-[42px] flex items-center" />
              </div>

            </div>
          )}
          {/* full form */}
          {/* FORM SECTION FOR DESCROP VERSION  asterisc_icon*/}
          <div className="hidden md:block  mt-5">
            <div className="w-full h-fit flex items-center justify-between gap-x-[50px]">
              <div className="w-1/2 h-fit ">
                <div className={`w-full`}>
                  <label htmlFor="" >
                    <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                      Выберите регион
                      <span className="ml-[5px]"><StarIcon /></span>
                    </span>
                    <select className="w-full h-[42px] mt-[6px] pl-[15px] rounded-lg cursor-pointer border border-borderColor2" value={state?.region} onChange={(e) => setState({ ...state, region: e.target.value })} required>
                      <option className="text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px]" value="">Выберите регион </option>
                      {
                        VilData?.map(data => {
                          return (
                            <option className="text-[#303030] text-base not-italic hover:bg-btnBgColor font-AeonikProRegula leading-4 tracking-[0,16px]" key={data.id} value={data.id}> {data.name} </option>
                          )
                        })
                      }
                    </select>
                  </label>
                </div>
              </div>
              <div className="w-1/2 h-fit ">
                <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegular  leading-4 tracking-[0,16px] ">
                  Номер банковской карты
                  <span className="ml-[5px]"><StarIcon /></span>
                </span>
                <div className="mt-[6px] gap-x-[10px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                  {/* CredtCardicons */}
                  <span><CreditCardNumber /></span>
                  <InputMask
                    value={state?.cardNumber}
                    mask='9999-9999-9999-9999'
                    className="outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                    onChange={(e) => setState({ ...state, cardNumber: e.target.value })}
                    placeholder="0000-0000-0000-0000"
                  />

                </div>
              </div>
            </div>
            {
              state?.region &&
              <div className="w-full h-fit flex items-center gap-x-[50px] mt-5">
                <div className="w-[calc(50%-25px)] h-fit ">
                  <div className={`w-full`}>
                    <label htmlFor="" >
                      <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                        Выберите район/город
                        <span className="ml-[5px]"><StarIcon /></span>

                      </span>
                      <select className="w-full h-[42px] mt-[6px] pl-[15px] rounded-lg cursor-pointer border border-borderColor2" value={state?.sub_region} onChange={(e) => setState({ ...state, sub_region: e.target.value })} required>
                        <option className="text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px]" value="">Выберите район/город </option>
                        {
                          TumData?.map(data => {
                            return (
                              <option className="text-[#303030] text-base not-italic hover:bg-btnBgColor font-AeonikProRegula leading-4 tracking-[0,16px]" key={data.id} value={data.id}> {data.name} </option>
                            )
                          })
                        }

                      </select>
                    </label>
                  </div>
                </div>

              </div>
            }

            <div className="w-full h-[1px] bg-borderColor2 my-[30px]"></div>
            {/* Form */}
            <div className="w-full flex flex-col gap-y-5">
              {/* Namr, surname */}
              <div className="w-full  xs:flex-row flex-col flex items-center justify-between gap-x-[50px] gap-y-4 xs:gap-y-0">
                <div className="w-full xs:w-1/2 h-fit ">
                  <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                    Имя{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      name="fname"
                      autoComplete="off"
                      placeholder="Имя"
                      value={state?.firstName}
                      onChange={(e) => setState({ ...state, firstName: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="w-full xs:w-1/2 h-fit ">
                  <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                    Фамилия{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      name="lname"
                      autoComplete="off"
                      placeholder="Фамилия"
                      value={state?.lastName}
                      onChange={(e) => setState({ ...state, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Номер, Mail */}
              <div className="w-full  flex  xs:flex-row flex-col items-center justify-between gap-x-[50px] gap-y-4 xs:gap-y-0">
                {/* Mail */}
                <div className="w-full xs:w-1/2 h-fit ">
                  <div className=" flex items-center justify-between w-full">
                    <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                      Электронная почта{" "}
                      <span className="ml-[5px]"><StarIcon /></span>
                    </span>
                  </div>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      value={state?.email}
                      onChange={(e) => setState({ ...state, email: e.target.value })}
                      required
                    />
                    <span>
                      <UserMailIcon />
                    </span>{" "}
                  </div>
                </div>
                {/* Номер телефона */}
                <div className="w-full xs:w-1/2 h-fit">
                  <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                    Номер телефона{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] flex items-center overflow-hidden border border-searchBgColor rounded-lg">
                    <div className="ss:w-[35%] md:w-[100px] h-[40px] xs:h-12 flex items-center justify-center   cursor-pointer border-r border-searchBgColor overflow-hidden">
                      <input
                        className=" outline-none	 w-[40px] h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                        type="text"
                        value={state.phoneCode}
                        readOnly
                      />
                    </div>
                    <div className="ss:w-[65%] md:w-[70%] h-[40px] xs:h-12 overflow-hidden">
                      <InputMask
                        mask="(99) 999-99-99"
                        value={state?.phone}
                        name="phone"
                        onChange={(e) => setState({ ...state, phone: e.target.value })}
                        className={`w-full px-4 outline-none h-full not-italic ${state?.phone ? "font-AeonikProMedium" : null
                          } text-base leading-4 text-black`}
                        placeholder={"(97) 123-45-67"}
                      ></InputMask>
                    </div>
                  </div>
                </div>
              </div>
              {/* Номер, Mail */}
              <div className="w-full  flex  xs:flex-row flex-col items-center justify-between gap-x-[50px] gap-y-4 xs:gap-y-0">
                {/* Mail */}
                <div className="w-full xs:w-1/2 h-fit ">
                  <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                    Пароль
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="password"
                      name="password"
                      placeholder="password"
                      value={state?.password}
                      onChange={(e) => setState({ ...state, password: e.target.value })}
                      required
                    />

                  </div>
                </div>
                {/* Повторите пароль */}
                <div className="w-full xs:w-1/2 h-fit">
                  <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegula leading-4 tracking-[0,16px] ">
                    Повторите пароль
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" outline-none w-full h-[42px] placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="Повторите пароль"
                      name="Повторите пароль"
                      placeholder="Повторите пароль"
                      value={state?.confirmPassword}
                      onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          {state?.error?.length ? <span className="text-RedColor">{state?.error}</span> : null}
        </div>
        <div className="flex items-center justify-center flex-col mt-[50px] md:mt-[90px]  mb-[88px] md:mb-8">
          <button type="button" onClick={onSubmit} className="w-full md:w-[360px] h-12 flex items-center justify-center mx-auto font-medium bg-fullBlue text-base text-white rounded-xl  ">
            Зарегистрироваться
          </button>
          <NavLink to="/login-seller" className={"mt-[15px] text-fullBlue hover:underline text-base not-italic font-AeonikProRegular"}>
            Есть аккаунт?
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpSeller;
