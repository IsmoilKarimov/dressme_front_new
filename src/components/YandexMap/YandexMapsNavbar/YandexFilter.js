import React, { useContext, useEffect, useState } from "react";
import { Popover, } from "antd";
import { AutummBoyIcons, ByBrandIcon, ChildGenIcon, ClothesIcons, DollorIcons, ManGenIcons, ManWomanGen, MenuCloseIcons, SpringBoyIcons, SummerBoyIcons, WinterBoyIcons, WomanGenIcons } from "../../../assets/icons";
import { BiChevronDown } from "react-icons/bi";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { AutummChild, AutummFemale, AutummGirl, AutummMale, SpringChild, SpringFemale, SpringGirl, SpringMale, SummerChild, SummerFemale, SummerGirl, SummerMale, WinterChild, WinterFemale, WinterGirl, WinterMale } from "../../../assets";
import '../yandex.css'
import ReactSlider from "react-slider";
import UseReplace from "../../../ContextHook/useReplace";
import UseSearch from "../../../ContextHook/useSearch";
import { useNavigate } from "react-router-dom";
import Slider from "react-slider";

export default function YandexFilter({ getMapsInfo, getYandexFilterData }) {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  // useReplace
  const navigate = useNavigate();
  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    openBrand: false,
    textToColor: false,
    genderActive: true,
    genderId: null,
    categoryWearId: null,
    categoryBrandId: null,
  });

  // ----------------Wear state management----------------------------

  const handleOpenChangeWear = (newOpen) => {
    setState({ ...state, openwear: newOpen });
  };
  const [selectWear, setSelectWear] = useState();

  const handleWearValue = (value, id) => {
    setSelectWear(value);
    setState({ ...state, openwear: false, categoryWearId: id });
    // navigate(`/delivery-points/${UseReplace("by_category", value)}`);
  };
  const ClearSelectWear = () => {
    setSelectWear();
    // navigate(`/delivery-points/${UseReplace("by_category", null)}`);
  }


  const contentWear = (
    <div className="w-[170px] h-fit m-0 p-0">
      {getMapsInfo?.categories?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleWearValue(data?.name_ru, data?.id);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.name_ru}
          </p>
        );
      })}
    </div>
  );
  // ----------------------Price State Management----------------------
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(900000);
  const [values, setValues] = useState([minPrice, maxPrice]);
  const [getRange, setGetRange] = useState([]);

  const sendPriceList = () => {
    setGetRange(values)
    // navigate(`/delivery-points/${UseReplace("min", values[0])}`);
    // navigate(`/delivery-points/${UseReplace("max", values[1])}`);
  };
  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };
  // console.log();
  const contentPrice = (
    <div className="w-[350px] h-[170px] m-0 ">
      <div className="flex items-center justify-between border-b border-searchBgColor pb-3">
        <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">По ценам</span>
        <span
          onClick={() => setState({ ...state, openPrice: false })}
          className="w-6 h-6 cursor-pointer">
          <MenuCloseIcons className="w-[24px] h-[24px]" colors={"#000"} />
        </span>
      </div>
      <div className="  flex flex-col rounded-lg  w-full pb-5 pt-10">
        <div className="flex justify-between items-center mb-6 w-full px-2">
          <div className="flex ">
            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
              от
            </span>
            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
              <input className='w-[70px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1'
                value={values[0]}
              // onChange={(e) => setMaxPrice(e.target.value)}
              />  sum
            </span>
          </div>
          <div className="flex ">
            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
              до
            </span>
            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
              <input className='w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1'
                value={values[1]}
              // onChange={(e) => setMaxPrice(e.target.value)}
              />
              sum
            </span>
          </div>
        </div>
        <div className="relative z-50 mb-[6px] w-full  marketFilter">
          {" "}

          <ReactSlider
            className="horizontal-slider slider"
            thumbClassName="example-thumb1"
            trackClassName="example-track1"
            // defaultValue={[10, 90]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            // renderThumb={() => <div>1</div>}
            pearling
            onChange={setValues}
            value={values}
            min={minPrice}
            max={maxPrice} />
        </div>
        <div className="flex items-center justify-end mt-4">
          <span
            onClick={() => {
              sendPriceList()
              setState({ ...state, openPrice: false })
            }}
            className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue">Готово</span>
        </div>
      </div>
    </div>
  );

  // ----------------------Brend State Management----------------------

  const handleOpenChangeBrand = (newOpen) => {
    setState({ ...state, openBrand: newOpen });
  };
  const [selectBrand, setSelectBrand] = useState();

  const handleBrandValue = (value, id) => {
    setSelectBrand(value);
    setState({ ...state, openBrand: false, categoryBrandId: id });
  };

  const CloseSelectBrand = () => {
    setSelectBrand()
  }

  const contentBrand = (
    <div className="w-[170px] h-[250px] overflow-auto VerticelScroll m-0 p-0 ">
      {getMapsInfo?.shops?.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleBrandValue(data?.name, data?.id);
            }}
            className={`w-full h-[42px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor ${dressInfo?.TextHoverSeason}`}
          >
            {data?.name}
          </p>
        );
      })}
    </div>
  );


  const [personItems, setPersonItems] = useState([
    {
      id: 1111, childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <SpringBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 2222, childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <SummerBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 3333, childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <AutummBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 4444, childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ]
    },
    {
      id: 5555, childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ]
    }
  ]);
  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      setState({ ...state, genderId: "" })
    } else if (childId > 0) {
      setState({ ...state, genderId: childId })
    }
    setPersonItems((current) => {
      return current?.map((data) => {
        if (data?.id == fathId) {
          let newDataColor = data.childText.map((e) => {
            if (e.id == childId) {
              return { ...e, action: true };
            } else return { ...e, action: false };
          });
          return { ...data, childText: [...newDataColor] };
        } else return data;
      });
    });
  }
  useEffect(() => {
    getYandexFilterData({
      category_wear: state?.categoryWearId,
      category_brand: state?.categoryBrandId,
      minPrice: getRange[0],
      maxPrice: getRange[1],
      genderType: state?.genderId,
    })
  }, [selectWear, selectBrand, getRange, state?.genderId])
  console.log(personItems, "personItems");
  return (
    <div className=" border border-red-500 w-fit px-10 py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex flex-col justify-between items-center m-auto md:border-t">
      <div className="flex items-center justify-center gap-x-2  w-fit   ">
        <Popover
          open={state?.openwear}
          onOpenChange={handleOpenChangeWear}
          className="!w-[190px] gap-x-1 px-2 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentWear}
        >
          <span>
            <ClothesIcons colors={"#000"} />
          </span>
          <p className="not-italic w-full overflow-hidden flex items-center justify-center  whitespace-nowrap text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
            {selectWear || "По категории"}
            {/* По категории */}
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
          <p className="not-italic whitespace-nowrap  text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
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
          className="!w-[190px] gap-x-1 px-2 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentBrand}
        >
          <span className="">
            <ByBrandIcon />
          </span>
          <p className="not-italic w-full overflow-hidden flex items-center justify-center whitespace-nowrap text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
            {selectBrand || "По магазину"}
            {/* По магазину */}
          </p>
          <span>
            <BiChevronDown
              size={25}
              style={{ color: "#000" }}
              className={`${state?.openBrand ? "rotate-[-180deg]" : ""
                } duration-200 `}
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
                            item?.id !== 3 &&
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
      <div className="w-full flex items-center gap-x-2 mt-2 hidden">
        <div className="w-[190px]  flex items-center">
          {
            selectWear &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectWear}</span>
              <span onClick={() => ClearSelectWear()} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
        {/* <div className="w-[190px]   flex items-center">
          {
            selectPrice &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectPrice}</span>
              <span onClick={() => setSelectPrice("")} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div> */}
        <div className="w-[190px]  flex items-center">
          {
            selectBrand &&
            <button type="button" className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}>
              <span className="text-sm not-italic font-AeonikProMedium leading-5">{selectBrand}</span>
              <span onClick={() => CloseSelectBrand()} className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white">
                <MenuCloseIcons colors={dressInfo?.ColorSeason} className="w-full h-full" />
              </span>
            </button>
          }
        </div>
      </div>
    </div >
  );
}
