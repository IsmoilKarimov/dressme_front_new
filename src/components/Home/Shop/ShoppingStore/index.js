import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "../ShoppingStore/shoppingTop/shoppingTop";
import { useEffect, useState } from "react";

export default function ShoppingStore() {
  const [getData, setGetData] = useState([]);

  function handleData(data){
    setGetData(data)
  }
  console.log(getData);
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
        <ShoppingTop handleData={handleData}/>
      </section>
      <section className="w-full">
        <ShoppingBrands getData={getData}/>
      </section>
    </main>
  );
}
