import React from "react";
import { useState } from "react";
import Dot from "../../Components/Gallery/Dot";

export default function Gallery(props) {
  const imgsList = [
    "./main/shop.jpg",
    "./main/steak.webp",
    "./main/coffee.jpg",
  ];
  const [currentImage, setImage] = useState(0);
  const changePhoto = (num) => {
    {
      if (currentImage + num === -1) {
        setImage(imgsList.length - 1);
      } else if (currentImage + num === imgsList.length) {
        setImage(0);
      } else setImage(currentImage + num);
    }
  };

  return (
    <div ref={props.refPhotos}>
      <h2>Gallery</h2>

      <div className="flex flex-col gap-[1rem] pc:gap-[6vh]">
        <div className="h-[70vh] w-[100%] rounded-md bg-gray-300 pc:h-[65vh]">
          <img
            src={imgsList[currentImage]}
            className="h-[100%] w-[100%] rounded-md object-cover text-center text-[1.5rem] text-black"
            alt="Image is no more avilable"
          />
        </div>
        <nav className="mx-auto flex w-max items-center justify-between pc:w-[30%]">
          <button
            onClick={() => changePhoto(-1)}
            className="transition-transform pc:w-[3vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {imgsList.map((item, i) => (
            <Dot
              i={i}
              setImg={setImage}
              isActive={currentImage === i ? true : false}
              key={i}
            />
          ))}

          <button
            onClick={() => changePhoto(+1)}
            className="transition-transform pc:w-[3vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
