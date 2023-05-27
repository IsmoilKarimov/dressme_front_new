import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import moment from "moment";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function WeatherInfo() {
  const [state, setState] = useState({
    weatherSet: "",
    cilciyToGradus: true,
  });

  // useQuery(
  //   ["Weather"],
  //   () => {
  //     return fetch(
  //       `http://api.weatherapi.com/v1/forecast.json?key=51f65d6b83ed44f7a57110716232604 &q=toshkent&days=8`
  //     ).then((res) => res.json());
  //   },
  //   {
  //     onSuccess: (res) => {
  //       console.log(res, "res");
  //       setState({ ...state, weatherSet: res });
  //     },
  //     onError: (err) => {
  //       console.log(err, "errpr");
  //     },
  //   }
  // );


  const handleGetData = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=51f65d6b83ed44f7a57110716232604 &q=toshkent&days=8`
    )
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, weatherSet: data });
      })
      .catch((err) => {
        
        console.log(err, "erer");
      });
  };

  useEffect(() => {
    handleGetData();
  }, []);

 let firstElement = state?.weatherSet?.forecast?.forecastday[0]
 let GetWeatherHour=[]
 for(let i=1; i<firstElement?.hour.length; i+=3){
  GetWeatherHour.push(firstElement?.hour[i])
 }

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[750px] h-fit p-2 ">
        {/* TOP of the Weather */}
        <div className="w-full h-fit my-2 flex justify-between ">
          <div className="w-fit h-full flex items-center flex-wrap gap-x-2">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full"
                src={state?.weatherSet?.current?.condition?.icon}
                alt="icon"
              />
            </div>
            <div className="flex items-start gap-x-2">
              <div className=" mt-[10px]">
                <span className="text-[60px]  not-italic font-AeonikProMedium  leading-10 text-black">
                  {state?.cilciyToGradus ? (
                    <span>{state?.weatherSet?.current?.temp_c}</span>
                  ) : (
                    <span>{parseInt(state?.weatherSet?.current?.temp_f)}</span>
                  )}
                </span>
              </div>
              <div className="">
                <span
                  onClick={() => setState({ ...state, cilciyToGradus: true })}
                  className={` not-italic select-none cursor-pointer font-AeonikProMedium text-base leading-4 ${
                    state?.cilciyToGradus
                      ? "text-black "
                      : "text-borderColorCard"
                  }   `}
                >
                  <span className="before:content-['\00B0'] "></span>C
                </span>
                <span className="h-[2px] mx-2 border border-black w-[1px]"></span>
                <span
                  onClick={() => setState({ ...state, cilciyToGradus: false })}
                  className={`not-italic select-none cursor-pointer font-AeonikProMedium text-base leading-4 ${
                    state?.cilciyToGradus
                      ? "text-borderColorCard"
                      : "text-black"
                  }  `}
                >
                  <span className="before:content-['\00B0'] "></span> F
                </span>
              </div>
            </div>
            <div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                Опасность осадки:
                <span className="ml-1">
                  {state?.weatherSet?.current?.precip_mm} %
                </span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 my-1 text-black">
                влажность:
                <span className="ml-1">
                  {" "}
                  {state?.weatherSet?.current?.cloud}%
                </span>{" "}
              </div>
              <div className="not-italic font-AeonikProRegular ml-1 text-base leading-4 text-black">
                ветер:
                <span className="ml-1">
                  {state?.weatherSet?.current?.wind_mph} km/h
                </span>{" "}
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-fit h-full">
            <div className="text-end">
              <span className="text-[24px] not-italic font-AeonikProMedium  leading-7 text-black">
                погода
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[16px] leading-4 text-borderColorCard">
                {moment(
                  state?.weatherSet?.current?.last_updated_epoch?.date_epoch
                ).format(" dddd  LT")}{" "}
              </span>
            </div>
            <div className="text-end">
              <span className="not-italic font-AeonikProMedium text-[16px] leading-4 text-borderColorCard">
                {state?.weatherSet?.current?.condition?.text}
              </span>
            </div>
          </div>
        </div>

        {/* Location CITY */}
        <div className="flex items-center justify-between  mt-5">
          <div>
            <span className="text-[20px] not-italic font-AeonikProMedium  leading-7 text-black">
              {state?.weatherSet?.location?.region || "Region"}
            </span>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="text-[20px] not-italic font-AeonikProMedium ml-1 mr-4  leading-7 text-black">
              {moment(state?.weatherSet?.location?.localtime).format("LLL")}
            </div>
          </div>
        </div>

        {/* Weatehr CHART FULL day*/}
        <div className="w-full h-400px  mt-5">
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              data={GetWeatherHour}
              margin={{ top: 20, right: 30, left: 25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="2%" stopColor="#F9B925" stopOpacity={0.8} />
                  <stop offset="97%" stopColor="#F9B925" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* <XAxis key={Math.random()} dataKey={moment("time").format("LT")}/> */}
              <XAxis key={Math.random()} dataKey="time" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp_c"
                stroke="#F4CA16"
                fillOpacity={1}
                fill="url(#colorUv)"
                label={{
                  fill: "black",
                  fontSize: 15,
                  position: "top",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* BOTTOM of the weather DAYS */}
        <div className="w-full h-fit flex justify-between  mt-10 ">
          {state?.weatherSet?.forecast?.forecastday?.map((data) => {
            return (
              <div
                key={data?.date}
                className="w-[13%] h-fit py-[8px] hover:bg-searchBgColor rounded-lg cursor-pointer"
              >
                <div className="not-italic font-AeonikProMedium  text-[18px] leading-4 text-black flex justify-center  ">
                  {moment(data?.date).format(" ddd")}{" "}
                </div>
                <div className="w-full   flex justify-center ">
                  <img
                    className="w-[70%]"
                    src={data?.day?.condition?.icon}
                    alt="icon"
                  />
                </div>
                <div className="flex justify-center gap-x-2 ">
                  <span className="not-italic font-AeonikProMedium text-base leading-4 text-black after:content-['\00B0']">
                    {parseInt(data?.day?.maxtemp_c)}
                  </span>
                  <span className="not-italic font-AeonikProMedium text-base leading-4 text-borderColorCard after:content-['\00B0']">
                    {parseInt(data?.day?.mintemp_c)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
