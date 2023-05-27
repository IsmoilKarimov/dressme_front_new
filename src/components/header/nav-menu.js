import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { home, bucket, heart, user, catalogBlack} from "../../assets/imgs";
// import { dressMainData } from "../../ContextHook/ContextMenu";

const menus = [
    {link:"#", name: 'Главная', icon: home, id:1},
    {link:"#", name: 'Каталог', icon: catalogBlack , id:2 },
    {link:"#", name: 'Корзина', icon: bucket, id:3},
    {link:"#", name: 'Избранное', icon: heart, id:4},
    {link:"/sign_in", name: 'Профиль', icon: user, id:5}
]


const NavMenu = () => {

    // const [dressInfo, setDressInfo] = useContext(dressMainData)
  
    // let shadowStyle = "";
    // if (dressInfo?.type === 1111) {
    //   shadowStyle = "shadow-green-300/100 ";
    // }
    // if (dressInfo?.type === 2222) {
    //   shadowStyle = "shadow-amber-200/100  ";
    // }
    // if (dressInfo?.type === 3333) {
    //   shadowStyle = "shadow-orange-200/100   ";
    // }
    // if (dressInfo?.type === 4444) {
    //   shadowStyle = "shadow-sky-200/100 ";
    // }

    const [active, setActive] = useState(0)

    return(
        <div className={`bg-white shadow-navMenuShadov  px-4 w-full rounded-t-xl md:hidden z-[55] h-full overscroll-none overflow-y-hidden`}>
            <ul className="flex items-center justify-between text-[10px] font-AeonikProMedium py-1 ">
                
                {menus.map((menu, index) => (
                    
                    <li className="w-[72px] h-[56px]" key={index}>

                        <Link to={menu?.link}  className="w-full flex flex-col text-center pt-2" onClick={()=> {setActive(index)}}>
                            
                            <span className={`relative mx-auto cursor-pointer`}> 
                                <img src={menu.icon} className=" w-5 h-5 mb-[6px]"/>
                                <span className={`${index === 2 ? 'count bg-red-700 w-4 h-4 text-white text-[10px] rounded flex items-center justify-center absolute -top-[10px] -right-[10px] font-AeonikProMedium' : 'hidden'}`}>4</span>
                            </span>
                            <span >
                                <div>{menu.name}</div>
                            </span>
                                        
                        </Link>

                    </li>

                ))}
            </ul>
        </div>
    )
}
export default NavMenu