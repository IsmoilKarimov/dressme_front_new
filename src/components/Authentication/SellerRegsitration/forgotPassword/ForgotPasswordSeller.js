import { NavLink, useNavigate } from "react-router-dom";
import { MenuCloseIcons, SircleNext, SuccessIconsForMail, UserMailIcon } from "../../../../assets/icons";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { message } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPasswordSeller() {
    const navigate = useNavigate()
    const url = "https://api.dressme.uz/api/seller"
    const [state, setState] = useState({
        email: "",
        passwordEye: false,
        openModalEmailMessage: false
    })
    const forgotPasswordMutate = useMutation(() => {
        return fetch(`${url}/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
            },
            body: JSON.stringify({ email: state?.email })
        })
    })
    const onSubmit = () => {
        if (state?.email?.length) {
            forgotPasswordMutate.mutate({}, {
                onSuccess: res => {
                    console.log(res, "forgotPassword");
                    if (res?.status == 200 || res?.ok) {
                        toast.success("Успешный  вход в систему", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        setState({ ...state, openModalEmailMessage: true, email: "" })
                        // navigate('/reset-password-seller')
                    } else {
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
                onError: err => {
                    // message.error("введите правильный адрес электронной почты")
                    console.log(err, "err");
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
            })
        } else {
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
    }
    return (
        <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex items-center justify-center ss:px-4 md:px-0">
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
            {/* -----------------------Email Verify Modal------------------- */}
            <div className="w-full md:w-1/2 h-fit ">
                <div
                    onClick={() => {
                        setState({ ...state, openModalEmailMessage: false });
                    }}
                    className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${state?.openModalEmailMessage ? "" : "hidden"
                        }`}
                ></div>
                {state?.openModalEmailMessage &&
                    <div className="fixed max-w-[490px] h-[275px]  p-3 bg-white rounded-lg  mx-auto w-full  z-[113] top-[50%] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                        <div className="flex items-center justify-end">
                            <span className="cursor-pointer" onClick={() => {
                                setState({ ...state, openModalEmailMessage: false });
                            }}><MenuCloseIcons colors="#303030" /></span>
                        </div>
                        <div className="w-full flex items-center justify-center flex-col">
                            <button className="flex p-4 items-center justify-center rounded-full mt-4 bg-[#D8EDFF]">
                                <SuccessIconsForMail />
                            </button>
                            <p className="text-[#1F1F1F] text-3xl not-italic font-AeonikProMedium mt-5">Мы отправили вам ссылку</p>
                            <p className="text-[#8B8B8B] text-xl not-italic font-AeonikProRegular mt-[30px]">Проверьте свой E-mail</p>
                        </div>


                    </div>}

            </div>
            <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
                <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
                    <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
                        Забыли пароль?
                    </span>
                    <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 ss:text-start md:text-center text-setTexOpacity tracking-[0.16px]">
                        Не беспокойтесь, мы поможем вам
                    </span>
                </div>

                <div className="mt-1 flex flex-col gap-y-5 w-full h-fit">
                    <div className="w-full h-fit">
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
                    <div className="w-full h-fit hidden">
                        <div className=" not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0.16px]">
                            Пароль
                        </div>
                        <div className="mt-1 xs:mt-[6px]  w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                            <input
                                className="w-full h-[42px] pl-2 xs:pl-[16px] bg-btnBgColor focus:bg-btnBgColor active:bg-btnBgColor placeholder:bg-btnBgColor placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                                type={state?.passwordEye ? "text" : "password"}
                                name="Пароль"
                                required
                            />
                            <span className="cursor-pointer pr-2">
                                {state?.passwordEye ? (
                                    <span
                                        onClick={() => setState({ ...state, passwordEye: false })}
                                    >
                                        < AiOutlineEye size={20} color={"#e2e2e2"} />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setState({ ...state, passwordEye: true })}
                                    >
                                        <AiOutlineEyeInvisible size={20} color={"#e2e2e2"} />
                                    </span>

                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onSubmit}
                    // to="/enter_password_validate"
                    className="mt-8  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
                >
                    <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                        Сбросит пароль{" "}
                    </span>
                    <span>
                        <SircleNext colors={"#fff"} />
                    </span>{" "}
                </button>
                {/* <NavLink
                    to="/reset-password-seller"
                    className="mt-8  border cursor-pointer flex items-center justify-center border-searchBgColor w-full h-12 bg-SignInBgColor select-none rounded-lg active:scale-95	active:opacity-70 "
                >
                    <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                        Сбросит пароль{" "}
                    </span>
                    <span>
                        <SircleNext colors={"#fff"} />
                    </span>{" "}
                </NavLink> */}
            </div>
        </div>
    );
}
