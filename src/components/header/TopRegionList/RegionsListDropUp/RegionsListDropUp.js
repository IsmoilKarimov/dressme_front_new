import React, { useEffect, useState } from 'react'
import { ArrowTopIcons, InputCheckedTrueIcons, MenuCloseIcons } from '../../../../assets/icons';
import { BsCheckLg } from 'react-icons/bs';
import ReactSlider from 'react-slider';

function RegionsListDropUp({ onClick }) {

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
            <div className="w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
                <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-1 ">
                    <p className="text-xl font-AeonikProMedium">Выберите регион</p>
                    <button
                        onClick={onClick}
                    >
                        <MenuCloseIcons width={"24"} height={"24"} colors={"#000"} />
                    </button>
                </section>
                <section className="w-full h-[550px] flex flex-col items-center">
                    <action className="w-full px-4 flex items-center border-t pt-[18px] justify-between gap-x-3 mb-9">
                        <button
                            onClick={onClick}
                            className="w-[45%] h-[38px] text-base font-AeonikProMedium bg-white text-borderWinter border border-borderWinter rounded-md active:scale-95">Закрыт</button>
                        <button className="w-[55%] h-[38px] text-base font-AeonikProMedium bg-borderWinter text-white border border-borderWinter rounded-md active:scale-95">Подтвердить</button>
                    </action>
                </section>
            </div>
        </main>
    )
}
export default React.memo(RegionsListDropUp)
