import { NavLink, useNavigate } from "react-router-dom";
import { PhoneIcons, SircleNext, UserMailIcon } from "../../../assets/icons";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import LoadingNetwork from "../../Loading/LoadingNetwork";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const url = "https://api.dressme.uz/api/user";
  const [state, setState] = useState({
    email: "",
    passwordEye: false,
    openModalEmailMessage: false,
    btnDisable: false,
  });

  const [loading, setLoading] = useState(false);

  const forgotPasswordMutate = useMutation(() => {
    return fetch(`${url}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
      },
      body: JSON.stringify({ email: state?.email }),
    });
  });
  const onSubmit = () => {
    setLoading(true);
    if (state?.email?.length) {
      forgotPasswordMutate.mutate(
        {},
        {
          onSuccess: (res) => {
            console.log(res, "forgotPassword");
            if (res?.status == 200 || res?.ok) {
              setState({
                ...state,
                openModalEmailMessage: true,
                email: "",
                btnDisable: true,
              });
              setLoading(false);
              toast.success(
                "Мы отправили вам ссылку для сброса пароля. Пожалуйста, проверьте свою электронную почту",
                {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                }
              );

              // navigate('/reset-password-seller')
            } else {
              setLoading(false);
              toast.error("введите правильный адрес электронной почты", {
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
            // message.error("введите правильный адрес электронной почты")
            console.log(err, "err");
            setLoading(false);
            toast.error("введите правильный адрес электронной почты", {
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
      setLoading(false);
      toast.warning("Заполните все поля", {
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = "Забыли пароль";
  }, []);

  return (
    <div className="mt-[180px] py-8 w-full min-h-[80vh] flex justify-center ss:px-4 md:px-0">
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

      {loading ? (
        <LoadingNetwork />
      ) : (
        <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
          <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
            <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
              Забыли пароль?
            </span>
            <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 ss:text-start md:text-center text-setTexOpacity tracking-[0.16px]">
              Не беспокойтесь, мы поможем вам
            </span>
          </div>

          <div className="mt-1 w-full h-fit">
            <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
              Электронная почта
            </div>
            <div className="mt-1 xs:mt-[6px]  w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
              <input
                className="w-full h-[42px] pl-2 xs:pl-[16px] bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                type="email"
                name="email"
                value={state?.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                placeholder="example@mail.com"
                required
              />
              <span className="pr-2 xs:pr-[16px]">
                <UserMailIcon />
              </span>{" "}
            </div>
          </div>

          <button
            onClick={() => {
              if (!state?.btnDisable) {
                onSubmit();
              }
            }}
            className={`mt-8 border bg-[#007dca] flex items-center justify-center border-searchBgColor bg-textBlueColor w-full h-12  select-none rounded-lg
             ${
               !state?.btnDisable
                 ? " cursor-pointer active:scale-95	active:opacity-50 "
                 : "opacity-50 cursor-not-allowed"
             }`}
          >
            <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
              Сбросить пароль{" "}
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
