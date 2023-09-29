import React, { useEffect, useState } from 'react'
import { ArrowTopIcons, InputCheckedTrueIcons, MenuCloseIcons } from '../../../../assets/icons';
import { BsCheckLg } from 'react-icons/bs';
import ReactSlider from 'react-slider';

function FilterDropUp({ onClick }) {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
        };
    }
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener("resize", updateDimension);
        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);

    const [products] = useState({
        genders: [
            { id: 1, action: false, type: "Женщинам" },
            { id: 2, action: false, type: "Мужчинам" },
            { id: 3, action: false, type: "Детям" },
            { id: 4, action: false, type: "Скидки" },
        ],
        Catolog: [
          { id: 1, action: false, name: "Головной убор" },
          { id: 2, action: false, name: "Верхняя одежда" },
          { id: 3, action: false, name: "Нижняя одежда" },
          { id: 4, action: false, name: "Обувь" },
          { id: 5, action: false, name: "Аксессуары" },
        ],
        brandWear: [
          { id: 1, action: true, name: "Adidas", count: 125 },
          { id: 2, action: false, name: "Reebok", count: 125 },
          { id: 3, action: false, name: "Nike", count: 125 },
          { id: 4, action: false, name: "Puma", count: 125 },
          { id: 5, action: false, name: "ECCO", count: 125 },
          { id: 6, action: false, name: "New Balance", count: 125 },
          { id: 7, action: false, name: " Asics", count: 125 },
          { id: 8, action: false, name: "Columbian", count: 125 },
          { id: 9, action: false, name: "Under Armour", count: 125 },
        ],
        prizes: [
          { id: 1, action: false, prize: "До 100 000" },
          { id: 2, action: false, prize: "До 500 000" },
          { id: 3, action: false, prize: "До 1 000 000" },
          { id: 4, action: false, prize: "Выше" },
        ],
        changeColor: [
          { id: 1, value: 1, action: false, colors: "bg-black" },
          { id: 2, value: 2, action: false, colors: "bg-white" },
          { id: 3, value: 3, action: false, colors: "bg-purple-700" },
          { id: 4, value: 4, action: false, colors: "bg-gray-500" },
          { id: 5, value: 5, action: false, colors: "bg-red-700" },
          { id: 6, value: 6, action: false, colors: "bg-yellow-500" },
          { id: 7, value: 7, action: false, colors: "bg-green-600" },
          { id: 8, value: 8, action: false, colors: "bg-sky-500" },
          { id: 9, value: 9, action: false, colors: "bg-yellow-700" },
          { id: 10, value: 10, action: false, colors: "bg-rose-900" },
          { id: 11, value: 11, action: false, colors: "bg-pink-600" },
          { id: 12, value: 12, action: false, colors: "bg-cyan-900" },
        ],
        availability: [
          { id: 1, action: false, title: "На складе доступен", count: 892 },
          { id: 2, action: false, title: "Доставка доступна", count: 641 },
        ],
        clothingSize: [
          { id: 1, action: false, size: "XS" },
          { id: 2, action: false, size: "S" },
          { id: 3, action: false, size: "M" },
          { id: 4, action: false, size: "L" },
          { id: 5, action: false, size: "XL" },
          { id: 6, action: false, size: "2XL" },
          { id: 7, action: false, size: "3XL" },
          { id: 8, action: false, size: "4XL" },
        ],
        pantsSize: [
          { id: 1, action: false, size: "XS" },
          { id: 2, action: false, size: "S" },
          { id: 3, action: false, size: "M" },
          { id: 4, action: false, size: "L" },
          { id: 5, action: false, size: "XL" },
          { id: 6, action: false, size: "2XL" },
          { id: 7, action: false, size: "3XL" },
          { id: 8, action: false, size: "4XL" },
        ],
        shoeSize: [
          { id: 1, action: false, size: "37" },
          { id: 2, action: false, size: "38" },
          { id: 3, action: false, size: "39" },
          { id: 4, action: false, size: "40" },
          { id: 5, action: false, size: "41" },
          { id: 6, action: false, size: "42" },
          { id: 7, action: false, size: "43" },
          { id: 8, action: false, size: "44" },
        ],
        ArrayRating: [
          { id: 1, check: false, value: 4, text: "& Больше" },
          { id: 2, check: false, value: 4, text: "" },
          { id: 3, check: false, value: 2, text: "" },
        ],
    });

    const [state, setState] = useState({
        brandShow: screenSize.width <= 768 ? true : false,
        budgetShow: screenSize.width <= 768 ? true : false,
        gender: screenSize.width <= 768 ? true : false,
        catolog: screenSize.width <= 768 ? true : false,
        
        ColorsShow: screenSize.width <= 768 ? true : false,
        // ClothingShow: screenSize.width <= 768 ? true : false,
        // TrouserShow: screenSize.width <= 768 ? true : false,
        // ShoesShow: screenSize.width <= 768 ? true : false,
        // customerRreviews: screenSize.width <= 768 ? true : false,
        // availability: screenSize.width <= 768 ? true : false, 
        
        //--------------
        checkBrand: false,
        checkedPrize: true,
    });

    const Min = "60 000";
    const Max = "1 860 000";
    const [values] = useState([Min, Max]);

    const HandleCheckStatus = () => {};
    const HandleBrandFilter = () => {};
    const HandleColorCheck = () => {};

    return (
        <main>
            <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
                <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-1 ">
                    <p className="text-xl font-AeonikProMedium">Фильтры</p>
                    <button
                        onClick={onClick}
                    >
                        <MenuCloseIcons colors={"#000"} />
                    </button>
                </section>
                <section className="w-full h-[410px] flex flex-col items-center">
                    <action className="w-full h-fit flex items-center justify-center flex-wrap gap-x-7 mb-[24px] px-4">
                        <form className='w-full flex flex-col items-center'>

                            <div className='w-full h-[290px] overflow-scroll mt-2'>
                                <ul>
                                   <li className="w-full text-[#303030] text-base font-AeonikProRegular">
                                        <article
                                            className="w-full flex justify-between items-center my-4"
                                            onClick={(event) => {
                                            event.target.classList.toggle("open");
                                            }}
                                        >
                                            <figure
                                                onClick={() => setState({ ...state, gender: !state.gender })}
                                                className="w-full flex items-center justify-between cursor-pointer select-none border-b border-searchBgColor"
                                            >
                                                <p className="not-italic font-AeonikProRegular leading-4 mb-3">
                                                    По полу
                                                </p>
                                                <p
                                                    className={`${
                                                    state?.gender ? "rotate-[90deg]" : ""
                                                    } duration-300 mb-3`}
                                                >
                                                    <ArrowTopIcons colors={"#303030"} />
                                                </p>
                                            </figure>
                                        </article>
                                        <article
                                            className={`w-full flex items-center justify-between overflow-hidden ${
                                            state?.gender
                                                ? "duration-300 h-0"
                                                : "duration-300 h-[94px] mt-5 "
                                            } duration-300 flex flex-col gap-y-2`}
                                        >
                                            <div className='w-full flex flex-wrap justify-between items-center gap-y-2 gap-x-2'>                                            
                                                {products?.genders.map((data) => {
                                                return (
                                                    <div
                                                        key={data?.id}
                                                        className={`${data.id === 4 ? 'text-red-600' : 'text-black'} w-[48.8%] h-10 rounded-lg flex flex-row items-center justify-center border border-[#dcdce1] hover:text-white focus:bg-fullBlue hover:bg-fullBlue focus:text-white cursor-pointer `}
                                                        onClick={HandleCheckStatus(data?.id)}
                                                    >
                                                        <p className="not-italic font-AeonikProMedium tracking-[1%] text-sm leading-4">
                                                            {data?.type}
                                                        </p>
                                                    </div>
                                                );
                                                })}
                                            </div>

                                        </article>
                                    </li>
                                   <li className="w-full text-[#303030] text-base font-AeonikProRegular">
                                        <article
                                            className="w-full flex justify-between items-center my-4"
                                            onClick={(event) => {
                                            event.target.classList.toggle("open");
                                            }}
                                        >
                                            <figure
                                                onClick={() => setState({ ...state, catolog: !state.catolog })}
                                                className="w-full flex items-center justify-between cursor-pointer select-none border-b border-searchBgColor"
                                            >
                                                <p className="not-italic font-AeonikProRegular leading-4 mb-3">
                                                    Каталоги
                                                </p>
                                                <p
                                                    className={`${
                                                    state?.catolog ? "rotate-[90deg]" : ""
                                                    } duration-300 mb-3`}
                                                >
                                                    <ArrowTopIcons colors={"#303030"} />
                                                </p>
                                            </figure>
                                        </article>
                                        {/* Field */}
                                        <article
                                            className={`w-full overflow-hidden ${
                                            state?.catolog
                                                ? "duration-300 h-0"
                                                : "duration-300 h-[240px] mt-5 "
                                            } duration-300 flex flex-col gap-y-2`}
                                        >
                                            {products?.Catolog.map((data) => {
                                                return (
                                                    <figure
                                                        key={data?.id}
                                                        className="w-full h-10 rounded-lg justify-center border border-[#dcdce1] hover:text-white focus:bg-fullBlue hover:bg-fullBlue focus:text-white flex items-center cursor-pointer text-black"
                                                        onClick={HandleCheckStatus(data?.id)}
                                                    >
                                                    <p className="not-italic font-AeonikProMedium tracking-[1%] text-sm leading-4">
                                                        {data?.name}
                                                    </p>
                                                    </figure>
                                                );
                                                })}
                                        </article>
                                    </li>  
                                    <li className="w-full text-[#303030] text-base font-AeonikProRegular">
                                        <article
                                            className="w-full flex justify-between items-center my-4"
                                            onClick={(event) => {
                                            event.target.classList.toggle("open");
                                            }}
                                        >
                                            <figure
                                                onClick={() =>  setState({ ...state, brandShow: !state.brandShow })}
                                                className="w-full flex items-center justify-between cursor-pointer select-none border-b border-searchBgColor"
                                            >
                                                <p className="not-italic font-AeonikProRegular leading-4 mb-3">
                                                    Бренды
                                                </p>
                                                <p
                                                    className={`${
                                                    state?.brandShow ? "rotate-[90deg]" : ""
                                                    } duration-300`}
                                                >
                                                    <ArrowTopIcons colors={"#303030"} />
                                                </p>
                                            </figure>
                                        </article>
                                        <article
                                            className={`w-full flex items-start justify-between border-0 overflow-hidden ${
                                            state?.brandShow
                                                ? "duration-300 h-0"
                                                : "duration-300 h-[110px] mt-3"
                                            } duration-300`}
                                        >

                                            {/* Field */}
                                            <article
                                            className={`w-full flex justify-between flex-wrap`}
                                            >
                                            {products?.brandWear.map((data) => {
                                                return (
                                                <div
                                                    key={data?.id}
                                                    onClick={() => HandleBrandFilter(data?.id)}
                                                    className="w-1/3 flex items-center cursor-pointer select-none mb-4 "
                                                >
                                                    <article
                                                    className={`w-5 h-5 p-1 flex items-center justify-center ${
                                                        data?.action ? "bg-fullBlue border-fullBlue" : "bg-white"
                                                    }  mr-[5px] rounded-[5px] border border-borderColorCard`}
                                                    >
                                                        <div className="text-white">
                                                            <BsCheckLg size={10} />
                                                        </div>
                                                    </article>
                                                    <article className="flex items-center font-AeonikProRegular text-sm leading-4 text-[#303030]">
                                                        {data?.name}
                                                    </article>
                                                </div>
                                                );
                                            })}
                                            </article>
                                        </article>
                                    </li>
                                    <li className="w-full text-[#303030] text-base font-AeonikProRegular">
                                        <article
                                            className="w-full flex justify-between items-center my-4"
                                            onClick={(event) => {
                                            event.target.classList.toggle("open");
                                            }}
                                        >
                                            <figure
                                                 onClick={() => setState({ ...state, budgetShow: !state.budgetShow })}
                                                className="w-full flex items-center justify-between cursor-pointer select-none border-b border-searchBgColor"
                                            >
                                                <p className="not-italic font-AeonikProRegular leading-4 mb-3">
                                                    Бюджет
                                                </p>
                                                <p
                                                    className={`${
                                                    state?.budgetShow ? "rotate-[90deg]" : ""
                                                    } duration-300`}
                                                >
                                                    <ArrowTopIcons colors={"#303030"} />
                                                </p>
                                            </figure>
                                        </article>
                                        <article
                                            className={`border-1 border-green-600  overflow-hidden  ${
                                            state?.budgetShow
                                                ? "duration-300 h-0"
                                                : "duration-300 h-[100px] "
                                            } duration-300`}
                                        >
                                            <figure className="w-full h-12 mt-2 pb-1 px-[2px]">
                                                <div className=" w-full flex justify-between items-center gap-x-1">
                                                    <div className=" h-fit  font-AeonikProRegular text-sm leading-4 tracking-[1%]">
                                                        от
                                                        <span className='text-lg mr-[2px] ml-[5px]'>{values[0]}</span>
                                                        сум
                                                    </div>
                                                    
                                                    <div className=" h-fit not-italic font-AeonikProRegular text-sm leading-4 tracking-[1%]">
                                                        до
                                                        <span className='text-lg mr-[2px] ml-[5px]'>{values[1]}</span>
                                                        сум
                                                    </div>
                                                </div>
                                                <div className="relative z-10">
                                                    {" "}
                                                    <ReactSlider
                                                    className="horizontal-slider"
                                                    thumbClassName="example-thumb"
                                                    trackClassName="example-track"
                                                    defaultValue={[0, 100]}
                                                    ariaLabel={["Lower thumb", "Upper thumb"]}
                                                    pearling
                                                    minDistance={10}
                                                    />
                                                </div>
                                            </figure>
                                        </article>
                                    </li>
                                    <li className="w-full text-[#303030] text-base font-AeonikProRegular">
                                        <article
                                            className="w-full flex justify-between items-center my-4"
                                            onClick={(event) => {
                                            event.target.classList.toggle("open");
                                            }}
                                        >
                                            <div
                                                onClick={() => setState({ ...state, ColorsShow: !state.ColorsShow })}
                                                className="w-full flex items-center justify-between cursor-pointer select-none border-b border-searchBgColor"
                                            >
                                                <p className="not-italic font-AeonikProRegular leading-4 mb-3">
                                                    Цвет
                                                </p>
                                                <p
                                                    className={`${
                                                    state?.ColorsShow ? "rotate-[90deg]" : ""
                                                    } duration-300 mb-3`}
                                                >
                                                    <ArrowTopIcons colors={"#303030"} />
                                                </p>
                                            </div>
                                        </article>
                                        <article
                                            className={`w-full flex flex-wrap items-center bg-white hover:backdrop-brightness-125 hover:bg-white/60 gap-x-[12px] gap-y-[10px] border-0 overflow-hidden  ${
                                            state?.ColorsShow
                                                ? "duration-300 h-0"
                                                : "duration-300 h-[180px] mt-5"
                                            } duration-300 `}
                                        >
                                                {products?.changeColor.map((item) => {
                                                    return (
                                                        <div className='w-[17%] flex items-center justify-center flex-wrap'>
                                                            <div
                                                            key={item?.id}
                                                            onClick={() => HandleColorCheck(item?.id)}
                                                            className={` w-[35px] h-[35px] ${item?.colors} rounded-full flex items-center justify-center hover:scale-110 duration-300 cursor-pointer  border border-solid border-borderColorCard`}
                                                            htmlFor="Color1"
                                                            >
                                                            {item?.action ? (
                                                                <p className="w-[14px]">
                                                                    <InputCheckedTrueIcons colors={"#fff"} />
                                                                </p>
                                                            ) : null}
                                                            </div>
                                                            <div className='mt-[2px]'>data</div>
                                                        </div>
                                                    );
                                                })}
                                        </article>
                                    </li>
                                </ul>

                            </div>
                        </form>
                    </action>


                    <action className="w-full px-4 flex items-center border-t pt-[18px] justify-between gap-x-3 mb-9">
                        <button
                            onClick={onClick}
                            className="w-[45%] h-[38px] text-base font-AeonikProMedium bg-white text-borderWinter border border-borderWinter rounded-md active:scale-95">Закрыт</button>
                        <button className="w-[55%] h-[38px] text-base font-AeonikProMedium bg-borderWinter text-white border border-borderWinter rounded-md active:scale-95">Сохранить</button>
                    </action>
                </section>
            </div>
        </main>
    )
}
export default React.memo(FilterDropUp)
