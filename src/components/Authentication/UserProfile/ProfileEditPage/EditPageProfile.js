import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
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
import LoadingFor from "../../../Loading/LoadingFor";
import EmailSend from "./EmailSend/EmailSend";

const EditProfilePage = () => {
  const { request } = useHttp();
  const [profileData, setProfileData] = useState("");
  const [openEditPasswordModal, setOpenEditPasswordModal] = useState(false);
  const [sendEmailModal, setSendEmailModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [activeEditPasswordBtn, setActiveEditPasswordBtn] = useState(false);
  // const [activeEditEmailBtn, setActiveEditEmailBtn] = useState(false);
  const [state, setState] = useState({
    userFirstname: "",
    userLastname: "",
    userEmail: "",
    userTypeId: "",
    userStatus: "",
    userPhoneCode: "",
    userPhoneNumber: "",
    errorsGroup: null,
    isChange: false,
    activeEditPassword: false,
    activeEditEmail: false,
    openModalEmailMessage: false,
  });

  // =====================
  const togglePassword = React.useCallback(
    () => setOpenEditPasswordModal(false),
    []
  );
  const toggleEmail = React.useCallback(
    () => setSendEmailModal(false),
    []
  );
  // =====================

  const url = "https://api.dressme.uz/api/user";

  // ----------------GET USER PROFILE-------------
  const { refetch } = useQuery(
    ["get-user-profile"],
    async () => {
      return request({ url: `/user/profile`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, "SUCCESS, GET USER PROFILE");
        setProfileData(res);
        setState({
          ...state,
          userFirstname: res?.name,
          userLastname: res?.surname,
          userEmail: res?.email,
          userPhoneCode: res?.phone && res?.phone.slice(0, 3),
          userPhoneNumber: res?.phone && res?.phone.slice(3, 12),
        });
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN GET-USER-PROFILE");
      },

      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  let data = state?.userPhoneNumber.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let arr3 = state.userPhoneCode.split("+");
  let data3 = arr3.join("");
  const sendMessagePhoneNumber = data3 + data2;

  // =========== POST USER EDIT DATA ==========
  const dataMutate = useMutation(() => {
    return fetch(`${url}/update-user-info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        name: state?.isChange === true && state?.userFirstname,
        surname: state?.isChange === true && state?.userLastname,
        phone: state?.isChange === true && sendMessagePhoneNumber,
      }),
    }).then((res) => res.json());
  });

  const sendEditedData = () => {
    dataMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          refetch();
          console.log(res, "RES");
          if (res?.message && !res.errors) {
            setState({ ...state, errorsGroup: res });
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
          } else if (res?.message && res.errors) {
            setState({ ...state, errorsGroup: res });
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
          }
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  // =========== POST EDIT USER EMAIL ==========
  const dataEmailMutate = useMutation(() => {
    return fetch(`${url}/update-user-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        email: state?.userEmail,
      }),
    }).then((res) => res.json());
  });

  const sendEditedEmailData = () => {
    dataEmailMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          console.log(res, "USER-EMAIL");
          if (res?.message && !res.errors) {
            setLoading(false);
            setState({
              ...state,
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
          } else if (res?.message && res.errors) {
            setLoading(false)
            setState({ ...state, errorsGroup: res });
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
          } 
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const navigate = useNavigate();
  const location = useLocation();
  const LogOut = () => {
    localStorage.removeItem("DressmeUserToken");
    if (location?.pathname?.includes("profile/edit")) {
      navigate("/sign_in");
    } else if (location?.pathname?.includes("my-order")) {
      navigate("/sign_in");
    } else {
      navigate(location.pathname);
    }
  };

  const sendData = () => {
    return sendEditedEmailData(), 33
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Pедактировать профиль";
  }, []);

  return (
    <div>
      {loading ? (
          <div><LoadingFor /></div>
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
                className={`fixed  max-w-[440px] md:max-w-[550px] mx-auto w-full md:w-auto z-[113] bottom-0 md:bottom-auto  duration-300 overflow-hidden ${
                  openEditPasswordModal ? "" : "hidden z-0"
                }`}
              >
                <EditPassword onClick={togglePassword} />
              </section>
              {/* EMAIL COMPONENT */}
              <section
                className={`fixed  max-w-[440px] md:max-w-[550px] mx-auto w-full md:w-auto z-[113] bottom-0 md:bottom-auto  duration-300 overflow-hidden ${
                  sendEmailModal ? "" : "hidden z-0"
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
                  className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
                    state?.openModalEmailMessage ? "" : "hidden"
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
                        <MenuCloseIcons width={28} height={28} colors="#303030" />
                      </button>
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
              {/* ----------- Email Verify Modal END ----------- */}
              <div className="md:w-[820px] w-full h-fit p-4 md:px-0 border border-searchBgColor rounded-lg mb-[100px] md:mx-auto md:mb-0">
                {/* 1 */}
                <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
                  <div className="w-full flex justify-between items-center">
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
                          name="firstname"
                          value={state?.userFirstname || null}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userFirstname: e.target.value,
                              isChange: true,
                              activeEditPassword: true,
                            });
                          }}
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
                          className="w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                          type="text"
                          name="lastName"
                          value={state?.userLastname || null}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userLastname: e.target.value,
                              isChange: true,
                              activeEditPassword: true,
                            });
                          }}
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
                {/* 2 */}
                <div className="w-full md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
                  <div className="flex  flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
                      <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                        Номер телефона{" "}
                      </div>
                      <div className="flex mt-[6px] items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                        <div className="w-[35%] md:w-[25%] h-12 flex bg-btnBgColor items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                          <img src={UzbekFlag} alt="form-arrow-bottom" />
                          <input
                            className="w-[40px] bg-btnBgColor h-full select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black"
                            type="text"
                            value={"+" + state?.userPhoneCode || ""}
                            readOnly
                          />
                        </div>
                        <div className="w-[65%] md:w-[75%] bg-btnBgColor h-12 overflow-hidden">
                          <InputMask
                            mask="(99)999-99-99"
                            value={state?.userPhoneNumber || null}
                            onChange={(e) => {
                              setState({
                                ...state,
                                userPhoneNumber: e.target.value,
                                isChange: true,
                                activeEditPassword: true,
                              });
                            }}
                            className={`w-full px-4  h-full not-italic bg-btnBgColor ${
                              state?.userPhoneNumber
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
                        <span>Электронная почта</span>
                      </div>
                      <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                        <input
                          className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                          type="email"
                          value={state?.userEmail || null}
                          onChange={(e) => {
                            setState({
                              ...state,
                              userEmail: e.target.value,
                              activeEditEmail: true,
                            });
                          }}
                          placeholder="Адрес электронной почты"
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
                      Изменить пароль
                    </button>
                    <button
                      onClick={() => setSendEmailModal(true)}
                      type="button"
                      disabled={state.activeEditEmail ? false : true}
                      className={`${
                        state.activeEditEmail
                          ? "text-borderWinter hover:underline"
                          : "text-[#e2e2e2] hover:no-underline"
                      } w-full text-end  text-base not-italic font-AeonikProRegular `}
                    >
                      Обновить почту
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
                        Выйти из системы
                      </span>
                    </button>
                  </div>
                  <div className="w-[80%] xs:w-[60%] md:w-auto ">
                    <button
                      onClick={sendEditedData}
                      type="button"
                      disabled={state.activeEditPassword ? false : true}
                      className={`${
                        state.activeEditPassword
                          ? "cursor-pointer bg-borderWinter active:scale-95 active:opacity-70"
                          : "cursor-not-allowed bg-gray-300"
                      } w-[100%] md:w-[244px] h-[52px]  text-white rounded-lg flex items-center justify-center`}
                    >
                      <span className="not-italic  font-AeonikProMedium text-base leading-4 text-center tracking-[1%]">
                        Обновить данные
                      </span>
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
