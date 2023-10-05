import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { Popover } from "antd";

import {
  ArrowTopIcons,
  CommentIcons,
  HouseStatisticIcons,
  LocationIcons,
  MarketIcons,
  MenuCloseIcons,
} from "../../assets/icons";
import { EnglishFlag, RussianFlag, UzbekFlag } from "../../assets";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const TopHeader = () => {
  const navigate = useNavigate()
  const [dressInfo] = useContext(dressMainData);
  const [selectBtn, setSelectBtn] = useState(true)

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    password: "",
    sellerTypeId: "",
    selectSellerType: "",
    regionId: "",
    subRegionId: "",
    phoneCode: "+",
    phoneNum: "",
    //----

    validateConfirm: true,
    eyesShow: true,
    requestPerson: true,
    // ------Regions Get -----
    getRegionList: "",
    // ------ Get Profile-----
    getProfileList: "",
    // ------ Get getSellerList-----
    getSellerList: "",
    // -----region Modal-----
    openModalRegions: false,
    // ----popConfirmDelete
    popConfirmDelete: false,
  })

  const url = "https://api.dressme.uz/api/seller"

  // -----Language Change-------------------
  const [selectLang, setselectLang] = useState(1);
  const LanguageList = [
    { id: 1, type: "English", icons: EnglishFlag },
    { id: 2, type: "Русский", icons: RussianFlag },
    { id: 3, type: "O'zbekcha", icons: UzbekFlag },
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
    <section className="w-fit h-fit m-0 p-0">
      {LanguageList.map((data) => {
        return (
          <article
            key={data?.id}
            className={`p-2 text-sm cursor-pointer hover:bg-bgColor flex items-center justify-start  ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleLangValue(data?.id);
            }}
          >
            <figure className="mr-[6px]  w-5 h-5">
              <img className="w-full h-full" src={data?.icons} alt="" />
            </figure>
            <article
              className={`not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  ${dressInfo?.ColorSeason}`}
            >
              {data?.type}
            </article>
          </article>
        );
      })}
    </section>
  );



  const { isLoading } = useQuery(["get region"], () => {
    return fetch(`${url}/regions`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setState({ ...state, getRegionList: res, })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  )

  // ------------GET METHOD seller-types-----------------
  const { isFetching } = useQuery(["get seller-type"], () => {
    return fetch(`${url}/seller-types`).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        setState({ ...state, getSellerList: res, })
      },
      onError: (err) => {
        console.log(err, "err");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
  console.log(state?.selectSellerType, "selectSellerType");
  console.log(state?.sellerTypeId, "sellerTypeId");

  const changeTip = () => {
    state?.getSellerList?.individual?.forEach(e => {
      if (e?.id == state?.sellerTypeId)
        setState({ ...state, selectSellerType: e?.name_ru })
    })
  }
  // ------------GET METHOD Profile-----------------

  useQuery(["get profile"], () => {
    return fetch(`${url}/profile`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("DressmeUserToken")}`,
      },

    }).then(res => res.json())
  },
    {
      onSuccess: (res) => {
        console.log(res, "res");
        setState({
          ...state, getProfileList: res,
          firstName: res.name,
          lastName: res.surname,
          email: res?.email,
          cardNumber: res?.card_number,
          regionId: res?.region_id,
          subRegionId: res?.sub_region_id,
          sellerTypeId: res?.seller_type_id,
          phoneCode: res?.phone.slice(0, 3),
          phoneNum: res?.phone.slice(3, 12),

        })
      },
      onError: (err) => {
        console.log(err, "err");
      },

      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  )

  // -----------------------Seller Delete---------------
  const { mutate } = useMutation(() => {
    return fetch(`${url}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("DressmeUserToken")}`,

      },
    }).then((res) => res.json());
  });

  const onUserDelete = () => {
    // setState({ ...state, popConfirmDelete: false })
    mutate({}, {
      onSuccess: res => {
        if (res?.message) {
          localStorage.clear();
          navigate("/")
          window.location.reload();
          setState({ ...state, popConfirmDelete: false })
          console.log(res, "Delete");
          toast.warn(`${res?.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },
      onError: err => {

      }
    })
  }





  // -------City Change -------------
  const [selectCity, setSelectCity] = useState("Tashkent");
  const [openRegion, setOpenRegion] = useState(false);

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
    <section className="w-[100px] h-fit m-0 p-0">
      {CityList.map((data) => {
        return (
          <article
            key={data?.id}
            className={`p-2 not-italic flex items-center font-AeonikProMedium text-sm leading-4 text-black  hover:bg-bgColor cursor-pointer ${dressInfo?.ColorSeason}`}
            onClick={() => {
              handleCityValue(data?.type);
            }}
          >
            {data?.type}
          </article>
        );
      })}
    </section>
  );
  const location = useLocation();
  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);


  const [activeIndex, setActiveIndex] = useState();
  const accordionCityList = (id) => {
    if (activeIndex == id) {
      setActiveIndex(0)
    } else {
      setActiveIndex(id)
    }
  }

  return (
    <nav>

      <div
        onClick={() => {
          // setOpenEditModal(false);
          setState({ ...state, popConfirmDelete: false, openModalRegions: false })
          // setState({ ...state, openModalRegions: false })
        }}
        className={`fixed inset-0 z-[112] cursor-pointer duration-200 w-full h-[100vh] bg-black opacity-50
         ${state?.openModalRegions ? "" : "hidden" }`}
      ></div>
      
      <div
        className={`hidden md:block flex-col justify-center items-center m-0 p-0 box-border ${locationWindow === "/delivery-points"
          ? "bg-transparent h-[40px] "
          : "bg-bgColor h-[32px] "
          }`}
      >
        <section className="max-w-[1280px] w-[100%] h-full py-[2px] flex justify-between items-center m-auto  ">
          <article className="left h-full flex items-center">
           
           
          <div className={` max-w-[600px] h-fit fixed    px-3 md:px-6  py-2 md:py-4 bg-white rounded-b-none md:rounded-b-lg	 rounded-t-lg  mx-auto w-full duration-500 z-[113] md:top-[50%] md:left-1/2 md:right-1/2 md:translate-x-[-50%] md:translate-y-[-50%] overflow-hidden ${state?.openModalRegions ? " bottom-0 md:flex flex-col" : "md:hidden bottom-[-1500px] z-[-10]"}`} >
              <div className="w-full flex items-center justify-between  ">
                <span className="text-black text-xl md:text-2xl not-italic font-AeonikProRegular">Выберите регион</span>
                <span
                  className="select-none cursor-pointer"
                  onClick={() => {
                    setState({ ...state, openModalRegions: false });
                  }}
                >
                  <MenuCloseIcons colors="#000" /></span>
              </div>


              <div className="w-full overflow-auto  flex flex-col gap-y-4 pt-3  overflow-x-hidden mt-3 h-[50vh] md:h-[60vh] VerticelScroll pr-2 ">

                
                {state?.getRegionList?.regions ?
                  state?.getRegionList?.regions?.map((data, index) => {
                    return (
                      <div key={data?.id} className="w-full  h-fit  ">
                        <div className="flex items-center">
                          <input 
                            onClick={() => accordionCityList(data?.id)}
                            type="radio" 
                            name="" 
                            id={data.name}
                            className="w-5 h-5 cursor-pointer mr-3" 
                          />
                          <label
                            htmlFor={data.name}
                            onClick={() => accordionCityList(data?.id)}
                            className="w-full cursor-pointer flex items-center pr-1 justify-between border-b border-[#F0F0F0] "
                          >
                            <span className="text-[#303030] text-lg not-italic font-AeonikProRegular">
                              {data?.name_ru}
                            </span>
                            <span
                              className={`${activeIndex == data?.id ? "rotate-[0deg]" : "rotate-[180deg]"} `}
                            >
                              <ArrowTopIcons colors={"#a1a1a1"} />
                            </span>
                          </label>
                        </div>
                        <div
                          className={`w-full grid grid-cols-2 xs:grid-cols-3 duration-[400ms] 
                             ${activeIndex == data?.id ? "openAccardion" : "CloseAccardion"} `}
                        >
                          {data?.sub_regions?.map((item) => {
                            return (
                              <div key={item?.id} className="flex items-center px-[2px] gap-x-[4px] cursor-pointer">
                                <label
                                  htmlFor={item?.name_ru}
                                  className="flex items-center gap-x-[6px]"
                                >
                                  <input
                                    type="radio"
                                    id={item?.name_ru}
                                    name="type_work"
                                    value={item?.region_id}
                                    checked={state?.subRegionId == item?.id}
                                    className="border border-borderColor  cursor-pointer  flex items-center justify-center"
                                    onChange={(e) => {
                                      setState({ ...state, regionId: e.target.value, subRegionId: item?.id })
                                    }}
                                    required

                                  />
                                  <span className="text-[#303030]  cursor-pointer text-[15px] not-italic font-AeonikProRegular"
                                  >{item?.name_ru}</span>
                                </label>
                              </div>

                            );
                          })}
                        </div>
                      </div>
                    );
                  }) :
                  <p className="w-full h-full flex flex-col items-center justify-center">Ma'lumotlar yuklanayapti...</p>}

              </div>
              <div className="w-full flex items-center justify-end  mt-2">
                <span onClick={() => {
                  setState({ ...state, openModalRegions: false });
                }} className="cursor-pointer text-borderWinter text-lg not-italic font-AeonikProMedium">Готово</span>
              </div>
          </div>
           
            <section>
              <Link to="/" className="flex w-fit items-center">
                <span>
                  <LocationIcons />
                </span>

                <div className="text-textColor text-[13px] ml-2 mr-[6px] font-AeonikProMedium">
                  Регион:
                </div>
                <div 
                  onClick={() => {
                    setState({ ...state, openModalRegions: true });
                  }}
                  className="w-[90px] font-AeonikProMedium flex items-center text-[13px]">
                  <span className="border-b border-slate-900">
                    {selectCity}
                  </span>
                </div>
              </Link>
            </section>






            <section className="w-fit h-fit py-[4px] rounded bg-white font-AeonikProMedium select-none cursor-pointer">
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
                      <span className="mr-[6px] ">
                        <img src={data?.icons} alt="" />
                      </span>
                      <p className="not-italic flex items-center font-AeonikProMedium text-sm text-black ">
                        {data?.type}
                      </p>
                    </Popover>
                  );
                }
              )}
            </section>
          </article>

          <article className="right h-full flex items-center">
            <NavLink
              to="#"
              className={`flex items-center h-fit py-[4px]`}>
              <span className="mr-2">
                <CommentIcons colors={"#707070"} />
              </span>
              <p className="text-textColor text-[13px] font-AeonikProMedium">
                Помощь
              </p>
            </NavLink>
            <button
              type="button"
              onClick={() => window.open(' https://dressme-dashboard-new.vercel.app', "_blank")}
              className={`flex items-center h-fit py-[4px] ml-6
                // ${!selectBtn ? "py-[4px] px-3 bg-white rounded" : ""}
              `}
            >
              <p className="mr-2">
                <HouseStatisticIcons colors={"#707070"} />
              </p>
              <p
                onClick={() => setSelectBtn(true)}
                className={`text-[13px] font-AeonikProMedium
                  ${!selectBtn ? "text-black" : "text-textColor"}
                `}
              >
                Бизнес
              </p>
            </button>
            <article className="line h-5 border text-textColor mx-6"></article>
            <NavLink
              to="/stores"
              onClick={() => setSelectBtn(true)}
              className={`flex items-center  cursor-pointer h-fit
                ${selectBtn ? "py-[4px] px-3 bg-white rounded" : ""}
              `}
            >
              <p className="mr-2">
                <MarketIcons colors={"#000"} />
              </p>
              <p className={`font-AeonikProMedium  text-[13px]
                  ${selectBtn ? "text-black" : "text-textColor"}
                `}
              >
                Магазины
              </p>
            </NavLink>
          </article>
        </section>
      </div>
    </nav >
  );
};
export default TopHeader;
