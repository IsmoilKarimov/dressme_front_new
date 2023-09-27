import { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import { useParams } from "react-router-dom";
import LocationOfYandex from "../../Products/SignleMainProducts/SingleProduct/Product_Detail/LocationOfYandex/LocationOfYandex";
import ShowPageComment from "./ShowPageComment/ShowPageComment";

const ShoppingStoreOfficial = () => {
  const { id } = useParams();
  const NewId = id.replace(":", "");

  const [openTabComment, setOpenTabComment] = useState(false)
  const [openTabLocation, setOpenTabLocation] = useState(false)

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
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
      <section className="w-full border-b border-searchBgColor">
        <ShoppingStoreOfficialBreadCrumb name={NewId} />
      </section>
      <section className="w-full border-searchBgColor ">
        <ShoppingStoreOfficialTop openTabComment={openTabComment} setOpenTabComment={setOpenTabComment} openTabLocation={openTabLocation} setOpenTabLocation={setOpenTabLocation} name={NewId} />
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Products Section */}
          <article className={`${openTabComment || openTabLocation ? "hidden" : "block"} w-full`}>
            <ShoppingStoreCategory />
          </article>
          {/* Comment Section For Shopping Page */}
          <action className={`${openTabComment ? "block" : "hidden"} w-full `}>
            <ShowPageComment setOpenTabComment={setOpenTabComment}/>
          </action>
          {/* Map Section */}
          <action className={`${openTabLocation ? "block" : "hidden"} w-full text-3xl px-4 pb-10`}>
            <LocationOfYandex />
          </action>
        </div>
      </section>
    </main>
  );
};

export default ShoppingStoreOfficial;
