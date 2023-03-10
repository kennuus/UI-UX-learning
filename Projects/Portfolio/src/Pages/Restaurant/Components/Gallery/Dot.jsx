import React from "react";

export default function Dot(props) {
  return (
    <button
      onClick={() => props.setImg(props.i)}
      className="
			mx-3 flex h-3 
			w-3 items-center justify-center rounded-full 
			bg-white transition-transform pc:mx-1"
    >
      {props.isActive && (
        <span
          className="h-[60%] w-[60%] rounded-full
				 bg-light-brown dark:bg-dark-brown"
        />
      )}
    </button>
  );
}
