import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuClose, business, englishFlag, glasses, help, location, order, russiaFlag, shop, uzbekFlag } from "../../assets/imgs";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Modal, Popover } from "antd";
import { useQuery } from "@tanstack/react-query";
import WeatherInfo from "../Weather/WeatherInfo";
const TopHeader = () => {
  const [dressInfo] = useContext(dressMainData);

  const [state, setState] = useState({
    isModalOpen: false,
    weatherSet: "",
  });

  const showModal = () => {
    setState({ ...state, isModalOpen: true });
  };
  const handleOk = () => {
    setState({ ...state, isModalOpen: false });
  };
  const handleCancel = () => {
    setState({ ...state, isModalOpen: false });
  };

  useQuery(
    ["Weather"],
    () => {
      return fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=aec6a76815144405ac3125132232903&q=Toshkent&days=7`
      ).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setState({ ...state, weatherSet: res });
        // console.log(res);
      },
      onError: (err) => {
        console.log(err, "errpr");
      },
    }
  );

  let dataStyle = "";
  if (dressInfo?.type == 1111) {
    dataStyle = " hover:text-borderSpring ";
  }
  if (dressInfo?.type == 2222) {
    dataStyle = " hover:text-borderSummer";
  }
  if (dressInfo?.type == 3333) {
    dataStyle = " hover:text-borderAutumm ";
  }
  if (dressInfo?.type == 4444) {
    dataStyle = " hover:text-borderWinter ";
  }

  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);

  const LanguageList = [
    { id: 1, type: "English", icons: englishFlag },
    { id: 2, type: "Русский", icons: russiaFlag },
    { id: 3, type: "O'zbekcha", icons: uzbekFlag },
  ];

  const [openLang, setOpenLang] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenLang(newOpen);
  };

  const handleLangValue = (value) => {
    setselectLang(value);
    setOpenLang(false);
  };

  const contentLang = (
    <div className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dataStyle}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <p className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </p>
            <p
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dataStyle}`}
            >
              {data?.type}
            </p>
          </div>
        );
      })}
    </div>
  );

  // -------City Change -------------
  const [selectCity, setSelectCity] = useState("Tashkent");
  const [openRegion, setOpenRegion] = useState(false);

  const handleOpenChangeCity = (newOpen) => {
    setOpenRegion(newOpen);
  };

  const handleCityValue = (value) => {
    setSelectCity(value);
    setOpenRegion(false);
  };

  const CityList = [
    { id: 1, type: "Samarqand" },
    { id: 2, type: "Sirdaryo" },
    { id: 3, type: "Jizzax" },
    { id: 4, type: "Andijon" },
    { id: 5, type: "Xorazm" },
    { id: 6, type: "Navoiy" },
  ];

  const contentCity = (
    <div className="w-[100px] h-fit m-0 p-0">
      {CityList.map((data) => {
        return (
          <div
            key={data?.id}
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dataStyle}`}
            onClick={() => {
              handleCityValue(data?.type);
            }}
          >
            {data?.type}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center top bg-bgColor ss:hidden md:block m-0 p-0 box-border">
      <div className="max-w-[1280px] w-[100%] h-[32px] py-[2px] flex justify-between items-center m-auto  ">
        <div className="left h-full flex items-center  ">
          <Link to="/" className="flex w-fit items-center">
            {/* Location svg img */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99992 8.95333C9.14867 8.95333 10.0799 8.02209 10.0799 6.87333C10.0799 5.72458 9.14867 4.79333 7.99992 4.79333C6.85117 4.79333 5.91992 5.72458 5.91992 6.87333C5.91992 8.02209 6.85117 8.95333 7.99992 8.95333Z" stroke="black" stroke-width="1.5"/>
                <path d="M2.4133 5.66C3.72664 -0.113333 12.28 -0.106666 13.5866 5.66667C14.3533 9.05333 12.2466 11.92 10.4 13.6933C9.05997 14.9867 6.93997 14.9867 5.5933 13.6933C3.7533 11.92 1.64664 9.04667 2.4133 5.66Z" stroke="black" stroke-width="1.5"/>
            </svg>
            <span className="text-textColor text-[13px] ml-2 mr-[6px] font-AeonikProMedium">
              Город:
            </span>
            <div className="w-[90px] font-AeonikProMedium   flex items-center ">
              <Popover
                open={openRegion}
                onOpenChange={handleOpenChangeCity}
                className=" flex text-[13px]  items-center  "
                trigger="click"
                options={["Hide"]}
                placement="bottom"
                content={contentCity}
              >
                <span className="border-b border-slate-900">{selectCity}</span>
              </Popover>
            </div>
          </Link>
          <Modal
            closable={false}
            className="!w-fit !h-fit "
            open={state?.isModalOpen}
            footer={null}
          >
            <div onClick={handleOk} className="flex justify-end p-2 cursor-pointer">
              <img src={MenuClose} alt="" />
            </div>
            <div className="w-fit h-fit  ">
              {" "}
              <WeatherInfo />
            </div>
          </Modal>

          <div className="w-fit h-full rounded bg-white font-AeonikProMedium select-none cursor-pointer">
            {LanguageList.filter((data) => data.id === selectLang).map(
              (data) => {
                return (
                  <Popover
                    key={data?.id}
                    open={openLang}
                    onOpenChange={handleOpenChangeWear}
                    className="w-full flex text-[13px] items-center h-full px-3 "
                    trigger="click"
                    options={["Hide"]}
                    placement="bottom"
                    content={contentLang}
                  >
                    <p className="mr-[6px] ">
                      <img src={data?.icons} alt="" />
                    </p>
                    <p className="not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black ">
                      {data?.type}
                    </p>
                  </Popover>
                );
              }
            )}
          </div>
        </div>
        <div className="right h-full flex items-center ">
          <Link to="#" className="flex items-center h-full ">
            <img src={help} alt="help" className="mr-2" />
            <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
              Помощь
            </span>
          </Link>
          <Link to="#" className="flex items-center h-full  ml-6 ">
            <img src={business} alt="business" className="mr-2" />
            <span className="text-textColor text-[13px]   font-AeonikProMedium  ">
              Бизнес
            </span>
          </Link>
          <div className="line h-5 border text-textColor ml-6"></div>
          <Link to="#" className="flex items-center h-full  ml-6 ">
            <img src={order} alt="my orders" className="mr-2" />
            <span className="text-textColor  text-[13px]   font-AeonikProMedium  ">
              Мои заказы
            </span>
          </Link>
          <NavLink to='/stores' className="flex items-center bg-white rounded cursor-pointer h-full  ml-6 px-3">
            <img src={shop} alt="shop" className="mr-2" />
            <span className="font-AeonikProMedium  text-[13px]    ">
              Магазины
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
