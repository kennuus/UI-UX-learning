import React from "react";

export default function BigButton(props) {
  return (
    <button
      onClick={props.onClick ? props.onClick : null}
      ref={props.ref ? props.onClick : null}
      className={`
			whitespace-nowrap rounded-md bg-white-1 
			text-[1.6rem] font-bold text-gray-text  
			transition-colors
			dark:bg-black-1 pc:text-[1.6vw] pc:hover:bg-white-2 pc:active:bg-white-1 pc:dark:hover:bg-black-2 pc:dark:active:bg-black-1  
      ${props.className ? props.className : undefined}}`}
      role={props.role ? props.role : undefined}
    >
      {props.children}
    </button>
  );
}
