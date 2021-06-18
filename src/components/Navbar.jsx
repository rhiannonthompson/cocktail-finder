import React from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { Link } from "@material-ui/core";
import { colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    "&:hover": {
      color: colors.mid_gray,
    },
  },
  buttonLink: {
    border: `1px solid ${colors.white}`,
    "& .MuiButton-label": {
      color: colors.white,
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  function handlePageChange() {
    history.push("/about");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h1"
            className={classes.title}
            component={Link}
            to={"/"}
          >
            Cocktail Finder
          </Typography>
          <Button
            size="large"
            className={classes.buttonLink}
            onClick={handlePageChange}
          >
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
