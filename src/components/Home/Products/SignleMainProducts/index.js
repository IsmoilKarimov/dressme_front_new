import React, { useEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct/SingleProduct";

export default function SingleMainProducts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="w-full ">
      <SingleProduct />
    </div>
  );
}
