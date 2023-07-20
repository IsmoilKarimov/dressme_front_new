import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { nike } from "../../../../../AssetsMain";
import {
  ArrowTopIcons,
  LocationIcons,
  ManGenIcons,
  MenuMore,
  StarIcons,
  VideoStoreIcons,
  WomanGenIcons,
} from "../../../../../AssetsMain/icons";

const ShoppingBrands = () => {
  const [allShops] = useState([
    {
      id: 1,
      name: "Nike Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
    {
      id: 2,
      name: "Red Tag Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
    {
      id: 3,
      name: "Button Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
    {
      id: 4,
      name: "Vip Brand Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
  ]);
  const navigate = useNavigate();
  const gotoOfficial = (id) => {
    navigate(`/shopping_store/:${id}`);
  };

  return (
    <main className="flex flex-col min-h-[44px]  justify-center items-center my-3">
      <section className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto md:mt-[50px] mb-20 md:mb-[90px]">
        <section className="w-full border border-red-500">
          {allShops.map((data) => (
            <div
              onClick={() => {
                gotoOfficial(data?.name);
              }}
              key={data.id}
              className="w-full cursor-pointer h-fit md:h-[100px]  border border-red-500 flex items-center justify-start md:border md:border-searchBgColor rounded-lg mb-[30px]"
            >
              <figure className="w-[50px] h-[50px] ll:w-[60px] ll:h-[60px] md:w-[120px] md:h-[120px] md:ml-[55px] rounded-full border border-searchBgColor flex items-center justify-center bg-white">
                <img src={nike} alt="" className="w-[70%] md:w-fit" />
              </figure>
              <div className="flex flex-col ml-4 md:ml-10">
                <p className="text-base ll:text-lg  md:text-xl font-AeonikProMedium mb-[9px] md:mb-3">
                  {data.name}
                </p>
                <div className="flex items-center md:justify-between">
                  <div className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex flex-wrap items-center text-sm">
                    <div className="flex items-center">
                      <div className="flex items-center -mt-1 mr-[6px] md:mr-2">
                        <StarIcons />
                      </div>
                      <p className="font-AeonikProMedium text-black mr-1">
                        5.0
                      </p>
                    </div>
                    <div className="flex whitespace-nowrap">
                      <p className="text-setTexOpacity font-AeonikProRegular whitespace-nowrap">
                        ({data.votes} votes)
                        <span className="ml-[10px]">|</span>
                      </p>
                      <p className="font-AeonikProRegular ml-[10px] text-setTexOpacity whitespace-nowrap">
                        {data.orders} orders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center md:ml-auto">
                <NavLink
                  to="/delivery-points"
                  className="flex items-center justify-center w-12 h-12 rounded-lg border border-searchBgColor cursor-pointer"
                >
                  <span>
                    <LocationIcons />
                  </span>
                </NavLink>
                <NavLink to="/delivery-points" className="flex flex-col ml-3">
                  <p className="text-sm font-AeonikProRegular">
                    {data.location}
                  </p>
                  <p className="text-sm font-AeonikProRegular">
                    {data.zipcode}
                  </p>
                </NavLink>
              </div>
              <div className="hidden md:flex items-center ml-28 mr-5">
                <button className="flex items-center justify-center border border-searchBgColor w-12 h-12 rounded-lg mr-3">
                  <VideoStoreIcons />
                </button>
                <button className="flex items-center justify-center border border-searchBgColor w-12 h-12 rounded-lg mr-1">
                  <ManGenIcons />
                </button>
                <button className="flex items-center justify-center border border-searchBgColor w-12 h-12 rounded-lg">
                  <WomanGenIcons />
                </button>
              </div>
              <button className="w-12 h-12 flex md:hidden items-center justify-center rounded-xl border border-searchBgColor ml-auto md:ml-0">
                <MenuMore />
              </button>
            </div>
          ))}
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
              <li className="not-italic hidden font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor md:flex items-center justify-center cursor-pointer ">
                5
              </li>
              <li className="not-italic hidden font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColo md:flex items-center justify-center cursor-pointer ">
                6
              </li>
              <li className="not-italic hidden font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor md:flex items-center justify-center cursor-pointer ">
                7
              </li>
              <li className="not-italic hidden font-AeonikProRegular text-lg leading-4 text-center w-10 ll:w-[44px] h-10 ll:h-[44px] rounded-lg hover:bg-searchBgColor md:flex items-center justify-center cursor-pointer ">
                8
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
