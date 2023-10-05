import React from 'react'
import { MenuCloseIcons } from '../../../assets/icons';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from "react-slick";

function CarouselModalMarket() {
    const imgGallery = [
        { id: 1, img: "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg" },
        { id: 2, img: "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" },
        { id: 3, img: "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" },
        { id: 4, img: "https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" },
    ]
    const NextArrowModal = (props) => {
        const { onClick } = props;
        return (
            <main
                className={`absolute text-center cursor-pointer no-underline opacity-70 w-[44px] h-[44px] hidden md:flex items-center justify-center top-[50%] z-[217] right-[0px]  rounded-full bg-bgColor duration-200 border  border-searchBgColor  `}
                onClick={onClick}
            >
                <button className="next">
                    <GrFormNext size={20} />
                </button>
            </main>
        );
    };
    const PrevArrowModal = (props) => {
        const { onClick } = props;
        return (
            <main
                className={`absolute text-center cursor-pointer no-underline opacity-70 w-[44px] h-[44px] hidden md:flex items-center justify-center top-[50%] z-[217] left-[0px] rounded-full bg-bgColor duration-200 border  border-searchBgColor`}
                onClick={onClick}
            >
                <button className="prev">
                    <GrFormPrevious size={20} />
                </button>
            </main>
        );
    };
    let settingsModal = {
        nextArrow: <NextArrowModal />,
        prevArrow: <PrevArrowModal />,
        infinite: true,
        dots: false,
        speed: 500,
    };
    return (
        <section
            className={` rounded-lg  w-full md:w-fit h-fit  cursor-pointer flex flex-col items-center justify-center 
                `}
        >

            <div className="w-full h-full ">
                <Slider
                    className="relative w-full h-fit md:!w-[780px] md:h-[80vh]   md:rounded-lg px-[50px]"
                    {...settingsModal}
                >
                    {imgGallery?.map((data) => {
                        return (
                            <figure className="relative  overflow-hidden w-full md:h-[80vh] md:rounded-lg   flex items-center justify-center">
                                <img className="w-full h-full  object-contain" src={data?.img} alt="" />
                                <figcaption className="flex md:hidden w-full absolute items-center justify-between px-4 opacity-80 text-sm font-AeonikProMedium left-0 right-0 bottom-4 ">
                                    <span className="bg-bgCard pt-1 gap-x-[3px] rounded-[40%] px-3 py-1 flex items-center leading-5 tracking-wider  ">
                                        <p> {data.id}</p>/<p>{imgGallery.length}</p>
                                    </span>
                                </figcaption>
                            </figure>

                        );
                    })}

                </Slider>
            </div>

        </section>
    )
}

export default React.memo(CarouselModalMarket)