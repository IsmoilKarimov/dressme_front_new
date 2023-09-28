import React from 'react'
import { MenuCloseIcons } from '../../../../assets/icons';

function ClothingTypesDropUp({ onClick }) {

    const ClothingTypes = [
        { id: 1, name: "Тренировка" },
        { id: 2, name: "Плавание" },
        { id: 3, name: "Футбол" },
        { id: 4, name: "Волейбол" },
        { id: 5, name: "Баскетбол" },
        { id: 6, name: "Бокс/MMA" },
        { id: 7, name: "Каратэ" },
        { id: 8, name: "Борьба" },
        { id: 9, name: "Дзюдо" },
        { id: 10, name: "Кунг-фу" },
        { id: 11, name: "Теннис" },
        { id: 12, name: "Настольный Теннис" },
    ];

    return (
        <main>
            <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
                <section className="h-[52px] w-full bg-btnBgColor flex items-center  justify-between px-4 mb-1 ">
                    <p className="text-xl font-AeonikProMedium">Тип одежды</p>
                    <button
                        onClick={onClick}
                    >
                        <MenuCloseIcons colors={"#000"} />
                    </button>
                </section>
                <section className="w-full h-[380px] px-4 flex flex-col items-center">
                    <action className="w-full h-fit flex items-center justify-center flex-wrap gap-x-7 mb-[24px]">
                        <form className='w-full flex flex-col items-center'>

                            <div className='w-full h-[290px] overflow-auto VerticelScroll'>
                                {ClothingTypes.map((data) => {
                                    return (
                                        <div key={data.id} className='w-full flex items-center justify-start border-b border-searchBgColor text-[#303030] pb-[10px] my-3 text-base font-AeonikProRegular'>
                                            {data.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </form>
                    </action>
                    <action className="w-full flex items-center justify-between gap-x-3 mb-4">
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
export default React.memo(ClothingTypesDropUp)

