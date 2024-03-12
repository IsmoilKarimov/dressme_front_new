import { createContext, useEffect, useState } from "react";

export const SaesonDetectorDress = createContext();
export const DressmeSeason = ({ children }) => {
    const [seasonDetector, setSeasonDetector] = useState({
        type: 5555,
        BtnSeason: null,
        BtnOpacitySeason: null,
        BtnFocusSeason: null,
        ColorSeason: null,
        TextHoverSeason: null,
        TextColorSeason: null,
        LinkActiveSeason: null,
        BtnActiveSeason: null,
        AuthenActiveSeason: null,
    });
    const BtnSeasonArray = [
        {
            id: 1111,
            btn: "text-borderSummer bg-btnBgColor border-searchBgColor",
            btnOpacity: "text-borderSummer bg-opacity-10 bg-bgSummer",
            btnFocus:
                "focus:text-borderSummer focus:bg-btnBgColor focus:border-searchBgColor",
            textHover: "hover:text-borderSummer",
            textColor: "text-borderSummer",
            color: "#EAA700",
            btnActiveSeason:
                "text-borderSummer  bg-bgSummer border border-borderSummer",
            authenActiveSeason:
                "md:text-borderSummer bg-white bg-bgSummer md:border-borderSummer w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg",
            linkActive:
                "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSummer text-borderSummer",
        },
        {
            id: 2222,
            btn: "text-borderAutumm bg-btnBgColor border-searchBgColor",
            btnOpacity: "text-borderAutumm bg-opacity-10 bg-bgAutumm",
            btnFocus:
                "focus:text-borderAutumm focus:bg-btnBgColor focus:border-searchBgColor",
            textHover: "hover:text-borderAutumm",
            textColor: "text-borderAutumm",
            color: "#E17A02",
            btnActiveSeason:
                "text-borderAutumm  bg-bgAutumm border border-borderAutumm ",
            authenActiveSeason:
                "md:text-borderAutumm bg-white bg-bgAutumm md:border-borderAutumm w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border rounded-lg",
            linkActive:
                "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderAutumm text-borderAutumm",
        },
        {
            id: 3333,
            btn: "text-borderWinter bg-btnBgColor border-searchBgColor",
            btnOpacity: "text-borderWinter bg-opacity-10 bg-bgWinter",
            btnFocus:
                "focus:text-borderWinter focus:bg-btnBgColor focus:border-searchBgColor",
            textHover: "hover:text-borderWinter",
            textColor: "text-borderWinter",
            color: "#007DCA",
            btnActiveSeason:
                "text-borderWinter bg-bgWinter border border-borderWinter",
            authenActiveSeason:
                "md:text-borderWinter bg-white bg-bgWinter md:border-borderWinter w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border rounded-lg",
            linkActive:
                "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderWinter text-borderWinter",
        },
        {
            id: 4444,
            btn: "text-borderSpring bg-btnBgColor border-searchBgColor",
            btnOpacity: "text-borderSpring bg-opacity-10 bg-bgSpring",
            btnFocus:
                "focus:text-borderSpring focus:bg-btnBgColor focus:border-searchBgColor",
            textHover: "hover:text-borderSpring",
            textColor: "text-borderSpring",
            color: "#008F0E",
            btnActiveSeason:
                "text-borderSpring  bg-bgSpring border border-borderSpring",
            authenActiveSeason:
                "md:text-borderSpring bg-white bg-bgSpring md:border-borderSpring w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border   rounded-lg",
            linkActive:
                "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderSpring text-borderSpring",
        },
        {
            id: 5555,
            btn: "text-borderWinter bg-btnBgColor border-searchBgColor",
            btnOpacity: "text-borderWinter bg-opacity-10 bg-bgWinter",
            btnFocus:
                "focus:text-borderWinter focus:bg-btnBgColor focus:border-searchBgColor",
            textHover: "hover:text-borderWinter",
            textColor: "text-borderWinter",
            color: "#007DCA",
            btnActiveSeason:
                "text-borderWinter  bg-bgWinter border border-borderWinter",
            authenActiveSeason:
                "md:text-borderWinter bg-white bg-bgWinter md:border-borderWinter w-1/2  px-2 md:h-[48px] ss:h-[52px]  justify-center flex items-center bg-btnBgColor ss:border rounded-lg",
            linkActive:
                "items-center justify-center bg-white rounded-lg md:h-[44px] text-sm md:w-[100px] md:mt-0 hidden md:flex border border-borderWinter text-borderWinter",
        },
    ];

    useEffect(() => {
        BtnSeasonArray.filter((e) => e.id === seasonDetector?.type).map((event) => {
            setSeasonDetector({
                ...seasonDetector,
                BtnSeason: event?.btn,
                BtnOpacitySeason: event?.btnOpacity,
                BtnFocusSeason: event?.btnFocus,
                ColorSeason: event?.color,
                TextHoverSeason: event?.textHover,
                TextColorSeason: event?.textColor,
                LinkActiveSeason: event?.linkActive,
                BtnActiveSeason: event?.btnActiveSeason,
                AuthenActiveSeason: event?.authenActiveSeason,
            });
        });
    }, [seasonDetector.type]);


    return (
        <SaesonDetectorDress.Provider value={[seasonDetector, setSeasonDetector]}>
            {children}
        </SaesonDetectorDress.Provider>
    );
};