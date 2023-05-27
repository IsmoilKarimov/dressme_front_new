import React from "react";

export default function SkeletonHome() {
  const CarosuelOne = [
    { id: 1, name: "carosuel" },
    { id: 2, name: "carosuel" },
    { id: 3, name: "carosuel" },
    { id: 4, name: "carosuel" },
    { id: 5, name: "carosuel" },
    { id: 6, name: "carosuel" },
  ];
  const CardFour = [
    { id: 1, name: "carosuel" },
    { id: 2, name: "carosuel" },
    { id: 3, name: "carosuel" },
    { id: 4, name: "carosuel" },
  ];
  const card = [
    { id: 1, name: "carosuel" },
    { id: 2, name: "carosuel" },
    { id: 3, name: "carosuel" },
    { id: 4, name: "carosuel" },
    { id: 5, name: "carosuel" },
  ];
  const Category = [
    { id: 1, type: "Student", count: 123, img: "" },
    { id: 2, type: "Businiess", count: 223, img: "" },
    { id: 3, type: "Muslim", count: 80, img: "" },
    { id: 4, type: "Travel", count: 453, img: "" },
    { id: 5, type: "Sport", count: 320, img: "" },
    { id: 6, type: "Classic", count: 40, img: "" },
    { id: 7, type: "Relaxed", count: 180, img: "" },
    { id: 8, type: "Dramatic", count: 250, img: "" },
    { id: 9, type: "Creative", count: 190, img: "" },
  ];
  return (
    <div className="box-border flex flex-col justify-center  my-6 ">
      <div className="w-full h-fit">
        {/* Carosuel One */}
        <div className="md:flex items-center justify-between hidden md:block">
          {CarosuelOne?.map((data) => {
            return (
              <div key={data?.id} className="w-[196px] h-[260px]">
                <div className="h-[230px] w-[196px] bg-skeltonColor rounded-lg"></div>
                <div className="h-4 w-[150px] bg-skeltonColor rounded flex items-center justify-start  mt-3"></div>
              </div>
            );
          })}
        </div>
        {/* Carosuel Two */}
        <div className="md:flex  items-center justify-between  mt-[64px] hidden md:block">
          {CarosuelOne?.map((data) => {
            return (
              <div key={data?.id} className="w-[196px] h-[92px] rounded-lg">
                <div className="h-[100%] w-[196px] bg-skeltonColor rounded-lg"></div>
              </div>
            );
          })}
        </div>
        {/* Carosuel Three */}
        <div className="md:flex  items-center justify-between  mt-[64px] hidden md:block">
          {CardFour?.map((data) => {
            return (
              <div
                key={data?.id}
                className="w-[305px] h-[100px] flex flex-wrap content-between bg-btnBgColor rounded-lg px-4 py-5  border border-searchBgColor"
              >
                <div className="w-full">
                  <div className="w-[180px] h-4 bg-skeltonColor rounded"></div>
                </div>
                <div className="w-full">
                  <div className="w-[250px] h-4 bg-skeltonColor rounded"></div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Carosuel four */}
        <div className="w-full h-fit xs:hidden   grid grid-cols-3  gap-4 ll:gap-x-[38px] ls:gap-x-[35px] overflow-hidden  my-0 py-0 md:my-5 md:py-7 ">
          {Category?.map((data) => {
            return (
              <div key={data?.id} className="ll:w-[100px] ss:w-[80px] ">
                <div className="w-[100%] h-[80px] flex items-center justify-center	p-1 bg-skeltonColor border border-searchBgColor	rounded-lg ">
                  {/* <img
                      className="border-0 w-fit h-fit	"
                      src={data?.img || noProductImg}
                      alt="."
                    /> */}
                </div>
                <div className="w-full py-1 flex items-center">
                  <p className="w-[70px] h-4 bg-skeltonColor rounded-lg"></p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-[86px]">
          <div className="w-full ss:block sm:flex justify-between items-center mb-[25px] md:mb-0 md:px-0">
            <div className="ss:w-[80%] md:w-[35%] h-4 bg-skeltonColor rounded-lg "></div>
            <div className="rounded-lg overflow-hidden  h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0 flex justify-between    ss:mt-5 md:mt-0 mx-auto ">
              <button
                className={`ss:w-[49%] md:w-[152px] md:h-[50px]  h-[42px] rounded-lg  bg-skeltonColor `}
              ></button>
              <button
                className={`ss:w-[49%] md:w-[152px] md:h-[50px]  h-[42px] rounded-lg  bg-skeltonColor `}
              ></button>
            </div>
          </div>

          <div className="flex justify-between flex-wrap  md:mx-0  gap-y-5 lg:gap-y-5  md:mt-[50px] ">
            {card?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className={` ss:w-[48%] md:w-[24%] lg:w-[240px] transition ease-in-out delay-50 hover:shadow-cardShadow xs:h-[456px] lg:h-[440px] border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  {" "}
                  <div className="relative w-full cursor-pointer ss:h-[206px] ls:h-[238px] xs:h-[309px] lg:h-[320px] flex content-between items-center overflow-hidden border-b border-solid flex-nowrap"></div>
                  <div className="w-full rounded-b-1xl bg-white  flex flex-wrap content-between xs:py-3 lg:p-3 ss:h-[124px] xs:h-[147px] lg:h-[120px] ss:py-2 xs:px-2 ss:px-1">
                    <div className="w-full ">
                      <div className="w-full h-4 bg-skeltonColor rounded"></div>
                      <div className="w-1/2 h-4 mt-2 bg-skeltonColor rounded"></div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <div className="w-[30%] h-4 bg-skeltonColor rounded"></div>
                      <div className="w-[30px] h-[30px] rounded-full bg-skeltonColor "></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
