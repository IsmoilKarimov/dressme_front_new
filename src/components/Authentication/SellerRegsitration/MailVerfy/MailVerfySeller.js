import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { EmailIcons, MenuCloseIcons, SircleNext, SuccessIconsForMail, SuccessIconsForMailGreen } from "../../../../assets/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "@tanstack/react-query";


export default function MailVerfySeller() {
  const [state, setState] = useState({
    eyesShow: true,
    password: "",
    email: "",
    rememberCheck: "",
    // get method 
    getToken: "",  //no use
    getVerfyMessage: ""
  });

  const handleChange = (e) => {
    const { checked } = e.target;
    setState({ ...state, rememberCheck: checked })
  }
  const pathname = window.location.pathname;

  let PathnameToken = pathname.replace("/mail-verify-seller/:", "")


  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const url = "https://api.dressme.uz/api/seller";

  // ------------GET METHOD seller-types-----------------
  // const { isFetching } = useQuery(["verify mail"], () => {
  //   return fetch(`${url}/email-verify/${PathnameToken ? PathnameToken : null}`).then(res => res.json())
  // },
  //   {
  //     onSuccess: (res) => {
  //       setState({ ...state, getToken: res })
  //     },
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: false,
  //     onError: (err) => {
  //       console.log(err, "err");
  //     }
  //   }
  // )

  React.useEffect(() => {
    fetch(`${url}/email-verify/${PathnameToken ? PathnameToken : null}`)
      .then(results => results.json())
      .then(data => {
        setState({ ...state, getVerfyMessage: data })
        console.log(data, "Return Get method");
      });
  }, []);

  console.log(state?.getToken, "getToken");

  const dataMutate = useMutation(() => {
    return fetch(`${url}/login`, {
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
            console.log(res, "MailVerfySeller");
            if (res?.access_token) {
              localStorage.setItem("access_token", res?.access_token);
              window.location.replace(' https://dressme-dashboard-new.vercel.app/reviews');
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
      {/* <div>{PathnameToken}</div> */}
      <div className="max-w-[460px] w-[100%]  h-fit mb-5 px-2">
        <div className="w-full flex items-center justify-center flex-col">
          {state?.getVerfyMessage?.error &&
            <button className="w-[38px] md:w-[50px] h-[38px] md:h-[50px] flex p-2 md:p-4 items-center justify-center rounded-full bg-[#FF6C37]">
              <MenuCloseIcons colors="#D50000" />
            </button>
          }
          {state?.getVerfyMessage?.error ? null :
            <button className="w-[38px] md:w-[50px] h-[38px] md:h-[50px] flex p-2 md:p-4 items-center justify-center rounded-full bg-[#C3F1D8]">
              <SuccessIconsForMailGreen />
            </button>
          }

          <p className="mt-3 not-italic font-AeonikProMedium text-[24px] text-center leading-5   tracking-[0,16px] text-black">
            {state?.getVerfyMessage?.message}</p>
        </div>
        <div className=" w-full pb-[20px] pt-[30px]  md:hidden not-italic font-AeonikProMedium text-xl text-center leading-5   tracking-[0,16px] text-black">
          Вход для продавцов
        </div>
      </div>

      {/*  */}
      <div className="max-w-[460px] w-[100%]  h-fit  md:px-[40px] md:py-[32px] py-[25px] px-[15px] border border-searchBgColor rounded-[12px]">
        <div className=" w-full pb-[50px] pt-4 md:flex items-center justify-center hidden not-italic font-AeonikProMedium text-xl text-center leading-5   tracking-[0,16px] text-black">
          Вход для продавцов
        </div>

        <div className=" w-full h-fit">
          <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
            Электронная почта
          </span>
          <div className="mt-[4px]  w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="w-full px-2 xs:px-[16px] outline-none	bg-white w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
              type="email"
              name="email"
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
          <span className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
            Пароль
          </span>
          <div className="mt-[4px]  w-full flex items-center border border-searchBgColor rounded-lg ">
            <input
              className="w-full px-2 xs:px-[16px] outline-none	bg-white w-full h-[42px]  placeholder-leading-4 placeholder-tracking-[0,16px] placeholder-not-italic placeholder-font-AeonikProMedium ll:text-[14px] sm:text-[16px] placeholder-text-base placeholder-leading-4 placeholder-text-black"
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
        {/* {error?.length ? <div className={`text-[12px] mt-1 text-RedColor`}>{error}</div> : null} */}

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
              className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">

              {" "}
              Помнить
            </label>
          </div>

        </div>
        <button
          type="button"
          onClick={EnterTheSystem}
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
