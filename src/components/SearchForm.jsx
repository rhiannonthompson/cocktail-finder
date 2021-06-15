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
    "&:focus-within": {
      boxShadow: "0px 0px 0px 1px #ffca28 inset",
    }
  },
  input: {
    width: "100%",
    padding: theme.spacing(2),
    "&:hover": {
      color: "#c2c2c2"
    }
  },
  iconButton: {
    margin: 10,
  },
  divider: {
    height: 28,
  },
  paper: {
    display: "flex",
    minWidth: 140,
    marginTop: theme.spacing(6),
    justifyContent: "space-between",
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
    <Paper elevation={2} component="form" onSubmit={handleSubmit} className={classes.paper}>
      <div className={classes.inputContainer}>
        <SearchIcon className={classes.iconButton} />
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

