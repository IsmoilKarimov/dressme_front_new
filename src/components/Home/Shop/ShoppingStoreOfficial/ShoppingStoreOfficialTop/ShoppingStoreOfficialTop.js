import { NavLink } from "react-router-dom";
import "./Store.css"
import { nike } from "../../../../../assets";
import {
  ArrowTopIcons,
  ClothesIcons,
  CommentStarIcon,
  FilterIcons,
  LocationColoursIcons,
  ManGenIcons,
  SearchIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useContext, useState } from "react";
import { dressMainData } from "../../../../../ContextHook/ContextMenu";
import { Modal, Popover, Radio } from "antd";
import ProductComment from "../../../Products/SignleMainProducts/SingleProduct/ProductComment/ProductComment";

const ShoppingStoreOfficialTop = ({ name, openTabComment, setOpenTabComment, openTabLocation, setOpenTabLocation }) => {
  const [dressInfo, setDressInfo] = useContext(dressMainData);
  const [openLocationModal, setOpenLocationModal] = useState(false);

  const handleFilter = () => {
    setDressInfo({
      ...dressInfo,
      openShopIdFilter: !dressInfo.openShopIdFilter,
    });
  };

  const [prevSliderBtn, setPrevSliderBtn] = useState(false);
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
  const typesofClothes = [
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
  const [locationsList] = useState([
    { id: 1, location: 'Bektemir' },
    { id: 2, location: 'Mirzo Ulugbek' },
    { id: 3, location: 'Yunusobod' },
    { id: 4, location: 'Chilonzor' },
    { id: 5, location: 'Mirobod' },
  ]);
  const contentTypesofClothes = (
    <div className="w-[150px] h-[200px] overflow-auto m-0 p-0">
      {typesofClothes.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleTypesofClothes(data?.type);
            }}
            className={`w-full py-3 flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.name}
          </p>
        );
      })}
    </div>
  );
  const data = (onClick) => {
    onClick();
    setPrevSliderBtn(true);
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-50  right-[4px]  rounded-full bg-white    duration-200 border  border-borderColor2
            `}
        onClick={() => data(onClick)}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={` ${prevSliderBtn ? "block" : "hidden"
          } absolute text-center cursor-pointer no-underline opacity-50 w-12 h-12 flex items-center justify-center top-[2px] z-10  left-[2px]  rounded-full bg-white   duration-200 border  border-borderColor2
        `}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };
  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    arrows: true,
    speed: 500,
    dots: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [state, setState] = useState({
    openTypesofClothes: false,
  });
  // Types of Clothes
  const handleOpenTypesofClothes = (openTypesofClothes) => {
    setState({ ...state, openTypesofClothes: openTypesofClothes });
  };
  const handleTypesofClothes = () => {
    setState({ ...state, openTypesofClothes: false });
  };

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <main className="flex flex-col justify-center md:border-b border-searchBgColor  items-center md:my-5">
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
        <div className="w-[100%] h-fit flex flex-col">
          {/* Top section */}
          <div className="w-full flex flex-col border-[#F0F0F0]">
            <figure className="w-full h-[240px] md:h-[360px] overflow-hidden border border-searchBgColor bg-btnBgColor rounded-t-lg">
              <img
                className="w-full h-full object-cover"
                src="https://st4.depositphotos.com/1323776/21295/i/450/depositphotos_212951656-stock-photo-scottsdale-usa-bill-bowerman-phil.jpg"
                alt=""
              />
            </figure>
            <div className="w-full md:h-[90px] mt-2 md:mt-0 h-fit flex flex-col md:flex-row items-center border-t-0 md:border md:border-searchBgColor rounded-b-lg px-4 md:px-0">
              {/* 1 */}
              <div className="w-full md:w-[40%] flex h-[80px] md:h-fit items-center md:ml-[40px]">
                <figure className="w-[80px] md:w-[150px] h-[80px] md:h-[150px] md:left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white">
                  <img src={nike} alt="" />
                </figure>
                <div className="flex flex-col ml-8">
                  <p className="text-xl font-AeonikProMedium mb-3">{name}</p>
                  <div className="">
                    <div className="flex items-center">
                      <div className="flex items-center mr-[6px]">
                        <StarIcons />
                      </div>
                      <div className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 md:ml-1 flex items-center text-sm">
                        <p className="font-AeonikProMedium text-black mr-1">
                          5.0
                        </p>
                        <p className="text-setTexOpacity font-AeonikProRegular">
                          (859 votes) <span className="ml-[10px]">|</span>{" "}
                        </p>
                        <p className="font-AeonikProRegular ml-[10px] text-setTexOpacity">
                          4937 orders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full md:w-[35%] flex items-center border-t md:border-none border-searchBgColor mt-5 pt-5 md:pt-0 md:mt-0">
                <NavLink
                  to="/delivery-points"
                  className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer"
                >
                  <span>
                    <LocationColoursIcons colors={"#007DCA"} />
                  </span>
                </NavLink>
                <button
                  onClick={e => {
                    e.preventDefault();
                    setOpenTabLocation(!openTabLocation);
                    setOpenTabComment(false)
                  }}
                  className="flex flex-col ml-3 w-[70%] md:w-full"
                >
                  <p className="text-sm font-AeonikProRegular text-borderWinter">
                    60 Amir Temur Avenue, Mirzo Ulugbek district Tashkent 100017
                  </p>
                </button>
              </div>
              {/* 3 */}
              <div className="w-full md:w-[25%] flex items-center md:justify-end pb-5 md:pb-0 border-b border-[#F0F0F0] md:border-none md:mr-5 mt-5 md:mt-0">
                <div className="md:hidden flex w-fit">
                  <div className="w-fit h-fit flex items-center justify-center gap-y-1 cursor-pointer">
                    <NavLink
                      to="/delivery-points"
                      className="flex items-center justify-center w-12 h-12 rounded-xl border border-searchBgColor cursor-pointer"
                    >
                      <span>
                        <LocationColoursIcons colors={"#007DCA"} />
                      </span>
                    </NavLink>
                    <p
                      className={`text-borderWinter border-b border-dashed border-borderWinter ml-3 text-sm md:text-base not-italic font-AeonikProRegular`}
                    >
                      {" "}
                      Все локации
                    </p>
                  </div>
                </div>
                <div className="flex items-center ml-auto">
                  <button className="flex flex-shrink-0 items-center ml-auto justify-center border border-searchBgColor w-12 h-12 rounded-xl mr-1">
                    <ManGenIcons />
                  </button>
                  <button className="flex flex-shrink-0 items-center justify-center border border-searchBgColor w-12 h-12 rounded-xl">
                    <WomanGenIcons />
                  </button>
                  <div className="flex items-center justify-end">
                    <div
                      onClick={e => {
                        e.preventDefault();
                        setOpenTabComment(!openTabComment);
                        setOpenTabLocation(false)
                        
                      }}
                      className="w-[42%] min-w-min hidden md:block text-sm font-AeonikProRegular text-borderWinter ml-auto cursor-pointer">
                        Посмотреть отзывы
                    </div>
                    <button
                      onClick={e => {
                        e.preventDefault();
                        setOpenTabComment(!openTabComment);
                      }}
                      className="flex items-center justify-center border border-searchBgColor w-[48px] h-[48px] rounded-xl ml-[24px] md:ml-[10px] flex-shrink-0">
                      <CommentStarIcon colors={"#007DCA"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  hidden md:flex justify-end items-center my-3">
            <div className="w-fit flex gap-x-7 items-center">
              <NavLink to="#" className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer">
                <p><LocationColoursIcons colors={"#303030"} /></p>
                <p className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}>
                  Мирзо Улугбек
                </p>
              </NavLink>
              <NavLink to="#" className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer">
                <p><LocationColoursIcons colors={"#303030"} /></p>
                <p className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}>
                  Юнусабад
                </p>
              </NavLink>
              <NavLink to="#" className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer">
                <p><LocationColoursIcons colors={"#303030"} /></p>
                <p className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}>
                  Алмазар
                </p>
              </NavLink>
              <NavLink to="#" className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer">
                <p><LocationColoursIcons colors={"#303030"} /></p>
                <p className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}>
                  Чиланзар
                </p>
              </NavLink>
              <NavLink to="#" className="w-fit h-fit flex flex-col items-center justify-center gap-y-1 cursor-pointer">
                <p><LocationColoursIcons colors={"#303030"} /></p>
                <p className={`text-base not-italic font-AeonikProRegular  text-[#303030] hover:text-borderWinter`}>
                  Учтепа
                </p>
              </NavLink>
              <button
                type="primary"
                onClick={() => setOpenLocationModal(true)}
                className={`text-borderWinter text-base font-AeonikProMedium`}>
                Все локации
              </button>
              <Modal
                centered
                open={openLocationModal}
                onOk={() => setOpenLocationModal(false)}
                onCancel={() => setOpenLocationModal(false)}
                footer={null}
                className="w-full p-6"
              >
                <div className="w-full px-[25px] pb-[30px] pt-[20px]">
                  <div className="text-2xl font-AeonikProRegular mb-[30px]">Выберите локацию</div>
                  <div className="font-AeonikProRegular text-lg border-b border-[#f0f0f0] mb-[15px]">Tashkent</div>
                  <Radio.Group
                    style={{
                      width: '100%',
                    }}
                    onChange={onChange}
                  >
                    <div className="w-full flex flex-wrap items-center gap-y-2">
                      {locationsList.map(data => (
                        <div key={data.id} className="w-1/3">
                          <Radio value={data.location} name="location" className="text-lg font-AeonikProRegular">{data.location}</Radio>
                        </div>
                      ))}
                    </div>
                  </Radio.Group>
                  <button type="button" className="w-full flex justify-end mt-[60px] text-borderWinter text-lg font-AeonikProMedium">Готово</button>
                </div>
              </Modal>
            </div>
          </div>
          <action className={`w-full md:hidden flex items-center justify-between mt-3 mb-3 px-4 gap-x-2`}>
            <div className="search flex items-center bg-btnBgColor justify-between rounded-xl font-AeonikProMedium h-12 my-3 border border-searchBgColor ss:mt-3 md:hidden w-full">
              <span className=" flex ss:pl-[11.65px] md:hidden">
                <SearchIcons />
              </span>
              <input
                type="text"
                placeholder="Искать товары или бренды"
                className="bg-transparent w-full px-3 h-12 text-[14px] bg-btnBgColor border border-transparent md:border-searchBgColor md:mx-0 md:-ml-[3px] md:px-3 md:h-12
              placeholder-italic placeholder-AeonikProMedium placeholder-sm leading-4 placeholder-setTexOpacity placeholder-[1px]
              "
              />
            </div>
            <button
              onClick={handleFilter}
              className="w-12 h-12 shrink-0 rounded-xl select-none border border-searchBgColor flex items-center justify-center"
            >
              <FilterIcons colors={"#000"} />
            </button>
          </action>
        </div>

      </section>
    </main>
  );
};
export default ShoppingStoreOfficialTop;
