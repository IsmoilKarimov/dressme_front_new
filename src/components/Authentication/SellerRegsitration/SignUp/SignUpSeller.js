import React, { useEffect, useState } from "react";
import { ArrowTopIcons, CreditCardNumber, DashboardList, DashboardUser, MenuCloseIcons, SearchIcons, StarIcon, SuccessIconsForMail, UserMailIcon } from "../../../../assets/icons";
import "./style.css";
import InputMask from "react-input-mask";
import { useMutation, useQuery } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Select } from "antd";
import { BiChevronDown } from "react-icons/bi";

const SignUpSeller = () => {
  // const { REACT_APP_BASE_URL: url } = process.env;
  const url = "https://api.dressme.uz/api/seller"
  const navigate = useNavigate()
  const [naturalPerson, setNaturalPerson] = useState(true);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+998",
    cardNumber: "",
    seller_type_id: "",
    phone: "",
    // password
    password: "",
    passwordEye: false,
    confirmPassword: "",
    confirmPasswordEye: false,
    errorPassword: "",
    region: "",
    sub_region: "",
    company_name: "",
    // ------Seller-type-----
    getSellerList: "",
    // ------Regions-----
    getRegionList: "",

    //-------modal open
    openModalRegions: false,
    // -----Modal Email verfiy
    openModalEmailMessage: false,
    // ------popover---
    openPrice: false,
    // ------Search query
    searchText: "",
    // ------error group
    errorGroup: ""

  });
  useEffect(() => {
    if (state?.openModalRegions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state?.openModalRegions]);

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



  // ------------GET METHOD seller-types-----------------
  const { isFetching } = useQuery(["get seller-type"], () => {
    return fetch(`${url}/seller-types`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setState({ ...state, getSellerList: res })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      // keepPreviousData: true,
      // refetchOnWindowFocus: false,
    }
  )
  // ------------GET METHOD Region-----------------
  const { isLoading } = useQuery(["get region"], () => {
    return fetch(`${url}/regions`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setState({ ...state, getRegionList: res })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  )

  // ------------POST METHOD-----------------
  const { mutate } = useMutation(() => {
    return fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },


      body: parseInt(state?.seller_type_id) >= 3 ?
        JSON.stringify({
          name: state?.firstName,
          surname: state?.lastName,
          email: state?.email,
          password: state?.password,
          phone: sendMessagePhoneNumber,
          card_number: BankCard,
          seller_type_id: state?.seller_type_id,
          region_id: state?.region,
          sub_region_id: state?.sub_region,
          company_name: state?.company_name,
        }) : JSON.stringify({
          name: state?.firstName,
          surname: state?.lastName,
          email: state?.email,
          password: state?.password,
          phone: sendMessagePhoneNumber,
          card_number: BankCard,
          seller_type_id: state?.seller_type_id,
          region_id: state?.region,
          sub_region_id: state?.sub_region,
        })



    }).then((res) => res.json())
  })
  const onSubmit = () => {
    mutate({}, {
      onSuccess: (res) => {
        console.log(res, "res");
        if (res?.message && res?.errors) {
          setState({ ...state, errorGroup: res })
          toast.error(`${res?.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        } else if (res?.message && !res?.errors) {
          setState({
            ...state,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            region: "",
            sub_region: "",
            seller_type_id: "",
            cardNumber: "",
            phone: "",
            openModalEmailMessage: true,
            errorGroup: ""
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
        console.log(err, "Error");
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


    })

  }

  const [activeIndex, setActiveIndex] = useState();
  const accordionCityList = (id) => {
    if (activeIndex == id) {
      setActiveIndex(0)
    } else {
      setActiveIndex(id)
    }
  }

  console.log(state?.errorGroup?.errors, "errorGroup");
  console.log(state?.errorGroup?.errors?.card_number, "errorGroup card_number");
  console.log(parseInt(state?.seller_type_id), "seller_type_id");
  return (
    <div className="max-w-[1280px] w-full flex justify-center items-center m-auto">
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
      <div className="w-full h-fit px-2 md:px-0">
        <div className="text-xl md:text-3xl font-medium mt-[20px] mb-[30px] text-center">
          Регистрация продавца
        </div>
        {/* change user */}
        <div className="w-full md:w-[484px] flex justify-between items-center box-border bg-dashboardBtnBg rounded-lg mx-auto mb-[30px] ">
          <button
            onClick={() => setNaturalPerson(true)}
            className={`group w-1/2 flex items-center  justify-center font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-2 py-[10px] md:px-[25px] md:py-3
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
            className={`w-1/2 flex items-center justify-center   font-medium text-[10px] ll:text-xs md:text-sm px-1 ll:px-[6px] py-[10px] md:px-[25px] md:py-3
                  ${!naturalPerson
                ? "border border-fullBlue text-fullBlue rounded-lg"
                : ""
              }`}
          >
            <DashboardList
              className={`${naturalPerson ? "text-fullBlue" : ""}`}
            />
            <span className="ml-[4px] md:ml-2 whitespace-nowrap	">ЮРИДИЧЕСКОЕ ЛИЦО</span>
          </button>
        </div>

        <div>
          {/* yuridik user va jismony user */}
          {naturalPerson ? (
            <div className="w-full border border-red-500 flex flex-col justify-center items-center">
              <div className="w-full  max-w-[370px] border border-green-500 mx-auto flex flex-col gap-y-4">
                {
                  state?.getSellerList?.individual?.map(data => {
                    return (
                      <div key={data?.id}>
                        <div className="flex items-center">
                          <label
                            htmlFor={data?.id}
                            className="flex items-center"
                          >
                            <input
                              type="radio"
                              id={data?.id}
                              name="type_work"
                              value={data?.id}
                              checked={parseInt(state?.seller_type_id) == data?.id}
                              className="w-[18px] h-[18px] cursor-pointer"
                              onChange={(e) => setState({ ...state, seller_type_id: e.target.value })}
                              required
                            />
                            <span className="ml-[10px] font-AeonikProMedium text-[13px] md:text-base cursor-pointer">
                              {data?.name_ru}
                            </span>
                          </label>

                        </div>
                      </div>
                    )
                  })
                }
              </div>
              {
                state?.errorGroup?.errors?.seller_type_id && !state?.seller_type_id &&
                <p className="max-w-[370px] w-full border border-green-500  mx-auto text-[#D50000] text-[12px] ll:text-[14px] md:text-base ">
                  {state?.errorGroup?.errors?.seller_type_id}
                </p>
              }
            </div>
          ) : (
            <div className="w-full md:w-[484px] rounded-lg mx-auto">
              <div className="select relative w-full flex items-center ">

                <Select
                  className="select flex items-center rounded-lg w-full focus:border border-searchBgColor cursor-pointer"
                  placeholder="Тип предприятия"
                  optionFilterProp="children"
                  onChange={(e) => setState({ ...state, seller_type_id: e })}
                  suffixIcon={null}
                  size="large"
                  options={
                    state?.getSellerList?.company?.map(item => {
                      return (
                        {
                          value: item?.id,
                          label: item?.name_ru,
                        }
                      )
                    })
                  }
                />
                <span className={`data absolute right-[10px] top- h-full flex items-center select-focus:rotate-[90deg] rotate-[180deg] `}>
                  <ArrowTopIcons colors="#a1a1a1" />
                </span>
              </div>
              {
                state?.errorGroup?.errors?.seller_type_id && !state?.seller_type_id &&
                <p className="text-[#D50000] text-[12px] ll:text-[14px] md:text-base">
                  {state?.errorGroup?.errors?.seller_type_id}
                </p>
              }
              <div className="w-full md:w-[484px] mt-5">
                <p className="flex items-center text-base  font-AeonikProRegular text-[#303030]">
                  Наименование организации
                  <span className="ml-[5px]"><StarIcon /></span>
                </p>
                <input
                  className="w-full h-[42px] placeholder-text-[#b5b5b5] px-2 md:px-4 border border-searchBgColor rounded-lg outline-none	bg-white placeholder-bg-white  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProRegular ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4"
                  type="text"
                  value={state?.company_name}
                  onChange={(e) => setState({ ...state, company_name: e.target.value })}
                  placeholder="Наименование организации..."
                // required
                />
              </div>
              {
                state?.errorGroup?.errors?.company_name && !state?.company_name &&
                <p className="text-[#D50000] text-[12px] ll:text-[14px] md:text-base">
                  {state?.errorGroup?.errors?.company_name}
                </p>
              }

            </div>
          )}
          {/* full form */}
          {/* FORM SECTION FOR DESCROP VERSION  asterisc_icon*/}
          <div className="mt-5">
            <div className="w-full h-fit flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center  justify-between gap-x-[50px]">

              {/* ------------------------------------------------------------------------------------------------------------- */}
              <div className="w-full md:w-1/2 h-fit flex justify-center">
                <div
                  onClick={() => {
                    setState({ ...state, openModalRegions: false });
                  }}
                  className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${state?.openModalRegions ? "" : "hidden"
                    }`}
                ></div>
                {
                  <div className={` max-w-[550px] h-fit fixed    px-3 md:px-6  py-2 md:py-4 bg-white rounded-b-none md:rounded-b-lg	 rounded-t-lg  mx-auto w-full duration-500 z-[113] md:top-[50%] md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%] overflow-hidden ${state?.openModalRegions ? " bottom-0 md:flex flex-col" : "md:hidden bottom-[-1500px] z-[-10]"}`} >
                    <div className="w-full flex items-center justify-between  ">

                      <span className="text-black text-xl md:text-2xl not-italic font-AeonikProRegular">Выберите регион</span>
                      <span
                        className="select-none cursor-pointer"
                        onClick={() => {
                          setState({ ...state, openModalRegions: false });
                        }}
                      >
                        <MenuCloseIcons colors="#000" /></span>
                    </div>
                    {/* <label className="w-full mt-6 h-[42px] rounded-lg border border-[#E5E5E5] overflow-hidden flex items-center">
                      <input
                        type="search"
                        className="w-full h-full pl-3 outline-none lowercase"
                        name="search-form"
                        id="search-form"
                        autoComplete="off"
                        placeholder="Поиск..."
                        value={state?.searchText}
                        onChange={(e) => setState({
                          ...state, searchText: e.target.value
                        })}
                      />
                      <span className="flex items-center pr-3">
                        <SearchIcons />
                      </span>
                    </label> */}

                    <div className="w-full overflow-auto  flex flex-col gap-y-4 pt-3  overflow-x-hidden mt-3 h-[50vh] md:h-[60vh] VerticelScroll pr-2 ">


                      {state?.getRegionList?.regions ?
                        state?.getRegionList?.regions?.map((data, index) => {
                          return (
                            <div key={data?.id} className="w-full  h-fit  ">
                              <div
                                onClick={() => accordionCityList(data?.id)}
                                className="w-full cursor-pointer flex items-center pr-1 justify-between border-b border-[#F0F0F0] "
                              >
                                <span className="text-[#303030] text-lg not-italic font-AeonikProRegular">
                                  {data?.name_ru}
                                </span>
                                <span
                                  className={`${activeIndex == data?.id ? "rotate-[0deg]" : "rotate-[180deg]"} `}
                                >
                                  <ArrowTopIcons colors={"#a1a1a1"} />
                                </span>
                              </div>

                              <div
                                className={`w-full grid grid-cols-2 xs:grid-cols-3 duration-[400ms] 
                             ${activeIndex == data?.id ? "openAccardion" : "CloseAccardion"} `}
                              >
                                {data?.sub_regions?.map((item) => {
                                  return (
                                    <div key={item?.id} className="flex items-center px-[2px] gap-x-[4px] cursor-pointer">
                                      <label
                                        htmlFor={item?.name_ru}
                                        className="flex items-center gap-x-[6px]"
                                      >
                                        <input
                                          type="radio"
                                          id={item?.name_ru}
                                          name="type_work"
                                          value={item?.region_id}
                                          checked={state?.sub_region == item?.id}
                                          className="border border-borderColor  cursor-pointer  flex items-center justify-center"
                                          onChange={(e) => {
                                            setState({ ...state, region: e.target.value, sub_region: item?.id })
                                          }}
                                          required

                                        />
                                        <span className="text-[#303030]  cursor-pointer text-[15px] not-italic font-AeonikProRegular"
                                        >{item?.name_ru}</span>
                                      </label>
                                    </div>

                                  );
                                })}
                              </div>
                            </div>
                          );
                        }) :
                        <p className="w-full h-full flex flex-col items-center justify-center">Malumotlar yuklanyapti...</p>}

                    </div>
                    <div className="w-full flex items-center justify-end  mt-2">
                      <span onClick={() => {
                        setState({ ...state, openModalRegions: false });
                      }} className="cursor-pointer text-fullBlue text-lg not-italic font-AeonikProMedium">Готово</span>
                    </div>
                  </div>
                }
                {/* Region INput  */}
                <div className={"w-full"}>
                  <label htmlFor="" >
                    <span className="flex items-center text-[#303030] text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                      Выберите регион

                      <span className="ml-[5px]"><StarIcon /></span>
                    </span>
                    <div
                      onClick={() => {
                        setState({ ...state, openModalRegions: true });
                      }}
                      className="w-full h-[42px] mt-[6px] px-[15px] flex items-center justify-between rounded-lg cursor-pointer border border-searchBgColor">
                      <span className=" w-full h-[42px] flex items-center not-italic font-AeonikProRegular text-[#B5B5B5] ll:text-[14px] sm:text-[16px] text-base leading-4 ">
                        {!state?.region && !state?.sub_region && "Выберите регион"}

                        {state?.getRegionList?.regions?.filter(e => e.id == state?.region).map(item => {
                          return <span className="flex items-center text-[#000] text-[14px] sm:text-base">
                            {item?.name_ru},
                            {item?.sub_regions?.filter(i => i.id == state?.sub_region).map(item => {
                              return <span className="ml-1">{item?.name_ru}</span>
                            })}
                          </span>
                        })
                        }
                      </span>
                      <span className="rotate-[180deg]"><ArrowTopIcons colors={"#a1a1a1"} /></span>
                    </div>
                    {
                      state?.errorGroup?.errors?.region_id && !state?.region &&
                      <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                        {state?.errorGroup?.errors?.region_id}
                      </p>
                    }

                  </label>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------- */}
              <div className="w-full md:w-1/2 h-fit  ">
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
                    className="outline-none	 w-full h-[42px]  text-black  not-italic font-AeonikProRegular placeholder-text-[#B5B5B5] ll:text-[14px] sm:text-[16px] text-base leading-4"
                    onChange={(e) => setState({ ...state, cardNumber: e.target.value })}
                    placeholder="0000-0000-0000-0000"
                  />
                </div>
                {
                  state?.errorGroup?.errors?.card_number &&
                  <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                    {state?.errorGroup?.errors?.card_number}
                  </p>
                }
              </div>
            </div>


            <div className="w-full h-[1px] bg-searchBgColor my-[30px]"></div>
            {/* Form */}
            <div className="w-full flex flex-col gap-y-4 xs:gap-y-5">
              {/* Namr, surname */}
              <div className="w-full  xs:flex-row flex-col flex items-center justify-between gap-x-5 sm:gap-x-[50px] gap-y-4 xs:gap-y-0">
                <div className="w-full xs:w-1/2 h-fit ">
                  <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                    Имя{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-1 xs:mt-[6px]  w-full flex items-center overflow-hidden border border-searchBgColor rounded-lg ">
                    <input
                      className="w-full px-2 xs:px-[16px] outline-none	bg-white w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      name="fname"
                      autoComplete="off"
                      placeholder="Имя"
                      value={state?.firstName}
                      onChange={(e) => setState({ ...state, firstName: e.target.value })}
                      required
                    />
                  </div>
                  {
                    state?.errorGroup?.errors?.name && !state?.firstName &&
                    < p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorGroup?.errors?.name}
                    </p>
                  }
                </div>
                <div className="w-full xs:w-1/2 h-fit ">
                  <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                    Фамилия{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-1 xs:mt-[6px]  w-full flex items-center  overflow-hidden border border-searchBgColor rounded-lg ">
                    <input
                      className="w-full px-2 xs:px-[16px] outline-none	bg-white placeholder-bg-white w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="text"
                      name="lname"
                      autoComplete="off"
                      placeholder="Фамилия"
                      value={state?.lastName}
                      onChange={(e) => setState({ ...state, lastName: e.target.value })}
                      required
                    />
                  </div>
                  {
                    state?.errorGroup?.errors?.surname && !state?.lastName &&
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorGroup?.errors?.surname}
                    </p>
                  }
                </div>
              </div>
              {/* Номер, Mail */}
              <div className="w-full  flex  xs:flex-row flex-col items-center justify-between gap-x-5 sm:gap-x-[50px] gap-y-4 xs:gap-y-0">
                {/* Mail */}
                <div className="w-full xs:w-1/2 h-fit ">
                  <div className=" flex items-center justify-between w-full">
                    <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                      Электронная почта{" "}
                      <span className="ml-[5px]"><StarIcon /></span>
                    </span>
                  </div>
                  <div className="mt-1 xs:mt-[6px] overflow-hidden  w-full flex items-center border border-searchBgColor rounded-lg ">
                    <input
                      className=" pl-2 xs:pl-[16px] outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      value={state?.email}
                      onChange={(e) => setState({ ...state, email: e.target.value })}
                      required
                    />
                    <span className="pr-2 xs:pr-[16px]">
                      <UserMailIcon />
                    </span>{" "}
                  </div>
                  {
                    state?.errorGroup?.errors?.email &&
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorGroup?.errors?.email}
                    </p>
                  }

                </div>
                {/* Номер телефона */}
                <div className="w-full xs:w-1/2 h-fit">
                  <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                    Номер телефона{" "}
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-[6px] flex items-center overflow-hidden border border-searchBgColor rounded-lg">
                    <div className="w-[30%] sm:w-[35%] md:w-[100px] h-[40px] xs:h-[42px] flex items-center justify-center   cursor-pointer border-r border-searchBgColor overflow-hidden">
                      <input
                        className=" outline-none	w-[40px] h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                        type="text"
                        value={state.phoneCode}
                        readOnly
                      />
                    </div>
                    <div className="ss:w-[65%] md:w-[70%] h-[40px] xs:h-[42px] overflow-hidden">
                      <InputMask
                        mask="(99) 999-99-99"
                        value={state?.phone}
                        name="phone"
                        onChange={(e) => setState({ ...state, phone: e.target.value })}
                        className={`w-full px-2 xs:px-4 outline-none h-full not-italic ${state?.phone ? "font-AeonikProMedium" : null
                          } ll:text-[14px] sm:text-[16px] leading-4 text-black`}
                        placeholder={"(97) 123-45-67"}
                      ></InputMask>
                    </div>
                  </div>
                  {
                    state?.errorGroup?.errors?.phone &&
                    <p className="text-[#D50000] text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorGroup?.errors?.phone}
                    </p>
                  }
                </div>
              </div>
              {/* Пароль, Пароль */}
              <div className="w-full  flex  xs:flex-row flex-col items-center justify-between gap-x-5 sm:gap-x-[50px] gap-y-4 xs:gap-y-0">
                {/* Пароль */}
                <div className="w-full xs:w-1/2 h-[85px] ll:h-[100px]">
                  <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                    Пароль
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className="mt-1 xs:mt-[6px]  w-full flex items-center overflow-hidden border border-searchBgColor rounded-lg ">
                    <input
                      className="px-2 xs:px-[16px] outline-none	 w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      type={`${state?.passwordEye ? "text" : "password"}`}
                      name="password"
                      placeholder=""
                      value={state?.password}
                      onChange={(e) => setState({ ...state, password: e.target.value })}
                      required

                    />
                    <span className="cursor-pointer pr-2">
                      {state?.passwordEye ? (
                        <span
                          onClick={() => setState({ ...state, passwordEye: false })}
                        >
                          < AiOutlineEye size={20} color={"#e2e2e2"} />
                        </span>
                      ) : (
                        <span
                          onClick={() => setState({ ...state, passwordEye: true })}
                        >
                          <AiOutlineEyeInvisible size={20} color={"#e2e2e2"} />
                        </span>

                      )}
                    </span>
                  </div>
                  {
                    state?.errorGroup?.errors?.password &&
                    <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
                      {state?.errorGroup?.errors?.password}
                    </p>
                  }
                </div>
                {/* Повторите пароль */}
                <div className="w-full xs:w-1/2 h-[85px] ll:h-[100px] ">
                  <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                    Повторите пароль
                    <span className="ml-[5px]"><StarIcon /></span>
                  </span>
                  <div className=" mt-1 xs:mt-[6px]  w-full flex items-center overflow-hidden border border-searchBgColor rounded-lg ">
                    <input
                      className="px-2 xs:px-[16px] outline-none w-full h-[42px] placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
                      // type="Повторите пароль"
                      type={`${state?.confirmPasswordEye ? "text" : "password"}`}

                      name="Повторите пароль"
                      placeholder=""
                      value={state?.confirmPassword}
                      onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}
                      // onBlur={handleBlur}
                      required
                    />
                    <span className="cursor-pointer pr-2">
                      {state?.confirmPasswordEye ? (
                        <span
                          onClick={() => setState({ ...state, confirmPasswordEye: false })}
                        >
                          < AiOutlineEye size={20} color={"#e2e2e2"} />
                        </span>
                      ) : (
                        <span
                          onClick={() => setState({ ...state, confirmPasswordEye: true })}
                        >
                          <AiOutlineEyeInvisible size={20} color={"#e2e2e2"} />
                        </span>
                      )}
                    </span>
                  </div>
                  {/* {passwordError && <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">{passwordError}</p>} */}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* -----------------------Email Verify Modal------------------- */}
        <div className="w-full md:w-1/2 h-fit ">
          <div
            onClick={() => {
              setState({ ...state, openModalEmailMessage: false });
            }}
            className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${state?.openModalEmailMessage ? "" : "hidden"
              }`}
          ></div>
          {state?.openModalEmailMessage &&
            <div className="fixed max-w-[490px] h-[275px]  p-3 bg-white rounded-lg  mx-auto w-full  z-[113] top-[50%] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
              <div className="flex items-center justify-end">
                <span className="cursor-pointer" onClick={() => {
                  setState({ ...state, openModalEmailMessage: false });
                }}><MenuCloseIcons colors="#303030" /></span>
              </div>
              <div className="w-full flex items-center justify-center flex-col">
                <button className="flex p-4 items-center justify-center rounded-full mt-4 bg-[#D8EDFF]">
                  <SuccessIconsForMail />
                </button>
                <p className="text-[#1F1F1F] text-3xl not-italic font-AeonikProMedium mt-5">Мы отправили вам ссылку</p>
                <p className="text-[#8B8B8B] text-xl not-italic font-AeonikProRegular mt-[30px]">Проверьте свой E-mail</p>
              </div>


            </div>}

        </div>
        {/* -------------------------Email Verify Modal------------------ */}

        <div className="flex items-center justify-center flex-col mt-[30px] xs:mt-[50px] md:mt-[90px]  mb-[88px] md:mb-8">
          <button type="button" onClick={onSubmit} className="w-full md:w-[360px] h-12 flex items-center justify-center mx-auto font-medium bg-fullBlue text-base text-white rounded-xl  ">
            Зарегистрироваться
          </button>
          <NavLink to="/login-seller" className={"mt-[15px] text-fullBlue hover:underline text-base not-italic font-AeonikProRegular"}>
            Есть аккаунт?
          </NavLink>
          {/* <NavLink to="/login-seller" className={"mt-[15px] text-fullBlue hover:underline text-base not-italic font-AeonikProRegular"}>
            Есть аккаунт?
          </NavLink> */}
        </div>
      </div>
    </div >
  );
};

export default SignUpSeller;
