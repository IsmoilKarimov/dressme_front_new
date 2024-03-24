import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SircleNext } from "../../../assets/icons";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import LoadingNetwork from "../../Loading/LoadingNetwork";
import { useTranslation } from "react-i18next";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation('authen')
  const url = "https://api.dressme.uz/api";
  const [state, setState] = useState({
    newPassword: "",
    newPasswordConfirm: "",
    newPasswordEye: false,
    newConfirmPasswordEye: false,
    isLoadingSent: false,
    eyesShow: true,
    validateShow: true,
  });

  // ------------Password Confirm----------
  const [confirmError, setConfirmError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const pathname = window.location.pathname;
  let digitalToken = pathname.replace("/reset-password-user/:", "");
  const resetPasswordMutate = useMutation(() => {
    return fetch(`${url}/user/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        password: state?.newPassword,
        password_confirmation: state?.newPasswordConfirm,
        password_token: digitalToken,
      }),
    });
  });

  const onSubmit = () => {
    setState({ ...state, isLoadingSent: true });

    resetPasswordMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          setState({ ...state, isLoadingSent: false });

          if (res?.status === 200) {
            toast.success(`Ваш пароль был успешно сброшен`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/sign_in");
          }

          if (res?.status === 422) {
            toast.error("Значение поля не совпадает с подтверждаемым.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }

          if (res?.status === 403) {
            toast.error(`Неверный токен электронной почты!`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          // console.log(res?.status, "resetpassword");
        },
        onError: (err) => {
          setState({ ...state, isLoadingSent: false });

          // console.log(err, "err");
          toast.error(`ошибка ${err}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          throw new Error(err || "something wrong");

        },
      }
    );
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    // document.title = "Подтвердите пароль";
  }, []);

  return (
    <div className="mt-[180px] py-8 w-full min-h-[calc(100vh-180px)] flex justify-center ss:px-4 md:px-0">
      {state?.isLoadingSent ? (
        <LoadingNetwork />
      ) : (
        <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
          <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
            <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
              {t("NPnewMakePss")}{" "}
            </span>
            <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 text-center text-setTexOpacity tracking-[0.16px]">
              {t("NPdontMatch")}{" "}
            </span>
          </div>

          <form className="mt-4 w-full h-fit">
            <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
              {t("NPnewPss")}
            </div>
            <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
              <input
                className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                name="password"
                autoComplete="password"
                type={state?.eyesShow ? "password" : "text"}
                placeholder={t("NPnewPss")}
                value={state?.newPassword || ""}
                onChange={(e) =>
                  setState({ ...state, newPassword: e.target.value })
                }
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
            {confirmError && (
              <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base mt-[2px] md:mt-1">
                {confirmError}
              </p>
            )}
          </form>
          <form className="mt-4 w-full h-fit">
            <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
              {t("NPenterPss")}
            </div>
            <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
              <input
                className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                name="password"
                autoComplete="password"
                type={state?.validateShow ? "password" : "text"}
                placeholder={t("NPenterPss")}
                value={state?.newPasswordConfirm || ""}
                onChange={(e) =>
                  setState({ ...state, newPasswordConfirm: e.target.value })
                }
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
            {passwordError && (
              <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base mt-[2px] md:mt-1">
                {passwordError}
              </p>
            )}
          </form>

          <button
            onClick={() => onSubmit()}
            className={`mt-8 border bg-[#007dca] flex items-center justify-center border-searchBgColor bg-textBlueColor w-full h-12  select-none rounded-lg cursor-pointer active:scale-95	active:opacity-50 }`}
          >
            <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
              {t("FPresetPss")}{" "}
            </span>
            <span>
              <SircleNext colors={"#fff"} />
            </span>{" "}
          </button>
        </div>
      )}
    </div>
  );
}
