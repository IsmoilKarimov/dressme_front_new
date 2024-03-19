import React, { useRef, useState } from "react";
import {
  GoBackIcon,
  ReviewIcon,
  StarIcons,
} from "../../../../../../assets/icons";
import { Modal, Rate } from "antd";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function ProductComment({ data, refetch }) {
  const [openComment, setOpenComment] = useState(false);
  const params = useParams();
  const [visibleComments, setVisibleCommnets] = useState(4);

  const { t } = useTranslation("products")

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  const textRef = useRef();
  const rateRef = useRef();

  // post method ----------

  const url = "https://api.dressme.uz";

  const commentMutate = useMutation(() => {
    return fetch(`${url}/api/user-main/ratings/store-rating`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        score: rateRef.current.state.value,
        comment: textRef.current.value,
        rateable_id: params?.id,
        rateable_type: "product",
      }),
    }).then((res) => res.json());
  });

  const sendFunc = () => {
    commentMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          // console.log(res, "RES");
          refetch();
          if (!res?.errors) {
            toast.success(res?.message);
          }
          if (res.errors) {
            // console.log(res?.message);
            toast.error(res?.message);
          }
          rateRef.current.state.value = 1;
          textRef.current.value = null;
        },
        onError: (err) => {
          // console.log(err, "ERROR");
          rateRef.current.state.value = 1;
          textRef.current.value = null;
          throw new Error(err || "something wrong");

        },
      }
    );
  };

  // --------------------

  const showNextComments = data?.product?.ratings
    .slice(0, visibleComments)
    .map((allComments, i) => {
      return (
        <article
          key={i}
          className="w-[45%] h-fit border-b border-borderColor2 pr-5 pb-10 mt-10 "
        >
          <p className="not-italic font-AeonikProMedium text-xl leading-6 text-black">
            {allComments?.user?.name}
          </p>
          <article className="flex items-center mt-3">
            <p className="flex items-center">
              {Array.from("55555").map((item, i) => {
                if (i + 1 <= allComments?.score) {
                  return <StarIcons key={i} />;
                }
              })}
            </p>
            <button className="not-italic ml-3 font-AeonikProRegular text-base leading-4 text-setTexOpacity">
              {allComments?.created_at}
            </button>
          </article>
          <article className="mt-4">
            <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
              {allComments?.comment}
            </p>
          </article>
          {allComments?.reply ? (
            <article className="mt-6 ml-8">
              <article className="flex">
                <p className="not-italic font-AeonikProMedium text-lg leading-5 text-black">
                  {data?.product?.shop?.name}
                </p>
              </article>
              <article className="mt-4">
                <p className="not-italic font-AeonikProRegular text-base leading-4 text-black">
                  {allComments?.replyText}
                </p>
              </article>
            </article>
          ) : null}
        </article>
      );
    });

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto border-box md:mb-[0px]">
      <ToastContainer />
      <section className="relative w-[100%] h-fit md:mt-6 flex justify-between">
        {/* Desktop version of comment*/}
        <article className="w-full hidden md:block">
          <section className="flex items-center border-b border-borderColor2 pb-10">
            {showNextComments?.length > 4 && (
              <button
                onClick={() => {
                  setVisibleCommnets(4);
                }}
                className={`flex items-center cursor-pointer justify-center border border-borderColor2 rounded-lg mr-5`}
              >
                <GoBackIcon />
              </button>
            )}

            <p className="not-italic font-AeonikProMedium text-2xl leading-7 text-black track%]">
              {t("product_reviews")}
            </p>

            {Cookies.get("DressmeUserToken") ? (
              <button
                onClick={() => setOpenComment(true)}
                type="button"
                className="flex items-center ml-[20px] text-SignInBgColor text-lg font-AeonikProRegular"
              >
                {t("write_a_review")}
                <span className="ml-[5px]">
                  <ReviewIcon />
                </span>
              </button>
            ) : null}

            <Modal
              centered
              open={openComment}
              onOk={() => setOpenComment(false)}
              onCancel={() => setOpenComment(false)}
              footer={null}
              className="w-full p-6"
            >
              <div className="w-full px-[25px] pb-[30px] pt-[60px]">
                <div className="relative w-full h-[200px] p-3 border border-[#f0f0f0] rounded-lg mb-6 bg-[#fdfdfd]">
                  <textarea
                    ref={textRef}
                    name="comment"
                    id="comment"
                    placeholder={`${t("write_a_review")}`}
                    className="w-full h-[148px] resize-none bg-[#fdfdfd]"
                  ></textarea>
                  {/* Star Rating */}
                  <button
                    type="button"
                    className="absolute right-1 w-fit flex items-center bg-[#F8F8F8] ml-auto p-[5px] rounded-md "
                  >
                    <Rate ref={rateRef} defaultValue={1} />
                  </button>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button
                    onClick={() => {
                      sendFunc();
                      setOpenComment(false);
                    }}
                    className="px-5 py-3 rounded-lg bg-borderWinter text-white text-base font-AeonikProMedium active:scale-95"
                  >
                    {t("send")}
                  </button>
                </div>
              </div>
            </Modal>
          </section>

          <section
            id="comment"
            className="flex justify-between flex-wrap w-full h-fit overflow-hidden"
          >
            {showNextComments}
          </section>

          {data?.product?.ratings?.length <= 4 ? null : (
            <section className="w-full py-6 flex justify-center items-center">
              {data?.product?.ratings?.length !== showNextComments?.length ? (
                <button
                  type="button"
                  onClick={() => {
                    setVisibleCommnets((prev) => prev + 4);
                  }}
                  className={`flex active:scale-95 active:opacity-70 rounded-xl px-[30px] py-[10px] border border-searchBgColor bg-bgColor items-center gap-x-3 `}
                >
                  <p
                    className={`text-borderWinter bg-transparent font-AeonikProRegular text-base`}
                  >
                    {t("show_more")}...
                  </p>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setVisibleCommnets(4);
                  }}
                  className={`flex rounded-xl px-[30px] py-[10px] border border-searchBgColor bg-bgColor items-center gap-x-3 `}
                >
                  <a
                    href="#comment"
                    className={`text-borderWinter bg-transparent font-AeonikProRegular text-base`}
                  >
                    {t("show_less")}...
                  </a>
                </button>
              )}
            </section>
          )}
        </article>
      </section>
    </main>
  );
}
