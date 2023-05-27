import React, { useState } from "react";
import { formArrowRightCircle, formPhone } from "../../../assets/imgs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function SignInSkeleton() {
  
  return (
    <div className=" py-8 w-full h-full flex justify-center">
      <div className="w-[440px] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-[50%] h-4 mt-1 mb-7 rounded bg-skeltonColor"></div>

        <div className="mt-2 w-full h-fit">
          <div className=" w-[70%] h-4 mt-1 mb-7 rounded bg-skeltonColor"></div>

          <div className="mt-[6px] h-12 px-[16px] w-full flex items-center bg-skeltonColor border border-searchBgColor rounded-lg "></div>
        </div>
        

        <div className="my-5 flex items-center justify-between w-full">
          <div className="rounded bg-skeltonColor w-[35%] h-4"></div>
          <div className="rounded bg-skeltonColor w-[35%] h-4"></div>
        </div>
        <div className="bg-btnBgColor w-[100%] h-12 rounded-lg flex items-center border border-searchBgColor justify-center mt-4">
          <div className=" w-[180px] h-4 rounded-lg bg-skeltonColor"></div>
          <div className=" w-[30px] h-[30px] rounded-full bg-skeltonColor ml-7"></div>
        </div>
      </div>
    </div>
  );
}
