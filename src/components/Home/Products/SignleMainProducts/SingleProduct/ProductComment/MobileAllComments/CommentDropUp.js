import { Rate } from 'antd';
import { AddComment, FreeStar, MenuCloseIcons } from '../../../../../../../assets/icons';
import { useState } from 'react';

export default function CommentDropUp({onClick}) {

    const [rating, setRating] = useState(false)

    return (
        <main>
            <div className="w-full mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
                <section className="h-fit w-full flex items-center  justify-start mt-3 px-4">
                    <button 
                    className='w-full'
                        onClick={onClick}
                    >
                        <MenuCloseIcons colors={"#000"} />
                    </button>
                </section>
                <section className={` ${rating ? 'flex' : 'hidden'} w-full items-center justify-center `}>
                    <Rate />
                </section>
                <section className="w-full h-[80px] gap-x-3 px-4 flex justify-between items-center">
                    <div className='w-[90%] h-[43px] flex items-center justify-between text-[#8c8c8c] border border-[#e5e5e5] rounded-lg px-3 text-[13px] font-AeonikProRegular'>
                        <textarea placeholder='Написать отзыв' className='w-[90%] mt-4 resize-none'></textarea>
                        <button
                            onClick={() => setRating(!rating) }
                        >
                            <FreeStar width={24} height={24} colors={"#F4A622"}/>
                        </button>
                    </div>
                    <button className='w-[43px] h-[43px] flex items-center justify-center rounded-lg bg-borderWinter active:scale-95'>
                        <AddComment />
                    </button>
                </section>
            </div>
        </main>
    )
}
