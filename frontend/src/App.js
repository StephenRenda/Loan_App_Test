import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#C8E6C9",
      main: "#424242",
      dark: "#2E7D32",
      contrastText: "#fff",
    },
    secondary: {
      light: "#EF9A9A",
      main: "#2c7ac9",
      dark: "#5c5d5f",
      contrastText: "#000",
    },
    openTitle: green["400"],
    protectTitle: red["400"],
    type: "dark",
  },
});

export default App;
