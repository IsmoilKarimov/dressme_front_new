import React, { useContext, useState } from 'react'
import { AutummBoyIcons, ChildGenIcon, ManGenIcons, ManWomanGen, SpringBoyIcons, SummerBoyIcons, WinterBoyIcons, WomanGenIcons } from '../../../../../assets/icons';
import { dressMainData } from '../../../../../ContextHook/ContextMenu';

export default function GenderButtonsStyle() {
    const [dressInfo, setDressInfo] = useContext(dressMainData);


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
        },
        {
            id: 5555, childText: [
                { id: 1, anyIcons: <ManWomanGen />, name: "Все", action: false },
                { id: 2, anyIcons: <ManGenIcons />, name: "", action: false },
                { id: 3, anyIcons: <WomanGenIcons />, name: "", action: false },
                { id: 4, anyIcons: <WinterBoyIcons />, name: "", action: false },
            ]
        }
    ]);
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
        <div className="box-border	 flex items-center gap-x-2 h-[44px] border border-searchBgColor overflow-hidden rounded-lg bg-btnBgColor">

            {personItems
                ?.filter((value) => value.id === dressInfo?.type)
                .map((data) => {
                    return (
                        <div
                            key={data?.id}
                            className="w-fit h-full flex items-center  "
                        >
                            {
                                data?.childText?.map(item => {
                                    return (
                                        <div className="flex items-center h-full">
                                            <button
                                                key={item?.id}
                                                onClick={() => handleFilterByUser(data?.id, item?.id)}
                                                className={`${item?.action ? dressInfo?.BtnActiveSeason : " bg-btnBgColor text-black"} px-5 h-full cursor-pointer  font-AeonikProMedium    rounded-lg  h-[44px]  justify-center flex items-center`}
                                            >
                                                {/* <img src={item?.anyIcons} alt="male" /> */}
                                                <span>{item?.anyIcons}</span>
                                                {
                                                    item?.name &&
                                                    <span className="ml-2 not-italic whitespace-nowrap  text-sm font-AeonikProMedium tracking-wide	leading-5">{item?.name}</span>
                                                }
                                            </button>
                                            {
                                                item?.id !== 4 &&
                                                <span className="w-[2px] mx-1 h-[30px] border-r border-searchBgColor"></span>
                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>
                    );
                })}
        </div>
    )
}

