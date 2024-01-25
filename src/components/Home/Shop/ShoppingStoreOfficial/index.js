import React, { useEffect, useState } from "react";
import ShoppingStoreCategory from "./ShoppingStoreCategory/ShoppingStoreCategory";
import ShoppingStoreOfficialBreadCrumb from "./ShoppingStoreOfficialBreadcrumb/ShoppingStoreOfficialBreadcrumb";
import ShoppingStoreOfficialTop from "./ShoppingStoreOfficialTop/ShoppingStoreOfficialTop";
import LocationOfYandex from "../../Products/SignleMainProducts/SingleProduct/Product_Detail/LocationOfYandex/LocationOfYandex";
import ShowPageComment from "./ShowPageComment/ShowPageComment";
import { GoBackIcon } from "../../../../assets/icons";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../../hook/useHttp";

const ShoppingStoreOfficial = () => {
  const [openTabComment, setOpenTabComment] = useState(false);
  const [openTabLocation, setOpenTabLocation] = useState(false);
  const [filteredData, setFilteredData] = useState()
  const { request } = useHttp()
  console.log(filteredData, 'filteredData');

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


  const { id } = useParams();
  const newId = id.replace(":", "");

  const url = `https://api.dressme.uz/api`;

  function fetchGetAllData() {
    let params = new URLSearchParams();
    params.append("location_id", newId);

    fetch(`${url}/main/shops/${newId}?` + params)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "bures");
        setFilteredData(res)
      })
      .catch((err) => console.log(err, "ERRORLIST"));
  }
  useEffect(() => {
    fetchGetAllData()
  }, [newId])

  return (
    <main className="max-w-[1280px] w-[100%] flex flex-col items-center justify-between m-auto">
      <section className="w-full border-b border-searchBgColor border border-black">
        <ShoppingStoreOfficialBreadCrumb name={filteredData?.shop?.name} />
      </section>

      <section className="w-full border-searchBgColor border border-red-500">
        <ShoppingStoreOfficialTop
          clickButtons={clickButtons}
          filteredData={filteredData}
        />
      </section>

      <section className="w-full flex items-center justify-center border border-green-500">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Products Section */}
          <article
            className={`${openTabComment || openTabLocation ? "hidden" : "block"
              } w-full border border-red-500`}
          >
            <ShoppingStoreCategory filteredData={filteredData} setFilteredData={setFilteredData} />
          </article>

          {/* Comment Section For Shopping Page */}
          <action className={`${openTabComment ? "block" : "hidden"} w-full `}>
            <ShowPageComment
              filteredData={filteredData}
              setOpenTabComment={setOpenTabComment}
            />
          </action>

          {/* Map Section */}
          <action
            className={`${openTabLocation ? "block" : "hidden"
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

export default React.memo(ShoppingStoreOfficial);
