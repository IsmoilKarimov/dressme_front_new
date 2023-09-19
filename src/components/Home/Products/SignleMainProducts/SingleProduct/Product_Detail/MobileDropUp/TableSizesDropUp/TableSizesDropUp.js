import React from 'react'
import { MenuCloseIcons } from '../../../../../../../../assets/icons'

export default function TableSizesDropUp({onClick}) {

    const tableSizes = {
        sizes: [
            {id:1, numbers: "1-2"},
            {id:2, numbers: "2-3"},
            {id:3, numbers: "3-4"},
            {id:4, numbers: "4-5"},
            {id:5, numbers: "5-6"},
            {id:6, numbers: "6-7"},
            {id:7, numbers: "7-8"},
            {id:8, numbers: "8-9"},
            {id:9, numbers: "9-10"},
        ],
        letter_sizes: [
            {id:1, numbers: "XXS"},
            {id:2, numbers: "XS"},
            {id:3, numbers: "S"},
            {id:4, numbers: "M"},
            {id:5, numbers: "L"},
            {id:6, numbers: "XL"},
            {id:7, numbers: "XXL"},
            {id:8, numbers: "3XL"},
            {id:9, numbers: "4XL"},
            {id:10, numbers: "5XL"},
            {id:11, numbers: "6XL"},
            {id:12, numbers: "7XL"},
        ],
        chest_sizes : [
            {id:1, numbers: "1-2"},
            {id:2, numbers: "2-3"},
            {id:3, numbers: "3-4"},
            {id:4, numbers: "4-5"},
            {id:5, numbers: "5-6"},
            {id:6, numbers: "6-7"},
            {id:7, numbers: "7-8"},
            {id:8, numbers: "8-9"},
            {id:9, numbers: "9-10"},
        ],
        waist_sizes: [
            {id:1, numbers: "1-2"},
            {id:2, numbers: "2-3"},
            {id:3, numbers: "3-4"},
            {id:4, numbers: "4-5"},
            {id:5, numbers: "5-6"},
            {id:6, numbers: "6-7"},
            {id:7, numbers: "7-8"},
            {id:8, numbers: "8-9"},
            {id:9, numbers: "9-10"},
        ],
        hip_sizes: [
            {id:1, numbers: "1-2"},
            {id:2, numbers: "2-3"},
            {id:3, numbers: "3-4"},
            {id:4, numbers: "4-5"},
            {id:5, numbers: "5-6"},
            {id:6, numbers: "6-7"},
            {id:7, numbers: "7-8"},
            {id:8, numbers: "8-9"},
            {id:9, numbers: "9-10"},
        ],
        age: [
            {id:1, ages: "1-2"},
            {id:2, ages: "2-3"},
            {id:3, ages: "3-4"},
            {id:4, ages: "4-5"},
            {id:5, ages: "5-6"},
            {id:6, ages: "6-7"},
            {id:7, ages: "7-8"},
            {id:8, ages: "8-9"},
            {id:9, ages: "9-10"},
        ]
    }

  return (
    <main>
        <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
            <section className="w-full flex items-center  justify-between px-4 my-5">
                <p className="text-xl font-AeonikProMedium">Таблица размеров</p>
                <button 
                    onClick={onClick}
                >
                    <MenuCloseIcons colors={"#000"} />
                </button>
            </section>
            <section className="w-full h-[280px] pl-4 flex flex-col flex-nowrap">
                <action className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
                    <div className='w-[42%] h-full flex flex-col'>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Размер</div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Буквенный Размер</div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват груди, <span className='text-[#a1a1a1] ml-1'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват талии, <span className='text-[#a1a1a1] ml-1'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Обхват бедер, <span className='text-[#a1a1a1] ml-1'>в см</span></div>
                        <div className='text-base font-AeonikProRegular h-10 flex items-center'>Возраст</div>
                    </div>
                    <div className='w-[58%] pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col'>
                        {/* Sizes */}
                        <div className='w-[100%] h-10 px-3 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.sizes.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.numbers}</div>
                                ))}
                            </div>
                        </div>
                        {/* Letter Sizes */}
                        <div className='w-full bg-categoryModalBgColor rounded-l-lg h-10 pl-2 pr-4 ml-[5px] text-[13px] font-AeonikProRegular flex items-center justify-between'>
                             <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.letter_sizes.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.numbers}</div>
                                ))}
                            </div>
                        </div>
                        {/* Chest Sizes */}
                        <div className='w-[100%] h-10 px-3 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.chest_sizes.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.numbers}</div>
                                ))}
                            </div>
                        </div>
                        {/* Waist Sizes */}
                        <div className='w-full bg-categoryModalBgColor rounded-l-lg h-10 pl-2 pr-4 ml-[5px] text-[13px] font-AeonikProRegular flex items-center justify-between'>
                             <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.waist_sizes.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.numbers}</div>
                                ))}
                            </div>
                        </div>
                        {/* Hip Sizes */}
                        <div className='w-[100%] h-10 px-3 text-[13px] font-AeonikProRegular flex items-center justify-between'>
                            <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.hip_sizes.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.numbers}</div>
                                ))}
                            </div>
                        </div>
                        {/* Ages */}
                        <div className='w-full bg-categoryModalBgColor rounded-l-lg h-10 pl-2 pr-4 ml-[5px] text-[13px] font-AeonikProRegular flex items-center justify-between'>
                             <div className='w-[150%] overflow-x-auto flex flex-nowrap items-center gap-x-[23px]'>
                                {tableSizes.age.map(data => (
                                    <div key={data.id} className='flex flex-shrink-0'>{data.ages}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </action>
            </section>
        </div>
    </main>
  )
}
