import React, { useContext, useEffect, useRef, useState } from "react";
import InputMask from "react-input-mask";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  EmailIcons,
  LogOutIcons,
  MenuCloseIcons,
  PersonIcons,
  SircleNext,
  SuccessIconsForMail,
} from "../../../../assets/icons";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { UzbekFlag } from "../../../../assets";
import { ToastContainer, toast } from "react-toastify";
import EditPassword from "./EditPassword/EditPassword";
import { useHttp } from "../../../../hook/useHttp";
import EmailSend from "./EmailSend/EmailSend";
import Cookies from "js-cookie";
import { DatePicker, Popover, Space } from "antd";
import { BiChevronUp } from "react-icons/bi";
import LoadingNetwork from "../../../Loading/LoadingNetwork";
import { ProfileDataContext } from "../../../../ContextHook/ProfileContext";
import axios from "axios";
import { UserRefreshTokenContext } from "../../../../ContextHook/UserRefreshToken";
import { useTranslation } from "react-i18next";

const EditProfilePage = () => {
  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );
  const { i18n, t } = useTranslation('authen')

  const { request } = useHttp();
  const [profileData, setProfileData] = useState("");
  const [openEditPasswordModal, setOpenEditPasswordModal] = useState(false);
  const [sendEmailModal, setSendEmailModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [selectMonth, setselectMonth] = useState({ text: "Месяц", id: false });
  const [selectYear, setSelectYear] = useState(false);

  const [profileContextData, setProfileContextData] =
    useContext(ProfileDataContext);

  const monthList = [
    { id: 1, type: "Январь" },
    { id: 2, type: "Февраль" },
    { id: 3, type: "Март" },
    { id: 4, type: "Апрель" },
    { id: 5, type: "Май" },
    { id: 6, type: "Июнь" },
    { id: 7, type: "Июль" },
    { id: 8, type: "Август" },
    { id: 9, type: "Сентябрь" },
    { id: 10, type: "Октябрь" },
    { id: 11, type: "Ноябрь" },
    { id: 12, type: "Декабрь" },
  ];

  const [state, setState] = useState({
    userFirstname: "",
    userLastname: "",
    userPhoneCode: "",
    userPhoneNumber: "",
    userLastnameForEdit: "",
    userFirstnameForEdit: "",
    userPhoneNumberForEdit: "",
    userEmail: "",
    gender_id: "",
    gender_idForEdit: "",
    birth_date: "",
    errorsGroup: null,
    activeEditPassword: false,
    activeEditEmail: false,
    openModalEmailMessage: false,
  });

  const [dayValue, setDayValue] = useState("");

  // =====================
  const togglePassword = React.useCallback(
    () => setOpenEditPasswordModal(false),
    []
  );
  const toggleEmail = React.useCallback(() => setSendEmailModal(false), []);
  // =====================

  const url = "https://api.dressme.uz/api/user";

  // ----------------GET USER PROFILE-------------

  useEffect(() => {
    if (!profileContextData) {
      setLoading(true);
      axios(`${url}/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
        },
      })
        .then((res) => {
          setProfileContextData(res?.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          // console.log(err);
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            reFreshTokenFunc();
            // navigate("/sign_in");
            // toast.error(`${err?.response?.data?.message}`, {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });
          } else {
            Cookies.remove("DressmeUserToken");
            Cookies.remove("DressmeUserRefreshToken");
            navigate("/sign_in");
          }
        });
    }
  }, []);

  useEffect(() => {
    let ar = Number(profileContextData?.birth_date?.split("-")[1]);
    setProfileData(profileContextData);
    setDayValue(parseInt(profileContextData?.birth_date));
    setselectMonth({ text: monthList[ar - 1]?.type, id: ar });
    setSelectYear(profileContextData?.birth_date?.split("-")[2]);
    setState({
      ...state,
      userFirstname: profileContextData?.name,
      userLastname: profileContextData?.surname,
      userEmail: profileContextData?.email,
      gender_id: profileContextData?.gender_id,
      birth_date: profileContextData?.birth_date,
      userPhoneCode:
        profileContextData?.phone && profileContextData?.phone.slice(0, 3),
      userPhoneNumber:
        profileContextData?.phone && profileContextData?.phone.slice(3, 12),
      // --------------
      userFirstnameForEdit: profileContextData?.name,
      userLastnameForEdit: profileContextData?.surname,
      userPhoneNumberForEdit:
        profileContextData?.phone && profileContextData?.phone.slice(3, 12),
    });
  }, [profileContextData]);

  const reFetchFunction = () => {
    setLoading(true);
    axios(`${url}/profile`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
    })
      .then((res) => {
        setProfileContextData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          // reFreshTokenFunc();
          // console.log("401");

          // toast.error(`${err?.response?.data?.message}`, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
        }
      });
  };

  // const { refetch } = useQuery(
  //   ["get-user-profile"],
  //   async () => {
  //     setLoading(true);
  //     return request({ url: `/user/profile`, token: true });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       console.log(res, "SUCCESS, GET USER PROFILE");
  //       let ar = Number(res?.birth_date?.split("-")[1]);
  //       setProfileData(res);
  //       setDayValue(parseInt(res?.birth_date));
  //       setselectMonth({ text: monthList[ar - 1].type, id: ar });
  //       setSelectYear(res?.birth_date?.split("-")[2]);
  //       setState({
  //         ...state,
  //         userFirstname: res?.name,
  //         userLastname: res?.surname,
  //         userEmail: res?.email,
  //         gender_id: res?.gender_id,
  //         birth_date: res?.birth_date,
  //         userPhoneCode: res?.phone && res?.phone.slice(0, 3),
  //         userPhoneNumber: res?.phone && res?.phone.slice(3, 12),
  //         // --------------
  //         userFirstnameForEdit: res?.name,
  //         userLastnameForEdit: res?.surname,
  //         userPhoneNumberForEdit: res?.phone && res?.phone.slice(3, 12),
  //       });
  //       setLoading(false);
  //     },
  //     onError: (err) => {
  //       setLoading(false);
  //       console.log(err, "THERE IS AN ERROR IN GET-USER-PROFILE");
  //     },
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  let data = state?.userPhoneNumber?.split("-");
  let arr = data?.join("");
  let data1 = arr?.split("(");
  let arr1 = data1?.join("");
  let arr2 = arr1?.split(")");
  let data2 = arr2?.join("");
  let arr3 = state?.userPhoneCode?.split("+");
  let data3 = arr3?.join("");
  const sendMessagePhoneNumber = data3 + data2;

  // =========== POST USER EDIT DATA ==========
  const sendEditedData = () => {
    let date = `${dayValue}${selectMonth?.id ? "-" + selectMonth?.id : ""}${selectYear ? "-" + selectYear : ""
      }`;

    setLoading(true);

    let form = new FormData();
    state?.userFirstname !== state?.userFirstnameForEdit &&
      form.append("name", state?.userFirstname);
    state?.userLastname !== state?.userLastnameForEdit &&
      form.append("surname", state?.userLastname);
    data2 !== state?.userPhoneNumberForEdit &&
      form.append("phone", sendMessagePhoneNumber);
    form.append("gender_id", state?.gender_id);
    state?.birth_date !== date && form.append("birth_date", date);

    return fetch(`${url}/update-user-info`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
      body: form,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res?.errors && res?.message) {
          // console.log(res, "Bu-Error send edit postttttt");
          setState({ ...state, errorsGroup: res, activeEditPassword: false });
          setLoading(false);
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
        } else if (res?.message) {
          if (res?.message === "Unauthenticated.") {
            setProfileContextData(false);
            reFreshTokenFunc();
            sendEditedData();
            reFetchFunction();
            // console.log(res, "Bu-error edit posttttt");
          } else {
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
            // console.log(res, "Bu-success edit posttttt");
          }
          setState({ ...state, errorsGroup: res, activeEditPassword: false });
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        if (err?.status === 401 || err?.status === 403) {
          reFreshTokenFunc();
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
        }
      });
  };

  // =========== POST EDIT USER EMAIL ==========
  const dataEmailMutate = useMutation(() => {
    return fetch(`${url}/update-user-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        email: state?.userEmail,
      }),
    })
      .then((res) => {
        // console.log(res.status, "ffffffffffffffffff");
        return res.json();
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        if (err?.status === 401 || err?.status === 403) {
          reFreshTokenFunc();
        } else {
          Cookies.remove("DressmeUserToken");
          Cookies.remove("DressmeUserRefreshToken");
          navigate("/sign_in");
        }
      });
  });

  const sendEditedEmailData = () => {
    dataEmailMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          // console.log(res, "USER-EMAIL");
          if (res?.message && !res.errors) {
            if (res?.message === "Unauthenticated.") {
              reFreshTokenFunc();
              sendEditedEmailData()
              // navigate("/sign_in");
              // toast.error(`${res?.message}`, {
              //   position: "top-right",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "light",
              // });
            }
            setLoading(false);
            setState({
              ...state,
              errorsGroup: "",
              openModalEmailMessage: true,
              activeEditPassword: false,
            });
          } else if (res?.message && res.errors) {
            if (res?.message === "Unauthenticated.") {
              reFreshTokenFunc();
              sendEditedEmailData()
              // navigate("/sign_in");
            }
            setLoading(false);
            setState({ ...state, errorsGroup: res, activeEditPassword: false });
            // toast.error(`${res?.message}`, {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });
          }
        },
        onError: (err) => {
          // console.log(err);
        },
      }
    );
  };

  const location = useLocation();
  const LogOut = () => {
    Cookies.remove("DressmeUserToken");
    Cookies.remove("DressmeUserRefreshToken");
    setUserLogedIn(false);
    if (location?.pathname?.includes("profile/edit")) {
      navigate("/sign_in");
    } else if (location?.pathname?.includes("my-order")) {
      navigate("/sign_in");
    } else {
      navigate(location.pathname);
    }
  };

  const sendData = () => {
    return sendEditedEmailData(), 33;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Pедактировать профиль";
  }, []);

  // ----------------Month state management----------------------------
  const [openMonth, setOpenMonth] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenMonth(newOpen);
  };
  const handleMonthValue = (value) => {
    setselectMonth(value);
    setOpenMonth(false);
    setState({
      ...state,
      activeEditPassword: true,
    });
  };

  const contentMonth = (
    <div className="w-[125px] h-44 overflow-auto scrollbar dark:scrollbarkdark categoryScroll">
      {monthList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleMonthValue({ text: data?.type, id: data?.id });
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );
  return (
    <div className="min-h-[76vh]">
      {loading ? (
        <div>
          <LoadingNetwork />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center mx-auto">
          {profileData && (
            <div className="w-full flex flex-col items-center justify-center mx-auto pt-3 md:pt-8 ss:px-4 md:px-0">
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
              <section
                onClick={() => {
                  setOpenEditPasswordModal(false);
                }}
                className={`fixed inset-0 z-[112] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
                ${openEditPasswordModal ? "" : "hidden"}`}
              ></section>
              <section
                onClick={() => {
                  setSendEmailModal(false);
                }}
                className={`fixed inset-0 z-[112] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
                ${sendEmailModal ? "" : "hidden"}`}
              ></section>
              {/* PASSWORD COMPONENT */}
              <section
                className={`fixed  max-w-[440px] md:max-w-[550px] mx-auto w-full md:w-auto z-[113] bottom-0 md:bottom-auto  duration-300 overflow-hidden ${openEditPasswordModal ? "" : "hidden z-0"
                  }`}
              >
                <EditPassword onClick={togglePassword} />
              </section>
              {/* EMAIL COMPONENT */}
              <section
                className={`fixed  max-w-[440px] md:max-w-[550px] mx-auto w-full md:w-auto z-[113] bottom-0 md:bottom-auto  duration-300 overflow-hidden ${sendEmailModal ? "" : "hidden z-0"
                  }`}
              >
                <EmailSend sendData={sendData} onClick={toggleEmail} />
              </section>
              {/* ----------- Email Verify Modal Start ----------- */}
              <div className="w-full md:w-1/2 h-fit ">
                <div
                  onClick={() => {
                    setState({ ...state, openModalEmailMessage: false });
                  }}
                  className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${state?.openModalEmailMessage ? "" : "hidden"
                    }`}
                ></div>
                {state?.openModalEmailMessage && (
                  <div className="fixed max-w-[490px] h-[275px]  p-3 bg-white rounded-lg mx-auto w-full z-[113] top-[50%] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => {
                          navigate(`/sign_in`);
                          setState({
                            ...state,
                            openModalEmailMessage: false,
                          });
                        }}
                      >
                        <MenuCloseIcons
                          width={28}
                          height={28}
                          colors="#303030"
                        />
                      </button>
                    </div>
                    <div className="w-full flex items-center justify-center flex-col">
                      <button className="flex p-4 items-center justify-center rounded-full mt-4 bg-[#D8EDFF]">
                        <SuccessIconsForMail />
                      </button>
                      <p className="text-[#1F1F1F] text-3xl not-italic font-AeonikProMedium mt-5">
                        {t("SsendLink")}
                      </p>
                      <p className="text-[#8B8B8B] text-xl not-italic font-AeonikProRegular mt-[30px]">
                        {t("ScheckEmail")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* ----------- Email Verify Modal END ----------- */}

              <div className="md:w-[820px] w-full h-fit p-4 md:px-0 border border-searchBgColor rounded-lg mb-[100px] md:mx-auto md:mb-0">
                {/* 1 */}
                <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
                  <div className="w-full flex justify-between items-center">
                    <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
                      {t("PPmyInfor")}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <div className="w-full md:w-[48%] h-fit">
                      <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                        {t("Sfname")}
                      </div>
                      <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                        <input
                          className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                          type="text"
                          name="firstname"
                          autoComplete="name"
                          value={state?.userFirstname || ""}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userFirstname: e.target.value,
                              activeEditPassword: true,
                            });
                          }}
                          placeholder={t("Sfname")}
                          required
                        />
                        <span>
                          <PersonIcons colors={"#D2D2D2"} />
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
                      <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                        {t("Slname")}
                      </div>
                      <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                        <input
                          className="w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                          type="text"
                          name="lastName"
                          autoComplete="surname"
                          value={state?.userLastname || ""}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userLastname: e.target.value,
                              activeEditPassword: true,
                            });
                          }}
                          placeholder={t("Slname")}
                          required
                        />
                        <span>
                          <PersonIcons colors={"#D2D2D2"} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="gap-8 flex md:border-b border-searchBgColor w-full md:px-[40px] md:py-[30px]">
                  <div className="w-full">
                    <div className="text-[14px] font-AeonikProRegular mb-[6px]">
                      {t("PPEgender")}
                    </div>
                    <div className="flex border rounded-lg overflow-hidden h-[48px]">
                      <div
                        onClick={() => {
                          if (state?.gender_id === "1") {
                            return false;
                          } else {
                            setState({
                              ...state,
                              gender_id: "1",
                              activeEditPassword: true,
                            });
                          }
                        }}
                        className={`${state?.gender_id === "1" ? "text-[#007DCA]" : ""
                          } cursor-pointer border-r select-none w-full h-full flex items-center justify-center text-[16px] font-AeonikProMedium`}
                      >
                        {t("PPEman")}
                      </div>
                      <div
                        onClick={() => {
                          if (state?.gender_id === "2") {
                            return false;
                          } else {
                            setState({
                              ...state,
                              gender_id: "2",
                              activeEditPassword: true,
                            });
                          }
                        }}
                        className={`${state?.gender_id === "2" ? "text-[#007DCA]" : ""
                          } cursor-pointer select-none w-full h-full flex items-center justify-center text-[16px] font-AeonikProMedium`}
                      >
                        {t("PPEwoman")}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      // htmlFor="bdate"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      {t("Sbirthday")}{" "}
                    </label>

                    <div className="flex items-center justify-start border border-solid border-searchBgColor rounded-lg bg-btnBgColor mb-4 w-full">
                      <span className="h-full w-[15%] py-[14px] border-r border-searchBgColor">
                        <div className="mx-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.66699 1.6665V4.1665"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.333 1.6665V4.1665"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.91699 7.5752H17.0837"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.5 7.08317V14.1665C17.5 16.6665 16.25 18.3332 13.3333 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.0791 11.4167H13.0866"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.0791 13.9167H13.0866"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.99607 11.4167H10.0036"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.99607 13.9167H10.0036"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.91209 11.4167H6.91957"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.91209 13.9167H6.91957"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </span>
                      <input
                        type="number"
                        name="day"
                        value={dayValue || ""}
                        placeholder={t("Sday")}
                        id="day"
                        onInput={(e) => {
                          if (e.currentTarget.value < 32) {
                            setDayValue(e.currentTarget.value);
                          }
                          setState({
                            ...state,
                            activeEditPassword: true,
                          });
                        }}
                        className="text-center w-[19%] h-12 flex items-center bg-btnBgColor font-AeonikProRegular text-[15px] px-[14px] border-r border-searchBgColor [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <Popover
                        open={openMonth}
                        onOpenChange={handleOpenChangeWear}
                        className="w-[40%] px-[17px] h-12 bg-btnBgColor border-r flex items-center justify-between cursor-pointer select-none group"
                        trigger="click"
                        content={contentMonth}
                      >
                        <span className="not-italic font-AeonikProRegular text-center mt-1 text-base leading-4">
                          {selectMonth?.text}
                        </span>
                        <span>
                          <BiChevronUp
                            size={20}
                            style={{ color: "#c2c2c2" }}
                            className={`${openMonth ? "rotate-[180deg]" : ""
                              } duration-200`}
                          />{" "}
                        </span>
                      </Popover>

                      <Space
                        className="w-[26%] cursor-pointer"
                        direction="vertical"
                        size={12}
                        options={["Hide"]}
                      >
                        <div className="flex items-center justify-center w-full pl-5">
                          <span>
                            <DatePicker
                              allowClear={false}
                              className="font-AeonikProRegular text-base flex items-center"
                              placeholder={t("Syear")}
                              picker="year"
                              bordered={false}
                              suffixIcon
                              defaultValue={dayjs(selectYear, "YYYY")}
                              onChange={(n, s) => {
                                setState({
                                  ...state,
                                  activeEditPassword: true,
                                });
                                setSelectYear(s);
                              }}
                            />
                          </span>
                        </div>
                      </Space>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="w-full md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
                  <div className="flex  flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
                      <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                        {t("SphoneNum")}{" "}
                      </div>
                      <div className="flex mt-[6px] items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                        <div className="w-[35%] md:w-[25%] h-12 flex bg-btnBgColor items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                          <div className="w-full flex items-center justify-center gap-x-1">
                            <img
                              src={UzbekFlag}
                              className="w-fit h-fit"
                              alt="form-arrow-bottom"
                            />
                            <input
                              className="w-[40px] bg-btnBgColor h-full select-none not-italic font-AeonikProMedium text-base leading-4 text-black"
                              type="text"
                              name="name"
                              value={
                                "+" + state?.userPhoneCode === ""
                                  ? state?.userPhoneCode
                                  : "+998"
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="w-[65%] md:w-[75%] bg-btnBgColor h-12 overflow-hidden">
                          <InputMask
                            mask="(99)999-99-99"
                            value={state?.userPhoneNumber || ""}
                            onChange={(e) => {
                              setState({
                                ...state,
                                userPhoneNumber: e.target.value,
                                activeEditPassword: true,
                              });
                            }}
                            className={`w-full px-4  h-full not-italic bg-btnBgColor ${state?.userPhoneNumber
                              ? "font-AeonikProMedium"
                              : null
                              } text-base leading-4 text-black`}
                            placeholder={"(77) 777-77-77"}
                          ></InputMask>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
                      <div className="flex justify-between mt-[6px]  w-full items-center not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                        <span>{t("Lemail")}</span>
                      </div>
                      <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                        <input
                          className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={state?.userEmail || ""}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userEmail: e.target.value,
                              activeEditEmail: true,
                            });
                          }}
                          placeholder={t("Lemail")}
                          required
                        />
                        <span>
                          <EmailIcons colors={"#D2D2D2"} />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* EditPassword and Send Edited Email */}
                  <div className="w-full flex items-center xs:justify-start justify-end xs:mt-5 ">
                    <button
                      onClick={() => setOpenEditPasswordModal(true)}
                      type="button"
                      className={
                        "w-full text-start text-borderWinter text-base not-italic font-AeonikProRegular hover:underline"
                      }
                    >
                      {t("PPEeditPss")}
                    </button>
                    <button
                      onClick={() => setSendEmailModal(true)}
                      type="button"
                      disabled={state.activeEditEmail ? false : true}
                      className={`${state.activeEditEmail
                        ? "text-borderWinter hover:underline"
                        : "text-[#e2e2e2] hover:no-underline"
                        } w-full text-end  text-base not-italic font-AeonikProRegular `}
                    >
                      {t("PPEeditEmail")}
                    </button>
                  </div>
                </div>

                {/* SEND BUTTON */}
                <div className="w-full  mx-auto flex items-center justify-between md:px-[40px] md:py-[30px] mt-6 md:mt-0">
                  <div className="">
                    <button
                      onClick={LogOut}
                      className="flex items-center active:scale-95  active:opacity-70 "
                    >
                      <span>
                        <LogOutIcons colors={"#D50000"} />
                      </span>
                      <span className="not-italic hidden md:block ml-2 font-AeonikProMedium text-base leading-4 tracking-[1%] text-RedColor text-center">
                        {t("PPexit")}
                      </span>
                    </button>
                  </div>
                  <div className="w-[80%] xs:w-[60%] md:w-auto ">
                    <button
                      onClick={sendEditedData}
                      type="button"
                      disabled={state.activeEditPassword ? false : true}
                      className={`${state.activeEditPassword
                        ? "cursor-pointer bg-borderWinter active:scale-95 active:opacity-70"
                        : "cursor-not-allowed bg-gray-300"
                        } w-[100%] md:w-[244px] h-[52px]  text-white rounded-lg flex items-center justify-center`}
                    >
                      <span className="not-italic  font-AeonikProMedium text-base leading-4 text-center tracking-[1%]">
                        {t("PPrefresh")} </span>
                      <span className="ml-2">
                        <SircleNext colors={"#fff"} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export { EditProfilePage };
