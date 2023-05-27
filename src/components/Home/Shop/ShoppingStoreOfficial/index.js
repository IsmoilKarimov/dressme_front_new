import { useEffect } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory"
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb"
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop"

const ShoppingStoreOfficial = () => {

   useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    });

    return(
        <div className="w-full flex flex-col items-center">
             <div className="w-full border-b border-searchBgColor">
                <ShoppingStoreOfficialBreadCrumb />
             </div>
             <div className="w-full border-searchBgColor">
                <ShoppingStoreOfficialTop />
             </div>
             <div className="w-full">
                <ShoppingStoreCategory />
             </div>
        </div>  
    )
}

export default ShoppingStoreOfficial