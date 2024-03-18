import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { EmailIcons, SircleNext } from "../../../assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import LoadingFor from "../../Loading/LoadingFor";
import Cookies from "js-cookie";
import axios from "axios";
import { UserRefreshTokenContext } from "../../../ContextHook/UserRefreshToken";
import { useTranslation } from "react-i18next";
import { LanguageDetectorDress } from "../../../language/LanguageItems";
import { SaesonDetectorDress } from "../../../ContextHook/SeasonContext";

export default function SignIn() {
  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );
  const { i18n, t } = useTranslation('authen')
  const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    rememberCheck: false,
    email: "",
    errorsGroup: null,
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const url = "https://api.dressme.uz/api/user";

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked });
  };
  console.log(state?.rememberCheck, 'rememberCheck');
  const dataMutate = useMutation(() => {
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-type": "application/json",
        'Accept-Language': languageDetector?.typeLang
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
        rememberToken: state.rememberCheck,
      }),
    }).then((res) => res.json());
  });

  const EnterTheSystem = () => {
    dataMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.message && res.errors !== true) {
            setState({ ...state, errorsGroup: res });
          } else if (res?.message && res?.errors === true) {
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
          } else if (res?.access_token) {
            setLoading(false);
            Cookies.set("DressmeUserToken", res?.access_token);
            Cookies.set("DressmeUserRefreshToken", res?.refresh_token);
            toast.success(`Успешный вход в систему`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/profile/edit");
            setState({ ...state, email: "", password: "", errorsGroup: "" });
            setUserLogedIn(true);
          }
        },
        onError: (err) => {
          console.log(err, "ERROR");
          toast.error("Serverda xatolik", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
      }
    );
  };

  const handleClick = () => {
    return EnterTheSystem(), setLoading(true);
  };

  return (
    <div className="md:py-8 w-full  flex justify-center ">
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

      <form className="max-w-[440px] w-[100%] mt-[80px] h-fit md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full  mb-7 not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
          {t("Llogin")}
        </div>

        <div className="mt-2 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            {t("Lemail")}
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black focus:bg-white placeholder-bg-white"
              type="email"
              name="email"
              autoComplete="email"
              value={state.email || ""}
              onChange={({ target: { value } }) => {
                setError();
                setState({ ...state, email: value });
              }}
              // placeholder="Emailingizni kiriting..."
              required
            />
            <span>
              <EmailIcons colors={"#A1A1A1"} />
            </span>
          </div>
          {state?.errorsGroup?.errors?.email && (
            <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
              {state?.errorsGroup?.errors?.email}
            </p>
          )}
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            {t("Lpassword")}
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              // placeholder="Enter your password"
              name="password"
              autoComplete="password"
              value={state.password || ""}
              onChange={({ target: { value } }) => {
                setError();
                setState({ ...state, password: value });
              }}
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
          {state?.errorsGroup?.errors?.password && (
            <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base">
              {state?.errorsGroup?.errors?.password}
            </p>
          )}
        </div>
        {error?.length ? <div className={`text-RedColor`}>{error}</div> : null}

        <div className="my-5 flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className=" text-black bg-white placeholder-bg-white mr-2"
              id="vehicle1"
              name="vehicle1"
              value={state?.rememberCheck || ''}
              onChange={handleChange}
            />
            <label
              htmlFor="vehicle1"
              className="not-italic select-none cursor-pointer font-AeonikProRegular text-sm leading-4 text-black tracking-[0,16px]"
            >
              {" "}
              {t("Lremember")}
            </label>
          </div>
          <NavLink
            to={"/forget_password"}
            className="not-italic underline	flex items-center font-AeonikProRegular text-sm leading-4 cursor-pointer text-black hover:text-SignInBgColor tracking-[0,16px]"
          >
            {t("LforgetPss")}
            <span>?</span>
          </NavLink>
        </div>
        <div
          onClick={handleClick}
          className="mt-2 border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            {t("LsignIn")}
          </span>
          <span>
            <SircleNext colors={"#fff"} />
          </span>
        </div>
        <div className="md:hidden block mt-6 text-center">
          {" "}
          {t("LhaveAcc")}
        </div>
        <NavLink
          to={"/sign_up"}
          className="mt-3 border md:hidden cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-OpacitySignIn select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-black tracking-[0,16px]">
            {t("LcreateAcc")}
          </span>
        </NavLink>
      </form>
    </div>
  );
}
