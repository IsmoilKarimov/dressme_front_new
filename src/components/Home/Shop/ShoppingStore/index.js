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
    <main className="w-full flex flex-col items-center px-4 md:px-0">
      <section className="w-full md:border-b md:border-searchBgColor">
        <ShoppingStoreBreadCrumb />
      </section>
      <section className="w-full md:border-b md:border-searchBgColor">
        <ShoppingTop />
      </section>
      <section className="w-full">
        <ShoppingBrands />
      </section>
    </main>
  );
}
