import React, { useEffect } from "react";
import { SingleProduct } from "./SingleProduct/SingleProduct";

export default function SingleMainProducts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="w-full px-4">
      <SingleProduct />
    </main>
  );
}
