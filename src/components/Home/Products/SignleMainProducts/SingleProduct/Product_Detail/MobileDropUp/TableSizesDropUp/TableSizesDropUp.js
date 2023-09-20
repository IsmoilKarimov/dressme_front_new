import React from 'react'
import { MenuCloseIcons } from '../../../../../../../../assets/icons'

export default function TableSizesDropUp({onClick}) {

    const tableSizes = {
        sizes: [
            {id:1, numbers: "45-52"},
            {id:2, numbers: "45-52"},
            {id:3, numbers: "53-57"},
            {id:4, numbers: "58-62"},
            {id:5, numbers: "53-68"},
            {id:6, numbers: "69-75"},
            {id:7, numbers: "76-80"},
            {id:8, numbers: "81-92"},
            {id:9, numbers: "93-100"},
            {id:10, numbers: "101-110"},
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
        ],
        chest_sizes : [
            {id:1, numbers: "45-52"},
            {id:2, numbers: "45-52"},
            {id:3, numbers: "53-57"},
            {id:4, numbers: "58-62"},
            {id:5, numbers: "53-68"},
            {id:6, numbers: "69-75"},
            {id:7, numbers: "76-80"},
            {id:8, numbers: "81-92"},
            {id:9, numbers: "93-100"},
            {id:10, numbers: "101-110"},
        ],
        waist_sizes: [
            {id:1, numbers: "45-52"},
            {id:2, numbers: "45-52"},
            {id:3, numbers: "53-57"},
            {id:4, numbers: "58-62"},
            {id:5, numbers: "53-68"},
            {id:6, numbers: "69-75"},
            {id:7, numbers: "76-80"},
            {id:8, numbers: "81-92"},
            {id:9, numbers: "93-100"},
            {id:10, numbers: "101-110"},
        ],
        hip_sizes: [
            {id:1, numbers: "45-52"},
            {id:2, numbers: "45-52"},
            {id:3, numbers: "53-57"},
            {id:4, numbers: "58-62"},
            {id:5, numbers: "53-68"},
            {id:6, numbers: "69-75"},
            {id:7, numbers: "76-80"},
            {id:8, numbers: "81-92"},
            {id:9, numbers: "93-100"},
            {id:10, numbers: "101-110"},
        ],
        age: [
            {id:1, ages: "10-15"},
            {id:2, ages: "15-20"},
            {id:3, ages: "25-31"},
            {id:4, ages: "32-37"},
            {id:5, ages: "38-41"},
            {id:6, ages: "41-46"},
            {id:7, ages: "47-50"},
            {id:8, ages: "51-57"},
            {id:9, ages: "58-65"},
            {id:10, ages: "66-90"},
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
                    <div className='w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col'>
                       <div className='w-[250%] flex items-center justify-center'> 
                            <div className='w-full  flex items-center flex-col text-[13px] font-AeonikProRegular '>
                                {/* Sizes */}
                                <div className='w-full h-10 flex items-center justify-between'>
                                    {tableSizes.sizes.map(data => (
                                        <div className='w-full flex items-center justify-center'>
                                            <div key={data.id} className='flex items-center justify-center flex-shrink-0'>{data.numbers}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Letter Sizes */}
                                <div className='w-[99%] bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-between'>
                                    {tableSizes.letter_sizes.map(data => (
                                    <div className='w-full flex items-center justify-center ml-[-4px]'>
                                        <div key={data.id} className=' flex-shrink-0'>{data.numbers}</div>
                                    </div>
                                    ))}
                                </div>
                                {/* Chest Sizes */}
                                <div className='w-[99%] h-10 flex items-center justify-between'>
                                    {tableSizes.chest_sizes.map(data => (
                                        <div className='w-full flex items-center justify-center'>
                                            <div key={data.id} className='flex-shrink-0'>{data.numbers}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Waist Sizes */}
                                <div className='w-[99%] bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-between'>
                                    {tableSizes.waist_sizes.map(data => (
                                        <div className='w-full flex items-center justify-center ml-[-4px]'>
                                            <div key={data.id} className='flex-shrink-0'>{data.numbers}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Hip Sizes */}
                                <div className='w-[99%] h-10 flex items-center justify-between'>
                                    {tableSizes.hip_sizes.map(data => (
                                        <div className='w-full flex items-center justify-center'>
                                            <div key={data.id} className='flex-shrink-0'>{data.numbers}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Ages */}
                                <div className='w-[99%] bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-between'>
                                    {tableSizes.age.map(data => (
                                        <div className='w-full flex items-center justify-center ml-[-4px]'>
                                            <div key={data.id} className='flex-shrink-0'>{data.ages}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </action>
            </section>
        </div>
    </main>
  )
}
