import React, { useContext, useEffect, useState } from "react";
import { Popover, Select, Space } from "antd";
import {
  ByBrandIcon,
  ClothesIcons,
  DollorIcons,
  DownArrowAntd,
  ManGenIcons,
  ManWomanGen,
  MenuCloseIcons,
  WinterBoyIcons,
  WomanGenIcons,
} from "../../../assets/icons";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import "../yandex.css";
import Slider from "react-slider";
const { Option } = Select;

export default function YandexFilter({ getMapsInfo, getYandexFilterData }) {
  const [dressInfo] = useContext(dressMainData);
  const [state, setState] = useState({
    openwear: false,
    openPrice: false,
    openBrand: false,
    textToColor: false,
    genderActive: true,
    genderId: null,
    categoryWearId: null,
    categoryBrandId: null,
    clearPrice: false,
  });

  // ----------------Wear state management----------------------------
  const [selectWear, setSelectWear] = useState();
  const ClearSelectWear = () => {
    setSelectWear();
  };
  // ----------------------Price State Management----------------------

  const [minPrice, setMinPrice] = useState(
    Number(getMapsInfo?.budget?.min_price)
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(getMapsInfo?.budget?.max_price)
  );
  const [getRange, setGetRange] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    setMinPrice(Number(getMapsInfo?.budget?.min_price));
    setMaxPrice(Number(getMapsInfo?.budget?.max_price));
    if (getMapsInfo?.budget?.min_price && getMapsInfo?.budget?.max_price) {
      if (!values[0] && !values[1]) {
        setValues([
          Number(getMapsInfo?.budget?.min_price),
          Number(getMapsInfo?.budget?.max_price),
        ]);
      }
    } else {
      setValues([0, 0]);
    }
  }, [getMapsInfo?.budget]);

  useEffect(() => {
    if (values && minPrice && maxPrice) {
      if (minPrice !== values[0] || maxPrice !== values[1]) {
        setState({ ...state, clearPrice: true });
      }
    }
  }, [values]);

  // console.log(values, "state-values");
  // console.log(minPrice, "state-minPrice");
  // console.log(maxPrice, "state-maxPrice");

  const clearFunction = () => {
    setState({ ...state, clearPrice: false, openPrice: false });
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
    setGetRange([]);
  };

  useEffect(() => {
    setState({ ...state, clearPrice: false });
    setMinPrice(Number(getMapsInfo?.budget?.min_price));
    setMaxPrice(Number(getMapsInfo?.budget?.max_price));
    setValues([
      Number(getMapsInfo?.budget?.min_price),
      Number(getMapsInfo?.budget?.max_price),
    ]);
    setGetRange([]);
  }, [dressInfo?.mainRegionId, dressInfo?.mainSubRegionId]);

  const sendPriceList = () => {
    setGetRange(values);
  };
  const handleOpenChangePrice = (newOpen) => {
    setState({ ...state, openPrice: newOpen });
  };
  const contentPrice = (
    <div className="w-fit h-[170px] m-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-searchBgColor pb-3">
        <span className="text-black text-lg not-italic font-AeonikProRegular leading-5">
          По ценам
        </span>
        <span
          onClick={() => setState({ ...state, openPrice: false })}
          className="w-6 h-6 cursor-pointer"
        >
          <MenuCloseIcons className="w-[24px] h-[24px]" colors={"#000"} />
        </span>
      </div>
      <div className="flex flex-col rounded-lg  w-full pb-5 px-4 pt-10 ">
        <div className="flex justify-between items-center mb-4 w-full ">
          <div className="flex ">
            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
              от
            </span>
            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
              <input
                className="w-[90px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                value={Number(values[0]).toLocaleString()}
                // onChange={(e) => setMaxPrice(e.target.value)}
              />{" "}
              сум
            </span>
          </div>
          <div className="flex ">
            <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
              до
            </span>
            <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
              <input
                className="w-[100px] outline-none h-[32px] flex items-center rounded-lg text-center border border-searchBgColor px-[2px] mr-1"
                value={Number(values[1]).toLocaleString()}
                // onChange={(e) => setMaxPrice(e.target.value)}
              />
              сум
            </span>
          </div>
        </div>
        <div className="relative z-50 mb-[6px] w-[350px]  marketFilter">
          {" "}
          <Slider
            className="horizontal-slider "
            thumbClassName="example-thumb1"
            trackClassName="example-track1"
            // defaultValue={[10, 90]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            // renderThumb={() => <div>1</div>}
            minDistance={10}
            // pearling
            onChange={setValues}
            value={values}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <div
          className={`flex items-center  mt-4 ${
            state?.clearPrice ? "justify-between" : "justify-end"
          }`}
        >
          {state?.clearPrice && (
            <span
              onClick={() => clearFunction()}
              className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue"
            >
              Сбросить
            </span>
          )}
          <span
            onClick={() => {
              sendPriceList();
              setState({ ...state, openPrice: false });
            }}
            className="flex items-center cursor-pointer text-sm justify-center  text-fullBlue"
          >
            Готово
          </span>
        </div>
      </div>
    </div>
  );
  console.log(getMapsInfo?.budget, "111-getMapsInfo?.budget");
  console.log(minPrice, "111-minPrice");
  console.log(maxPrice, "111-maxPrice");
  console.log(values, "111-values");
  console.log(getRange, "111-getRange");
  console.log("111---------------------------------------");
  // ----------------------Brend State Management----------------------

  const [selectBrand, setSelectBrand] = useState();
  const CloseSelectBrand = () => {
    setSelectBrand();
  };

  const [personItems, setPersonItems] = useState([
    {
      id: 4444,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 1111,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 2222,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 3333,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
    {
      id: 5555,
      childText: [
        { id: 0, anyIcons: <ManWomanGen />, name: "Все", action: false },
        { id: 1, anyIcons: <ManGenIcons />, name: "", action: false },
        { id: 2, anyIcons: <WomanGenIcons />, name: "", action: false },
        { id: 3, anyIcons: <WinterBoyIcons />, name: "", action: false },
      ],
    },
  ]);
  const handleFilterByUser = (fathId, childId) => {
    if (childId === 0) {
      setState({ ...state, genderId: "" });
    } else if (childId > 0) {
      setState({ ...state, genderId: childId });
    }
    setPersonItems((current) => {
      return current?.map((data) => {
        if (data?.id === fathId) {
          let newDataColor = data.childText.map((e) => {
            if (e.id === childId) {
              return { ...e, action: true };
            } else return { ...e, action: false };
          });
          return { ...data, childText: [...newDataColor] };
        } else return data;
      });
    });
  };

  useEffect(() => {
    getYandexFilterData({
      category_wear: state?.categoryWearId,
      category_brand: state?.categoryBrandId,
      minPrice: getRange[0],
      maxPrice: getRange[1],
      genderType: state?.genderId,
    });
  }, [
    state?.categoryWearId,
    state?.categoryBrandId,
    getRange,
    state?.genderId,
  ]);
  // console.log(state?.categoryWearId, "state?.categoryWearId");
  // console.log(state?.categoryBrandId, "state?.categoryBrandId");
  const onSearch = (value) => {
    // console.log("search:", value);
  };

  return (
    <div className="  w-fit px-10 py-2 mt-[-2px] md:px-6  md:rounded-b-[16px] bg-yandexNavbar border border-searchBgColor border-t-0 backdrop-blur-sm flex flex-col justify-between items-center m-auto md:border-t">
      <div className="flex items-center justify-center gap-x-2  w-fit   ">
        <div className="!w-[210px] relative gap-x-1 px-1 h-[44px] border-searchBgColor border  rounded-lg bg-btnBgColor  overflow-hidden flex items-center justify-between cursor-pointer select-none group  ">
          <span className="absolute left-2">
            <ClothesIcons colors={"#000"} />
          </span>
          <Select
            showSearch
            className="w-[100%] cursor-pointer pl-4 !caret-transparent	 h-full !outline-none text-center overflow-hidden  !py-0 text-black text-sm font-AeonikProMedium tracking-wide	leading-5"
            bordered={false}
            placeholder={
              <span className="placeholder text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                По категории
              </span>
            }
            optionFilterProp="children"
            onChange={(e) => setState({ ...state, categoryWearId: e })}
            onSearch={onSearch}
            // suffixIcon={<></>}
            allowClear
            // onClear={handleClear}
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            // options={getMapsInfo?.categories?.map((item) => {
            //   return {
            //     value: item?.id,
            //     label: item?.name_ru,
            //   };
            // })}
          >
            {getMapsInfo?.categories?.map((item) => {
              return (
                <Option key={item.id} value={item.id} label={item.name_ru}>
                  <Space>
                    <span className="text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                      {item.name_ru}
                    </span>
                  </Space>
                </Option>
              );
            })}
          </Select>
        </div>

        <Popover
          open={state?.openPrice}
          onOpenChange={handleOpenChangePrice}
          className="!w-[210px] gap-x-2 px-2 h-[44px] rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between cursor-pointer select-none group  "
          trigger="click"
          options={["Hide"]}
          placement="bottom"
          content={contentPrice}
        >
          <span className="font-AeonikProMedium">
            <DollorIcons colors={"#000"} />
          </span>
          {getRange[0] && getRange[1] ? (
            <p className="w-fit flex justify-between items-center  font-AeonikProMedium ">
              <span className="text-[13px] font-AeonikProMedium	leading-5	 ">
                {Number(getRange[0]).toLocaleString()}
              </span>
              <span className="w-[6px] h-[1px] bg-[#a1a1a1] mx-[2px] 	"></span>
              <span className="text-[13px] font-AeonikProMedium	leading-5	">
                {Number(getRange[1]).toLocaleString()}
              </span>
            </p>
          ) : (
            <p className="not-italic whitespace-nowrap mt-1 text-black text-sm font-AeonikProMedium tracking-wide	leading-5	">
              По бюджету
            </p>
          )}

          <span className="font-AeonikProMedium iconArrow">
            <DownArrowAntd />

            {/* <BiChevronDown
              size={20}
              style={{ color: "#c2c2c2" }}
              className={`${state?.openwear ? "rotate-[-180deg]" : ""
                } duration-200`}
            /> */}
          </span>
        </Popover>
        <div className="!w-[210px] relative gap-x-1 px-1 h-[44px] border-searchBgColor border  rounded-lg bg-btnBgColor  overflow-hidden flex items-center justify-between cursor-pointer select-none group  ">
          <span className="absolute left-2">
            <ByBrandIcon />
          </span>
          <Select
            showSearch
            className="w-[100%] h-full !caret-transparent pl-4 !outline-none text-center overflow-hidden  !py-0 text-black text-sm font-AeonikProMedium tracking-wide	leading-5"
            bordered={false}
            // placeholder="По магазину"
            placeholder={
              <span className="placeholder text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                По магазину
              </span>
            }
            optionFilterProp="children"
            // defaultValue={"По магазину"}
            onChange={(e) => setState({ ...state, categoryBrandId: e })}
            onSearch={onSearch}
            allowClear
            // suffixIcon={<></>}
            size="large"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            // options={getMapsInfo?.shops?.map((item) => {
            //   return {
            //     value: item?.id,
            //     label: item?.name,
            //   };
            // })}
          >
            {getMapsInfo?.shops?.map((item) => {
              return (
                <Option key={item.id} value={item.id} label={item.name}>
                  <Space>
                    <span className="text-black text-sm font-AeonikProMedium tracking-wide	leading-5">
                      {item.name}
                    </span>
                  </Space>
                </Option>
              );
            })}
          </Select>
        </div>

        <div className="box-border	 flex items-center gap-x-2  h-[44px] border border-searchBgColor overflow-hidden rounded-lg bg-btnBgColor">
          {personItems
            ?.filter((value) => value.id === dressInfo?.type)
            .map((data) => {
              return (
                <div
                  key={data?.id}
                  className="w-fit h-full flex items-center box-border "
                >
                  {data?.childText?.map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className="flex items-center h-full box-border"
                      >
                        <button
                          onClick={() => handleFilterByUser(data?.id, item?.id)}
                          className={`${
                            item?.action
                              ? " bg-white border w-full h-[98%] my-auto mx-auto box-border border-searchBgColor rounded-lg"
                              : " bg-btnBgColor text-black"
                          } px-5 h-full cursor-pointer  font-AeonikProMedium rounded-lg justify-center flex items-center`}
                        >
                          {/* <img src={item?.anyIcons} alt="male" /> */}
                          <span>{item?.anyIcons}</span>
                          {item?.name && (
                            <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">
                              {item?.name}
                            </span>
                          )}
                        </button>
                        {item?.id !== 3 && (
                          <span className="w-[2px] mx-1 h-[30px] border-r border-searchBgColor"></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
        {/* </article> */}
      </div>
      <div className="w-full flex items-center gap-x-2 mt-2 hidden">
        <div className="w-[190px]  flex items-center">
          {selectWear && (
            <button
              type="button"
              className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}
            >
              <span className="text-sm not-italic font-AeonikProMedium leading-5">
                {selectWear}
              </span>
              <span
                onClick={() => ClearSelectWear()}
                className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white"
              >
                <MenuCloseIcons
                  colors={dressInfo?.ColorSeason}
                  className="w-full h-full"
                />
              </span>
            </button>
          )}
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
          {selectBrand && (
            <button
              type="button"
              className={`h-[32px] px-2 flex items-center ${dressInfo?.BtnOpacitySeason} rounded-lg gap-x-[6px]`}
            >
              <span className="text-sm not-italic font-AeonikProMedium leading-5">
                {selectBrand}
              </span>
              <span
                onClick={() => CloseSelectBrand()}
                className="w-4 h-4 px-[2px] rounded-full flex items-center justify-center bg-white"
              >
                <MenuCloseIcons
                  colors={dressInfo?.ColorSeason}
                  className="w-full h-full"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
