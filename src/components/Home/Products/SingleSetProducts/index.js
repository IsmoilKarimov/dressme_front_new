import React, { useEffect, useState } from "react";
import { SingleProduct } from "./SingleSetProduct/SingleSetProduct";

export default function SingleSetProducts() {
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
