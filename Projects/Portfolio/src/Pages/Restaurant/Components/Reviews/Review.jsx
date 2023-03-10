import React from "react";

export default function Review(props) {
  return (
    <div
      className="relative flex h-[100%]
			w-[100%] flex-col rounded-md bg-lighter-brown
			px-4 py-[1rem] dark:bg-light-brown 
			pc:px-[1vw] pc:py-[3vh]"
    >
      {props.children}
    </div>
  );
}
