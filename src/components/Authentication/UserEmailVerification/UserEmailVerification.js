import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SircleNext, UserMailIcon } from "../../../assets/icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export default function UserEmailVerification() {
  const [timer, setTimer] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    email: "",
    rememberCheck: "",
    // get method
    getVerfyMessage: "",
    errorMessage: "",
    errorsGroup: null,
  });
  const { i18n, t } = useTranslation('authen')

  const setTimeForNotif = () => {
    setTimer(true);
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked });
  };

  const pathname = window.location.pathname;
  let PathnameToken = pathname.replace("/mail-verify-user/:", "");

  const [error, setError] = useState(false);
  const url = "https://api.dressme.uz/api/user";

  React.useEffect(() => {
    fetch(`${url}/email-verify/${PathnameToken ? PathnameToken : null}`)
      .then((results) => results.json())
      .then((data) => {
        setState({ ...state, getVerfyMessage: data });
        console.log(data, "Return Get method");
      });
  }, []);

  const dataMutate = useMutation(() => {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
        rememberToken: state?.rememberCheck,
      }),
    }).then((res) => res.json());
  });

  const EnterTheSystem = () => {
    dataMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          console.log(res, "RES-AUTH");
          if (res?.message && !res.errors) {
            setState({ ...state, errorsGroup: res });
          } else if (res?.message && res?.errors) {
            setState({
              ...state,
              errorsGroup: res,
              errorMessage: res?.message,
            });
          } else if (res?.access_token) {
            Cookies.set("DressmeUserToken", res?.access_token);
            navigate("/profile/edit");
            // window.location.reload();
            setState({ ...state, email: "", password: "", errorsGroup: "" });
          }
        },
        onError: (err) => {
          console.log(err, "ERR");
          setState({ ...state, errorMessage: err?.message });
        },
      }
    );
  };

  function handleAuthSystem() {
    EnterTheSystem();
    setTimeForNotif();
  }
   useEffect(() => {
    document.title = "Подтвердить адрес электронной почты";
  }, []);

  return (
    <div className=" w-full h-[calc(100vh-110px)] px-4 md:px-0 flex flex-col items-center justify-center">
      <div className="max-w-[650px] w-[100%] flex flex-col items-center justify-center  h-fit mb-5 px-2">
        <div className="w-full flex items-center justify-center flex-col">
          <p className="mt-3 not-italic font-AeonikProRegular text-[20px] md:text-[25px] text-center leading-[30px]   tracking-[0,16px] text-black">
            {state?.getVerfyMessage?.message}
          </p>
          {timer &&
            state?.errorMessage &&
            state?.errorsGroup?.errors === true && (
              <span className="w-full h-fit text-center text-[20px] text-red-500 mt-2">
                {state?.errorMessage || null}
              </span>
            )}
        </div>
        <div className=" w-full pb-[20px] pt-[30px] md:hidden not-italic font-AeonikProMedium text-xl text-center leading-5   tracking-[0,16px] text-black">
          {t("VEsellerEnter")}
        </div>
      </div>

      {/*  */}
      <div className="max-w-[460px] w-[100%]  h-fit  md:px-[40px] md:py-[32px] py-[25px] px-[15px] border border-searchBgColor rounded-[12px]">
        <div className=" w-full pb-[50px] pt-4 md:flex items-center justify-center hidden not-italic font-AeonikProMedium text-[25px] text-center leading-5   tracking-[0,16px] text-black">
          {t("VEsellerEnter")}
        </div>

        <div className=" w-full h-fit">
          <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px]  ">
            {t("Lemail")}
          </span>
          <div className="mt-[4px]  w-full flex items-center border border-searchBgColor overflow-hidden rounded-lg ">
            <input
              className="w-full h-[42px] px-2 xs:px-[16px] outline-none	bg-white placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type="email"
              name="email"
              autoComplete="email"
              value={state.email}
              onChange={({ target: { value } }) => {
                setError();
                setState({ ...state, email: value });
              }}
              placeholder={t("Lemail")}
              required
            />
            <span className=" pr-2 xs:pr-4">
              <UserMailIcon colors={"#A1A1A1"} />
            </span>
          </div>
          {state?.errorsGroup?.errors?.email && (
            <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
              {state?.errorsGroup?.errors?.email}
            </p>
          )}
        </div>
        <form className="mt-4 w-full h-fit">
          <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px]  ">
          {t("Lpassword")}
          </span>
          <div className="mt-[4px]  w-full flex items-center border border-searchBgColor rounded-lg overflow-hidden">
            <input
              className="w-full h-[42px] px-2 xs:px-[16px] outline-none	bg-white placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              name="password"
              autoComplete="password"
              placeholder={t("Lpassword")}
              value={state.password}
              onChange={({ target: { value } }) => {
                setError();
                setState({ ...state, password: value });
              }}
              required
            />
            <span className="cursor-pointer pr-2 xs:pr-4">
              {state?.eyesShow ? (
                <AiOutlineEyeInvisible
                  onClick={() => setState({ ...state, eyesShow: false })}
                  size={20}
                  color={"#e2e2e2"}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setState({ ...state, eyesShow: true })}
                  size={20}
                  color={"#e2e2e2"}
                />
              )}
            </span>
          </div>
          {state?.errorsGroup?.errors?.password && (
            <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
              {state?.errorsGroup?.errors?.password}
            </p>
          )}
        </form>

        <div className="my-5 flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] rounded-lg text-black bg-white placeholder-bg-white mr-2"
              id="vehicle1"
              name="vehicle1"
              onChange={handleChange}
            />
            <label
              htmlFor="vehicle1"
              className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] "
            >
              {" "}
              {t("Lremember")}
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAuthSystem}
          className="mt-[50px] border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-fullBlue select-none rounded-lg active:scale-95	active:opacity-70"
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
          {t("LsignIn")}
          </span>
          <span>
            <SircleNext colors={"#fff"} />
          </span>
        </button>
      </div>
    </div>
  );
}
