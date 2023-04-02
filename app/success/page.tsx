"use client";

import Link from "next/link";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SuccessPage() {
  return (
    <div className="flex flex-col place-items-center">
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_ynz5xr.json"
        style={{ height: "200px", width: "200px" }}
      />
      <p className="text-xl text-green-500 font-semibold">
        Payment Successful!
      </p>
      <Link href={"/"}>
        <button className="mt-10 bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2 rounded">
          Back Home
        </button>
      </Link>
    </div>
  );
}
