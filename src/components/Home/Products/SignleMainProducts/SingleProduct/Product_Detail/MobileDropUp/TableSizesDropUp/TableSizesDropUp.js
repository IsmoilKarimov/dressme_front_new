import React from 'react'
import { MenuCloseIcons } from '../../../../../../../../assets/icons'

export default function TableSizesDropUp({onClick}) {
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
            <section className="w-full h-[280px] px-4 flex flex-col flex-nowrap">
                <action className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
                    <div className='w-[42%] h-full flex flex-col'>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Размер</div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Буквенный Размер</div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват груди, <span className='text-[#a1a1a1]'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват талии, <span className='text-[#a1a1a1]'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват бедер, <span className='text-[#a1a1a1]'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Возраст</div>
                    </div>
                    <div className='w-[58%] pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col'>
                        <div className='w-full h-10 px-3 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>45-52</span>
                            <span>24-35</span>
                            <span>13-18</span>
                            <span>35-41</span>
                        </div>
                        <div className='w-full px-[8px] ml-[5px] rounded-l overflow-hidden bg-[#fdfdfd] h-10 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>XXS</span>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                        </div>
                        <div className='w-full px-[8px] h-10 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>45-52</span>
                            <span>24-35</span>
                            <span>13-18</span>
                            <span>35-41</span>
                        </div>
                        <div className='w-full px-[8px] ml-[5px] rounded-l overflow-hidden bg-[#fdfdfd] h-10 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>45-52</span>
                            <span>24-35</span>
                            <span>13-18</span>
                            <span>35-41</span>
                        </div>
                        <div className='w-full px-3 h-10 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>45-52</span>
                            <span>24-35</span>
                            <span>13-18</span>
                            <span>35-41</span>
                        </div>
                        <div className='w-full bg-[#fdfdfd] px-[8px] ml-[5px] rounded-l overflow-hidden h-10 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <span>45-52</span>
                            <span>24-35</span>
                            <span>13-18</span>
                            <span>35-41</span>
                        </div>
                    </div>
                </action>
            </section>
        </div>
    </main>
  )
}
