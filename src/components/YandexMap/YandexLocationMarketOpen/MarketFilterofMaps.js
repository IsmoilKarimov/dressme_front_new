import React, { useContext, useState } from 'react'
import { AutummBoyIcons, CheckedStatusIcons, CircleSuccessIcons, ClothesIcons, DollorIcons, ManGenIcons, ManWomGenBlack, ManWomanGen, MenuCloseIcons, SpringBoyIcons, SummerBoyIcons, TopBrandsIcon, WinterBoyIcons, WomanGenIcons } from '../../../assets/icons'
import ReactSlider from "react-slider";
import '../yandex.css'
import { dressMainData } from '../../../ContextHook/ContextMenu';
import { adidas, chanel, hm, lacoste, nike, puma, tommy, zara } from '../../../assets';
function MarketFilterofMaps({ onClick }) {
    const [dressInfo, setDressInfo] = useContext(dressMainData);

    const NoSelect = () => {

        return (

            <div className='w-full flex items-center  justify-center h-[350px]  bg-white'>
                <span className='text-[#a1a1a1] h-fit  px-5 text-center text-base not-italic font-AeonikProRegular'>

                    Выберите категорию, чтобы просмотреть товар!
                </span>
            </div>

        )
    }
    const ClothesList = () => {
        const [clothesList, setClothesList] = useState([
            { id: 1, name: "Головные уборы", isCheck: false },
            { id: 2, name: "Верхняя одежда", isCheck: false },
            { id: 3, name: "Нижняя одежда", isCheck: false },
            { id: 4, name: "Аксессуары", isCheck: false },
            { id: 5, name: "Обувь", isCheck: false },
            { id: 51, name: "Обувь", isCheck: false },
            { id: 52, name: "Обувь", isCheck: false },
            { id: 53, name: "Обувь", isCheck: false },
            { id: 54, name: "Обувь", isCheck: false },
        ])
        const handleClothesList = (UId) => {
            setClothesList(current => {
                return (current.map(item => {
                    if (item?.id == UId) {
                        return { ...item, isCheck: true }
                    } else {
                        return { ...item }
                    }
                }))
            })
        }
        return (
            <div>

                <div className='w-full h-[300px] overflow-auto VerticelScroll flex flex-col  bg-white'>
                    {
                        clothesList?.map(item => {
                            return (
                                <div onClick={() => handleClothesList(item?.id)} key={item?.id} className='w-full flex items-center justify-between cursor-pointer pt-4 pb-[10px] border-b border-searchBgColor'>
                                    <span>{item?.name}</span>
                                    {
                                        item?.isCheck &&
                                        <span><CircleSuccessIcons colors={"#000"} /></span>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <button className='w-full mt-5 h-[48px] rounded-lg flex items-center justify-center bg-fullBlue text-white'>
                    Готово
                </button>
            </div >
        )
    }
    const PriceRange = () => {
        const Min = "100";
        const Max = "12 000";
        const [values] = useState([Min, Max]);
        return (
            <div>
                <div className='marketfilter w-full h-[300px] border border-red-500 overflow-auto VerticelScroll flex items-center bg-white'>
                    <figure className="w-full h-[60px] bg-bgCategory  mt-4 pb-1 px-[2px]">
                        <div className=" w-full flex justify-center items-center gap-x-1">
                            <div className=" h-fit  not-italic font-AeonikProMedium text-base leading-4 text-center text-fullBlue tracking-[1%]">
                                {values[0]}
                            </div>{" "}
                            <div className=" h-fit pb-2">-</div>
                            <div className=" h-fit not-italic font-AeonikProMedium text-base leading-4 text-center text-fullBlue tracking-[1%]">
                                {values[1]}
                            </div>
                        </div>{" "}
                        <div className="relative z-10">
                            {" "}
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                defaultValue={[0, 100]}
                                ariaLabel={["Lower thumb", "Upper thumb"]}
                                pearling
                                minDistance={10}
                            />
                        </div>
                    </figure>
                </div>
                <button className='w-full mt-5 h-[48px] rounded-lg flex items-center justify-center bg-fullBlue text-white'>
                    Готово
                </button>
            </div >
        )

    }
    const GenderSelect = () => {
        const [personItems, setPersonItems] = useState([
            {
                id: 1111, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
                    { id: 4, anyIcons: <SpringBoyIcons />, name: "", action: false },
                ]
            },
            {
                id: 2222, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
                    { id: 4, anyIcons: <SummerBoyIcons />, name: "", action: false },
                ]
            },
            {
                id: 3333, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
                    { id: 4, anyIcons: <AutummBoyIcons />, name: "", action: false },
                ]
            },
            {
                id: 4444, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
                    { id: 4, anyIcons: <WinterBoyIcons />, name: "", action: false },
                ]
            }]);
        const handleFilterByUser = (fathId, childId) => {
            setPersonItems((current) => {
                return current?.map((data) => {
                    if (data?.id == fathId) {
                        let newDataColor = data.childText.map((e) => {
                            if (e.id == childId) {
                                return { ...e, action: true };
                            } else return { ...e, action: false };
                        });
                        console.log(newDataColor, "newDataColor");
                        return { ...data, childText: [...newDataColor] };
                    } else return data;
                });
            });
        }
        return (
            <div>
                <div className=' w-full h-[300px] overflow-auto VerticelScroll flex flex-col  bg-white'>
                    <div className=" box-border	w-full flex flex-col items-center  h-full ">

                        {personItems
                            ?.filter((value) => value.id === dressInfo?.type)
                            .map((data) => {
                                return (
                                    <div
                                        key={data?.id}
                                        className="w-full h-fit flex flex-col items-center  "
                                    >
                                        {
                                            data?.childText?.map(item => {
                                                return (
                                                    <button
                                                        key={item?.id}
                                                        onClick={() => handleFilterByUser(data?.id, item?.id)}
                                                        className={`${item?.action ? dressInfo?.BtnActiveSeason : " bg-white text-black"} border-b border-searchBgColor w-full h-fit  pt-4 pb-[10px] cursor-pointer  font-AeonikProMedium   justify-center flex items-center`}
                                                    >
                                                        {/* <img src={item?.anyIcons} alt="male" /> */}
                                                        <span>{item?.anyIcons}</span>
                                                        {
                                                            item?.name &&
                                                            <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">{item?.name}</span>
                                                        }
                                                    </button>

                                                )
                                            })
                                        }

                                    </div>
                                );
                            })}
                    </div>
                </div>
                <button className='w-full mt-5 h-[48px] rounded-lg flex items-center justify-center bg-fullBlue text-white'>
                    Готово
                </button>
            </div>
        )
    }
    const BrandMarketSelect = () => {
        const campany = [
            { id: 1, imgFull: adidas },
            { id: 2, imgFull: chanel },
            { id: 3, imgFull: hm },
            { id: 4, imgFull: lacoste },
            { id: 5, imgFull: nike },
            { id: 6, imgFull: puma },
            { id: 7, imgFull: tommy },
            { id: 8, imgFull: zara },
        ];
        return (
            <div>
                <div className=' w-full h-[300px] overflow-auto VerticelScroll flex flex-col  bg-white'>
                    <div className="w-full flex-row flex justify-between flex-wrap py-4 gap-y-5">
                        {campany?.map((data) => {
                            return (
                                <div
                                    key={data?.imgFull}
                                    className="w-[23%] h-20 rounded-lg bg-bgColor  border border-solid border-borderColorCard"
                                >
                                    <img
                                        className="h-full w-full p-2"
                                        src={data?.imgFull}
                                        alt="img"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button className='w-full mt-5 h-[48px] rounded-lg flex items-center justify-center bg-fullBlue text-white'>
                    Готово
                </button>
            </div>
        )
    }

    const [componentGroup, setComponentGroup] = useState([
        { id: 1, pageName: <NoSelect />, icons: "", isActive: true, text: "Фильтровать" },
        { id: 2, pageName: <ClothesList />, icons: <ClothesIcons colors={dressInfo?.ColorSeason} />, isActive: false, text: "По категории" },
        { id: 3, pageName: <PriceRange />, icons: <DollorIcons colors={dressInfo?.ColorSeason} />, isActive: false, text: "По бюджету" },
        { id: 4, pageName: <GenderSelect />, icons: <ManWomGenBlack colors={dressInfo?.ColorSeason} />, isActive: false, text: "По полу" },
        { id: 5, pageName: <BrandMarketSelect />, icons: <TopBrandsIcon colors={dressInfo?.ColorSeason} />, isActive: false, text: "По бренду" },
    ])
    const handleComponentId = (UId) => {
        setComponentGroup(current => {
            return current?.map(e => {
                if (e.id == UId) {
                    return { ...e, isActive: true, }
                } else {
                    return { ...e, isActive: false }
                }
            })
        })
    }
    return (
        <div className='w-full h-full  py-5 px-4'>
            <div className='w-full flex items-center justify-between'>
                {
                    componentGroup?.map(item => {
                        return (
                            <>{item?.isActive &&
                                <span className='text-[#303030] text-start text-xl not-italic font-AeonikProMedium'>
                                    {item?.text}
                                </span>}
                            </>
                        )
                    })
                }
                <span className='cursor-pointer w-6 h-6' onClick={onClick}>
                    <MenuCloseIcons colors={"#000"} className="w-full h-full" />
                </span>
            </div>
            <div className='flex items-center gap-x-2 justify-between border-b border-searchBgColor  py-4'>
                {
                    componentGroup?.map(item => {
                        return (
                            <>
                                {
                                    item?.icons && <button key={item?.id} onClick={() => handleComponentId(item?.id)} className={`${item?.isActive ? dressInfo?.BtnActiveSeason : "border border-['#E0E0E0']"} w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}>
                                        {item?.icons}
                                    </button>}
                            </>
                        )
                    })
                }
            </div>
            {
                componentGroup?.map(data => {
                    return (

                        <div>
                            {data?.isActive && data?.pageName}
                        </div>
                    )
                })
            }


        </div >
    )
}
export default React.memo(MarketFilterofMaps)