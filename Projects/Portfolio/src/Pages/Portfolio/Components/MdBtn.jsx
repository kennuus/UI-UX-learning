import React from "react";

export default function MdBtn(props) {
  return (
    <button
      className="h-[3.4rem] rounded-2xl bg-white-3
				 px-[2rem] text-[1.4rem] font-bold 
				 text-white transition-colors dark:bg-black-2 dark:text-gray-text pc:h-[8vh] pc:px-[3vw] pc:text-[1.4vw] pc:hover:bg-black pc:dark:hover:bg-black-1"
    >
      {props.children}
    </button>
  );
}
