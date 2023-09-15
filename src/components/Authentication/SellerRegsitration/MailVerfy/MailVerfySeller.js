import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { EmailIcons, SircleNext, SuccessIconsForMail, SuccessIconsForMailGreen } from "../../../../assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";


export default function MailVerfySeller() {
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    email: "",
    rememberCheck: ""
  });

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked })
  }

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const url = "https://api.dressme.uz/api/seller/login";

  const dataMutate = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
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
            console.log(res);
            if (res?.access_token) {
              localStorage.setItem("access_token", res?.access_token);

              // navigate("https://dressme-dashboard-new.vesrcel.app/reviews");
              setState({ ...state, email: "", password: "" });
              toast.success("Muaffaqiyatli kirdingiz", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

            } else {
              setError("Email yoki parolda xatolik");
              toast.error("Email yoki parolda xatolik", {
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
      setError("Bush maydon junatish mumkin emas");
      toast.warning("Iltimos Malumotlarni kiriting", {
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
    <div className=" w-full h-[calc(100vh-110px)] px-4 md:px-0 flex flex-col items-center justify-center">
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


      <div className="max-w-[460px] w-[100%]  h-fit mb-5 px-2">
        <div className="w-full flex items-center justify-center flex-col">
          <button className="w-[38px] md:w-[50px] h-[38px] md:h-[50px] flex p-2 md:p-4 items-center justify-center rounded-full bg-[#C3F1D8]">
            <SuccessIconsForMailGreen />
          </button>
          <p className="mt-3 text-black text-center text-[18px] md:text-[30px] not-italic font-AeonikProRegular">Вы успешно прошли проверку!</p>
        </div>
        <div className=" w-full pb-[20px] ll:pb-[50px] pt-[30px] ll:pt-[60px] md:hidden not-italic font-AeonikProMedium text-[20px] text-center leading-5 tracking-[0,16px] text-black">
          Вход для продавцов
        </div>
      </div>

      {/*  */}
      <div className="max-w-[460px] w-[100%]  h-fit  md:px-[40px] md:py-[32px] py-[25px] px-[15px] border border-searchBgColor rounded-[12px]">
        <div className=" w-full pb-[50px] pt-4 md:flex hidden not-italic font-AeonikProMedium text-[30px] md:text-center leading-5   tracking-[0,16px] text-black">
          Вход для продавцов
        </div>

        <div className=" w-full h-fit">
          <div className="not-italic font-AeonikProRegular text-[18px] leading-4 text-black  tracking-[0,16px] ">
            Электронная почта
          </div>
          <div className="mt-[6px] px-2 md:px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-[42px] text-base  placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black focus:bg-white placeholder-bg-white"
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
          <div className="not-italic font-AeonikProRegular text-[18px] leading-4 text-black  tracking-[0,16px] ">
            Пароль
          </div>
          <div className="mt-[6px] px-2 md:px-[16px] w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="  w-full h-[42px] text-base placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type={state?.eyesShow ? "password" : "text"}
              placeholder="Enter your password"
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
        {error?.length ? <div className={`text-[12px] mt-1 text-RedColor`}>{error}</div> : null}

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
              className="not-italic select-none cursor-pointer font-AeonikProRegular text-base leading-4 text-black tracking-[0,16px]"
            >
              {" "}
              Помнить
            </label>
          </div>

        </div>
        <button
          type="button"
          // onClick={EnterTheSystem}
          className="mt-[50px] border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
        >
          <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
            Войти в систему
          </span>
          <span>
            <SircleNext colors={"#fff"} />
          </span>
        </button>

      </div>
    </div>
  );
}
