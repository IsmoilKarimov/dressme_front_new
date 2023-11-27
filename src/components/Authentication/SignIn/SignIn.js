import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { EmailIcons, SircleNext } from "../../../assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
export default function SignIn() {
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    rememberCheck: "",
    email: "",
    errorGroup:"",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const url = "https://api.dressme.uz/api/user/login";

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked })
  }

  const dataMutate = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { 
        "Accept": "application/json",
        "Content-type": "application/json" 
      },
      body: JSON.stringify({ email: state.email, password: state.password, rememberToken: state.rememberCheck }),
    }).then((res) => res.json());
  });

  const EnterTheSystem = () => {
    // console.log(state?.email, "email");
    // console.log(state?.password, "password");
    // console.log(state?.rememberCheck, "rememberCheck");
    if (state.email?.length && state.password?.length) {
      dataMutate.mutate(
        {},
        {
          onSuccess: (res) => {
            console.log(res, "res");
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
              localStorage.setItem("DressmeUserToken", res?.access_token)
              navigate("/")
              window.location.reload();
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
              // window.location.replace(' https://dressme-dashboard-new.vercel.app/reviews');
              setState({ ...state, email: "", password: "", errorGroup: "" });
            }
          },
          onError: (err) => {
            console.log(err, "error");
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
    <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex justify-center ">
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

      <div className="max-w-[440px] w-[100%]  h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-full  mb-7 not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
          Авторизоваться
        </div>

        <div className="mt-2 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Электронная почта
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black focus:bg-white placeholder-bg-white"
              type="email"
              value={state.email}
              onChange={({ target: { value } }) => {
                setError();
                setState({ ...state, email: value });
              }}
              placeholder="Emailingizni kiriting..."
              required
            />
            <span>
              <EmailIcons colors={"#A1A1A1"} />
            </span>
          </div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
            Пароль
          </div>
          <div className="mt-[6px] px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-12 placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              placeholder="Enter your password"
              name="password"
              value={state.password}
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
        </div>
        {error?.length ? <div className={`text-RedColor`}>{error}</div> : null}

        <div className="my-5 flex items-center justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className=" text-black bg-white placeholder-bg-white mr-2"
              id="vehicle1"
              name="vehicle1"
              // value="Bike"
              onClick={handleChange}
            />
            <label
              htmlFor="vehicle1"
              className="not-italic select-none cursor-pointer font-AeonikProRegular text-sm leading-4 text-black tracking-[0,16px]"
            >
              {" "}
              Оставаться в системе
            </label>
          </div>
          <NavLink
            to={"/forget_password"}
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
        <div className="md:hidden block mt-6 text-center">
          {" "}
          Если у вас еще нету аккаунта
        </div>
        <NavLink
          to={"/sign_up"}
          className="mt-3 border md:hidden cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-OpacitySignIn select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-black tracking-[0,16px]">
            Создайте Аккаунт
          </span>
        </NavLink>
      </div>
    </div>
  );
}
