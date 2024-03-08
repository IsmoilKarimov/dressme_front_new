import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  FreeStar,
  GoBackIcon,
  ReviewIcon,
  StarIcons,
} from "../../../../../../../assets/icons";
import CommentDropUp from "./CommentDropUp";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserRefreshTokenContext } from "../../../../../../../ContextHook/UserRefreshToken";
import { useTranslation } from "react-i18next";

const MobileAllComments = () => {
  const [addComment, setAddComment] = useState(false);
  const toggleAddComment = useCallback(() => setAddComment(false), []);
  const [data, setData] = useState();

  const { t } = useTranslation("products")

  const [reFreshTokenFunc, setUserLogedIn] = useContext(
    UserRefreshTokenContext
  );

  const url = "https://api.dressme.uz";

  const params = useParams();
  const newId = params?.id?.replace(":", "");
  // console.log(newId);

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
        // console.log(err, "err");
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
          if (res.status === 401 || res.status === 403) {
            reFreshTokenFunc();
            sendFunc();
          }
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
        },
      }
    );
  };

  // For DropUp
  useEffect(() => {
    if (addComment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addComment]);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-4">
      <ToastContainer />
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

      <div className="w-full my-6 flex items-center justify-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute left-2 flex items-center cursor-pointer justify-center "
        >
          <GoBackIcon />
        </button>
        <div className="w-full flex items-center justify-center">
          <span className="text-base leading-4 font-AeonikProMedium">
            {t("product_reviews")}
          </span>
        </div>
      </div>
      {Cookies.get("DressmeUserToken") ? (
        <button
          onClick={() => setAddComment(true)}
          type="button"
          className="w-full flex items-center ml-[20px] text-SignInBgColor text-base font-AeonikProRegular mb-[2px]"
        >
          {t("write_a_review")}
          <span className="ml-[5px]">
            <ReviewIcon />
          </span>
        </button>
      ) : null}

      <div className="w-full flex items-center justify-between rounded-t border border-borderColor2 px-4 py-[14px] mb-[18px]">
        <div className="flex items-center">
          <StarIcons />
          <span className="ml-[10px] font-AeonikProMedium text-base">
            {data?.overall_rating}
          </span>
        </div>
        <div className="text-sm font-AeonikProRegular text-closeColorBtn mt-1">
          {data?.rated_users_count} {t("votes")}
        </div>
      </div>
      <div className="w-full">
        {data?.ratings?.map((item) => (
          <div
            key={item.id}
            className="w-full border border-borderColor2 p-[15px] rounded mb-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-AeonikProMedium text-[#2c2c2c]">
                {item?.user?.name}
              </div>
              <div className="text-[#a1a1a1] text-xs font-AeonikProRegular">
                {item.created_at}
              </div>
            </div>
            <div className="w-full flex items-center text-[13px] font-AeonikProRegular mb-5">
              <span>{t("purchase_rating")}</span>
              <span className="ml-[5px]">{item?.score}</span>
              <span className="ml-[2px]">
                <FreeStar width={13} height={13} colors={"#F4A622"} />
              </span>
            </div>
            <p className="text-[13px] font-AeonikProRegular mb-5">
              {item?.comment}
            </p>
            <div
              className={`${
                item?.reply ? "block" : "hidden"
              } w-full bg-[#F4F6FB] px-[15px] py-3`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-[13px] font-AeonikProMedium">
                  {data?.shop?.name}
                </div>
                <div className="text-[11px] font-AeonikProRegular text-[#B2B8C8]">
                  {item?.reply}
                </div>
              </div>
              <p className="text-[13px] font-AeonikProRegular text-[#505050]">
                {item?.updated_at}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MobileAllComments;
