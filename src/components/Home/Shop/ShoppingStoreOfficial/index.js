import { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import { useParams } from "react-router-dom";

const ShoppingStoreOfficial = () => {
  const { id } = useParams();
  const NewId = id.replace(":", "");

  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center ">
      <section className="w-full border-b border-searchBgColor">
        <ShoppingStoreOfficialBreadCrumb name={NewId} />
      </section>
      <section className="w-full border-searchBgColor ">
        <ShoppingStoreOfficialTop openTab={openTab} setOpenTab={setOpenTab} name={NewId} />
      </section>
      <section className={`${openTab ? 'hidden' : 'block' } w-full`}>
        <ShoppingStoreCategory />
      </section>      
    </main>
  );
};  

export default ShoppingStoreOfficial;
