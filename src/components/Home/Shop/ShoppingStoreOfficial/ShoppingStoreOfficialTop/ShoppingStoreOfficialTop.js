import { NavLink } from "react-router-dom";

import { nike } from "../../../../../AssetsMain";
import {
  LocationIcons,
  ManGenIcons,
  StarIcons,
  VideoStoreIcons,
  WomanGenIcons,
} from "../../../../../AssetsMain/icons";

const ShoppingStoreOfficialTop = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between m-auto">
        <div className="w-full flex flex-col">
          <div className="w-full h-[360px] border border-searchBgColor bg-btnBgColor rounded-t-lg">
            <img src="" alt="" />
          </div>
          <div className="relative w-full h-[100px] flex items-center justify-between border-t-0 border border-searchBgColor rounded-b-lg ">
            <div className="absolute w-[150px] h-[150px] left-[40px] rounded-full border border-searchBgColor flex items-center justify-center bg-white">
              <img src={nike} alt="" />
            </div>
            <div className="flex flex-col ml-[210px]">
              <div className="text-xl font-AeonikProMedium mb-3">
                Nike Store Official Dealer
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
                      5.0
                    </div>
                    <div className="text-setTexOpacity font-AeonikProRegular">
                      (859 votes) <span className="ml-[10px]">|</span>{" "}
                    </div>
                    <div className="font-AeonikProRegular ml-[10px] text-setTexOpacity">
                      4937 orders
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
                  60 Amir Temur Avenue, Mirzo Ulugbek district
                </p>
                <p className="text-sm font-AeonikProRegular">Tashkent 100017</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingStoreOfficialTop;
