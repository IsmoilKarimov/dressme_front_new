import React, { useContext, useRef } from "react";
import { Rate } from "antd";
import {
  AddComment,
  FreeStar,
  MenuCloseIcons,
} from "../../../../../../../assets/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { dressMainData } from "../../../../../../../ContextHook/ContextMenu";

function CommentDropUp({ onClick }) {
  const [rating, setRating] = useState(false);
  const [data, setData] = useState();
  const { t } = useTranslation("products");

  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const url = "https://api.dressme.uz";

  const params = useParams();

  const newId = params?.id?.replace(":", "");

  const { refetch } = useQuery(
    ["get_mobile_comment"],
    () => {
      return fetch(`${url}/api/main/products/${newId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.product);
      },
      onError: (err) => {
         throw new Error(err || "something wrong");
      },
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  const textRef = useRef();
  const rateRef = useRef();

 
  const commentMutate = useMutation(() => {
    return fetch(`${url}/api/user-main/ratings/store-rating`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage?.getItem("userAccess")}`,
      },
      body: JSON.stringify({
        score: rateRef.current.state.value,
        comment: textRef.current.value,
        rateable_id: dressInfo?.rateable_id,
        rateable_type: dressInfo?.rateable_type,
      }),
    }).then((res) => res.json());
  });

  const sendFunc = () => {
    commentMutate.mutate(
      {},
      {
        onSuccess: (res) => {
           if (res.status === 401 || res.status === 403) {
            // reFreshTokenFunc();
            // sendFunc();
          }
          refetch();
          if (!res?.errors) {
            toast.success(res?.message);
          }
          if (res.errors) {
             toast.error(res?.message);
          }
          rateRef.current.state.value = 1;
          textRef.current.value = null;

          setDressInfo({ ...dressInfo, state: dressInfo.state + 1 });
        },
        onError: (err) => {
           rateRef.current.state.value = 1;
          textRef.current.value = null;
          throw new Error(err || "something wrong");
        },
      }
    );
  };

  return (
    <main>
      <div className="w-full mx-auto bg-white shadow-navMenuShadov  overflow-hidden h-fit rounded-t-[12px]">
        <section className="h-fit w-full flex items-center  justify-start mt-3 px-4">
          <button className="w-full" onClick={onClick}>
            <MenuCloseIcons colors={"#000"} />
          </button>
        </section>
        <section
          className={` ${
            rating ? "flex" : "hidden"
          } w-full items-center justify-center `}
        >
          <Rate ref={rateRef} defaultValue={1} />
        </section>
        <section className="w-full h-[80px] gap-x-3 px-4 flex justify-between items-center">
          <div className="w-[90%] h-[43px] flex items-center justify-between text-[#8c8c8c] border border-[#e5e5e5] rounded-lg px-3 text-[13px] font-AeonikProRegular">
            <textarea
              ref={textRef}
              placeholder={`${t("write_a_review")}`}
              className="w-[90%] mt-4 resize-none"
            ></textarea>
            <button onClick={() => setRating(!rating)}>
              <FreeStar width={24} height={24} colors={"#F4A622"} />
            </button>
          </div>
          <button
            onClick={sendFunc}
            className="w-[43px] h-[43px] flex items-center justify-center rounded-lg bg-borderWinter active:scale-95"
          >
            <AddComment />
          </button>
        </section>
      </div>
    </main>
  );
}
export default React.memo(CommentDropUp);
