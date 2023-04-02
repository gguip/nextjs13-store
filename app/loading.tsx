"use client";

import { Oval } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="flex flex-col place-items-center mt-60">
      <Oval color="#4fa94d" height={80} width={80} />
    </div>
  );
}
