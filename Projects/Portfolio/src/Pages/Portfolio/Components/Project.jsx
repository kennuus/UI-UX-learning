import React from "react";
/* import ProjectTag from './ProjectTag' */
/* import { BigButton } from '../../../../public/Portfolio/Components'*/
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link
      to={props.path}
      ref={props.projectRef}
      onClick={() => reload()}
      className="no-underline"
    >
      {props.children}
    </Link>
  );
}
