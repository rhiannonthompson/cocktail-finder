import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import {InputBase, Paper, Divider} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 4,
    padding: theme.spacing(1),
    "&:focus-within": {
      boxShadow: "0px 0px 0px 1px #ffdc27 inset",
    }
  },
  input: {
    width: "100%",
    padding: theme.spacing(4),
    fontSize: 22,
    "&:hover": {
      color: "#c2c2c2"
    },
    "&:focus-within": {
      color: "#292929",
    }
  },
  icon: {
    margin: 10,
    fontSize: 48,
  },
  divider: {
    height: 38,
    width: 2,
  },
  paper: {
    display: "flex",
    minWidth: 140,
    justifyContent: "space-between",
    border: "0.5px solid #c2c2c2",
    "&:focus-within": {
      border: "none",
    }
  }
}));


export default function SearchForm() {
  const classes = useStyles();

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Paper elevation={1} component="form" onSubmit={handleSubmit} className={classes.paper}>
      <div className={classes.inputContainer}>
        <SearchIcon color="primary" className={classes.icon} fontSize="large"/>
        <Divider
          className={classes.divider}
          orientation="vertical"
        />
        <InputBase
          className={classes.input}
          placeholder="Search for a cocktail"
          inputProps={{ "aria-label": "Search for a cocktail" }}
          type="text"
          id="name"
          inputRef={searchValue}
          onChange={searchCocktail}
          autoComplete="off"
        />
        </div>
      </Paper>
  );
}

