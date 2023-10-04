import React, { useState } from 'react'
import { ChildGenIcon, CotegoryMenuIcons, ManGenIcons, WomanGenIcons } from '../../../../../assets/icons';

export default function GenderButtonsStyle() {
  
    const [genderCategory, setGenderCategory] = useState([
        {
          id: 1,
          action: true,
          name: "Все",
          icon: <CotegoryMenuIcons />,
        },
        {
          id: 2,
          action: false,
          name: "",
          icon: <ManGenIcons />,
        },
        {
          id: 3,
          action: false,
          name: "",
          icon: <WomanGenIcons />,
        },
        {
          id: 4,
          action: false,
          name: "",
          icon: <ChildGenIcon />,
        },
      ]);
    
    const handleGenderCheck = (value) => {
    setGenderCategory((data) => {
        return data.map((e) => {
        if (e.id == value) {
            return { ...e, action: true };
        } else return { ...e, action: false };
        });
    });
    };
  
    return (
        <section className="flex items-center border border-searchBgColor rounded-lg bg-slate-50 md:mt-0">
            {genderCategory.map((data) => {
            return (
                <div
                key={data.id}
                className="w-fit flex justify-between h-11 rounded-lg"
                >
                <button
                    key={data.id}
                    onClick={() => handleGenderCheck(data.id)}
                    className={`flex items-center justify-center h-11 text-[15px] text-center ${
                    !data.name ? "px-5" : "px-7"
                    } font-AeonikProRegular ${
                    data.action
                        ? `{ bg-white border w-full h-[98%] my-auto mx-auto border-searchBgColor rounded-lg `
                        : ""
                    } `}
                >
                    <span>{data.icon}</span>
                    {data.name ? <p className="ml-2 text-borderWinter">{data.name}</p> : ""}
                </button>
                <span
                    className={`${
                    data.id === 4
                        ? "text-searchBgColor hidden"
                        : "text-searchBgColor flex items-center"
                    }`}
                >
                    |
                </span>
                </div>
            );
            })}
        </section>
  )
}
