import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const darkTheme = createTheme({
  palette: {
    primary: grey,
  },
  componentA: {
    label: "to black",
  },
});

export default darkTheme;
