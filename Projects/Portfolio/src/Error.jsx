import React from "react";
import { useLocation } from "react-router-dom";

export default function Error() {
  const location = useLocation();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center pb-[30vh]">
      <h1>Oops!</h1>
      <h3 className="font-normal">
        The path <code className="font-bold">{location.pathname}</code> doesn`t
        exist.
      </h3>
    </div>
  );
}
