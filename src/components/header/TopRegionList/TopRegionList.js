import React, { useState } from "react";
import { ArrowTopIcons, MenuCloseIcons, SearchIcons } from "../../../assets/icons";
// import {
//   ArrowRightIcon,
//   InputCheck,
//   InputCheckedTrueIcons,
//   MenuCloseIcons,
//   SearchIcon,
// } from "../../../../assets/icons";

export default function TopRegionList({ onClick }) {
  const [cityList, setCityList] = useState([
    {
      id: 1,
      RegionName: "Toshkent",
      RegionType: true,
      RegionList: [
        { id: "t1", cityName: "Bektemir", checkType: false },
        { id: "t2", cityName: "Bektemir", checkType: false },
        { id: "t3", cityName: "Bektemir", checkType: false },
        { id: "t4", cityName: "Bektemir", checkType: false },
        { id: "t5", cityName: "Bektemir", checkType: false },
        { id: "t6", cityName: "Bektemir", checkType: false },
        { id: "t7", cityName: "Bektemir", checkType: false },
        { id: "t8", cityName: "Bektemir", checkType: false },
      ],
    },
    {
      id: 2,
      RegionName: "Namangan",
      RegionType: false,
      RegionList: [
        { id: "t1", cityName: "Bektemir", checkType: false },
        { id: "t2", cityName: "Bektemir", checkType: false },
        { id: "t3", cityName: "Bektemir", checkType: false },
        { id: "t4", cityName: "Bektemir", checkType: false },
        { id: "t5", cityName: "Bektemir", checkType: false },
        { id: "t6", cityName: "Bektemir", checkType: false },
        { id: "t7", cityName: "Bektemir", checkType: false },
        { id: "t8", cityName: "Bektemir", checkType: false },
      ],
    },
    {
      id: 3,
      RegionName: "Jizzax",
      RegionType: false,
      RegionList: [
        { id: "t1", cityName: "Bektemir", checkType: false },
        { id: "t2", cityName: "Bektemir", checkType: false },
        { id: "t3", cityName: "Bektemir", checkType: false },
        { id: "t4", cityName: "Bektemir", checkType: false },
        { id: "t5", cityName: "Bektemir", checkType: false },
        { id: "t6", cityName: "Bektemir", checkType: false },
        { id: "t7", cityName: "Bektemir", checkType: false },
        { id: "t8", cityName: "Bektemir", checkType: false },
      ],
    },
  ]);
  const openCityList = (e) => {
    setCityList((current) => {
      return current.map((item) => {
        if (item.id == e) {
          return { ...item, RegionType: !item.RegionType };
        } else {
          return { ...item };
        }
      });
    });
  };
  return (
    <div className="w-full md:w-[455px] p-5 border border-borderColor rounded-t-lg md:rounded-lg h-fit bg-white">
      <div className="flex items-center justify-between">
        <span className="text-black text-2xl not-italic font-AeonikProRegular">
          Выберите регион
        </span>
        <button onClick={onClick}>
          <MenuCloseIcons colors={"#000"} />
        </button>
      </div>
      <label className="w-full mt-6 h-[42px] rounded-lg border border-borderColor overflow-hidden flex items-center">
        <input
          type="text"
          className="w-full h-full pl-3 outline-none"
          name="s"
          placeholder="Поиск..."
        />
        <span className="flex items-center pr-3">
          <SearchIcons />
        </span>
      </label>
      <div className="w-full h-fit overflow-y-auto overflow-x-hidden  mt-6 ">
        {cityList.map((data) => {
          return (
            <div key={data?.id} className="w-full  h-fit mt-4">
              <div
                onClick={() => openCityList(data?.id)}
                className="w-full cursor-pointer flex items-center pr-1 justify-between border-b border-borderColor pb-1"
              >
                <span className="text-gray-800 text-lg not-italic font-AeonikProRegular">
                  {data?.RegionName}
                </span>
                <span
                  className={`${
                    data?.RegionType ? "rotate-[-270deg]" : "rotate-[90deg]"
                  } `}
                >
                  <ArrowTopIcons />
                </span>
              </div>

              <div
                className={` w-full flex flex-wrap gap-x-2  duration-300  ${
                  data?.RegionType
                    ? "h-[100px] overflow-hidden"
                    : "h-0 overflow-hidden"
                }`}
              >
                {data?.RegionList.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="flex items-center gap-x-[4px] py-4 cursor-pointer"
                    >
                      {" "}
                      <button className="w-[18px] h-[18px] rounded border border-borderColor flex items-center justify-center">
                        {/* <InputCheckedTrueIcons colors={"#fff"} /> */}
                      </button>
                      <span className="text-gray-800 text-lg not-italic font-AeonikProRegular">
                        {item?.cityName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
