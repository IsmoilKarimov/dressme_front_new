import { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import { useParams } from "react-router-dom";
import ProductComment from "../../Products/SignleMainProducts/SingleProduct/ProductComment/ProductComment";

const ShoppingStoreOfficial = () => {
  const { id } = useParams();
  const NewId = id.replace(":", "");

  const [openTab, setOpenTab] = useState(false)
  const [openTab2, setOpenTab2] = useState(false)
  
  // const activeBtn = (eId) => {
  //   setOpenTab(current => {
  //     return current.map(items => {
  //       if (items.id == eId) {
  //         return { ...items, action: true }
  //       } else {
  //         return { ...items, action: false }
  //       }
  //     })
  //   })
  // }

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
        <ShoppingStoreOfficialTop openTab={openTab} setOpenTab={setOpenTab} openTab2={openTab2} setOpenTab2={setOpenTab2} name={NewId} />
      </section>
      <section >     
          <div>
            {/* Products Section */}
            <article className={`${openTab || openTab2 ? "hidden" : "block"} w-full`}>
              <ShoppingStoreCategory />
            </article>
            {/* Comment Section For Shopping Page */}
            <action className={`${openTab ? "block" : "hidden"} w-full `}>
              <ProductComment />
            </action>
            {/* Map Section */}
            <action className={`${openTab2? "block" : "hidden"} w-full text-3xl`}>
              Map infos
            </action>
          </div>
      </section>      
    </main>
  );
};  

export default ShoppingStoreOfficial;
