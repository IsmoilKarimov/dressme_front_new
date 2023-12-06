import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MenuCloseIcons } from "../../../../../assets/icons";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

export default function EmailSend({ onClick }) {
  const [state, setState] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    eyesShowOld: false,
    eyesShowNew: false,
    eyesShowConfirm: false,
    errorsGroup: null,
  });

  const url = "https://api.dressme.uz/api/user";

  // =========== POST USER EDIT DATA ==========
  const dataMutate = useMutation(() => {
    return fetch(`${url}/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        current_password: state?.oldPassword,
        new_password: state?.newPassword,
        new_confirm_password: state?.confirmNewPassword,
      }),
    }).then((res) => res.json());
  });

  const SendNewPassword = () => {
    dataMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          console.log(res, "RES");
          if (res?.message && !res.errors) {
            setState({ ...state, errorsGroup: res });
            toast.success(`${res?.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else if (res?.message && res.errors) {
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
          }
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <div className="w-full md:w-[455px] h-fit bg-white rounded-t-lg md:rounded-lg px-4 py-5 md:py-[35px] md:px-[50px]">
      <div className="flex justify-end items-center md:mr-[-30px] md:mt-[-15px]">
        {" "}
        <button
          onClick={onClick}
          className=" border border-[#e2e2e2] rounded-lg p-[3px]"
        >
          <MenuCloseIcons width={24} height={24} colors={"#000"} />
        </button>
      </div>
      <div className="w-full text-xl text-center font-AeonikProMedium mb-3">Вы уверены?</div>
      <div className="leading-6 text-base font-AeonikProRegular text-textColor">
        Если вы обновите почту, то ваш аккаунт станет недоступным, пока вы не проверите новую почту
      </div>

      <div className="w-full flex items-center justify-between gap-x-4 mt-[30px]">
        <button
          type="button"
        //   onClick={SendNewPassword}
          className="h-12 w-1/2 active:scale-95  active:opacity-70 rounded-lg text-borderWinter border border-borderWinter flex bg-white items-center justify-center text-center text-base not-italic font-AeonikProMedium"
        >
          Отмена
        </button>
        <button
          type="button"
        //   onClick={SendNewPassword}
          className="h-12 w-1/2 active:scale-95  active:opacity-70 text-white rounded-lg  flex bg-borderWinter items-center justify-center text-center text-base not-italic font-AeonikProMedium"
        >
          Обновить
        </button>
      </div>
    </div>
  );
}
