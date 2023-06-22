import React, { useState, useEffect } from "react";
import CategoryForType from "./CategoryForType";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";

export default function CategoryMainType() {
  const [windowDetection, setWindowDetection] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    setWindowDetection({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDetection]);
  console.log("Index", windowDetection.winHeight);
  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border">
      <div className="w-full ">
        <CategoryTopDetail />
      </div>

      <div className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto">
        <div className="w-[100%] h-fit">
          <CategoryForType />
        </div>
      </div>
    </div>
  );
}
