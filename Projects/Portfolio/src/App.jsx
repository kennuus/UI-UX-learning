import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Error from "./Error";
import Loading from "./Loading.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  const setTheme = (themeName) => {
    themeName === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    async function loadCSS() {
      /* when websites starts */
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");

      /* at the time of work */
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          e.matches ? setTheme("dark") : setTheme("light");
        });
      const currentURL = window.location.pathname;
      let cssFileName = "";

      if (currentURL === "/") {
        cssFileName = "Portfolio";
      } else if (currentURL === "/Restaurant") {
        cssFileName = "Restaurant";
      } else setLoading(false);

      const cssPath = await import(`./CSS/${cssFileName}.css`);

      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = cssPath.default;
      document.head.appendChild(linkElement);

      setLoading(false);
    }

    loadCSS();
  }, [window.location.pathname]);
  return loading === true ? (
    <Loading />
  ) : (
    <Router>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/Restaurant" element={<Restaurant />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
