import React from "react";

function SideBarIcon(props) {
  return (
    <button
      onClick={props.to}
      className="w-[2.6rem] transition-transform pc:w-[3vw]"
    >
      {props.svg}
    </button>
  );
}

export default SideBarIcon;
