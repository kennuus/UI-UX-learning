import React from "react";
import Contacts from "./Contacts";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

export default function Sheet(props) {
  return (
    <main
      ref={props.refSheet}
      className="
			z-[10] mt-[-10vh] flex flex-col gap-[4rem]
			bg-light-brown p-[2rem] 
			dark:bg-dark-brown pc:w-[70vw] pc:gap-[15vh]
			pc:rounded-t-3xl pc:px-[5vw] pc:py-[10vh]"
    >
      <Gallery refPhotos={props.refPhotos} />
      <Reviews refReviews={props.refReviews} />
      <Contacts refContacts={props.refContacts} />
    </main>
  );
}
