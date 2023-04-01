"use client";

import React from "react";
import ReactDom from "react-dom";

export default function Modal() {
  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div className="bg-transparent inset-0 absolute"></div>
      <div className="flex flex-col bg-white absolute right-0 gap-4 p-4">
        <div>
          <h1>Cart</h1>
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
}
