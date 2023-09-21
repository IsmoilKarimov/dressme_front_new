import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { EmailIcons, SircleNext } from "../../../../assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
export default function SignInSeller() {
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    email: "",
    rememberCheck: "",
    errorGroup: ""

  });

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked })
  }

  const navigate = useNavigate();
  const url = "https://api.dressme.uz/api/seller/login";

  const dataMutate = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ email: state.email, password: state.password, rememberToken: state?.rememberCheck }),
    }).then((res) => res.json());
  });
  const EnterTheSystem = () => {
    console.log(state?.email, "email");
    console.log(state?.password, "password");
    console.log(state?.rememberCheck, "rememberCheck");
    if (state.email?.length && state.password?.length) {

      dataMutate.mutate(
        {},
        {
          onSuccess: (res) => {
            console.log(res, "SignInSeller");
            if (res?.message && res?.errors) {
              setState({ ...state, errorGroup: res?.message })
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
              localStorage.setItem("access_token", res?.access_token)
              setState({ ...state, email: "", password: "", errorGroup: "" });
              toast.success(`Успешный  вход в систему`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              window.location.replace(' https://dressme-dashboard-new.vercel.app/reviews');
            }
          },
          onError: (err) => {
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
    } else {
      toast.error(`Заполните все поля`, {
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
  };

  return (
    <div className=" w-full h-[calc(100vh-110px)] px-4 md:px-0 flex items-center justify-center">
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

      <div className="max-w-[440px] w-[100%]  h-fit  md:px-[40px] md:py-[32px] py-3 px-2 border border-searchBgColor rounded-lg">
        <div className=" w-full  mb-7 not-italic font-AeonikProMedium text-[18px] ls:text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
          Войти в систему продавца
        </div>

        <div className="mt-2 w-full h-fit">
          <div className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
            Электронная почта
          </div>
          <div className="mt-[6px] px-2 md:px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-[42px] text-base  placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black focus:bg-white placeholder-bg-white"
              type="email"
              name="email"
              value={state.email}
              onChange={({ target: { value } }) => {
                setState({ ...state, email: value });
              }}
              placeholder="Emailingizni kiriting..."
              required
            />
            <span>
              <EmailIcons colors={"#e2e2e2"} />
            </span>
          </div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
            Пароль
          </div>
          <div className="mt-[6px] px-2 md:px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-[42px] text-base placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={({ target: { value } }) => {
                setState({ ...state, password: value });
              }}
              required
            />
            <span className="cursor-pointer">
              {state?.eyesShow ? (
                <AiOutlineEyeInvisible
                  onClick={() => setState({ ...state, eyesShow: false })}
                  size={20} color={"#e2e2e2"}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setState({ ...state, eyesShow: true })}
                  size={20} color={"#e2e2e2"}
                />
              )}
            </span>
          </div>
        </div>
        {/* {
          state?.errorGroup &&
          <p className=" mx-auto text-[#D50000] text-[12px] md:text-[14px]  ">
            {state?.errorGroup}
          </p>
        } */}

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
              className="not-italic select-none cursor-pointer font-AeonikProRegular text-sm leading-4 text-black tracking-[0,16px]"
            >
              {" "}
              Запомнить данные
            </label>
          </div>
          <NavLink
            to={"/forgot-password-seller"}
            className="not-italic underline	 font-AeonikProRegular text-sm leading-4 cursor-pointer text-black hover:text-SignInBgColor tracking-[0,16px]"
          >
            Забыли пароль?
          </NavLink>
        </div>
        <div
          onClick={EnterTheSystem}
          className="mt-2 border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Войти в систему
          </span>
          <span>
            <SircleNext colors={"#fff"} />
          </span>
        </div>
        <div className=" mt-6 text-center">
          {" "}
          Если у вас еще нету аккаунта
        </div>
        <NavLink
          to={"/signup-seller"}
          className="mt-3  cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-OpacitySignIn select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-black tracking-[0,16px]">
            Создайте Аккаунт
          </span>
        </NavLink>
      </div>
    </div>
  );
}
