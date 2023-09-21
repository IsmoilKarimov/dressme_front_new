import { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import { useParams } from "react-router-dom";
import ProductComment from "../../Products/SignleMainProducts/SingleProduct/ProductComment/ProductComment";

const ShoppingStoreOfficial = () => {
  const { id } = useParams();
  const NewId = id.replace(":", "");

  const [openTab, setOpenTab] = useState([
    { id: 1, action: false},
    { id: 2, action: true},
    { id: 3, action: false},

  ])
  const activeBtn = (eId) => {
    setOpenTab(current => {
      return current.map(items => {
        if (items.id == eId) {
          return { ...items, action: true }
        } else {
          return { ...items, action: false }
        }
      })
    })
  }

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
        <ShoppingStoreOfficialTop openTab={openTab} setOpenTab={setOpenTab} activeBtn={activeBtn} name={NewId} />
      </section>
      <section >
        {openTab.map( item => (
          <div key={item.id}>
            {/* Products Section */}
            <article className={`${item.action ? 'block' : 'hidden' } w-full`}>
              <ShoppingStoreCategory />
            </article>
            {/* Comment Section For Shopping Page */}
            <div className={`${item.action ? "flex" : "hidden"} w-full `}>
              <ProductComment />
            </div>
            {/* Map Section */}
            <div className={`${item.action ? "flex" : "hidden"} w-full `}>
              Map infos
            </div>
          </div>
        ) )}
        
      </section>      
    </main>
  );
};  

export default ShoppingStoreOfficial;
