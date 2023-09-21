import { NavLink, useNavigate } from "react-router-dom";
import { SircleNext, UserMailIcon } from "../../../../assets/icons";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { message } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ResetPasswordSeller() {
    const navigate = useNavigate()
    const url = "https://api.dressme.uz/api/seller"
    const [state, setState] = useState({
        newPassword: "",
        newPasswordConfirm: "",
        newPasswordEye: false,
        newConfirmPasswordEye: false,
        btnDisable: false
    })
    // ------------Password Confirm----------
    const [confirmError, setConfirmError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        if (state?.newPassword?.length >= 1 && state?.newPassword?.length < 8) {
            setConfirmError(`The password must be at least 8 characters.`)
            setState({ ...state, btnDisable: false })
        }
        if (state?.newPassword?.length >= 8 || state?.newPassword?.length < 1) {
            setConfirmError(``)
            setState({ ...state, btnDisable: false })
        }

        if (state?.newPasswordConfirm?.length >= 1 || state?.newPassword !== state?.newPasswordConfirm) {
            setPasswordError(`The passwords do not match`)
            setState({ ...state, btnDisable: false })
        }
        if (state?.newPassword == state?.newPasswordConfirm || state?.newPasswordConfirm?.length == 0) {
            setPasswordError(``)
            setState({ ...state, btnDisable: false })
        }
        if (state?.newPassword?.length >= 8 && state?.newPasswordConfirm?.length >= 8 && state?.newPassword == state?.newPasswordConfirm) {
            setState({ ...state, btnDisable: true })
        }
    }, [state?.newPasswordConfirm, state?.newPassword])

    const pathname = window.location.pathname;
    let digitalToken = pathname.replace("/reset-password-seller/:", "")

    const resetPasswordMutate = useMutation(() => {
        return fetch(`${url}/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                password: state?.newPassword,
                password_confirmation: state?.newPasswordConfirm,
                digital_token: digitalToken
            })
        })
    })
    const onSubmit = () => {
        if (state?.btnDisable) {
            if (state?.newPassword?.length && state?.newPasswordConfirm?.length) {
                resetPasswordMutate.mutate({}, {
                    onSuccess: res => {
                        console.log(res, "resetpassword");
                        if (res?.status == 200) {

                            toast.success("Вы успешно вошли в", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            navigate('/login-seller')
                        } else {
                            toast.success(`${res?.status}`, {
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
                        console.log(err, "err");
                        toast.error(`ошибка ${err}`, {
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
                message.error("Заполните все поля")
            }
        }
    }
    return (
        <div className=" py-8 w-full min-h-[calc(100vh-180px)] flex items-center justify-center ss:px-4 md:px-0 ">
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
            <div className="max-w-[440px] w-[100%] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
                <div className=" w-full mt-1 mb-7 flex flex-col justify-center">
                    <span className="not-italic font-AeonikProMedium text-xl ss:text-start md:text-center leading-5   tracking-[0,16px] text-black">
                        Подтвердите пароль
                    </span>
                    <span className="mt-2 not-italic font-AeonikProRegular text-sm leading-4 ss:text-start md:text-center text-setTexOpacity tracking-[0.16px]">
                        Не беспокойтесь, мы поможем вам
                    </span>
                </div>

                <div className="mt-1 flex flex-col gap-y-2 w-full h-fit ">

                    <div className="w-full h-[85px] ll:h-[100px] ">
                        <div className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                            Новый пароль
                        </div>
                        <div className="mt-1 xs:mt-[6px] overflow-hidden w-full flex items-center bg-white border border-searchBgColor rounded-lg ">
                            <input
                                className="w-full h-[42px] pl-2 xs:pl-[16px]   placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                                type={state?.newPasswordEye ? "text" : "password"}
                                name="Пароль"
                                value={state?.newPassword}
                                onChange={(e) => setState({ ...state, newPassword: e.target.value })}
                                required
                            />
                            <span className="cursor-pointer pr-2">
                                {state?.newPasswordEye ? (
                                    <span
                                        onClick={() => setState({ ...state, newPasswordEye: false })}
                                    >
                                        < AiOutlineEye size={20} color={"#e2e2e2"} />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setState({ ...state, newPasswordEye: true })}
                                    >
                                        <AiOutlineEyeInvisible size={20} color={"#e2e2e2"} />
                                    </span>

                                )}
                            </span>
                        </div>
                        {confirmError && <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base mt-[2px] md:mt-1">{confirmError}</p>}

                    </div>

                    <div className="w-full h-[85px] ll:h-[100px] ">
                        <div className="flex items-center text-[#303030] text-[14px] xs:text-base not-italic font-AeonikProRegular leading-4 tracking-[0,16px] ">
                            Повторите новый пароль
                        </div>
                        <div className="mt-1 xs:mt-[6px] overflow-hidden  w-full flex items-center bg-white border border-searchBgColor rounded-lg ">
                            <input
                                className="w-full h-[42px] pl-2 xs:pl-[16px]  placeholder-not-italic placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black "
                                type={state?.newConfirmPasswordEye ? "text" : "password"}
                                name="Пароль"
                                value={state?.newPasswordConfirm}
                                onChange={(e) => setState({ ...state, newPasswordConfirm: e.target.value })}
                                required
                            />
                            <span className="cursor-pointer pr-2">
                                {state?.newConfirmPasswordEye ? (
                                    <span
                                        onClick={() => setState({ ...state, newConfirmPasswordEye: false })}
                                    >
                                        < AiOutlineEye size={20} color={"#e2e2e2"} />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setState({ ...state, newConfirmPasswordEye: true })}
                                    >
                                        <AiOutlineEyeInvisible size={20} color={"#e2e2e2"} />
                                    </span>

                                )}
                            </span>
                        </div>
                        {passwordError && <p className="text-[#D50000]  text-[12px] ll:text-[14px] md:text-base mt-[2px] md:mt-1">{passwordError}</p>}

                    </div>
                </div>

                <button
                    type="button"
                    onClick={onSubmit}
                    className={`mt-4 border flex items-center justify-center border-searchBgColor bg-SignInBgColor w-full h-12  select-none rounded-lg 
                     ${state?.btnDisable ? " cursor-pointer active:scale-95	active:opacity-50 " : "opacity-50 bg-[#007dca]"}`}
                >
                    <span className="not-italic font-AeonikProMedium mr-2 text-base leading-4 text-center text-white tracking-[0,16px]">
                        Сохранить пароль
                    </span>
                    <span>
                        <SircleNext colors={"#fff"} />
                    </span>{" "}
                </button>
            </div>
        </div>
    );
}
