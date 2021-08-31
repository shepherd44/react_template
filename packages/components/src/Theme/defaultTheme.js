import { createTheme } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const defaultTheme = createTheme({
  palette: {
    primary: blueGrey,
  },
  componentA: {
    top: "100px",
    label: "to default",
  },
});

export default defaultTheme;
