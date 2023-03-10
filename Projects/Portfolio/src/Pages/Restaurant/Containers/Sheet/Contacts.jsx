import React from "react";

export default function Contacts(props) {
  return (
    <div className="flex flex-col justify-center" ref={props.refContacts}>
      <h2>Contacts</h2>

      <form onSubmit={console.log("Form was submited")}>
        <div className="flex flex-col items-center gap-[1rem]  pc:gap-[2vh]">
          <input
            type="text"
            className="w-[100%] rounded-md bg-lighter-brown px-4 py-[0.5rem] text-[1.4rem] placeholder-white outline-none dark:bg-light-brown
								pc:px-[1vw] 
								pc:py-[1.5vh]
								pc:text-[1rem]"
            placeholder="Your Name"
            required
          />
          <input
            className="w-[100%] rounded-md bg-lighter-brown px-4 py-[0.5rem] text-[1.4rem] placeholder-white outline-none dark:bg-light-brown
								pc:px-[1vw] 
								pc:py-[1.5vh]
								pc:text-[1rem]"
            type="mail"
            placeholder="Your Mail"
            required
          />
          <textarea
            className={`w-[100%] rounded-md bg-lighter-brown px-4 py-[0.5rem]
								text-[1.4rem]
								placeholder-white
								outline-none
								dark:bg-light-brown
								pc:px-[1vw] 
								pc:py-[1.5vh]
								pc:text-[1rem]`}
            rows={4}
            placeholder="Your Feedback"
            required
          />

          <button
            type="submit"
            className="w-[50%] rounded-full bg-lighter-brown py-[0.5rem] transition-all hover:scale-100 
						dark:bg-light-brown pc:w-[30%] pc:py-[1.5vh] pc:hover:w-[35%] pc:active:w-[30%]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
