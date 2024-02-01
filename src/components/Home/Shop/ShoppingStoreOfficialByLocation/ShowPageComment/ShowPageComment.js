import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoBackIcon, ReviewIcon, StarIcons } from "../../../../../assets/icons";
import { Modal, Rate } from "antd";
import CommentDropUp from "../../../Products/SignleMainProducts/SingleProduct/ProductComment/MobileAllComments/CommentDropUp";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

function ShowPageComment({
  filteredData,
  setOpenTabComment,
}) {
  const [addComment, setAddComment] = useState(false);
  const toggleAddComment = useCallback(() => setAddComment(false), []);
  const [openComment, setOpenComment] = useState(false);

  // For DropUp
  useEffect(() => {
    if (addComment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addComment]);

  const url = "https://api.dressme.uz/api";

  const textRef = useRef();
  const rateRef = useRef();

  console.log(filteredData?.shop?.id, 'storedata');

  const commentMutate = useMutation(() => {
    return fetch(`${url}/user-main/ratings/store-rating`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("DressmeUserToken")}`,
      },
      body: JSON.stringify({
        score: rateRef.current.state.value,
        comment: textRef.current.value,
        rateable_id: filteredData?.shop?.id,
        rateable_type: "shop",
      }),
    }).then((res) => res.json());
  });

  // ----- POST COMMENT FOR SHOPPING STORE -----
  const sendFunc = () => {
    commentMutate.mutate(
      {},
      {
        onSuccess: (res) => {
          // console.log(res, "RES");
          // refetch();
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
        },
      }
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col justify-start items-center m-auto  border-box md:mb-[60px]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="comments">
        <section
          onClick={() => setAddComment(false)}
          className={`fixed inset-0 z-[112] duration-200 w-full h-[100vh] bg-black opacity-50 ${
            addComment ? "" : "hidden"
          }`}
        ></section>
        <section
          className={`fixed z-[113] left-0 right-0 md:hidden duration-300 overflow-hidden ${
            addComment ? "bottom-0" : "bottom-[-800px] z-0"
          }`}
        >
          <CommentDropUp onClick={toggleAddComment} />
        </section>
      </div>

      <section className="relative w-[100%] h-fit md:mt-6 flex justify-between">
        <article className="w-full block px-4 mt-4 md:mt-0 md:px-0">
          <section className="flex items-center md:border-b border-borderColor2 my-4 md:pb-10">
            <button
              onClick={() => {
                setOpenTabComment(false);
              }}
              className={`flex items-center cursor-pointer justify-start md:justify-center md:border border-borderColor2 rounded-lg mr-20 md:mr-5`}
            >
              <GoBackIcon />
            </button>
            <div className="flex justify-center items-center">
              <p className="not-italic font-AeonikProMedium text-base md:text-2xl leading-7 text-black track%]">
                Отзывы о магазины
              </p>
              {Cookies.get("DressmeUserToken") ? (
                <button
                  onClick={() => setOpenComment(true)}
                  type="button"
                  className="flex items-center ml-[20px] text-SignInBgColor text-lg font-AeonikProRegular"
                >
                  Написать отзыв
                  <span className="ml-[5px]">
                    <ReviewIcon />
                  </span>
                </button>
              ) : null}
            </div>
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
                    name="comment"
                    id="comment"
                    ref={textRef}
                    placeholder="Написать отзыв"
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
                    Отправить
                  </button>
                </div>
              </div>
            </Modal>
          </section>
          <section>
            <button
              onClick={() => setAddComment(true)}
              type="button"
              className="w-full flex md:hidden items-center text-SignInBgColor text-base font-AeonikProRegular mb-1"
            >
              Написать отзыв
              <span className="ml-[5px]">
                <ReviewIcon />
              </span>
            </button>
            <div className="flex md:hidden items-center justify-between border border-borderColor2 rounded-t-lg p-4">
              <div className="flex items-center">
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <StarIcons />
                <span className="ml-[10px] font-AeonikProMedium text-base">
                  4.7
                </span>
              </div>
              <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
                265 голосов
              </div>
            </div>
          </section>
          {/* All comments section */}
          <section
            id="comment"
            className="flex justify-between flex-wrap w-full h-fit overflow-hidden"
          >
            {filteredData?.shop?.ratings?.map((allComments) => {
              // console.log(allComments, "Allcomments");
              return (
                <article
                  key={allComments.id}
                  className="w-full md:w-[45%] h-fit border md:border-0 md:border-b border-borderColor2 rounded-lg p-[15px] pr-5 md:pb-10 mt-4 md:mt-10 "
                >
                  <article className="flex md:flex-col items-center md:items-start justify-between md:justify-start">
                    <div className="flex md:block items-center justify-between">
                      <div>
                        <p className="w-fit md:w-full not-italic font-AeonikProMedium text-base md:text-xl leading-6 text-black">
                          {allComments?.user?.name}
                        </p>
                        <div className="flex md:hidden text-[13px] md:text-base items-center font-AeonikProRegular">
                          Оценка покупки
                          <span className="ml-[5px] mr-[2px]">4.7</span>
                          <StarIcons />
                        </div>
                      </div>
                    </div>
                    <article className="flex items-center md:mt-3">
                      <p className="hidden md:flex items-center">
                        {Array.from("55555").map((item, i) => {
                          if (i + 1 <= allComments?.score) {
                            return <StarIcons />;
                          }
                        })}
                      </p>
                      <button className="not-italic ml-3 font-AeonikProRegular text-xs md:text-base leading-4 text-setTexOpacity">
                        {allComments?.created_at}
                      </button>
                    </article>
                  </article>
                  <article className="mt-6 md:mt-4">
                    <p className="not-italic font-AeonikProRegular text-[13px] md:text-base leading-4 text-[#505050]">
                      {allComments?.comment}
                    </p>
                  </article>

                  <article className="bg-[#F4F6FB] md:bg-white px-[15px] py-3 md:px-0 md:py-0 rounded-lg mt-6 md:ml-8">
                    <article className="flex items-center justify-between md:justify-start">
                      <p className="not-italic font-AeonikProMedium text-[13px] md:text-lg leading-5 text-[#2C2C2C]">
                        {filteredData?.shop?.name}
                      </p>
                      <p className="not-italic ml-3 font-AeonikProRegular text-[11px] md:text-base leading-4 text-setTexOpacity">
                        {allComments?.updated_at}
                      </p>
                    </article>
                    <article className="mt-4">
                      <p className="not-italic font-AeonikProRegular text-[13px] md:text-base leading-4 text-[#505050]">
                        {allComments?.replyText}
                      </p>
                    </article>
                  </article>
                </article>
              );
            })}
          </section>
        </article>
      </section>
    </main>
  );
}

export default React.memo(ShowPageComment)
