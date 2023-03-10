import React from "react";

export default function ThemeSwitcher() {
  const setTheme = (themeName) => {
    themeName === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  const themeSwitch = () => {
    document.documentElement.classList.contains("dark")
      ? setTheme("light")
      : setTheme("dark");
  };

  window.addEventListener("load", () => {
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
  });

  return (
    <button
      className="flex w-[2.6rem] pc:w-[3vw]"
      onClick={() => themeSwitch()}
      aria-label="change Theme"
    >
      {/* <MoonIcon className='block dark:hidden w-[100%]' />
			<SunIcon className='dark:block hidden w-[100%]' /> */}
    </button>
  );
}
