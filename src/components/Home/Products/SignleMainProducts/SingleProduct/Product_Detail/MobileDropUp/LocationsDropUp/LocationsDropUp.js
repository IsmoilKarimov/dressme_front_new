import React from 'react'
import { MenuCloseIcons, SearchIcons } from '../../../../../../../../assets/icons'

export default function LocationDropUp({onClick}) {

    const LocationsList = [
        { id: 1, region: "Yunusobod" },
        { id: 2, region: "Mirzo Ulugbek" },
        { id: 3, region: "Mirobod" },
        { id: 4, region: "Mirobod" },
        { id: 5, region: "Mirzo Ulugbek" },
        { id: 6, region: "Mirzo Ulugbek" },
        { id: 7, region: "Mirzo Ulugbek" },
        { id: 8, region: "Mirzo Ulugbek" },
        { id: 9, region: "Mirzo Ulugbek" },
        { id: 10, region: "Mirzo Ulugbek" },
        ];

  return (
    <main>
        <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
            <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-6">
                <p className="text-xl font-AeonikProMedium">Таблица размеров</p>
                <button 
                    onClick={onClick}
                >
                    <MenuCloseIcons colors={"#000"} />
                </button>
            </section>
            <section className="w-full h-[376px] px-4 flex flex-col items-center">
                <action className="w-full h-fit flex items-center justify-center flex-wrap gap-x-7 mb-[40px]">
                    
                </action>
                
            </section>
        </div>
    </main>
  )
}
