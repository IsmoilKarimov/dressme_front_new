import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import {
  DeleteIcon,
  DeleteIcons,
  EmailIcons,
  LogOutIcons,
  MenuCloseIcons,
  PersonIcons,
  SircleNext,
} from "../../../../assets/icons";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UzbekFlag } from "../../../../assets";

const EditProfilePage = () => {
  const [ProfileData, setProfileData] = useState("");
  const [state, setState] = useState({
    userFirstname: "",
    userLastname: "",
    userEmail: "",
    userTypeId: "",
    userStatus: "",
    userPhoneCode: "",
    userPhoneNumber: "",

    // -------------
    validateConfirm: true,
    eyesShow: true,
    requestPerson: true,
    // ------Regions Get -----
    getRegionList: "",
    // ------ Get Profile-----
    getProfileList: "",
    // ------ Get getSellerList-----
    getSellerList: "",
    // -----region Modal-----
    openModalRegions: false,
    // ----popConfirmDelete
    popConfirmDelete: false,
  });

  const [openEditModal, setOpenEditModal] = useState(false);

  // -------------------------------------
  // const togglePassword = React.useCallback(() => setOpenEditModal(false), []);
  // -------------------------------------

  const url = "https://api.dressme.uz/api/user";

  // ----------------Get Seller Profile-------------
  useQuery(
    ["get-user-profile"],
    () => {
      return fetch(`${url}/profile`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("DressmeUserToken")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "Response in Profile");
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
        console.log(err, "err get profile");
      },

      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // -----------------------USER Delete---------------
  const { mutate } = useMutation(() => {
    return fetch(`${url}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },
    }).then((res) => res.json());
  });

  const onUserDelete = () => {
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.message) {
            localStorage.clear();
            navigate("/signup-seller");
            window.location.reload();
            setState({ ...state, popConfirmDelete: false });
            console.log(res, "Delete");
            toast.warn(`${res?.message}`, {
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
          console.log(err, "ERR");
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Pедактировать профиль";
  }, []);

  return (
    <>
      {ProfileData && (
        <div className="pt-3 md:pt-8 w-full flex justify-center ss:px-4 md:px-0">
          <div
            onClick={() => {
              setOpenEditModal(false);
              setState({
                ...state,
                popConfirmDelete: false,
                openModalRegions: false,
              });
            }}
            className={`fixed inset-0 z-[112] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
          ${
            state?.popConfirmDelete || openEditModal || state?.openModalRegions
              ? ""
              : "hidden"
          }`}
          ></div>
          {/* Delete Account Of Pop Confirm */}
          <section
            className={` max-w-[440px] md:max-w-[550px] mx-auto w-full flex-col h-fit bg-white fixed px-4 py-5 md:py-[35px] md:px-[50px] rounded-t-lg md:rounded-b-lg z-[113] left-0 right-0 md:top-[50%] duration-300 overflow-hidden md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%] ${
              state?.popConfirmDelete
                ? " bottom-0 md:flex"
                : "md:hidden bottom-[-800px] z-[-10]"
            }`}
          >
            <button
              onClick={() => setState({ ...state, popConfirmDelete: false })}
              type="button"
              className="absolute  right-3 top-3 w-5 h-5 "
            >
              <MenuCloseIcons className="w-full h-full" colors={"#a1a1a1"} />
            </button>
            <div className="flex flex-col justify-center items-center gap-y-2 ll:gap-y-4">
              <span className="w-10 h-10 rounded-full border border-[#a2a2a2] flex items-center justify-center">
                <span className="cursor-pointer active:translate-y-[2px] text-[#a2a2a2] transition-colors duration-[0.2s] ease-linear">
                  <DeleteIcons width={30} />
                </span>
              </span>
              <span className=" text-black text-lg xs:text-xl not-italic font-AeonikProMedium text-center">
                Вы уверены?
              </span>
              <span className=" text-[#a2a2a2] text-base xs:text-lg not-italic font-AeonikProMedium text-center">
                Если вы удалите аккаунт все ваши товары и магазины удалятся,
                если они имеются
              </span>
            </div>
            <div className="w-full flex items-center justify-between mt-5 xs:mt-10 gap-x-2">
              <button
                onClick={() => setState({ ...state, popConfirmDelete: false })}
                type="button"
                className="w-1/2 xs:w-[45%] active:scale-95 active:opacity-70 flex items-center justify-center rounded-[12px] border border-textBlueColor text-textBlueColor bg-white h-[42px] px-4  text-center text-base not-italic font-AeonikProMedium"
              >
                Oтмена
              </button>
              <button
                onClick={onUserDelete}
                type="button"
                className="w-1/2 xs:w-[45%] active:scale-95  active:opacity-70 flex items-center justify-center rounded-[12px] border border-textRedColor text-white bg-[#FF4747]  h-[42px] px-4  text-center text-base not-italic font-AeonikProMedium"
              >
                Удалить
              </button>
            </div>
          </section>
          <div className="md:max-w-[820px] max-w-[440px] w-[100%] h-fit p-4 md:px-0  border border-searchBgColor rounded-lg mb-[100px] md:mb-0">
            <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
              <div className="w-full flex justify-between items-center">
                <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
                  Мои данные
                </span>
                <button
                  onClick={() => setState({ ...state, popConfirmDelete: true })}
                  className="h-5 flex items-center text-[14px] xs:text-base not-italic font-AeonikProRegular leading-5"
                >
                  {/* <VerticalMenuIcons className="h-full" /> */}
                  <span className="cursor-pointer active:translate-y-[2px] text-[#a2a2a2] transition-colors duration-[0.2s] ease-linear">
                    <DeleteIcon width={30} />
                  </span>
                </button>
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
                      onChange={(e) =>
                        setState({ ...state, userFirstname: e.target.value })
                      }
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
                      onChange={(e) =>
                        setState({ ...state, userLastname: e.target.value })
                      }
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
                        onChange={(e) =>
                          setState({
                            ...state,
                            userPhoneNumber: e.target.value,
                          })
                        }
                        className={`w-full px-4  h-full not-italic bg-btnBgColor ${
                          state?.userPhoneNumber ? "font-AeonikProMedium" : null
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
                      // onChange={(e) =>
                      //   setState({ ...state, userEmail: e.target.value })
                      // }
                      placeholder="Адрес электронной почты"
                      // required
                    />
                    <span>
                      <EmailIcons colors={"#D2D2D2"} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  mx-auto flex items-center justify-between md:px-[40px] md:py-[30px] mt-6 md:mt-0">
              <div className="">
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
                {/* active:scale-95  active:opacity-70 */}
                <button className="w-[100%] md:w-[244px] h-[52px] cursor-not-allowed bg-gray-300 text-white rounded-lg flex items-center justify-center">
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
    </>
  );
};
export { EditProfilePage };
