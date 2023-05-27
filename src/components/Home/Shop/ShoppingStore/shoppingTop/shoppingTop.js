import { useContext, useState } from "react";
import { DownCate, allStore, manGenderStore, womanGenderStore } from "../../../../../assets/imgs"
import { dressMainData } from "../../../../../ContextHook/ContextMenu";


const ShoppingTop = () => {
    
    const [dressInfo] = useContext(dressMainData);

    let dataStyle = "";
    let shadowStyle = "";
    if (dressInfo?.type === 1111) {
        dataStyle = "text-borderSpring ";
        shadowStyle = "hover:shadow-green-300/100 ";
    }
    if (dressInfo?.type === 2222) {
        dataStyle = "text-borderSummer";
        shadowStyle = "hover:shadow-amber-200/100  ";
    }
    if (dressInfo?.type === 3333) {
        dataStyle = "text-borderAutumm";
        shadowStyle = "hover:shadow-orange-200/100   ";
    }
    if (dressInfo?.type === 4444) {
        dataStyle = "text-borderWinter";
        shadowStyle = "hover:shadow-sky-200/100  ";
    }

    const [typesCategory, setTypeCategory] = useState([
        {id:1, action: true, name: 'Все', icon:allStore},
        {id:2, action: false, name: 'Верхняя',icon:''},
        {id:3, action: false, name: 'Нижняя', icon:''},
        {id:4, action: false, name: 'Обувь', icon:''},
        {id:5, action: false, name: 'Аксессуары', icon:''},
    ])

    const handleTypeCheck = (value) => {
        setTypeCategory((data) => {
        return data.map((e) => {
            if (e.id == value) {
            return { ...e, action: true};
            } else return { ...e, action: false };
        });
        });
    };

    const [genderCategory, setGenderCategory] = useState([
        {id:1, action: true, name: 'Все', icon:allStore},
        {id:2, action: false, name: '',icon:manGenderStore},
        {id:3, action: false, name: '', icon:womanGenderStore},
    ])

    const handleGenderCheck = (value) => {
        setGenderCategory((data) => {
        return data.map((e) => {
            if (e.id == value) {
            return { ...e, action: true};
            } else return { ...e, action: false };
        });
        });
    };

    return(
        <div className="flex flex-col min-h-[44px]  justify-center items-center my-5">
            <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
                <div className="flex items-center">
                    
                    <div className="w-[98%] flex items-center border rounded-lg bg-slate-50 mr-6">
                        {typesCategory.map(data => {
                            console.log(data);
                            return(
                                <div key={data.id} className="flex justify-between h-10 rounded-lg">
                                    <button
                                        key={data.id}
                                        onClick={() => handleTypeCheck(data.id)}
                                        className={`flex items-center justify-center h-10 text-[15px] text-black text-center px-7 font-AeonikProRegular ${
                                            data.action
                                                ? `{ bg-white border w-full h-[98%] my-auto mx-auto  border-searchBgColor rounded-lg ${dataStyle}`
                                                : ""
                                        } `}
                                    >
                                        {data.icon ? (<img src={data.icon} alt="" className="mr-2 "/>) : ''}
                                        <span className="mt-1">{data.name}</span>
                                    </button>
                                    <span className={`${data.id === 5 ? 'text-searchBgColor hidden' : 'text-searchBgColor flex items-center'}`}>|</span>
                                </div>    
                            )
                        })}
                    </div>

                    <div className="w-[40%] flex items-center border rounded-lg bg-slate-50">
                        {genderCategory.map(data => {
                            return(
                                <div key={data.id} className="flex justify-between h-10 rounded-lg ">
                                    <button
                                        key={data.id}
                                        onClick={() => handleGenderCheck(data.id)}
                                        className={`flex items-center justify-center h-10 text-[15px] text-black text-center ${!data.name ? 'px-5' : 'px-7'} font-AeonikProRegular ${
                                            data.action
                                                ? `{ bg-white border w-full h-[98%] my-auto mx-auto  border-searchBgColor rounded-lg ${dataStyle}`
                                                : ""
                                        } `}
                                    >
                                        
                                        {data.icon ? (<img src={data.icon} alt=""/>) : ''}
                                        {data.name ? (<span className="mt-1 ml-2">{data.name}</span>) : ''}
                                        
                                    </button>
                                    <span className={`${data.id === 3 ? 'text-searchBgColor hidden' : 'text-searchBgColor flex items-center'}`}>|</span>
                                </div>
                            )
                        })}
                    </div>

                </div>
                
                
                <div className="w-[fit] flex items-center ">
                    <div className="flex items-center w-fit mr-4">
                        <span className="not-italic font-normal text-sm leading-4 text-setTexOpacity tractking-[1%]">
                        Сортировка:
                        </span>
                    </div>
                    <div>
                        <button className="w-[260px] h-[44px] px-4 rounded-lg bg-btnBgColor  border-searchBgColor border flex items-center justify-between  cursor-pointer select-none group  ">
                        <span className="not-italic font-AeonikProMedium text-sm leading-4 text-black tracking-[1%]  mt-1">
                            Последние добавленные{" "}
                        </span>
                        <span>
                            <img src={DownCate} className={`rotate-[180deg]`} alt="" />
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoppingTop