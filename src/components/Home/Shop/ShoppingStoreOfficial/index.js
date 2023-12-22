import { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import { useParams } from "react-router-dom";
import LocationOfYandex from "../../Products/SignleMainProducts/SingleProduct/Product_Detail/LocationOfYandex/LocationOfYandex";
import ShowPageComment from "./ShowPageComment/ShowPageComment";
import { GoBackIcon } from "../../../../assets/icons";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../hook/useHttp";

const ShoppingStoreOfficial = () => {
  const [openTabComment, setOpenTabComment] = useState(false);
  const [openTabLocation, setOpenTabLocation] = useState(false);
  const [storeData, setStoreData] = useState({});
  const { request } = useHttp();
  const { id } = useParams();
  const NewId = id.replace(":", "");

  //------ GET STORE DATA -------
  const { refetch } = useQuery(
    ["get-store-info"],
    async () => {
      return request({ url: `/main/shops/${NewId}`, token: true });
    },
    {
      onSuccess: (res) => {
        // console.log(res?.shop, "SUCCESS, RESPONSE");
        setStoreData(res);
      },
      onError: (err) => {
        console.log(err, "THERE IS AN ERROR IN SHOPS LIST");
      },
    }
  );

  const clickButtons = {
    openTabComment,
    setOpenTabComment,
    openTabLocation,
    setOpenTabLocation,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
      <section className="w-full border-b border-searchBgColor">
        <ShoppingStoreOfficialBreadCrumb name={storeData?.name} />
      </section>

      <section className="w-full border-searchBgColor ">
        <ShoppingStoreOfficialTop
          clickButtons={clickButtons}
          storeData={storeData}
        />
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Products Section */}
          <article
            className={`${
              openTabComment || openTabLocation ? "hidden" : "block"
            } w-full`}
          >
            <ShoppingStoreCategory />
          </article>

          {/* Comment Section For Shopping Page */}
          <action className={`${openTabComment ? "block" : "hidden"} w-full `}>
            <ShowPageComment refetch={refetch} storeData={storeData} setOpenTabComment={setOpenTabComment} />
          </action>

          {/* Map Section */}
          <action
            className={`${
              openTabLocation ? "block" : "hidden"
            } w-full text-3xl px-4 pb-10`}
          >
            <button
              onClick={() => {
                setOpenTabLocation(false);
              }}
              className={`flex items-center cursor-pointer justify-start md:justify-center md:border border-borderColor2 rounded-lg mr-20 md:mt-4 md:mr-5`}
            >
              <GoBackIcon />
            </button>
            <LocationOfYandex />
          </action>
        </div>
      </section>
    </main>
  );
};

export default ShoppingStoreOfficial;
