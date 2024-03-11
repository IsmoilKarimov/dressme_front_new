import NewBreadCrump from "../../../../Breadcrumbs/NewBreadCrump";

const CatalogTopFilter = ({ paramId }) => {
  const breadcrumbItems = [
    { label_uz: 'Asosiy', label_ru: 'Главная', url: '/' },
    { label_uz: 'Kategoriya', label_ru: 'категории', url: '/categories' },
    { label_uz: paramId?.id, label_ru: paramId?.id, url: '/categories/:id' },
  ];

  return (
    <main className="w-full">
      <section className="w-full h-full   ">
        <div className="flex flex-col border-b border-searchBgColor py-3 md:pt-8 md:pb-5 w-full justify-center items-center ">
          <section className="max-w-[1280px] w-[100%] h-full flex items-center justify-between m-auto md:px-0">
            <nav className="w-[100%] md:w-fit flex items-center py-1 md:p-0  md:px-0">
              <NewBreadCrump items={breadcrumbItems} />
            </nav>
          </section>
        </div>
      </section>
    </main>
  );
};
export default CatalogTopFilter;
