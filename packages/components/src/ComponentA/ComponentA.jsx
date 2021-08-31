import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import blackTheme from "../Theme/darkTheme";
import defaultTheme from "./../Theme/defaultTheme";

function ComponentA() {
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);

  return (
    <Button
      style={{ top: "100px" }}
      onClick={() => {
        themeContext.setTheme(
          themeContext.theme === defaultTheme ? blackTheme : defaultTheme
        );
      }}
    >
      {theme.componentA.label}
    </Button>
  );
}

export default ComponentA;
