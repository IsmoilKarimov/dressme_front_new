import React, { useContext, useState } from "react";
import { dressMainData } from "../../../../../../ContextHook/ContextMenu";

export default function AboutProduct() {
  const [dressInfo] = useContext(dressMainData);

  const [productDescription, setProductDescription] = useState(true);

  return (
    <main className="w-full block md:hidden">
      <section className="w-full">
        <p className="w-full font-AeonikProMedium text-base mb-6">
          О продукте:
        </p>
        <article className="rounded-lg overflow-hidden  h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
          <button
            onClick={() => setProductDescription(true)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              productDescription
                ? ` bg-white border  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                : ""
            }
                        `}
          >
            Описания товара
          </button>
          <p className="h-full text-searchBgColor flex items-center">|</p>
          <button
            onClick={() => setProductDescription(false)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              !productDescription
                ? ` bg-white border  border-searchBgColor rounded-lg ${dressInfo?.TextColorSeason}`
                : ""
            }
          `}
          >
            Характеристики
          </button>
        </article>
        {productDescription ? (
          <article className="mt-6 w-full h-[440px] text-center bg-searchBgColor p-6 mb-12 rounded">
            <p className="font-AeonikProRegular text-base">
              Информация о товаре{" "}
            </p>
          </article>
        ) : (
          <article className="mt-6 w-full h-[440px] text-center bg-searchBgColor p-6 mb-12 rounded">
            <p className="font-AeonikProRegular text-base">
              Информация о Характеристики
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
