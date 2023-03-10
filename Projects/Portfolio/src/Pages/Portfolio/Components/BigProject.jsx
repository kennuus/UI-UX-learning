import React from "react";
import { Link } from "react-router-dom";
import MdBtn from "./MdBtn";

export default function BigProject(props) {
  return (
    <div className="relative flex h-[100vh] w-[98vw] flex-col items-center px-[3rem] pc:items-start pc:px-[15vw]">
      <h3
        className="mb-[0.8rem] whitespace-nowrap 
			text-[2.6rem] pc:mb-[0.8vh] pc:text-[3.8vw]"
      >
        {props.project.title}
      </h3>
      <p className="max-w-[60vw] text-center text-[1.6rem] text-black-2 dark:text-white-3 pc:max-w-[20vw] pc:text-left pc:text-[1.2vw]">
        {props.project.description}
      </p>
      <Link
        to={props.project.path}
        onClick={() => reload()}
        className="absolute bottom-[30vh]"
      >
        <MdBtn>{props.project.btnText}</MdBtn>
      </Link>
    </div>
  );
}
