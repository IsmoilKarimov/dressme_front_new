import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useEffect } from "react";

export default function ShoppingStore() {
   useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    });
    return(
        <div className="w-full flex flex-col items-center ">
             <div className="w-full border-b border-searchBgColor">
                <ShoppingStoreBreadCrumb />
             </div>
             <div className="w-full border-b border-searchBgColor">
                <ShoppingTop />
             </div>
             <div className="w-full">
                <ShoppingBrands />
             </div>
        </div>
    )
}