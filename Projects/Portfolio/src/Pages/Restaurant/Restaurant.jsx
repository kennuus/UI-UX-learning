import Home from "./Containers/Home";
import Sheet from "./Containers/Sheet/Sheet";
import { useRef } from "react";
import Header from "./Containers/Header";
import ThemeSwitcher from "./Containers/ThemeSwitcher";

export default function Restaurant() {
  const refSheet = useRef();
  const refPhotos = useRef();
  const refHome = useRef();
  const refReviews = useRef();
  const refContacts = useRef();

  const ScrollToMain = () => {
    refSheet.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToPhotos = () => {
    refPhotos.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToHome = () => {
    refHome.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToReviews = () => {
    refReviews.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToContacts = () => {
    refContacts.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        toPhotos={ScrollToPhotos}
        toHome={ScrollToHome}
        toReviews={ScrollToReviews}
        toContacts={ScrollToContacts}
      />
      <div className="flex flex-col items-center ">
        <Home toMain={ScrollToMain} refHome={refHome} />

        <Sheet
          refSheet={refSheet}
          refPhotos={refPhotos}
          refReviews={refReviews}
          refContacts={refContacts}
        />
      </div>
      <span className="fixed top-6 right-6 ml-4 hidden pc:block">
        <ThemeSwitcher />
      </span>
    </>
  );
}
