import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  ArrowTopIcons,
  DeliveryStoreIcon,
  ManGenIcons,
  StarIcons,
  WomanGenIcons,
} from "../../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../../hook/useHttp";

const ShoppingBrands = ({getData}) => {
  const { request } = useHttp();
  const [shops, setShops] = useState(null);

  //------ GET SHOPS LIST DATA -------
  useQuery(
    ["get-shops"],
    async () => {
      return request({ url: `/main/shops`, token: true });
    },
    {
      onSuccess: (res) => {
        // console.log(res?.shops?.data, "SUCCESS, RESPONSE");
        setShops(res?.shops?.data);
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN SHOPS LIST");
      },
    }
  );

  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/shopping_store/:${id}`);
  };

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3">
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center m-auto md:mt-[50px] mb-20 md:mb-[90px]">
        <section className="w-full ">
          {getData?.shops?.data?.map((data) => {
            return (
              <div
                key={data?.id}
                className="w-full h-fit md:h-[100px] flex flex-col md:flex-row items-center border border-searchBgColor rounded-lg mb-[30px] p-[10px] md:pr-10"
              >
                <div className="w-full flex items-center pb-[15px] md:pb-0 border-b border-searchBgColor md:border-none">
                  <figure className="w-[80px] h-[80px] overflow-hidden md:w-[120px] md:h-[120px] md:ml-10 rounded-full border border-searchBgColor flex items-center justify-center bg-white">
                    <img
                      src={data?.url_logo_photo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="flex flex-col ml-4 md:ml-10">
                    <p className="text-base ll:text-lg md:text-xl font-AeonikProMedium mb-[5px] md:mb-3">
                      {data?.name || null}
                    </p>
                    <div className="flex items-center md:justify-between">
                      <div
                        className={`${
                          data?.overall_rating ? "block" : "hidden"
                        } not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex flex-wrap items-center text-sm`}
                      >
                        <div className="flex items-center">
                          <div className="flex items-center -mt-1 mr-[6px] md:mr-2">
                            <StarIcons />
                          </div>
                          <p className="font-AeonikProMedium text-black mr-1">
                            {data?.overall_rating || 0}
                          </p>
                        </div>
                        <div className="flex whitespace-nowrap">
                          <p className="text-setTexOpacity font-AeonikProRegular whitespace-nowrap">
                            ( {data?.rated_users_count || 0} votes )
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row-reverse md:flex-row items-center md:ml-auto justify-between md:justify-start mt-3 md:mt-0">
                  <div className="w-fit md:w-[250px] h-9 md:h-12 flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white px-5 rounded-lg md:ml-10">
                    <DeliveryStoreIcon />
                    <p className="text-[13px] md:text-base font-AeonikProMedium text-[#2c2c2c] ml-3">
                      {data?.delivery?.name_ru}
                    </p>
                  </div>
                  <div className="flex items-center md:ml-[88px] md:mt-0">
                    <div className="flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white w-9 h-9 md:w-12 md:h-12 rounded-lg mr-1">
                      <ManGenIcons />
                    </div>
                    <div className="flex items-center justify-center border border-searchBgColor bg-btnBgColor md:bg-white w-9 h-9 md:w-12 md:h-12 rounded-lg">
                      <WomanGenIcons />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    goDetail(data?.id);
                  }}
                  className={
                    "w-full md:w-fit flex items-center justify-center font-AeonikProMedium text-base text-SignInBgColor border border-searchBgColor md:border-none bg-[#E8F5FD] md:bg-white mt-6 md:mt-0 md:ml-[117px] py-2 md:py-0 rounded-lg"
                  }
                >
                  Подробнее
                </button>
              </div>
            );
          })}
        </section>

        <section className="w-full h-fit flex items-center justify-center mt-10 md:mt-[75px] gap-x-3 ll:gap-x-6">
          <action className="flex items-center justify-center cursor-pointer bg-searchBgColor w-10 ll:w-[44px] md:w-fit  md:px-4 h-10 ll:h-[44px] rounded-lg">
            <span className="rotate-[-90deg]">
              <ArrowTopIcons colors={"#007DCA"} />
            </span>{" "}
            <p className="hidden md:block not-italic ml-1 font-AeonikProRegular text-lg leading-4 text-fullBlue">
              Previous
            </p>
          </action>
          <action className="flex items-center">
            <ul className="flex items-center gap-x-2 ll:gap-x-3">
              <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg bg-fullBlue text-white flex items-center justify-center cursor-pointer ">
                1
              </li>
              <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
                2
              </li>
              <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
                3
              </li>
              <li className="not-italic hidden font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor md:flex items-center justify-center cursor-pointer ">
                4
              </li>
              <li className="not-italic font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor flex items-center justify-center cursor-pointer ">
                ...
              </li>
            </ul>
          </action>
          <action className="flex items-center justify-center cursor-pointer bg-searchBgColor w-10 ll:w-[44px]  md:w-fit md:px-4 h-10 ll:h-[44px] rounded-lg">
            <p className="hidden md:block not-italic  font-AeonikProRegular mr-1 text-lg leading-4 text-fullBlue">
              Next
            </p>
            <span className="rotate-[90deg]">
              <ArrowTopIcons colors={"#007DCA"} />
            </span>
          </action>
        </section>
      </section>
    </main>
  );
};

export default ShoppingBrands;
