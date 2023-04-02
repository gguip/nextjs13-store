"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";

type ProductInfo = {
  name: string;
  description: string;
  images: string[];
};

export type ProductProps = {
  id: string;
  unit_amount: number;
  product: ProductInfo;
};

export interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const setProduct = useCart((state) => state.setProduct);

  const {
    id: price_id,
    unit_amount: cost,
    product: productInformation,
  } = product;

  const { name, description } = productInformation;

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInformation,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  }

  return (
    <div
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
      onClick={onProductClick}
    >
      <img
        src={productInformation.images[0]}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>R$ {cost / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
