import { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import defaultTheme from "./defaultTheme";
import MyThemeContext from "./ThemeContext";

const CustomThemeProvider = ({ theme: theme_, ...otherProps }) => {
  const [theme, setTheme] = useState(theme_ || defaultTheme);

  const bag = {
    theme,
    setTheme,
  };
  return (
    <MyThemeContext.Provider value={bag}>
      <ThemeProvider {...otherProps} theme={theme} />
    </MyThemeContext.Provider>
  );
};

export default CustomThemeProvider;
