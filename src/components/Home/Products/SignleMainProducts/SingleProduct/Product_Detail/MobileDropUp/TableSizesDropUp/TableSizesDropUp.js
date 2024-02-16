import React from "react";
import { MenuCloseIcons } from "../../../../../../../../assets/icons";

function TableSizesDropUp({ onClick, data, selectedLocation }) {

  console.log(data, "data-table-data");

  return (
    <main>
      <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="w-full flex items-center  justify-between px-4 my-5">
          <p className="text-xl font-AeonikProMedium">Таблица размеров</p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section className="w-full h-[230px] pl-4 flex flex-col flex-nowrap">
          {data?.product?.category_id === "2" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Размер в числах
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Буквенный Размер
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Обхват груди, в см
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Обхват талии, в см
                </li>
                <div className="text-base font-AeonikProRegular h-10 flex items-center">
                  Обхват бедер, в см
                </div>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-[250%] flex items-center justify-center">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className="w-full flex items-center flex-col text-[13px] font-AeonikProRegular "
                        >
                          {/* Sizes */}
                          <li className="w-full h-10 flex items-center justify-between">
                            {/* {tableSizes.sizes.map((data) => (
                                <div
                                  key={data?.id}
                                  className="w-full flex items-center justify-center"
                                >
                                  <div className="flex items-center justify-center flex-shrink-0">
                                    {data.numbers}
                                  </div>
                                </div>
                              ))} */}
                            {data?.min_wear_size}{" "}
                            {data?.max_wear_size
                              ? "- " + data?.max_wear_size
                              : null}
                          </li>
                          {/* Letter Sizes */}
                          <li className="w-[99%] bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-between">
                            {/* {tableSizes.letter_sizes.map((data) => (
                              <div
                                key={data?.id}
                                className="w-full flex items-center justify-center ml-[-4px]"
                              >
                                <div className=" flex-shrink-0">
                                  {data.numbers}
                                </div>
                              </div>
                            ))} */}
                            <li>{data?.letter_size}</li>
                          </li>
                          {/* Chest Sizes */}
                          <li className="w-[99%] h-10 flex items-center justify-between">
                            {/* {tableSizes.chest_sizes.map((data) => (
                              <div
                                key={data.id}
                                className="w-full flex items-center justify-center"
                              >
                                <div className="flex-shrink-0">
                                  {data.numbers}
                                </div>
                              </div>
                            ))} */}
                            {data?.min_chest_girth}{" "}
                            {data?.max_chest_girth
                              ? "- " + data?.max_chest_girth
                              : null}
                          </li>
                          {/* Waist Sizes */}
                          <li className="w-[99%] bg-categoryModalBgColor rounded-l-lg h-10 ml-[5px] flex items-center justify-between">
                            {/* {tableSizes.waist_sizes.map((data) => (
                              <div
                                key={data.id}
                                className="w-full flex items-center justify-center ml-[-4px]"
                              >
                                <div className="flex-shrink-0">
                                  {data.numbers}
                                </div>
                              </div>
                            ))} */}
                            {data?.min_waist_girth}{" "}
                            {data?.max_waist_girth
                              ? "- " + data?.max_waist_girth
                              : null}
                          </li>
                          {/* Hip Sizes */}
                          <li className="w-[99%] h-10 flex items-center justify-between">
                            {/* {tableSizes.hip_sizes.map((data) => (
                              <div
                                key={data.id}
                                className="w-full flex items-center justify-center"
                              >
                                <div className="flex-shrink-0">
                                  {data.numbers}
                                </div>
                              </div>
                            ))} */}
                            {data?.min_hip_girth}{" "}
                            {data?.max_hip_girth
                              ? "- " + data?.max_hip_girth
                              : null}
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "3" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Размер в числах
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Буквенный Размер
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Рост, в см
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Обхват талии, в см
                </li>
                <div className="text-base font-AeonikProRegular h-10 flex items-center">
                  Обхват бедер, в см
                </div>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-center">
                  {data?.product?.sizes?.map((data) => {
                    console.log(data,'data-table');
                    if (data?.shop_location_id === selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className="w-full  flex items-center flex-col text-[13px] font-AeonikProRegular "
                        >
                          {/* Sizes */}
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.min_wear_size}{" "}
                            {data?.max_wear_size
                              ? "- " + data?.max_wear_size
                              : null}
                          </li>
                          {/* Letter Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-between px-3">
                            {data?.letter_size}
                          </li>
                          {/* Chest Sizes */}
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.min_height}{" "}
                            {data?.max_height ? "- " + data?.max_height : null}
                          </li>
                          {/* Waist Sizes */}
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-between px-3">
                            {data?.min_waist_girth}{" "}
                            {data?.max_waist_girth
                              ? "- " + data?.max_waist_girth
                              : null}
                          </li>
                          {/* Hip Sizes */}
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.min_hip_girth}{" "}
                            {data?.max_hip_girth
                              ? "- " + data?.max_hip_girth
                              : null}
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "4" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Размер в числах, в см
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Длина стопы, в см
                </li>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-center">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className="w-full flex items-center flex-col text-[13px] font-AeonikProRegular "
                        >
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.wear_size}
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 flex items-center justify-between px-3">
                            {" "}
                            {data?.min_foot_length}{" "}
                            {data?.max_foot_length
                              ? "- " + data?.max_foot_length
                              : null}
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {data?.product?.category_id === "5" ? (
            <div className="w-full flex flex-row flex-nowrap gap-y-[10px] gap-x-[12px] mb-4">
              <ul className="w-[42%] h-full flex flex-col">
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Размер в числах, в см
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Буквенный Размер
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Длина, в см
                </li>
                <li className="text-base font-AeonikProRegular h-10 flex items-center">
                  Ширина, в см
                </li>
              </ul>
              <div className="w-[58%] overflow-x-auto pb-2 bg-[#F7F8FC] rounded-l-lg flex flex-col">
                <div className="w-full overflow-x-scroll flex items-center justify-center">
                  {data?.product?.sizes?.map((data) => {
                    if (data?.shop_location_id == selectedLocation?.id) {
                      return (
                        <ul
                          key={data?.id}
                          className="w-full  flex items-center flex-col text-[13px] font-AeonikProRegular "
                        >
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.wear_size}
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 px-3 flex items-center justify-between">
                            {data?.letter_size}
                          </li>
                          <li className="w-full h-10 flex items-center justify-between px-3">
                            {data?.length}
                          </li>
                          <li className="w-full bg-categoryModalBgColor rounded-l-lg h-10 px-3 flex items-center justify-between">
                            {data?.width}
                          </li>
                        </ul>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}
export default React.memo(TableSizesDropUp);
