import { useState } from "react";

import { NavLink } from "react-router-dom";
import { UzbekFlag, nike } from "../../../../../AssetsMain";
import {
  LocationIcons,
  ManGenIcons,
  StarIcons,
  VideoStoreIcons,
  WomanGenIcons,
} from "../../../../../AssetsMain/icons";

const ShoppingBrands = () => {
  const [allShops, setAllShops] = useState([
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
      name: "Nike Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
    {
      id: 3,
      name: "Nike Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
    {
      id: 4,
      name: "Nike Store Official Dealer",
      logo: "",
      votes: 859,
      orders: 4589,
      location: "60 Amir Temur Avenue, Mirzo Ulugbek district",
      zipcode: "Tashkent 100017",
    },
  ]);

  return (
    <div className="flex flex-col min-h-[44px]  justify-center items-center my-3">
      <div className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto mt-[50px] mb-[90px]">
        <div className="w-full">
          {allShops.map((data) => (
            <NavLink
              to="/shopping_store"
              key={data.id}
              className="relative w-full h-[100px] flex items-center justify-between border border-searchBgColor rounded-lg mb-[30px]"
            >
              <div className="absolute w-[120px] h-[120px] left-[55px] rounded-full border border-searchBgColor flex items-center justify-center bg-white">
                <img src={nike} alt="" />
              </div>
              <div className="flex flex-col ml-[210px]">
                <div className="text-xl font-AeonikProMedium mb-3">
                  {data.name}
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center -mt-1 mr-2">
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                      <StarIcons />
                    </div>
                    <div className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center text-sm">
                      <div className="font-AeonikProMedium text-black mr-1">
                        {" "}
                        5.0{" "}
                      </div>
                      <div className="text-setTexOpacity font-AeonikProRegular">
                        ({data.votes} votes){" "}
                        <span className="ml-[10px]">|</span>{" "}
                      </div>
                      <div className="font-AeonikProRegular ml-[10px] text-setTexOpacity">
                        {data.orders} orders
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
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
              <div className="flex items-center mr-5">
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
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingBrands;
