import { useState } from "react";
import CategoryForType from "./CategoryForType";

export default function CategoryMainType() {
  return (
    <main className="w-full flex flex-col justify-center items-center m-0 p-0 box-border">
      
      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto ">
        <article className="w-[100%] h-fit ">
          <CategoryForType />
        </article>
      </section>
    </main>
  );
}
