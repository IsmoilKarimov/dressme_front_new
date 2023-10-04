import React, { useContext, useState } from "react";
import { Popover } from "antd";
import { AutummBoyIcons, ByBrandIcon, ChildGenIcon, ClothesIcons, DollorIcons, ManGenIcons, ManWomanGen, MenuCloseIcons, SpringBoyIcons, SummerBoyIcons, WinterBoyIcons, WomanGenIcons } from "../../../assets/icons";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { AutummChild, AutummFemale, AutummGirl, AutummMale, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerChild, SummerFemale, SummerGirl, SummerMale, WinterChild, WinterFemale, WinterGirl, WinterMale } from "../../../assets";
import '../yandex.css'
export default function YandexFilter() {
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    openBrand: false,
    textToColor: false,
    genderActive: true
  });
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
  // ----------------Wear state management----------------------------

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };
  const [selectWear, setSelectWear] = useState("");

  const handleWearValue = (value) => {
    setSelectWear(value);
    setState({ ...state, openwear: false });
  };

  const wearList = [
    { id: 1, type: "All Clothing types" },
    { id: 2, type: "Headwear" },
    { id: 3, type: "Outwear" },
    { id: 4, type: "Underwear" },
    { id: 5, type: "Legwear" },
    { id: 6, type: "Accessory" },
  ];
  const contentWear = (
    <div className="w-[170px] h-fit m-0 p-0">
      {wearList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleWearValue(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );
  // ----------------------Price State Management----------------------

  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };
  const [selectPrice, setSelectPrice] = useState("");
  const handlePriceValue = (value) => {
    setSelectPrice(value);
    setState({ ...state, openPrice: false });
  };
  const priceList = [
    { id: 1, type: "At all prices" },
    { id: 2, type: "More than 500 $" },
    { id: 3, type: "Under 500$" },
    { id: 4, type: "Under 200$" },
    { id: 5, type: "Under 100$" },
    { id: 6, type: "Under 50$" },
  ];
  const contentPrice = (
    <div className="w-[170px] h-fit m-0 p-0">
      {priceList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handlePriceValue(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );
  // ----------------------Brend State Management----------------------

  const handleOpenChangeBrand = (newOpen) => {
    setState({ ...state, openBrand: newOpen });
  };
  const [selectBrand, setSelectBrand] = useState("");
  const handleBrandValue = (value) => {
    setSelectBrand(value);
    setState({ ...state, openBrand: false });
  };
  const brandList = [
    { id: 1, type: "Adidas" },
    { id: 2, type: "Nike" },
    { id: 3, type: "Puma" },
    { id: 4, type: "Dolce" },
    { id: 5, type: "GUcci" },
    { id: 6, type: "Calvin" },
    { id: 7, type: "Louis/Vuitton" },
  ];
  const contentBrand = (
    <div className="w-[170px] h-fit m-0 p-0">
      {brandList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleBrandValue(data?.type);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );


  const [personItems, setPersonItems] = useState([
    {
      id: 1111, childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <SpringBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 2222, childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <SummerBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 3333, childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <AutummBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 4444, childText: [
        { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 4, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ]
    }]);
  const handleFilterByUser = (fathId, childId) => {
    setPersonItems((current) => {
      return current?.map((data) => {
        if (data?.id == fathId) {
          let newDataColor = data.childText.map((e) => {
            if (e.id == childId) {
              return { ...e, action: true };
            } else return { ...e, action: false };
          });
          console.log(newDataColor, "newDataColor");
          return { ...data, childText: [...newDataColor] };
        } else return data;
      });
    });
  }
  return (
    <div className=" w-fit px-10 py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex flex-col justify-between items-center m-auto md:border-t">
      <div className="flex items-center justify-center gap-x-2  w-fit   ">
        <Popover
          open={state?.openwear}
          onOpenChange={handleOpenChangeWear}
          className="!w-[190px] gap-x-2 px-4 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentWear}
        >
          <span>
            <ClothesIcons colors={"#000"} />
          </span>
          <p className="not-italic whitespace-nowrap text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
            {/* {selectWear} */}
            По категории
          </p>
          <span>
            <BiChevronDown
              size={25}
              style={{ color: "#000" }}
              className={`${state?.openwear ? "rotate-[-180deg]" : ""
                } duration-200`}
            />
          </span>
        </Popover>
        <Popover
          open={state?.openPrice}
          onOpenChange={handleOpenChangePrice}
          className="!w-[190px] gap-x-2 px-4 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentPrice}
        >
          <span>
            <DollorIcons colors={"#000"} />
          </span>
          <p className="not-italic whitespace-nowrap text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
            {/* {selectWear} */}
            По бюджету
          </p>
          <span>
            <BiChevronDown
              size={25}
              style={{ color: "#000" }}
              className={`${state?.openPrice ? "rotate-[-180deg]" : ""
                } duration-200`}
            />
          </span>
        </Popover>
        <Popover
          open={state?.openBrand}
          onOpenChange={handleOpenChangeBrand}
          className="!w-[190px] gap-x-2 px-4 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentBrand}
        >
          <span>
            <ByBrandIcon />
          </span>
          <p className="not-italic whitespace-nowrap text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
            {/* {selectWear} */}
            По бренду
          </p>
          <span>
            <BiChevronDown
              size={25}
              style={{ color: "#000" }}
              className={`${state?.openBrand ? "rotate-[-180deg]" : ""
                } duration-200`}
            />
          </span>
        </Popover>
        <div className="box-border	 flex items-center gap-x-2 h-[44px] border border-searchBgColor overflow-hidden rounded-lg bg-btnBgColor">

          {personItems
            ?.filter((value) => value.id === dressInfo?.type)
            .map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-fit h-full flex items-center  "
                >
                  {
                    data?.childText?.map(item => {
                      return (
                        <div className="flex items-center h-full">
                          <button
                            key={item?.id}
                            onClick={() => handleFilterByUser(data?.id, item?.id)}
                            className={`${item?.action ? dressInfo?.BtnActiveSeason : " bg-btnBgColor text-black"} px-5 h-full cursor-pointer  font-AeonikProMedium    rounded-lg  h-[44px]  justify-center flex items-center`}
                          >
                            {/* <img src={item?.anyIcons} alt="male" /> */}
                            <span>{item?.anyIcons}</span>
                            {
                              item?.name &&
                              <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">{item?.name}</span>
                            }
                          </button>
                          {
                            item?.id !== 4 &&
                            <span className="w-[2px] mx-1 h-[30px] border-r border-searchBgColor"></span>
                          }
                        </div>
                      )
                    })
                  }

                </div>
              );
            })}
        </div>
        {/* </article> */}
      </div >
      <div className="w-full flex items-center gap-x-2 mt-2">
        <div className="w-[190px]  flex items-center">
          {
            selectWear &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectWear}</span>
              <span onClick={() => setSelectWear("")} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
        <div className="w-[190px]   flex items-center">
          {
            selectPrice &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectPrice}</span>
              <span onClick={() => setSelectPrice("")} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
        <div className="w-[190px]  flex items-center">
          {
            selectBrand &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectBrand}</span>
              <span onClick={() => setSelectBrand("")} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
      </div>
    </div >
  );
}
