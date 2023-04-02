"use client";

import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";
import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      };
    });

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });

    if (!response) {
      return;
    }

    const data = await response.json();
    router.push(data.session.url);
  }

  if (typeof window === "object") {
    return ReactDom.createPortal(
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        <div
          onClick={closeModal}
          className="bg-transparent inset-0 absolute"
        ></div>
        <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
          <div className="flex items-center justify-between text-xl relative p-6">
            <h1>Cart</h1>
            <i
              className="fa-solid fa-xmark cursor-pointer hover:opacity-60"
              onClick={closeModal}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
          </div>
          <div className="p-4 flex flex-col gap-4 flex-1">
            {cartItems.length === 0 ? (
              <p className="text-center">There is nothing in your cart</p>
            ) : (
              <>
                <div className="flex items-center justify-between p-1">
                  <p className="w-1/2">Product</p>
                  <p>Quantity</p>
                  <p>Price</p>
                </div>
                {cartItems.map((cartItem, cartIndex) => (
                  <div
                    key={cartIndex}
                    className="flex flex-col gap-2 border-b border-solid border-slate-500 p-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>{cartItem.quantity}</p>
                      <p>R$ {Math.round(cartItem.cost / 100)}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div
            onClick={checkout}
            className="border border-solid border-slate-500 text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
          >
            Checkout
          </div>
        </div>
      </div>,
      document.getElementById("portal") as Element
    );
  }

  return <></>;
}
