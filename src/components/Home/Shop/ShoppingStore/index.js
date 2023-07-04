import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useEffect } from "react";

export default function ShoppingStore() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-0 z-10">
      <div className="w-full md:border-b md:border-searchBgColor">
        <ShoppingStoreBreadCrumb />
      </div>
      <div className="w-full md:border-b md:border-searchBgColor">
        <ShoppingTop />
      </div>
      <div className="w-full">
        <ShoppingBrands />
      </div>
    </div>
  );
}
