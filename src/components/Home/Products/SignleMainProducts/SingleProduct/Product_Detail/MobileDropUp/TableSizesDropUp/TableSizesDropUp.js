import React from "react";
import { MenuCloseIcons } from "../../../../../../../../assets/icons";

function TableSizesDropUp({ onClick, data, selectedLocation }) {
  const tableSizes = {
    sizes: [
      { id: 1, numbers: "45-52" },
      { id: 2, numbers: "45-52" },
      { id: 3, numbers: "53-57" },
      { id: 4, numbers: "58-62" },
      { id: 5, numbers: "53-68" },
      { id: 6, numbers: "69-75" },
      { id: 7, numbers: "76-80" },
      { id: 8, numbers: "81-92" },
      { id: 9, numbers: "93-100" },
      { id: 10, numbers: "101-110" },
    ],
    letter_sizes: [
      { id: 11, numbers: "XXS" },
      { id: 12, numbers: "XS" },
      { id: 13, numbers: "S" },
      { id: 14, numbers: "M" },
      { id: 15, numbers: "L" },
      { id: 16, numbers: "XL" },
      { id: 17, numbers: "XXL" },
      { id: 18, numbers: "3XL" },
      { id: 19, numbers: "4XL" },
      { id: 20, numbers: "5XL" },
    ],
    chest_sizes: [
      { id: 21, numbers: "45-52" },
      { id: 22, numbers: "45-52" },
      { id: 23, numbers: "53-57" },
      { id: 24, numbers: "58-62" },
      { id: 25, numbers: "53-68" },
      { id: 26, numbers: "69-75" },
      { id: 27, numbers: "76-80" },
      { id: 28, numbers: "81-92" },
      { id: 29, numbers: "93-100" },
      { id: 30, numbers: "101-110" },
    ],
    waist_sizes: [
      { id: 31, numbers: "45-52" },
      { id: 32, numbers: "45-52" },
      { id: 33, numbers: "53-57" },
      { id: 34, numbers: "58-62" },
      { id: 35, numbers: "53-68" },
      { id: 36, numbers: "69-75" },
      { id: 37, numbers: "76-80" },
      { id: 38, numbers: "81-92" },
      { id: 39, numbers: "93-100" },
      { id: 40, numbers: "101-110" },
    ],
    hip_sizes: [
      { id: 41, numbers: "45-52" },
      { id: 42, numbers: "45-52" },
      { id: 43, numbers: "53-57" },
      { id: 44, numbers: "58-62" },
      { id: 45, numbers: "53-68" },
      { id: 46, numbers: "69-75" },
      { id: 47, numbers: "76-80" },
      { id: 48, numbers: "81-92" },
      { id: 49, numbers: "93-100" },
      { id: 40, numbers: "101-110" },
    ],
    age: [
      { id: 51, ages: "10-15" },
      { id: 52, ages: "15-20" },
      { id: 53, ages: "25-31" },
      { id: 54, ages: "32-37" },
      { id: 55, ages: "38-41" },
      { id: 56, ages: "41-46" },
      { id: 57, ages: "47-50" },
      { id: 58, ages: "51-57" },
      { id: 59, ages: "58-65" },
      { id: 60, ages: "66-90" },
    ],
  };

  console.log(data, "data-table");

  return (
    <main>
      <div className="max-w-[440px] w-[100%] mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="w-full flex items-center  justify-between px-4 my-5">
          <p className="text-xl font-AeonikProMedium">Таблица размеров</p>
          <button onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section className="w-full h-[280px] pl-4 flex flex-col flex-nowrap">
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
                    if (data?.shop_location_id == selectedLocation?.id) {
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
