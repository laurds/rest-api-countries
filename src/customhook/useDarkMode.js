import { useState, useEffect } from "react";

const useDarkMode = (init) => {
  const [theme, setTheme] = useState(init);
  // const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    const currentTheme = window.localStorage.getItem("theme");
    currentTheme && setTheme(currentTheme);
    // setMountedComponent(true);
  }, []);

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  const setMode = (val) => {
    setTheme(val);
    window.localStorage.setItem("theme", val);
  };

  return [theme, themeToggler];
};

export { useDarkMode };
