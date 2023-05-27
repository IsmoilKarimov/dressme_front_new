import React, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "../yandex.css";
import ScrollFilter from "./ScrollFilter";
export default function YandexFilter() {
  const wearGroup = [
    { id: 1, name: "Футболки" },
    { id: 2, name: "Рубашки" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Джинсы" },
    { id: 5, name: "Свитер" },
    { id: 6, name: "Куртки" },
    { id: 7, name: "Толстовки" },
    { id: 8, name: "Обуви" },
    { id: 9, name: "Куртки" },
    { id: 10, name: "Сапоги" },
    { id: 11, name: "Платья" },
    { id: 12, name: "Юбки" },
    { id: 13, name: "Ремень" },
  ];

  return (
    <div className=" max-w-[1280px] w-[100%] py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex justify-between items-center m-auto md:border-t">
      <div className="w-full ss:hidden  md:block md:flex  items-center justify-between ">
        {wearGroup?.map((data) => {
          return (
            <span
              key={data?.id}
              className="px-4 py-[10px] cursor-pointer rounded-lg bg-white not-italic font-AeonikProMedium text-sm text-black tracking-[0.16px] leading-[120%] border border-searchBgColor"
            >
              {data?.name || "none"}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
