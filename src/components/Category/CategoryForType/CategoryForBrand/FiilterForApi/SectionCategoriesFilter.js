/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { ArrowTopIcons } from "../../../../../assets/icons";
import { useHttp } from "../../../../../hook/useHttp";
import { useQuery } from "@tanstack/react-query";

export default function SectionCategoriesFilter({
  state,
  setState,
  handleGetCategoryId,
  newId,
  dataActionCategory,
  setDataActionCategory
}) {
  const [getCategoryId, setGetCategoryId] = useState();
  const { request } = useHttp();

  const [categories, setCategories] = useState([
    { id: "1", action: false, name: "Головной убор" },
    { id: "2", action: false, name: "Верхняя одежда" },
    { id: "3", action: false, name: "Нижняя одежда" },
    { id: "4", action: false, name: "Обувь" },
    { id: "5", action: false, name: "Аксессуары" },
  ]);

  // ------------GET METHOD CATEGORY-TYPE-----------------
  useQuery(
    ["get_category_id"],
    () => {
      return request({ url: `/main/section/${newId}`, token: true });
    },
    {
      onSuccess: (res) => {
        setGetCategoryId(res?.filter);
        setState({ ...state, genderList: res?.genders });
      },
      onError: (err) => {
        console.log(err, "err getGenderlist-method");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const handleCategoryCheck = (value) => {
    setCategories((data) => {
      return data.map((e) => {
        if (e.id === value) {
          return { ...e, action: true };
        } else return { ...e, action: false };
      });
    });
  };

  return (
    <div
      className={`${
        getCategoryId?.gender_ids.length ? "flex" : "hidden"
      } w-full flex-col items-center md:mb-[38px]`}
    >
      <section
        className={`${
          getCategoryId?.category_ids ? "block" : "hidden"
        }  w-full h-fit mt-[12px] `}
      >
        <article
          className="w-full flex justify-between items-center "
          onClick={(event) => {
            event.target.classList.toggle("open");
          }}
        >
          <figure
            onClick={() => setState({ ...state, category: !state.category })}
            className={`flex items-center cursor-pointer select-none`}
          >
            <p
              className={`not-italic mr-1 font-AeonikProMedium text-base leading-4 text-black`}
            >
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
            return getCategoryId?.category_ids?.map((id) => {
              if (id === data.id) {
                return (
                  <button
                    key={data?.id}
                    className={`${
                      dataActionCategory
                        ? `${data.action ? "bg-fullBlue text-white" : ""}`
                        : ""
                    } ${
                      getCategoryId?.category_ids?.length == 1
                        ? "w-full cursor-not-allowed hover:bg-bgCategory hover:text-black"
                        : "hover:bg-fullBlue hover:text-white"
                    } w-full h-[44px] rounded-lg justify-center bg-bgCategory flex items-center select-none  text-black`}
                    type="button"
                    onClick={() => {
                      // onGetId(data?.id);
                      handleGetCategoryId(data?.id)
                      setDataActionCategory(true);
                      handleCategoryCheck(data?.id);
                    }}
                    disabled={getCategoryId?.category_ids.length == 1}
                  >
                    <p className="not-italic font-AeonikProMedium tracking-[1%]   text-sm leading-4">
                      {data?.name}
                    </p>
                  </button>
                );
              }
            });
          })}
          <button
            type="button"
            onClick={() => {
              handleGetCategoryId(null);
              setDataActionCategory(false);
            }}
            className={`${
              dataActionCategory ? "flex" : "hidden"
            } w-full flex-start text-sm text-borderWinter font-AeonikProRegular`}
          >
            Сбросить
          </button>
        </article>
      </section>
    </div>
  );
}
