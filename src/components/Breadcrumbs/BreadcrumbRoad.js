import React from "react";
import { Breadcrumb } from "antd";

function BreadcrumbRoad() {
  return (
    <div className="max-w-[1280px] mx-auto pt-8">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Главная </a>,
          },
          {
            title: <a href="/category">Разделы</a>,
          },
        //   {
        //     title: <a href="/section">Application List</a>,
        //   },
        //   {
        //     title: "An Application",
        //   },
        ]}
      />
    </div>
  );
}

export default BreadcrumbRoad;
