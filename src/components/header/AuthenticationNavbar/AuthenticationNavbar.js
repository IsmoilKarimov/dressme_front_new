import React, { useContext, useState } from "react";
import {
  AutummFemale,
  AutummMale,
  SignInAutumm,
  SignInSpring,
  SignInSummer,
  SignInWinter,
  SignUpAutumm,
  SignUpSpring,
  SignUpSummer,
  SignUpWinter,
  SpringFemale,
  SpringMale,
  SummerFemale,
  SummerMale,
  WinterFemale,
  WinterMale,
  backIcon,
  passwordCheck,
  user,
} from "../../../assets/imgs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { dressMainData } from "../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const AuthenticationNavbar = () => {
  const [dressInfo] = useContext(dressMainData);
  let authenActiveStyle = "";
  let authenActiveForget="";
  let IconsColor = "";
  if (dressInfo?.type === 1111) {
    IconsColor = "borderSpring";
    authenActiveForget="text-borderSpring  bg-bgSpring border border-borderSpring "
    authenActiveStyle =
      "md:text-borderSpring bg-white bg-bgSpring md:border-borderSpring w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "borderSpring";
    authenActiveForget="text-borderSummer  bg-bgSummer border border-borderSummer "
    authenActiveStyle =
      "md:text-borderSummer bg-white bg-bgSummer md:border-borderSummer w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "borderSpring";
    authenActiveForget="text-borderAutumm  bg-bgAutumm borderborder-borderAutumm "
    authenActiveStyle =
      "md:text-borderAutumm bg-white bg-bgAutumm md:border-borderAutumm w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "borderSpring";
    authenActiveForget="text-borderWinter  bg-bgWinter border border-borderWinter "
    authenActiveStyle =
      "md:text-borderWinter bg-white bg-bgWinter md:border-borderWinter w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg";
  }

  const personItems = [
    { id: 1111, signInIcon: SignInSpring, signUpIcon: SignUpSpring },
    { id: 2222, signInIcon: SignInSummer, signUpIcon: SignUpSummer },
    { id: 3333, signInIcon: SignInAutumm, signUpIcon: SignUpAutumm },
    { id: 4444, signInIcon: SignInWinter, signUpIcon: SignUpWinter },
  ];
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto">
    <div className="ss:w-full md:w-fit px-4 ">

   
        {personItems
          ?.filter((value) => value.id === dressInfo?.type)
          .map((data) => {
            return (
              <div key={data?.id} className=" w-full  ">
                {/* {locationWindow !== "/forget_password" ? ( */}
                {locationWindow === "/sign_in" ||
                locationWindow === "/sign_up" ? (
                  <div className="w-full md:w-[350px] flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                    <NavLink
                      to={"/sign_in"}
                      className={({ isActive }) =>
                        isActive
                          ? authenActiveStyle
                          : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                      }
                    >
                      <img className="" src={data?.signInIcon} alt="female" />
                      <span className="mt-1 font-AeonikProMedium ml-1 not-italic text-sm leading-4 tracking-[0,16px]">
                        Войти в систему
                      </span>
                    </NavLink>
                    <NavLink
                      to={"/sign_up"}
                      className={({ isActive }) =>
                        isActive
                          ? authenActiveStyle
                          : "w-1/2 md:h-[48px] ss:h-[52px] px-2   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                      }
                    >
                      <img className="" src={data?.signUpIcon} alt="male" />
                      <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                        Создать аккаунт
                      </span>
                    </NavLink>
                  </div>
                ) : null}
                {locationWindow === "/forget_password" || locationWindow === "/enter_password_validate" || locationWindow === "/set_new_password" ? (
                  <>
                  {/* Mobile-Device */}
                   <div className="w-full md:hidden ss:block md:w-fit ss:flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                   <NavLink
                     to={"/sign_in"}
                     className={
                          "w-[30%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                     }
                  
                   >
                     <img className="" src={backIcon} alt="female" />
                     <span className="mt-1  font-AeonikProMedium ml-2 not-italic text-sm leading-4 tracking-[0,16px]">
                     Назад
                     </span>
                   </NavLink>
                   <div
                    //  to={"/forget_password"}
                     className={ "w-[65%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center bg-white  border border-searchBgColor  rounded-lg"}
                   >
                     <img className="" src={passwordCheck} alt="male" />
                     <span className="mt-1 font-AeonikProMedium not-italic ml-2  text-sm leading-4 tracking-[0,16px]">
                     Забыли пароль?
                     </span>
                   </div>
                 </div>

                  {/* LapTop-Device */}

                  <div className="w-full h-fit md:block ss:hidden  md:flex items-center">
                    <NavLink
                    to="/sign_in "
                    className={`text-${IconsColor} md:h-[48px] ss:h-[52px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                  >
                    <span
                      className={`w-6 h-6 border border-${IconsColor} rounded-full flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        fill="currentColor"
                        class={`bi bi-arrow-left  `}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          strokeWidth={"2"}
                          d={`M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z`}
                        />
                      </svg>
                    </span>
                     </NavLink>
                  <div
                    // to={"/confirm_password"}
                    className={`${authenActiveForget} w-fit md:h-[48px] ss:h-[52px] px-4   justify-center flex items-center   mr-2 rounded-lg`}
                  >
                    <span>
                      {" "}
                      <AiOutlineEye
                        // className={`text-${IconsColor}`}
                        size={22}
                      />
                    </span>
                    <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                    Забыли пароль?    
                                    </span>
                  </div>{" "}
                </div>
                </>
              
                ) : null}
                {/* {locationWindow === "/confirm_password" ? (
                  <>
                   <div className="w-full md:hidden ss:block md:w-fit ss:flex gap-x-2 items-center justify-between ss:border md:border-0 ss:bg-btnBgColor md:bg-transparent border-searchBgColor rounded-lg">
                   <NavLink
                     to={"/sign_in"}
                     className={
                          "w-[30%] md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                     }
                   
                   >
                     <img className="" src={backIcon} alt="female" />
                     <span className="mt-1 font-AeonikProMedium ml-2 not-italic text-sm leading-4 tracking-[0,16px]">
                     Назад
                     </span>
                   </NavLink>
                   <NavLink
                     to={"/confirm_password"}
                     className={({ isActive }) =>
                       isActive
                         ? authenActiveForget
                         : "w-fit md:h-[48px] ss:h-[52px] px-4   justify-center flex  items-center  md:bg-btnBgColor md:border   rounded-lg"
                     }
                   >
                     <img className="" src={passwordCheck} alt="male" />
                     <span className="mt-1 font-AeonikProMedium not-italic ml-2  text-sm leading-4 tracking-[0,16px]">
                     Подтвердите парол   
                                       </span>
                      
                       
                   </NavLink>
                 </div>
                  <div className="w-full h-fit md:block ss:hidden  md:flex items-center">
                    <NavLink
                      to="/sign_in "
                      className={`text-${IconsColor} h-[44px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                    >
                      <span
                        className={`w-6 h-6 border border-${IconsColor} rounded-full flex items-center justify-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          class={`bi bi-arrow-left  `}
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            strokeWidth={"2"}
                            d={`M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z`}
                          />
                        </svg>
                      </span>
                    </NavLink>
                    <NavLink
                      to={"/confirm_password"}
                      className={({ isActive }) =>
                        isActive
                          ? authenActiveForget
                          : "w-fit md:h-[48px] ss:h-[52px] px-4   justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                      }
                    >
                      <span>
                        {" "}
                        <AiOutlineEye
                          // className={`text-${IconsColor}`}
                          size={22}
                        />
                      </span>
                      <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                        Подтвердите парол
                      </span>
                    </NavLink>{" "}
                  </div>
                  </>
                ) : null} */}
              </div>
            );
          })}
      </div>
    </div> 
    </div>
  );
};

export default AuthenticationNavbar;
