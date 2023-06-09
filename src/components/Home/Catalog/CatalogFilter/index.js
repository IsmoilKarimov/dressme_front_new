import CatalogItems from "./CatalogItems";
import CatalogTopFilter from "./CatalogTop/CatalogTopFilter";

export default function CatalogMain() {
  return (
    <main className="w-full flex flex-col justify-center items-center m-0 p-0 box-border">
      <section className="w-full ">
        <CatalogTopFilter />
      </section>
      <section className="max-w-[1280px] w-[100%] flex justify-center items-center m-auto">
        <article className="w-[100%] h-fit ">
          <CatalogItems />
        </article>
      </section>
    </main>
  );
}
