/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../../hook/useHttp";

export default function CategoriesFilter({
  state,
  setState,
  handleGetCategoryId,
  params,
}) {
  const { request } = useHttp();
  const [getCategoryId, setGetCategoryId] = useState();

  const categories = [
    { id: '1', action: false, name: "Головной убор" },
    { id: '2', action: false, name: "Верхняя одежда" },
    { id: '3', action: false, name: "Нижняя одежда" },
    { id: '4', action: false, name: "Обувь" },
    { id: '5', action: false, name: "Аксессуары" },
  ];

  // ------------GET METHOD Gender-type-----------------
  useQuery(
    ["get_genders"],
    () => {
      return request({ url: `/main/section/${params?.id}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, "RES");
        setGetCategoryId(res?.category_ids);
        setState({ ...state, genderList: res?.genders });
      },
      onError: (err) => {
        console.log(err, "err getGenderlist-method");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  function onGetId(id) {
    console.log(id, "category id");
    handleGetCategoryId({
      categoryId: id,
    });
  }

  return (
    <>
      <section className="w-full h-fit mt-[50px] ">
        <article
          className="w-full flex justify-between items-center "
          onClick={(event) => {
            event.target.classList.toggle("open");
          }}
        >
          <figure
            onClick={() => setState({ ...state, category: !state.category })}
            className="flex items-center cursor-pointer select-none"
          >
            <p className="not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black">
              Категории
            </p>
            <p
              className={`${
                state?.category ? "rotate-[180deg]" : ""
              } duration-300 ml-1`}
            >
              <ArrowTopIcons colors={"#000"} />
            </p>
          </figure>
        </article>

        {/* Field */}
        <article
          className={`w-full overflow-hidden ${
            state?.category ? "duration-300 h-0" : "duration-300 h-fit mt-5 "
          } duration-300 flex flex-col gap-y-4`}
        >
          {categories?.map((data) => {
            return getCategoryId?.map((id) => {
              if (id === data.id) {
                return (
                  <button
                    key={data?.id}
                    className="w-full h-[44px] rounded-lg justify-center bg-bgCategory hover:text-white  focus:bg-fullBlue hover:bg-fullBlue focus:text-white flex items-center  cursor-pointer select-none  text-black"
                    type="button"
                    onClick={() => onGetId(data?.id)}
                  >
                    <p className="not-italic font-AeonikProMedium tracking-[1%]   text-sm leading-4">
                      {data?.name}
                    </p>
                  </button>
                );
              }
            });
          })}
        </article>
      </section>
    </>
  );
}
