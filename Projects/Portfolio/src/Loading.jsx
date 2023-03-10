import React from "react";
import { loadSVG } from "../public/Portfolio/Svgs";

export default function Loading() {
  return (
    <div
      className="flex h-screen items-center 
    justify-center bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="mb-[10vh] flex flex-col items-center justify-between gap-[3vh]">
        <h1 className="text-[3rem] pc:text-[6vw]">Loading</h1>
        {loadSVG}
      </div>
    </div>
  );
}
