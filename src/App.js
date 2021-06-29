import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { colors } from "./theme";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.orange.main,
    },
    secondary: {
      main: colors.light_yellow.main,
    },
    text: {
      primary: colors.black,
      secondary: colors.mid_gray,
    }
  },
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(","),
    button: {
      fontWeight: 600,
    }
  },
  props: {
    MuiButton: {
      variant: "outlined",
      color: "secondary",
    }
  },
  overrides: {
    MuiButton: {
      outlinedSecondary: {
        color: colors.mid_gray,
        "&:hover": {
          backgroundColor: colors.mid_gray,
          color: colors.light_yellow.main,
          border: `1px solid ${colors.mid_gray}`,
          },
        },
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.white,
      }
    }
    },
});

customTheme.typography.h1 = {
  fontSize: "2rem",
  color: colors.white,
  fontFamily: [
    '"Sansita Swashed"',
    "cursive",
  ].join(","),
  [customTheme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [customTheme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
}

customTheme.typography.h2 = {
  fontSize: "2rem",
  textTransform: "uppercase",
  fontWeight: 400,
  [customTheme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
}

customTheme.typography.h4 = {
  fontSize: "1.2rem",
  fontWeight: 500,
  [customTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
}

customTheme.typography.h5 = {
  fontSize: "1.3rem",
  fontWeight: 600,
  [customTheme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
}

customTheme.typography.body1 = {
  fontSize: "1rem",
  [customTheme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}

export default function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
