import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, InputBase, Paper} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    marginTop: theme.spacing(4),
    justifyContent: "space-around",
  },
  paper: {
    border: "2px solid green",
    margin: theme.spacing(6),
    minWidth: 500,
    padding: "2px 4px",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
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
    <Container className={classes.root}>
      <Paper component="form" className={classes.paper} onSubmit={handleSubmit}>
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
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon/>
        </IconButton>
        
      </Paper>
    </Container>
  );
}

