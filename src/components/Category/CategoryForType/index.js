import { useState } from "react";
import CategoryForType from "./CategoryForType";
import CategoryTopDetail from "./CategoryTop/CategoryTopDetail";

export default function CategoryMainType() {
  const [filterData, setFilterData] = useState([]);
  return (
    <main className="w-full flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="w-full ">
        <CategoryTopDetail filterData={filterData} setFilterData={setFilterData}/>
      </section>
      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
        <article className="w-[100%] h-fit ">
          <CategoryForType filterData={filterData} setFilterData={setFilterData}/>
        </article>
      </section>
    </main>
  );
}
