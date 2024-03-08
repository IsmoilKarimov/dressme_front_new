import React, { useState } from "react";
import {
  EmailIcons,
  LogOutIcons,
  PersonIcons,
  SircleNext,
} from "../../../../../assets/icons";
import InputMask from "react-input-mask";
import { UzbekFlag } from "../../../../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../../hook/useHttp";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const UserProfilePage = () => {
  const [phone, setPhone] = useState("");
  const { request } = useHttp();
  const [profileData, setProfileData] = useState();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneCode: "+998",
    email: "",
    password: "",
    eyesShow: true,
    validateConfirm: true,
    requestPerson: true,
    Male: true,
    Female: false,
  });
  const { i18n, t } = useTranslation('authen')

  // -------------  GET ALL PRODUCTS LENGTH --------------
  useQuery(
    ["profile-data"],
    () => {
      return request({ url: "/user/profile", token: true });
    },
    {
      onSuccess: (res) => {
        if (res) {
          // console.log(res, "PROFILE");
          setProfileData(res);
        }
      },
      onError: (err) => {
        // console.log(err, "ERR-PROFILE");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  let data = phone.split("-");
  let arr = data.join("");
  let data1 = arr.split("(");
  let arr1 = data1.join("");
  let arr2 = arr1.split(")");
  let data2 = arr2.join("");
  let arr3 = state.phoneCode.split("+");
  let data3 = arr3.join("");
  const sendMessagePhoneNumber = data3 + data2;

  const navigate = useNavigate();
  const location = useLocation();
  const LogOut = () => {
    Cookies.remove("DressmeUserToken");
    if (location?.pathname?.includes("profile/settings")) {
      navigate("/sign_in");
    } else if (location?.pathname?.includes("my-order")) {
      navigate("/sign_in");
    } else {
      navigate(location.pathname);
    }
  };
   return (
    <div className="pt-3 md:pt-8 w-full flex justify-center ss:px-4 md:px-0">
      <div className="md:max-w-[820px] max-w-[440px] w-[100%] h-fit p-4 md:px-0  border border-searchBgColor rounded-lg mb-[100px] md:mb-0">
        <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
          <div className="">
            <span className="not-italic font-AeonikProMedium text-xl leading-6 text-black tracking-[1%]">
              {t("PPmyInfor")}
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="w-full md:w-[48%] h-fit">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                {t("Sfname")}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  name="name"
                  value={profileData?.name}
                  placeholder={t("Sfname")}
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                {t("Slname")}
              </div>
              <div className="mt-[6px] px-[16px] w-full flex bg-btnBgColor items-center border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="text"
                  name="name"
                  value={profileData?.surname}
                  placeholder={t("Slname")}
                  required
                />
                <span>
                  <PersonIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-[40px] md:py-[30px] md:border-b border-searchBgColor">
          <div className="flex  flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                {t("SphoneNum")} {" "}
              </div>
              <div className="flex mt-[6px] items-center justify-center overflow-hidden border border-searchBgColor rounded-lg">
                <div className="w-[35%] md:w-[25%] h-12 flex bg-btnBgColor items-center justify-center  cursor-pointer border-r border-searchBgColor overflow-hidden">
                  <img src={UzbekFlag} alt="form-arrow-bottom" />
                  <input
                    className="w-[40px] bg-btnBgColor h-full select-none mx-2 not-italic font-AeonikProMedium text-base leading-4 text-black"
                    type="text"
                    value={state.phoneCode}
                    readOnly
                  />
                </div>
                <div className="w-[65%] md:w-[75%] bg-btnBgColor h-12 overflow-hidden">
                  <InputMask
                    mask="(99)999-99-99"
                    name="name"
                    value={profileData?.phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4  h-full not-italic bg-btnBgColor ${phone ? "font-AeonikProMedium" : null
                      } text-base leading-4 text-black`}
                    placeholder={"(77) 777-77-77"}
                  ></InputMask>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[48%] h-fit mt-6 md:mt-0">
              <div className="flex justify-between mt-[6px]  w-full items-center not-italic font-AeonikProRegular text-sm leading-4 text-black  tracking-[0,16px] ">
                <span>{t("Lemail")}</span>
              </div>
              <div className="mt-[6px] px-[16px] w-full flex items-center bg-btnBgColor border border-searchBgColor rounded-lg ">
                <input
                  className="  w-full h-12 placeholder-not-italic bg-btnBgColor placeholder-font-AeonikProMedium placeholder-text-base placeholder-leading-4 placeholder-text-black"
                  type="email"
                  name="name"
                  value={profileData?.email}
                  placeholder={t("Lemail")}
                  required
                />
                <span>
                  <EmailIcons colors={"#D2D2D2"} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mx-auto flex items-center justify-between md:px-[40px] md:py-[30px] mt-6 md:mt-0">
          <div className="">
            <button
              onClick={LogOut}
              className="flex items-center active:scale-95  active:opacity-70 "
            >
              <span>
                <LogOutIcons colors={"#D50000"} />
              </span>
              <span className="not-italic hidden md:block ml-2  font-AeonikProMedium text-base leading-4 tracking-[1%] text-RedColor text-center">
              {t("PPexit")}
              </span>
            </button>
          </div>
          <div className="w-[80%] xs:w-[60%] md:w-auto ">
            {/* active:scale-95  active:opacity-70 */}
            <button className="w-[100%] md:w-[244px] h-[52px] cursor-not-allowed bg-gray-300 text-white rounded-lg flex items-center justify-center">
              <span className="not-italic  font-AeonikProMedium text-base leading-4 text-center tracking-[1%]">
              {t("PPrefresh")}
              </span>
              <span className="ml-2">
                <SircleNext colors={"#fff"} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { UserProfilePage };
