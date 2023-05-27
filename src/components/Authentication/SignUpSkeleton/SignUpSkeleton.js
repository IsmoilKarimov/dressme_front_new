import React from "react";


export default function SignUpSkeleton() {
  
  return (
    <div className=" py-8 w-full h-full flex justify-center">
      <div className="w-[440px] h-fit  md:px-[40px] md:py-[32px] ss:p-5 border border-searchBgColor rounded-lg">
        <div className=" w-[100%] h-4 mt-1 mb-7 rounded bg-skeltonColor"></div>

        <div className="mt-2 w-full h-fit">
          <div className=" w-[40%] h-4  rounded bg-skeltonColor"></div>
          <div className="mt-[6px] h-12  w-full flex items-center bg-skeltonColor border border-searchBgColor rounded-lg "></div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className=" w-[40%] h-4 rounded bg-skeltonColor"></div>
          <div className="mt-[6px] h-12  w-full flex items-center bg-skeltonColor border border-searchBgColor rounded-lg "></div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className=" w-[40%] h-4 rounded bg-skeltonColor"></div>
          <div className="mt-[6px] h-12  w-full flex items-center bg-skeltonColor border border-searchBgColor rounded-lg "></div>
        </div>
        <div className="mt-4 w-full h-fit">
          <div className=" w-[40%] h-4 rounded bg-skeltonColor"></div>
          <div className="mt-[6px] h-12  w-full flex items-center bg-skeltonColor border border-searchBgColor rounded-lg "></div>
        </div>

     
        <div className="bg-btnBgColor w-[100%] h-12 rounded-lg flex items-center border border-searchBgColor justify-center mt-4">
          <div className=" w-[180px] h-4 rounded-lg bg-skeltonColor"></div>
          <div className=" w-[30px] h-[30px] rounded-full bg-skeltonColor ml-7"></div>
        </div>
      </div>
    </div>
  );
}
