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
                                <div onClick={() => handleClothesList(item?.id)} key={item?.id} className='w-full h-[44px] flex items-center justify-between cursor-pointer pt-5 pb-[8px] border-b border-searchBgColor'>
                                    <span className='text-gray-800 text-base not-italic font-AeonikProRegular'>{item?.name}</span>
                                    {
                                        item?.isCheck &&
                                        <span className='mr-1'><CircleSuccessIcons colors={"#000"} /></span>
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
                <div className='marketfilter w-full h-[300px]  overflow-auto VerticelScroll flex items-center bg-white'>
                    <div className="  flex flex-col rounded-lg border border-searchBgColor w-full py-5">
                        <div className="flex justify-between items-center mb-7 w-full px-2">
                            <div className="flex ">
                                <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-[#555] ">
                                    от
                                </span>
                                <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                                    60.000 sum
                                </span>
                            </div>
                            <div className="flex ">
                                <span className="flex items-center justify-start not-italic font-AeonikProMedium text-[13px] leading-3 text-center text-text-[#555] ">
                                    до
                                </span>
                                <span className="flex items-center ml-2 justify-center not-italic font-AeonikProMedium text-base leading-3 text-center text-black">
                                    1 860 000 sum
                                </span>
                            </div>
                        </div>
                        <div className="relative z-50 mb-[6px] w-full  marketFilter">
                            {" "}
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb1"
                                trackClassName="example-track1"
                                defaultValue={[10, 90]}
                                ariaLabel={["Lower thumb", "Upper thumb"]}
                                // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                                // renderThumb={() => <div>1</div>}
                                pearling
                                minDistance={10}
                            />
                        </div>
                    </div>
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
                    { id: 2, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
                    { id: 4, anyIcons: <SpringBoyIcons />, name: "Детям", action: false },
                ]
            },
            {
                id: 2222, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
                    { id: 4, anyIcons: <SummerBoyIcons />, name: "Детям", action: false },
                ]
            },
            {
                id: 3333, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
                    { id: 4, anyIcons: <AutummBoyIcons />, name: "Детям", action: false },
                ]
            },
            {
                id: 4444, childText: [
                    { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                    { id: 2, anyIcons: <ManGenIcons />, name: "Мужчинам", action: false },
                    { id: 3, anyIcons: <WomanGenIcons />, name: "Женщинам", action: false },
                    { id: 4, anyIcons: <WinterBoyIcons />, name: "Детям", action: false },
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
                                        className="w-full h-fit flex flex-col gap-y-2 items-center  "
                                    >
                                        {
                                            data?.childText?.map(item => {
                                                return (
                                                    <button
                                                        key={item?.id}
                                                        onClick={() => handleFilterByUser(data?.id, item?.id)}
                                                        className={`${item?.action ? dressInfo?.BtnActiveSeason : " bg-white text-black border border-searchBgColor"} pl-[40%] rounded-lg w-full h-[64px]   cursor-pointer  font-AeonikProMedium   flex items-center`}
                                                    >
                                                        {/* <img src={item?.anyIcons} alt="male" /> */}
                                                        <span>{item?.anyIcons}</span>
                                                        <span className="ml-2 not-italic whitespace-nowrap  text-black text-right  text-sm font-AeonikProMedium tracking-wide	leading-5">{item?.name}</span>
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
            { id: 1, value: "adidas", imgFull: adidas },
            { id: 2, value: "adidas", imgFull: chanel },
            { id: 3, value: "adidas", imgFull: hm },
            { id: 4, value: "adidas", imgFull: lacoste },
            { id: 5, value: "adidas", imgFull: nike },
            { id: 6, value: "adidas", imgFull: puma },
            { id: 7, value: "adidas", imgFull: tommy },
            { id: 8, value: "adidas", imgFull: zara },
            { id: 9, value: "adidas", imgFull: zara },
            { id: 10, value: "adidas", imgFull: zara },
            { id: 11, value: "adidas", imgFull: zara },
            { id: 12, value: "adidas", imgFull: zara },
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
        { id: 1, pageName: <NoSelect />, noActiveIcons: "", ActiveIcons: "", isActive: true, text: "Фильтровать" },
        { id: 2, pageName: <ClothesList />, noActiveIcons: <ClothesIcons colors={"#000"} />, ActiveIcons: <ClothesIcons colors={dressInfo?.ColorSeason} />, isActive: false, text: "По категории" },
        { id: 3, pageName: <PriceRange />, noActiveIcons: <DollorIcons colors={"#000"} />, ActiveIcons: <DollorIcons colors={dressInfo?.ColorSeason} />, isActive: false, text: "По бюджету" },
        { id: 4, pageName: <GenderSelect />, noActiveIcons: <ManWomGenBlack colors={"#000"} />, ActiveIcons: <ManWomGenBlack colors={dressInfo?.ColorSeason} />, isActive: false, text: "По полу" },
        { id: 5, pageName: <BrandMarketSelect />, noActiveIcons: <TopBrandsIcon colors={"#000"} />, ActiveIcons: <TopBrandsIcon colors={dressInfo?.ColorSeason} />, isActive: false, text: "По бренду" },
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
                                    item?.ActiveIcons && <button key={item?.id} onClick={() => handleComponentId(item?.id)} className={`${item?.isActive ? dressInfo?.BtnActiveSeason : "border border-['#E0E0E0']"} w-[85px] h-[52px] rounded-lg flex items-center justify-center  `}>
                                        {item?.isActive ? item?.ActiveIcons : item?.noActiveIcons}
                                    </button>
                                }
                            </>
                        )
                    })
                }
            </div>
            {
                componentGroup?.map(data => {
                    return (

                        <div className='mt-4'>
                            {data?.isActive && data?.pageName}
                        </div>
                    )
                })
            }


        </div >
    )
}
export default React.memo(MarketFilterofMaps)