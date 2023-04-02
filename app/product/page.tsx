"use client";

import React from "react";
import useCart from "../(store)/store";

type ProductPageProps = {
  searchParams: {
    price_id: string;
  };
};

export default function ProductPage(props: ProductPageProps) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInformation, name, description } = product;

  if (!product?.name) {
    window.location.href = "/";
  }

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          <img src={productInformation.images[0]} alt={name} />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-4">
            <h3>{name}</h3>
            <p className="md:text-base">R$ {cost / 100}</p>
          </div>
          <p className="text-sm flex-1">{description}</p>
          <button
            className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
