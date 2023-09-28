import React from 'react'
import { MenuCloseIcons } from '../../../../assets/icons';

function FilterDropUp({ onClick }) {

    const LocationsList = [
        { id: 1, type: "По полу" },
        { id: 2, type: "Каталоги" },
        { id: 3, type: "Бренды" },
        { id: 4, type: "Бюджет" },
        { id: 5, type: "Цвет" },
    ];

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
                <section className="w-full h-[330px] px-4 flex flex-col items-center">
                    <action className="w-full h-fit flex items-center justify-center flex-wrap gap-x-7 mb-[28px]">
                        <form className='w-full flex flex-col items-center'>

                            <div className='w-full h-[236px] overflow-auto VerticelScroll'>
                                {LocationsList.map((data) => {
                                    return (
                                        <div key={data.id} className='w-full flex items-center justify-start border-b border-searchBgColor text-[#303030] pb-[10px] my-3 text-base font-AeonikProRegular'>
                                            {data.type}
                                        </div>
                                    );
                                })}
                            </div>
                        </form>
                    </action>
                    <action className="w-full flex items-center justify-between gap-x-3 mb-10">
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
