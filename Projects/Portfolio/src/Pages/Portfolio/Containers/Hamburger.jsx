import React from "react";

export default function Hamburger(props) {
  return (
    <button
      onClick={() => props.setIsSideBarShow(!props.isSideBarShow)}
      className="fixed top-[1rem] left-[1rem] z-[10] 
      flex h-[48px] w-[48px]
      items-center justify-center pc:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M7.95 11.95h32m-32 12h32m-32 12h32"
        />
      </svg>
    </button>
  );
}
